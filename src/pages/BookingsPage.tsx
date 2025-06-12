
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, MapPin, Star, Phone } from 'lucide-react';

const BookingsPage = () => {
  const currentBookings = [
    {
      id: 'B001',
      mechanicName: 'Tendai Mukamuri',
      mechanicImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&object=faces&crop=face',
      service: 'Engine Diagnostic & Repair',
      date: '2024-06-15',
      time: '14:00',
      status: 'confirmed',
      location: 'Harare CBD',
      price: '$45',
      rating: 4.8
    },
    {
      id: 'B002',
      mechanicName: 'Grace Chinamhora',
      mechanicImage: 'https://images.unsplash.com/photo-1494790108755-2616b50a1e7c?w=150&h=150&object=faces&crop=face',
      service: 'Oil Change & Filter',
      date: '2024-06-18',
      time: '10:30',
      status: 'in-progress',
      location: 'Avondale',
      price: '$25',
      rating: 4.9
    }
  ];

  const recentBookings = [
    {
      id: 'B003',
      mechanicName: 'Taurai Madzore',
      mechanicImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&object=faces&crop=face',
      service: 'Brake Pad Replacement',
      date: '2024-06-10',
      time: '09:00',
      status: 'completed',
      location: 'Eastlea',
      price: '$60',
      rating: 4.7,
      completedDate: '2024-06-10'
    },
    {
      id: 'B004',
      mechanicName: 'Chipo Mangwende',
      mechanicImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&object=faces&crop=face',
      service: 'Transmission Service',
      date: '2024-06-05',
      time: '13:00',
      status: 'completed',
      location: 'Borrowdale',
      price: '$85',
      rating: 4.8,
      completedDate: '2024-06-05'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-blue-100 text-blue-800">Confirmed</Badge>;
      case 'in-progress':
        return <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>;
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Bookings</h1>
          <p className="text-lg text-gray-600">Manage your current and past service appointments</p>
        </div>

        <Tabs defaultValue="current" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="current">Current Bookings</TabsTrigger>
            <TabsTrigger value="history">Booking History</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-4">
            {currentBookings.map((booking) => (
              <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={booking.mechanicImage} 
                      alt={booking.mechanicName}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg text-gray-900">{booking.mechanicName}</h3>
                        {getStatusBadge(booking.status)}
                      </div>
                      
                      <p className="text-purple-600 font-medium mb-3">{booking.service}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(booking.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{booking.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{booking.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{booking.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg text-primary">{booking.price}</span>
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Phone className="w-4 h-4 mr-1" />
                            Call
                          </Button>
                          <Button variant="outline" size="sm">Reschedule</Button>
                          <Button variant="destructive" size="sm">Cancel</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {recentBookings.map((booking) => (
              <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={booking.mechanicImage} 
                      alt={booking.mechanicName}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg text-gray-900">{booking.mechanicName}</h3>
                        {getStatusBadge(booking.status)}
                      </div>
                      
                      <p className="text-purple-600 font-medium mb-3">{booking.service}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>Completed: {new Date(booking.completedDate!).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{booking.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{booking.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg text-primary">{booking.price}</span>
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View Invoice</Button>
                          <Button variant="outline" size="sm">Rebook Service</Button>
                          <Button size="sm">Leave Review</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BookingsPage;
