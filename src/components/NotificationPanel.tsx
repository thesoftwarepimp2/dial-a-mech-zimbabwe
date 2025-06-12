
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell, Calendar, Tag, AlertCircle } from 'lucide-react';

const NotificationPanel = () => {
  const notifications = [
    {
      id: 1,
      type: 'booking',
      title: 'Booking Confirmed',
      message: 'Your service with Tendai Mukamuri is confirmed for June 15th at 2:00 PM',
      time: '2 hours ago',
      unread: true,
      icon: Calendar
    },
    {
      id: 2,
      type: 'promo',
      title: 'Special Offer',
      message: '20% off your next oil change service. Use code SAVE20',
      time: '1 day ago',
      unread: true,
      icon: Tag
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Service Reminder',
      message: 'Your appointment with Grace Chinamhora is tomorrow at 10:30 AM',
      time: '2 days ago',
      unread: false,
      icon: Bell
    },
    {
      id: 4,
      type: 'emergency',
      title: 'Emergency Service Available',
      message: 'Mechanics near you are available for emergency roadside assistance',
      time: '3 days ago',
      unread: false,
      icon: AlertCircle
    }
  ];

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'booking':
        return 'text-blue-600';
      case 'promo':
        return 'text-green-600';
      case 'reminder':
        return 'text-yellow-600';
      case 'emergency':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bell className="w-5 h-5" />
          <span>Notifications</span>
          <Badge variant="destructive" className="ml-auto">
            {notifications.filter(n => n.unread).length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`p-4 rounded-lg border ${
              notification.unread ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
            }`}
          >
            <div className="flex items-start space-x-3">
              <notification.icon className={`w-5 h-5 mt-1 ${getNotificationColor(notification.type)}`} />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-gray-900">{notification.title}</h4>
                  {notification.unread && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full">
          View All Notifications
        </Button>
      </CardContent>
    </Card>
  );
};

export default NotificationPanel;
