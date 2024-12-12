import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function BottomNavigation() {
  const navigate = useNavigate();

  const goToCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          navigate("/map", {
            state: { currentLocation: { lat: latitude, lng: longitude } },
          });
        },
        () => {
          alert("Unable to fetch current location. Please try again.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-around p-3 bg-white shadow-2xl rounded-t-3xl">
      <div
        className="flex flex-col items-center justify-center flex-1 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="p-2 transition duration-200 rounded-full hover:bg-purple-100">
          <HomeIcon className="text-gray-600 hover:text-purple-500" />
        </div>
        <span className="mt-1 text-sm text-gray-600">Home</span>
      </div>
      <div
        className="flex flex-col items-center justify-center flex-1 cursor-pointer"
        onClick={goToCurrentLocation}
      >
        <div className="flex items-center justify-center w-12 h-12 text-white transition duration-200 bg-purple-500 rounded-full shadow-lg hover:bg-purple-600">
          <LocationOnIcon />
        </div>
        <span className="mt-1 text-sm text-gray-600">Current Location</span>
      </div>
      <div
        className="flex flex-col items-center justify-center flex-1 cursor-pointer"
        onClick={() => navigate("/map")}
      >
        <div className="p-2 transition duration-200 rounded-full hover:bg-purple-100">
          <MapIcon className="text-gray-600 hover:text-purple-500" />
        </div>
        <span className="mt-1 text-sm text-gray-600">Map</span>
      </div>
    </div>
  );
}
