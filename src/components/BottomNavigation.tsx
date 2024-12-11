import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import SearchIcon from '@mui/icons-material/Search';

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-3 shadow-lg flex justify-around items-center">
      {/* Home Icon with Label */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <HomeIcon />
        <span className="text-sm text-gray-600 mt-1">Home</span>
      </div>
      {/* Search Icon with Highlight */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex justify-center items-center shadow-lg">
          <SearchIcon />
        </div>
        <span className="text-sm text-gray-600 mt-1">Search</span>
      </div>
      {/* Map Icon with Label */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <MapIcon />
        <span className="text-sm text-gray-600 mt-1">Map</span>
      </div>
    </div>
  );
}
