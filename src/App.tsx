import SearchBar from "./components/SearchBar";
import CategorySection from "./components/CategorySection";
import ListSection from "./components/ListSection";
import BottomNavigation from "./components/BottomNavigation";

const categories = [
  
  { title: "Buildings", locations: 13, image: "st.jpg" },
  { title: "Restaurants", locations: 6, image: "restaurant.jpg" },
  { title: "Dormitories", locations: 15, image: "dormitory.jpg" },
  //{ title: "Parking Place", locations: 4, image: "parking.jpg" },

];

const recents = [
  { title: "Soli dormitory", distance: "1.7 Km" },
  { title: "ST233", distance: "1.5 Km" },
];

const favorites = [
  { title: "GE building", distance: "1.7 Km" },
  { title: "CU 120", distance: "1.5 Km" },
];

export default function App() {
  return (
    <div className="bg-purple-50 min-h-screen p-4 pb-20">
      <SearchBar />
      <CategorySection categories={categories} />
      <ListSection title="Recents" items={recents} />
      <ListSection title="Favorites" items={favorites} />
      <BottomNavigation />
    </div>
  );
}
