
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroMap from './HeroMap';

const HeroSection = () => {
  return (
    <section className="gradient-purple py-20 lg:py-28 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-up">
            Find Trusted Mechanics
            <span className="block text-yellow-300">Near You in Zimbabwe</span>
          </h1>
          
          <div className="mb-8 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-0 animate-fade-up overflow-hidden">
              <HeroMap />
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-up">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-purple-300" />
                  <Input 
                    placeholder="Your location (e.g., Harare, Bulawayo)"
                    className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-purple-200 focus:bg-white/30"
                  />
                </div>
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-purple-300" />
                  <Input 
                    placeholder="Find mechanics near you"
                    className="pl-12 bg-white/20 border-white/30 text-white placeholder:text-purple-200 focus:bg-white/30"
                  />
                </div>
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold">
                  Search Now
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link to="/search">Explore Mechanics</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-red-500 hover:bg-red-600 text-white font-semibold"
            >
              Emergency Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
