"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Model = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Init scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.5, 5); // 🔁 Zoomed out camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current?.appendChild(renderer.domElement);

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(ambientLight, directionalLight);

    // Load model
    const loader = new GLTFLoader();
    loader.load(
      "/model/Teacher.glb", // ✅ Your model path
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.2, 0.2, 0.2);         // 🔁 Smaller scale
        model.position.set(0, -0.5, -1);        // 🔁 Push backward
        scene.add(model);

        const animate = () => {
          requestAnimationFrame(animate);
          model.rotation.y += 0.003;
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error("Model load error:", error);
      }
    );

    // Controls (optional)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) mountRef.current.innerHTML = "";
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default Model;
