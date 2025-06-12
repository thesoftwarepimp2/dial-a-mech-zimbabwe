
import React from 'react';
import MechanicCard from './MechanicCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturedMechanics = () => {
  const featuredMechanics = [
    {
      id: '1',
      name: 'Tendai Mukamuri',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&object=faces&crop=face',
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
      name: 'Grace Chinamhora',
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
      name: 'Taurai Madzore',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&object=faces&crop=face',
      rating: 4.7,
      reviewCount: 198,
      specialties: ['Electrical', 'Battery', 'Starter Motor'],
      location: 'Eastlea',
      distance: '4.2 km',
      priceRange: '$18-45',
      isAvailable: false,
      responseTime: '~30 mins',
      verified: true
    },
    {
      id: '4',
      name: 'Chipo Mangwende',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&object=faces&crop=face',
      rating: 4.9,
      reviewCount: 342,
      specialties: ['Bodywork', 'Paint Jobs', 'Dent Removal'],
      location: 'Borrowdale',
      distance: '5.1 km',
      priceRange: '$30-80',
      isAvailable: true,
      responseTime: '~25 mins',
      verified: true
    },
    {
      id: '5',
      name: 'Blessed Nyamhunga',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&object=faces&crop=face',
      rating: 4.6,
      reviewCount: 156,
      specialties: ['Suspension', 'Alignment', 'Tire Service'],
      location: 'Waterfalls',
      distance: '6.3 km',
      priceRange: '$22-55',
      isAvailable: true,
      responseTime: '~35 mins',
      verified: true
    },
    {
      id: '6',
      name: 'Rumbidzai Chigwedere',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&object=faces&crop=face',
      rating: 4.8,
      reviewCount: 289,
      specialties: ['Engine Diagnostics', 'Computer Systems', 'Fuel Injection'],
      location: 'Mount Pleasant',
      distance: '4.8 km',
      priceRange: '$35-70',
      isAvailable: true,
      responseTime: '~20 mins',
      verified: true
    },
    {
      id: '7',
      name: 'Tinashe Masango',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&object=faces&crop=face',
      rating: 4.7,
      reviewCount: 234,
      specialties: ['Clutch Repair', 'Gearbox Service', 'Differential'],
      location: 'Mabvuku',
      distance: '7.2 km',
      priceRange: '$28-65',
      isAvailable: false,
      responseTime: '~40 mins',
      verified: true
    },
    {
      id: '8',
      name: 'Memory Zvobgo',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&object=faces&crop=face',
      rating: 4.9,
      reviewCount: 445,
      specialties: ['Hybrid Vehicles', 'Electric Systems', 'Modern Diagnostics'],
      location: 'Greendale',
      distance: '3.9 km',
      priceRange: '$40-90',
      isAvailable: true,
      responseTime: '~15 mins',
      verified: true
    },
    {
      id: '9',
      name: 'Farai Dhliwayo',
      avatar: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=150&h=150&object=faces&crop=face',
      rating: 4.5,
      reviewCount: 167,
      specialties: ['Exhaust Systems', 'Muffler Repair', 'Emissions'],
      location: 'Southerton',
      distance: '5.7 km',
      priceRange: '$20-50',
      isAvailable: true,
      responseTime: '~30 mins',
      verified: true
    },
    {
      id: '10',
      name: 'Patience Mutamba',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&object=faces&crop=face',
      rating: 4.8,
      reviewCount: 321,
      specialties: ['Cooling Systems', 'Radiator Service', 'Heating'],
      location: 'Marlborough',
      distance: '4.5 km',
      priceRange: '$25-60',
      isAvailable: true,
      responseTime: '~25 mins',
      verified: true
    },
    {
      id: '11',
      name: 'Justice Gono',
      avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&object=faces&crop=face',
      rating: 4.6,
      reviewCount: 198,
      specialties: ['Mobile Service', 'Roadside Assistance', 'Emergency Repair'],
      location: 'Mobile Service',
      distance: 'On-demand',
      priceRange: '$30-75',
      isAvailable: true,
      responseTime: '~20 mins',
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
          {featuredMechanics.slice(0, 6).map((mechanic) => (
            <MechanicCard key={mechanic.id} mechanic={mechanic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMechanics;
