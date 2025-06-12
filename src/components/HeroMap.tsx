
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const HeroMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Mock mechanic locations in Harare within 1km of the center point
  const mechanicLocations = [
    { id: 1, name: "Tendai's Auto Service", lng: 31.04699297269952, lat: -17.82079364263404, specialty: "Engine Repair" },
    { id: 2, name: "Chipo's Garage", lng: 31.04899297269952, lat: -17.81879364263404, specialty: "Brake Service" },
    { id: 3, name: "Taurai Motors", lng: 31.04499297269952, lat: -17.82279364263404, specialty: "Oil Change" },
    { id: 4, name: "Grace Auto Fix", lng: 31.04799297269952, lat: -17.82179364263404, specialty: "Transmission" },
    { id: 5, name: "Blessed Car Care", lng: 31.04599297269952, lat: -17.81979364263404, specialty: "AC Repair" },
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Use the provided Mapbox token
    mapboxgl.accessToken = 'pk.eyJ1IjoidGhlc29mdHdhcmVwaW1wIiwiYSI6ImNtYnR3YnV5MTA4c20ybXMweDFjNjdxYWUifQ.nACKCvMM6LFpWuSRuvsWRg';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [31.04699297269952, -17.82079364263404],
      zoom: 14,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add markers for mechanic locations
    mechanicLocations.forEach((location) => {
      // Create a custom marker element
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.backgroundImage = 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTUiIGZpbGw9IiM4QjVDRjYiLz4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iOCIgZmlsbD0id2hpdGUiLz4KPHN2ZyB4PSI5IiB5PSI5IiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOEI1Q0Y2IiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJNMTQgMTJhMiAyIDAgMCAwLTQgMCAyIDIgMCAwIDAgNCAiLz4KPHN2ZyB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOEI1Q0Y2IiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJNMTcgOWgtMmwtMyAzLTMtM0g3bC0yIDJ2MTBhMiAyIDAgMCAwIDIgMmgxMGEyIDIgMCAwIDAgMi0yVjExbC0yLTJ6Ii8+Cjwvc3ZnPgo8L3N2Zz4K)';
      el.style.width = '30px';
      el.style.height = '30px';
      el.style.backgroundSize = 'cover';
      el.style.cursor = 'pointer';

      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<div class="p-2">
          <h3 class="font-semibold text-purple-900">${location.name}</h3>
          <p class="text-sm text-gray-600">${location.specialty}</p>
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
    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h3 className="font-semibold text-purple-900 text-sm mb-1">Mechanics Near You</h3>
        <p className="text-xs text-gray-600">Click markers to view details</p>
      </div>
    </div>
  );
};

export default HeroMap;
