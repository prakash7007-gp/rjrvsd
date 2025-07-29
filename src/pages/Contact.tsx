import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["RJR VSD Educational Trust", "123 Education Street", "Bangalore, Karnataka 560001"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 80 2345 6789", "Toll Free: 1800 123 4567"],
      color: "text-education-blue"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@rjrvsd.edu.in", "admissions@rjrvsd.edu.in", "support@rjrvsd.edu.in"],
      color: "text-success"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      color: "text-warning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-education-blue-light to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get in touch with us. We're here to help you start your educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:-translate-y-2 transition-all duration-500"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: `fadeIn 0.8s ease-out forwards ${index * 0.1}s both`
                  }}
                >
                  <div className={`w-20 h-20 ${info.color} bg-current/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-10 h-10 ${info.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-up">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="Your first name" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" className="w-full" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your.email@example.com" className="w-full" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+91 98765 43210" className="w-full" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input placeholder="How can we help you?" className="w-full" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..." 
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>
                  
                  <Button className="btn-primary w-full text-lg py-3">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card rounded-2xl p-8 shadow-soft h-full">
                <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Campus</h2>
                
                {/* Map Placeholder */}
                <div className="bg-muted rounded-xl h-64 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Campus Map</p>
                    <p className="text-sm text-muted-foreground">Bangalore, Karnataka</p>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Quick Contact</h3>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-foreground">+91 98765 43210</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-foreground">info@rjrvsd.edu.in</span>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-foreground">RJR VSD Educational Trust</p>
                      <p className="text-muted-foreground text-sm">123 Education Street</p>
                      <p className="text-muted-foreground text-sm">Bangalore, Karnataka 560001</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-muted-foreground mb-4">
                    Ready to start your journey with us?
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule a Campus Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about admissions and programs
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What are the admission requirements?",
                answer: "Admission requirements vary by program. Generally, we require completed application, transcripts, and entrance exam scores."
              },
              {
                question: "When does the academic year begin?",
                answer: "Our academic year typically begins in July/August. We also offer mid-year admissions for select programs."
              },
              {
                question: "Are scholarships available?",
                answer: "Yes, we offer merit-based and need-based scholarships for deserving students. Contact our admissions office for details."
              },
              {
                question: "Can I visit the campus?",
                answer: "Absolutely! We offer guided campus tours Monday through Friday. Contact us to schedule your visit."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;