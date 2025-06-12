
import React from 'react';
import MechanicCard from './MechanicCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturedMechanics = () => {
  const featuredMechanics = [
    {
      id: '1',
      name: 'Robert Fox',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&object=faces&crop=face',
      rating: 4.8,
      reviewCount: 365,
      specialties: ['Engine Repair', 'Brake Service', 'Oil Change'],
      location: 'Harare CBD',
      distance: '2.5 km',
      priceRange: '$20-50',
      isAvailable: true,
      responseTime: '~15 mins',
      verified: true
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b50a1e7c?w=150&h=150&object=faces&crop=face',
      rating: 4.9,
      reviewCount: 278,
      specialties: ['Transmission', 'AC Repair', 'Diagnostics'],
      location: 'Avondale',
      distance: '3.1 km',
      priceRange: '$25-60',
      isAvailable: true,
      responseTime: '~20 mins',
      verified: true
    },
    {
      id: '3',
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&object=faces&crop=face',
      rating: 4.7,
      reviewCount: 198,
      specialties: ['Electrical', 'Battery', 'Starter Motor'],
      location: 'Eastlea',
      distance: '4.2 km',
      priceRange: '$18-45',
      isAvailable: false,
      responseTime: '~30 mins',
      verified: true
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Top Rated Mechanics
            </h2>
            <p className="text-lg text-gray-600">
              Verified professionals with excellent customer reviews
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/search">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredMechanics.map((mechanic) => (
            <MechanicCard key={mechanic.id} mechanic={mechanic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMechanics;
