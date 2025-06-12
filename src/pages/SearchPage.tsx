import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import MechanicCard from '@/components/MechanicCard';
import Navigation from '@/components/Navigation';
import HeroMap from '@/components/HeroMap';
import { Search, MapPin, Filter, Map, List } from 'lucide-react';

const SearchPage = () => {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [priceRange, setPriceRange] = useState([0, 100]);

  const mechanics = [
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
    }
  ];

  const quickFilters = [
    'All Services',
    'Available Now',
    'Highly Rated',
    'Nearby',
    'Budget Friendly'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Header with Map */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Mechanics</h1>
          
          {/* Map Section */}
          <div className="mb-6 -mx-4 sm:-mx-6 lg:-mx-8">
            <HeroMap />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Location (e.g., Harare, Bulawayo)"
                className="pl-12"
              />
            </div>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Search mechanics or services"
                className="pl-12"
              />
            </div>
            <Button className="gradient-purple text-white">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {quickFilters.map((filter, index) => (
              <Badge 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${
                  index === 0 ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Sort By
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sorting" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="distance">Distance</SelectItem>
                        <SelectItem value="rating">Rating</SelectItem>
                        <SelectItem value="price">Price</SelectItem>
                        <SelectItem value="availability">Availability</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Service Type
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All services" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engine">Engine Repair</SelectItem>
                        <SelectItem value="brake">Brake Service</SelectItem>
                        <SelectItem value="oil">Oil Change</SelectItem>
                        <SelectItem value="transmission">Transmission</SelectItem>
                        <SelectItem value="electrical">Electrical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-3 block">
                      Distance
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any distance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Within 1 km</SelectItem>
                        <SelectItem value="5">Within 5 km</SelectItem>
                        <SelectItem value="10">Within 10 km</SelectItem>
                        <SelectItem value="any">Any distance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="outline" className="w-full">
                    Clear Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Found {mechanics.length} mechanics near you
              </p>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'map' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('map')}
                >
                  <Map className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {viewMode === 'list' ? (
              <div className="space-y-6">
                {mechanics.map((mechanic) => (
                  <MechanicCard key={mechanic.id} mechanic={mechanic} />
                ))}
              </div>
            ) : (
              <Card className="h-96">
                <CardContent className="p-0 h-full">
                  <div className="h-full -m-6">
                    <HeroMap />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
