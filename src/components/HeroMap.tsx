
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { X } from 'lucide-react';

const HeroMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [showInfo, setShowInfo] = useState(true);

  // Generate 35 mock mechanic locations within 4km radius of Harare center
  const generateMechanicLocations = () => {
    const centerLat = -17.82079364263404;
    const centerLng = 31.04699297269952;
    const locations = [];
    
    const mechanicNames = [
      "Tendai's Auto Service", "Chipo's Garage", "Taurai Motors", "Grace Auto Fix", 
      "Blessed Car Care", "Munyaradzi Mechanics", "Farai's Workshop", "Nyasha Auto Repair",
      "Takudzwa Motors", "Rumbidzai Garage", "Tinashe Auto Care", "Priscilla's Service",
      "Chamunorwa Motors", "Vongai Auto Fix", "Shepard's Garage", "Melody Car Care",
      "Tapiwa Motors", "Chenai Auto Service", "Ngoni's Workshop", "Chiedza Garage",
      "Tinotenda Motors", "Rudo Auto Repair", "Sharai's Service", "Perseverance Garage",
      "Clever Motors", "Rutendo Auto Care", "Washington Garage", "Fungai's Workshop",
      "Tariro Motors", "Patience Auto Fix", "Knowledge Garage", "Lorraine Car Care",
      "Brian's Auto Service", "Kudzai Motors", "Admire's Workshop"
    ];

    const specialties = [
      "Engine Repair", "Brake Service", "Oil Change", "Transmission", "AC Repair",
      "Electrical", "Battery", "Suspension", "Bodywork", "Tire Service"
    ];

    for (let i = 0; i < 35; i++) {
      // Generate random point within 4km radius
      const angle = Math.random() * 2 * Math.PI;
      const radiusKm = Math.random() * 4; // 0-4km radius
      const radiusDeg = radiusKm / 111.32; // Convert km to degrees (approximate)
      
      const lat = centerLat + (radiusDeg * Math.cos(angle));
      const lng = centerLng + (radiusDeg * Math.sin(angle));
      
      locations.push({
        id: i + 1,
        name: mechanicNames[i % mechanicNames.length],
        lng: lng,
        lat: lat,
        specialty: specialties[Math.floor(Math.random() * specialties.length)]
      });
    }
    
    return locations;
  };

  const mechanicLocations = generateMechanicLocations();

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoidGhlc29mdHdhcmVwaW1wIiwiYSI6ImNtYnR3YnV5MTA4c20ybXMweDFjNjdxYWUifQ.nACKCvMM6LFpWuSRuvsWRg';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [31.04699297269952, -17.82079364263404],
      zoom: 12,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add red markers for mechanic locations
    mechanicLocations.forEach((location) => {
      // Create a red marker element
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z' fill='%23ef4444'/%3E%3Ccircle cx='12' cy='9' r='2.5' fill='white'/%3E%3C/svg%3E")`;
      el.style.width = '24px';
      el.style.height = '24px';
      el.style.backgroundSize = 'cover';
      el.style.cursor = 'pointer';
      el.style.border = 'none';

      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div class="p-3">
          <h3 class="font-semibold text-purple-900 mb-1">${location.name}</h3>
          <p class="text-sm text-gray-600">${location.specialty}</p>
          <button class="mt-2 px-3 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-700">
            View Profile
          </button>
        </div>`
      );

      // Add marker to map
      new mapboxgl.Marker(el)
        .setLngLat([location.lng, location.lat])
        .setPopup(popup)
        .addTo(map.current!);
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-80 md:h-96">
      <div ref={mapContainer} className="absolute inset-0 rounded-2xl" />
      {showInfo && (
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-xs">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-purple-900 text-sm mb-1">Mechanics Near You</h3>
              <p className="text-xs text-gray-600">Click markers to view details</p>
            </div>
            <button 
              onClick={() => setShowInfo(false)}
              className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroMap;
