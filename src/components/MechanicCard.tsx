
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
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer w-full">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-shrink-0 self-center sm:self-start">
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
          
          <div className="flex-1 min-w-0 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
              <Link 
                to={`/mechanic/${mechanic.id}`}
                className="font-semibold text-lg text-gray-900 hover:text-primary transition-colors truncate"
              >
                {mechanic.name}
              </Link>
              <div className="flex items-center space-x-1 flex-shrink-0">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{mechanic.rating}</span>
                <span className="text-sm text-gray-500">({mechanic.reviewCount})</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{mechanic.location} • {mechanic.distance}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>{mechanic.responseTime}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {mechanic.specialties.slice(0, 3).map((specialty, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {specialty}
                </Badge>
              ))}
              {mechanic.specialties.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{mechanic.specialties.length - 3} more
                </Badge>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center space-x-2 flex-wrap">
                <span className="text-sm text-gray-600">From</span>
                <span className="font-semibold text-primary">{mechanic.priceRange}</span>
                <Badge 
                  variant={mechanic.isAvailable ? "default" : "secondary"}
                  className={`${mechanic.isAvailable ? "bg-green-100 text-green-800" : ""} text-xs`}
                >
                  {mechanic.isAvailable ? "Available" : "Busy"}
                </Badge>
              </div>
              
              <div className="flex space-x-2 flex-shrink-0">
                <Button variant="outline" size="sm" className="flex-1 sm:flex-initial">
                  <Phone className="w-4 h-4 sm:mr-0 mr-2" />
                  <span className="sm:hidden">Call</span>
                </Button>
                <Button size="sm" className="flex-1 sm:flex-initial">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MechanicCard;
