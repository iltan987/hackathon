
interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder = "Search" }: SearchBarProps) {
  return (
    <div className="flex items-center gap-4 bg-white p-3 rounded-md shadow-sm">
      <i className="fas fa-bars text-gray-600" />
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 outline-none text-sm text-gray-700"
      />
      <i className="fas fa-search text-gray-600" />
    </div>
  );
}
