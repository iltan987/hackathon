
export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-3 shadow-lg flex justify-around items-center">
      <i className="fas fa-home text-gray-600" />
      <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex justify-center items-center shadow-lg">
        <i className="fas fa-search" />
      </div>
      <i className="fas fa-map text-gray-600" />
    </div>
  );
}
