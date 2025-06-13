import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Clock, Phone, Share, Heart, Calendar, Award, CheckCircle } from 'lucide-react';

const MechanicProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  // Mock mechanic data
  const mechanic = {
    id: id || '1',
    name: 'Tendai Mukamuri',
    businessName: "Tendai's Premium Auto Service",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&object=faces&crop=face',
    rating: 4.8,
    reviewCount: 365,
    experience: '12 years',
    specialties: ['Engine Repair', 'Brake Service', 'Oil Change', 'Diagnostics', 'Transmission'],
    location: 'Harare CBD',
    address: '123 Samora Machel Avenue, Harare',
    distance: '2.5 km',
    priceRange: '$20-80',
    isAvailable: true,
    responseTime: '~15 mins',
    verified: true,
    description: 'Professional automotive technician with over 12 years of experience specializing in engine diagnostics and repair. Certified by Toyota and Honda, I provide reliable, honest service with a focus on quality workmanship.',
    workingHours: 'Mon-Fri: 7:00 AM - 6:00 PM, Sat: 8:00 AM - 4:00 PM',
    emergencyService: true,
    certifications: ['ASE Certified', 'Toyota Certified', 'Honda Certified', 'Brake Specialist'],
    gallery: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&object=content',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&object=content',
      'https://images.unsplash.com/photo-1580893211984-9c95eaebe166?w=300&h=200&object=content',
      'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=300&h=200&object=content'
    ]
  };

  const videos = [
    {
      id: '88v4yHsSF_I',
      title: 'Engine Diagnostic Process',
      embedUrl: 'https://www.youtube.com/embed/88v4yHsSF_I?autoplay=1&mute=1'
    },
    {
      id: 'ltEMcBDYdt8', 
      title: 'Brake Service Demonstration',
      embedUrl: 'https://www.youtube.com/embed/ltEMcBDYdt8?autoplay=1&mute=1'
    },
    {
      id: '_eref3-TCKM',
      title: 'Oil Change Best Practices',
      embedUrl: 'https://www.youtube.com/embed/_eref3-TCKM?autoplay=1&mute=1'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Grace Mutamba',
      rating: 5,
      date: '2 days ago',
      comment: 'Excellent service! Fixed my brake issues quickly and explained everything clearly. Very professional.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b50a1e7c?w=50&h=50&object=faces&crop=face'
    },
    {
      id: 2,
      name: 'James Chikwanha',
      rating: 5,
      date: '1 week ago',
      comment: 'Honest mechanic with fair prices. My car runs like new after the engine service. Highly recommend!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&object=faces&crop=face'
    },
    {
      id: 3,
      name: 'Mary Nyakudya',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Good service and reasonable prices. Only minor delay but quality work was worth the wait.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&object=faces&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <Card className="mb-6">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col gap-6">
              {/* Profile Image and Basic Info */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <div className="relative flex-shrink-0 self-center sm:self-start">
                  <img 
                    src={mechanic.avatar} 
                    alt={mechanic.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover"
                  />
                  {mechanic.verified && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <div className="min-w-0">
                      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">{mechanic.name}</h1>
                      <p className="text-base sm:text-lg text-primary font-semibold truncate">{mechanic.businessName}</p>
                    </div>
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setIsLiked(!isLiked)}
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-600 mb-4 gap-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                      <span className="font-medium">{mechanic.rating}</span>
                      <span>({mechanic.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 flex-shrink-0" />
                      <span>{mechanic.experience} experience</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{mechanic.location} • {mechanic.distance}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {mechanic.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-2">
                      <span className="text-base sm:text-lg font-semibold text-primary">{mechanic.priceRange}</span>
                      <Badge variant={mechanic.isAvailable ? "default" : "secondary"}>
                        {mechanic.isAvailable ? "Available Now" : "Busy"}
                      </Badge>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span>{mechanic.responseTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                      <Button variant="outline" className="flex-1 sm:flex-initial">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                      <Button className="flex-1 sm:flex-initial">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Service
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Tabs */}
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about" className="text-xs sm:text-sm">About</TabsTrigger>
            <TabsTrigger value="services" className="text-xs sm:text-sm">Services</TabsTrigger>
            <TabsTrigger value="gallery" className="text-xs sm:text-sm">Gallery</TabsTrigger>
            <TabsTrigger value="reviews" className="text-xs sm:text-sm">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4">About {mechanic.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">{mechanic.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold">Certifications & Qualifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {mechanic.certifications.map((cert, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            <Award className="w-3 h-3 mr-1" />
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Demo Videos */}
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4">Demo Videos</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {videos.map((video, index) => (
                        <div key={index} className="w-full">
                          <h4 className="text-sm font-medium mb-2">{video.title}</h4>
                          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                              src={video.embedUrl}
                              title={video.title}
                              className="absolute top-0 left-0 w-full h-full rounded-lg"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Contact & Hours</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Address:</span>
                        <p className="text-gray-600">{mechanic.address}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Working Hours:</span>
                        <p className="text-gray-600">{mechanic.workingHours}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Emergency Service:</span>
                        <p className="text-gray-600">
                          {mechanic.emergencyService ? 'Available 24/7' : 'Not available'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Response Time</span>
                        <span className="font-medium">{mechanic.responseTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Jobs Completed</span>
                        <span className="font-medium">500+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Customer Rating</span>
                        <span className="font-medium">{mechanic.rating}/5.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Repeat Customers</span>
                        <span className="font-medium">85%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="services">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Services Offered</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mechanic.specialties.map((service, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                      <h4 className="font-medium mb-2">{service}</h4>
                      <p className="text-sm text-gray-600">Professional {service.toLowerCase()} service with quality parts and warranty.</p>
                      <p className="text-sm font-medium text-primary mt-2">From $25</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Work Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {mechanic.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image}
                      alt={`Work sample ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="flex space-x-4 pb-6 border-b last:border-b-0">
                      <img 
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{review.name}</h4>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MechanicProfilePage;
