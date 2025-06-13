
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SponsoredAdvert = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="flex justify-center mb-2">
        <Badge variant="outline" className="text-xs text-gray-500">
          Sponsored Advertisement
        </Badge>
      </div>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <CardContent className="p-0">
          <img 
            src="/lovable-uploads/abdee4ce-d82e-4c4f-8b16-014ba00f2db7.png"
            alt="AES - Alton Energy Solutions Solar Panel Advertisement"
            className="w-full h-auto object-cover"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default SponsoredAdvert;
