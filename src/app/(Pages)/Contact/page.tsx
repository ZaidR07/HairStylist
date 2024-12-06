"use client";
import WorldMap from "@/components/ui/world-map";


function Contact() {
  return (
    <div className="px-[5%] py-20 w-full min-h-screen dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
      <div className="max-w-7xl mx-auto text-center mb-4">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Contact us from <span className="text-yellow-700">Anywhere</span> 
        </p>
       
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 40.7128, lng: -74.006 }, // New York
            end: { lat: 19.076, lng: 72.8777 }, // Mumbai
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 19.076, lng: 72.8777 }, // Mumbai
          },
          {
            start: { lat: 35.6895, lng: 139.6917 }, // Tokyo
            end: { lat: 19.076, lng: 72.8777 }, // Mumbai
          },
          {
            start: { lat: -33.8688, lng: 151.2093 }, // Sydney
            end: { lat: 19.076, lng: 72.8777 }, // Mumbai
          },
          {
            start: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            end: { lat: 19.076, lng: 72.8777 }, // Mumbai
          },
          {
            start: { lat: 48.8566, lng: 2.3522 }, // Paris
            end: { lat: 19.076, lng: 72.8777 }, // Mumbai
          },
          {
            start: { lat: 55.7558, lng: 37.6173 }, // Moscow
            end: { lat: 19.076, lng: 72.8777 }, // Mumbai
          },
          {
            start: { lat: -23.5505, lng: -46.6333 }, // São Paulo
            end: { lat: 19.076, lng: 72.8777 }, // Mumbai
          },
          {
            start: { lat: 39.9042, lng: 116.4074 }, // Beijing
            end: { lat: 19.076, lng: 72.8777 }, // Mumbai
          },
        ]}
      />
    </div>
  );
}

export default Contact;
