
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, Phone } from 'lucide-react';

interface MechanicCardProps {
  mechanic: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    reviewCount: number;
    specialties: string[];
    location: string;
    distance: string;
    priceRange: string;
    isAvailable: boolean;
    responseTime: string;
    verified: boolean;
  };
}

const MechanicCard: React.FC<MechanicCardProps> = ({ mechanic }) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img 
              src={mechanic.avatar} 
              alt={mechanic.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            {mechanic.verified && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <Link 
                to={`/mechanic/${mechanic.id}`}
                className="font-semibold text-lg text-gray-900 hover:text-primary transition-colors"
              >
                {mechanic.name}
              </Link>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{mechanic.rating}</span>
                <span className="text-sm text-gray-500">({mechanic.reviewCount})</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{mechanic.location} • {mechanic.distance}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{mechanic.responseTime}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {mechanic.specialties.map((specialty, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {specialty}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">From</span>
                <span className="font-semibold text-primary">{mechanic.priceRange}</span>
                <Badge 
                  variant={mechanic.isAvailable ? "default" : "secondary"}
                  className={mechanic.isAvailable ? "bg-green-100 text-green-800" : ""}
                >
                  {mechanic.isAvailable ? "Available" : "Busy"}
                </Badge>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button size="sm">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MechanicCard;
