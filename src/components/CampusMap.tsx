import { Loader } from "@googlemaps/js-api-loader";
import { useRef, useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";

type CampusMapProps = {
  currentLocation?: { lat: number; lng: number };
};

const CampusMap = ({ currentLocation }: CampusMapProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader
      .importLibrary("maps")
      .then(({ Map }) => {
        // Load the marker library
        return loader.importLibrary("marker").then(() => ({ Map, Marker: google.maps.Marker }));
      })
      .then(({ Map, Marker }) => {
        if (mapRef.current) {
          const map = new Map(mapRef.current as HTMLElement, {
            center: currentLocation || { lat: 35.22175513213183, lng: 33.41577920615551 },
            zoom: 18,
            restriction: {
              latLngBounds: {
                north: 35.2255,
                south: 35.2175,
                east: 33.42142,
                west: 33.41283,
              },
              strictBounds: true,
            },
          });

          // Add a marker for the current location
          if (currentLocation) {
            new Marker({
              position: currentLocation,
              map,
              title: "You are here",
              icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Use any valid icon URL here
                scaledSize: new google.maps.Size(40, 40), // Adjust the size of the icon
              },
            });
          }
        }
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError("Failed to load the map. Please try again later.");
        console.error("Error loading map:", e);
      });
  }, [currentLocation]);

  return (
    <div className="relative w-full h-dvh">
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <PacmanLoader />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 z-20 flex items-center justify-center p-4 font-semibold text-center text-red-700 bg-red-100">
          {error}
        </div>
      )}
      <div
        ref={mapRef}
        className={`w-full h-full ${isLoading || error ? "hidden" : "block"}`}
      ></div>
    </div>
  );
};

export default CampusMap;
