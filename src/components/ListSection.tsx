
import LocationOnIcon from '@mui/icons-material/LocationOn';
interface ListItem {
  title: string;
  distance: string;
}

interface ListSectionProps {
  title: string;
  items: ListItem[];
}

export default function ListSection({ title, items }: ListSectionProps) {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <a href="#" className="text-purple-500 text-sm">
          See All
        </a>
      </div>
      <div className="mt-4 space-y-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-white p-3 rounded-md shadow-sm"
          >
            <div className="w-8 h-8 flex justify-center items-center bg-purple-200 text-purple-500 rounded-full">
            <LocationOnIcon/>
              <i className="fas fa-map-marker-alt" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium">{item.title}</h3>
            </div>
            <span className="text-sm text-gray-600">{item.distance}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
