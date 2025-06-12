
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServiceCategories = () => {
  const services = [
    {
      title: 'Car Service',
      description: 'Complete vehicle maintenance and servicing',
      icon: '🚗',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Dent Removal',
      description: 'Professional dent repair and bodywork',
      icon: '🔧',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Oil Change',
      description: 'Quick and efficient oil change services',
      icon: '🛢️',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      title: 'Car Wash',
      description: 'Premium car cleaning and detailing',
      icon: '🧽',
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive automotive services delivered by certified professionals across Zimbabwe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${service.color}`}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
