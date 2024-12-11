import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-3 shadow-lg flex justify-around items-center">
      {/* Home Icon with Label */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="p-2 rounded-full hover:bg-purple-100 transition duration-200">
          <HomeIcon className="text-gray-600 hover:text-purple-500" />
        </div>
        <span className="text-sm text-gray-600 mt-1">Home</span>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex justify-center items-center shadow-lg hover:bg-purple-600 transition duration-200">
          <LocationOnIcon />
        </div>
        <span className="text-sm text-gray-600 mt-1">Current Location</span>
      </div>
      {/* Map Icon with Label */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="p-2 rounded-full hover:bg-purple-100 transition duration-200">
          <MapIcon className="text-gray-600 hover:text-purple-500" />
        </div>
        <span className="text-sm text-gray-600 mt-1">Map</span>
      </div>
    </div>
  );
}
