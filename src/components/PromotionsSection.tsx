
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tag, Clock, Gift } from 'lucide-react';

const PromotionsSection = () => {
  const [promoCode, setPromoCode] = useState('');

  const promotions = [
    {
      id: 1,
      title: 'First Time Customer',
      code: 'WELCOME25',
      discount: '25% OFF',
      description: 'Get 25% off your first service booking',
      validUntil: '2024-07-31',
      minSpend: '$30',
      type: 'percentage'
    },
    {
      id: 2,
      title: 'Oil Change Special',
      code: 'OIL20',
      discount: '$20 OFF',
      description: 'Save $20 on any oil change service',
      validUntil: '2024-06-30',
      minSpend: '$40',
      type: 'fixed'
    },
    {
      id: 3,
      title: 'Emergency Service',
      code: 'EMERGENCY15',
      discount: '15% OFF',
      description: 'Emergency roadside assistance discount',
      validUntil: '2024-08-15',
      minSpend: '$50',
      type: 'percentage'
    },
    {
      id: 4,
      title: 'Loyal Customer',
      code: 'LOYAL30',
      discount: '30% OFF',
      description: 'For customers with 5+ completed bookings',
      validUntil: '2024-09-30',
      minSpend: '$60',
      type: 'percentage'
    }
  ];

  const handleApplyPromo = () => {
    console.log('Applying promo code:', promoCode);
    // Add promo code application logic here
  };

  return (
    <div className="space-y-6">
      {/* Promo Code Input */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Tag className="w-5 h-5" />
            <span>Apply Promo Code</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleApplyPromo} className="bg-primary">
              Apply
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Enter a valid promo code to get discounts on your services
          </p>
        </CardContent>
      </Card>

      {/* Available Promotions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Gift className="w-5 h-5" />
            <span>Current Offers</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="border border-dashed border-gray-300 rounded-lg p-4 bg-gradient-to-r from-purple-50 to-blue-50"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">{promo.title}</h4>
                  <p className="text-sm text-gray-600">{promo.description}</p>
                </div>
                <Badge 
                  className={`${
                    promo.type === 'percentage' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {promo.discount}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Valid until {new Date(promo.validUntil).toLocaleDateString()}</span>
                  </div>
                  <span>Min spend: {promo.minSpend}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                  {promo.code}
                </code>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setPromoCode(promo.code)}
                >
                  Use Code
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PromotionsSection;
