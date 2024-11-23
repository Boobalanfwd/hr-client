import { FiBell, FiUser } from "react-icons/fi";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="px-5">
        <div className="flex justify-end items-center h-16">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiBell className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiUser className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
