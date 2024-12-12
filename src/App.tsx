import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import CategorySection from "./components/CategorySection";
import ListSection from "./components/ListSection";
import BottomNavigation from "./components/BottomNavigation";
import CampusMap from "./components/CampusMap";

const App = () => {
  const categories = [
    { title: "Buildings", locations: 13, image: "st.jpg" },
    { title: "Restaurants", locations: 6, image: "restaurant.jpg" },
    { title: "Dormitories", locations: 15, image: "dormitory.jpg" },
  ];

  const recents = [
    { title: "Soli dormitory", distance: "1.7 Km" },
    { title: "ST233", distance: "1.5 Km" },
  ];

  const favorites = [
    { title: "GE building", distance: "1.7 Km" },
    { title: "CU 120", distance: "1.5 Km" },
  ];

  const MapWrapper = () => {
    const location = useLocation();
    const state = location.state as { currentLocation?: { lat: number; lng: number } };
    return <CampusMap currentLocation={state?.currentLocation} />;
  };

  return (
    <Router>
      <div className="relative min-h-screen p-4 pb-20 bg-purple-50">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <CategorySection categories={categories} />
                <ListSection title="Recents" items={recents} />
                <ListSection title="Favorites" items={favorites} />
              </>
            }
          />
          <Route path="/map" element={<MapWrapper />} />
        </Routes>
        <BottomNavigation />
      </div>
    </Router>
  );
};

export default App;
