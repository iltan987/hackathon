interface Category {
  title: string;
  locations: number;
  image: string;
}

interface CategorySectionProps {
  categories: Category[];
}

export default function CategorySection({ categories }: CategorySectionProps) {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Category</h2>
        <a href="#" className="text-purple-500 text-sm">
          See All
        </a>
      </div>
      <div className="flex gap-4 mt-4">
        {categories.map((category, idx) => (
          <div key={idx} className="w-1/2 relative">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-32 rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md flex flex-col justify-center items-center">
              <h3 className="text-white text-lg">{category.title}</h3>
              <p className="text-gray-200 text-sm">
                {category.locations} Locations
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
