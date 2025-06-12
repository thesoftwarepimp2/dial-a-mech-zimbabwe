
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Upload, X, Wrench } from 'lucide-react';

const MechanicSignupPage = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  const services = [
    'Engine Repair', 'Brake Service', 'Oil Change', 'Transmission',
    'AC Repair', 'Electrical', 'Battery', 'Suspension', 'Bodywork',
    'Tire Service', 'Diagnostics', 'Clutch Repair', 'Exhaust Systems',
    'Cooling Systems', 'Fuel Systems', 'Hybrid Vehicles'
  ];

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 gradient-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Our Mechanic Network</h1>
            <p className="text-lg text-gray-600">Apply to become a verified mechanic on our platform</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Mechanic Application Form</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+263 77 123 4567" />
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Business Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessName">Business/Shop Name *</Label>
                    <Input id="businessName" placeholder="e.g., Tendai's Auto Service" />
                  </div>
                  <div>
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="businessDescription">Business Description</Label>
                  <Textarea 
                    id="businessDescription" 
                    placeholder="Tell us about your services and what makes you special..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Location</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input id="address" placeholder="123 Samora Machel Avenue" />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="harare">Harare</SelectItem>
                        <SelectItem value="bulawayo">Bulawayo</SelectItem>
                        <SelectItem value="chitungwiza">Chitungwiza</SelectItem>
                        <SelectItem value="mutare">Mutare</SelectItem>
                        <SelectItem value="gweru">Gweru</SelectItem>
                        <SelectItem value="kwekwe">Kwekwe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="suburb">Suburb/Area</Label>
                    <Input id="suburb" placeholder="e.g., CBD, Avondale, Borrowdale" />
                  </div>
                  <div>
                    <Label htmlFor="serviceRadius">Service Radius (km)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="How far do you travel?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 km</SelectItem>
                        <SelectItem value="10">10 km</SelectItem>
                        <SelectItem value="20">20 km</SelectItem>
                        <SelectItem value="30">30 km</SelectItem>
                        <SelectItem value="50">50+ km</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Services & Expertise */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Services & Expertise</h3>
                <div>
                  <Label>Select all services you provide: *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox 
                          id={service}
                          checked={selectedServices.includes(service)}
                          onCheckedChange={() => toggleService(service)}
                        />
                        <Label htmlFor={service} className="text-sm cursor-pointer">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {selectedServices.length > 0 && (
                    <div className="mt-3">
                      <p className="text-sm text-gray-600 mb-2">Selected services:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedServices.map((service) => (
                          <Badge key={service} variant="secondary" className="text-xs">
                            {service}
                            <button 
                              onClick={() => toggleService(service)}
                              className="ml-1 hover:text-red-600"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="minPrice">Minimum Service Price (USD) *</Label>
                    <Input id="minPrice" type="number" placeholder="15" />
                  </div>
                  <div>
                    <Label htmlFor="maxPrice">Maximum Service Price (USD) *</Label>
                    <Input id="maxPrice" type="number" placeholder="150" />
                  </div>
                  <div>
                    <Label htmlFor="calloutFee">Call-out Fee (USD)</Label>
                    <Input id="calloutFee" type="number" placeholder="10" />
                  </div>
                </div>
              </div>

              {/* Certifications & Documents */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Certifications & Documents</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="certifications">Certifications & Qualifications</Label>
                    <Textarea 
                      id="certifications" 
                      placeholder="List your certifications, training, or qualifications..."
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label>Upload Documents (ID, Certificates, Business License)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 10MB each</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Availability</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="workingHours">Working Hours</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select working hours" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8-17">8:00 AM - 5:00 PM</SelectItem>
                        <SelectItem value="7-18">7:00 AM - 6:00 PM</SelectItem>
                        <SelectItem value="24-7">24/7 Service</SelectItem>
                        <SelectItem value="flexible">Flexible Hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="emergencyService">Emergency Service Available?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Emergency availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes, 24/7</SelectItem>
                        <SelectItem value="limited">Limited hours</SelectItem>
                        <SelectItem value="no">No emergency service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a> and 
                    <a href="#" className="text-primary hover:underline ml-1">Privacy Policy</a>
                  </Label>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="vetting" />
                  <Label htmlFor="vetting" className="text-sm">
                    I understand that my application will be reviewed and I may be contacted for verification
                  </Label>
                </div>

                <Button size="lg" className="w-full gradient-purple text-white">
                  Submit Application
                </Button>
                
                <p className="text-center text-sm text-gray-600">
                  Your application will be reviewed within 2-3 business days. We'll contact you via email with updates.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MechanicSignupPage;
