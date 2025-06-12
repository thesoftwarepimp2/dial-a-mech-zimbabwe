
import React from 'react';
import Navigation from '@/components/Navigation';
import NotificationPanel from '@/components/NotificationPanel';
import PromotionsSection from '@/components/PromotionsSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Settings, Heart, CreditCard } from 'lucide-react';

const ProfilePage = () => {
  const user = {
    name: 'John Mwangi',
    email: 'john.mwangi@example.com',
    phone: '+263 77 123 4567',
    location: 'Harare, Zimbabwe',
    memberSince: '2023-03-15',
    totalBookings: 12,
    favoriteCount: 5
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Profile</h1>
          <p className="text-lg text-gray-600">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&object=faces&crop=face" />
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{user.name}</h3>
                <p className="text-gray-600 mb-2">{user.email}</p>
                <p className="text-gray-600 mb-4">{user.phone}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="font-semibold text-lg text-purple-600">{user.totalBookings}</div>
                    <div className="text-xs text-gray-600">Total Bookings</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg text-purple-600">{user.favoriteCount}</div>
                    <div className="text-xs text-gray-600">Favorites</div>
                  </div>
                </div>
                
                <Badge variant="secondary" className="mb-4">
                  Member since {new Date(user.memberSince).toLocaleDateString()}
                </Badge>
                
                <Button className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="notifications" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="promotions">Promotions</TabsTrigger>
              </TabsList>

              <TabsContent value="notifications">
                <NotificationPanel />
              </TabsContent>

              <TabsContent value="promotions">
                <PromotionsSection />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
