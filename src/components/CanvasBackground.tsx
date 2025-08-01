"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const CanvasBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current?.appendChild(renderer.domElement);

    // Create a rotating sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: "#22d3ee", roughness: 0.5 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Light
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(3, 3, 3);
    scene.add(light);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      sphere.rotation.x += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ position: "absolute", overflow: "hidden" }}
    />
  );
};

export default CanvasBackground;
