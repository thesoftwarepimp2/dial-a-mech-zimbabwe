
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServiceCategories from '@/components/ServiceCategories';
import FeaturedMechanics from '@/components/FeaturedMechanics';
import PromotionsSection from '@/components/PromotionsSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Shield, Clock, Award } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Mechanics',
      description: 'All mechanics are certified and background-checked for your safety'
    },
    {
      icon: Clock,
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency roadside assistance when you need it most'
    },
    {
      icon: Star,
      title: 'Quality Guarantee',
      description: 'Satisfaction guaranteed with our quality assurance program'
    },
    {
      icon: Award,
      title: 'Best Prices',
      description: 'Competitive pricing with transparent quotes before work begins'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Featured Promotions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Special Offers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Save money with our current promotions and special deals
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <PromotionsSection />
          </div>
        </div>
      </section>
      
      <ServiceCategories />
      <FeaturedMechanics />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dial-A-Mech?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with Zimbabwe's most trusted automotive service platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Dial-A-Mech for their automotive needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Find a Mechanic
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Become a Mechanic
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="/lovable-uploads/872acf59-658d-4140-ac69-5b5b8025bb8b.png" 
                alt="Dial-A-Mech" 
                className="h-8 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400 mb-4">
                Zimbabwe's leading automotive service platform connecting you with trusted mechanics across the country.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">Privacy</Button>
                <Button variant="ghost" size="sm">Terms</Button>
                <Button variant="ghost" size="sm">Contact</Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Car Service</li>
                <li>Emergency Repair</li>
                <li>Oil Change</li>
                <li>Brake Service</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Become a Mechanic</li>
                <li>Business Solutions</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dial-A-Mech. All rights reserved. Made with ❤️ in Zimbabwe.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
