import TopNav from './TopNav';

import { FaAngleRight } from 'react-icons/fa';

function Header({ showTitle, postTitle, selectedCategory, categories }) {
  return (
    <header className="w-full h-16 bg-gray-800 px-20 shadow-lg fixed z-50">

        <TopNav 
          showTitle={showTitle}
          selectedCategory={selectedCategory}
          categories={categories}
        />

        <div className={`h-full flex items-center absolute w-full left-0 px-5 ${showTitle ? 'z-30' : ''}`}>
          <FaAngleRight color="#2563eb" size={36} className={`mt-0.5 transition transform opacity duration-300 ${showTitle ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0' }`} />
          <span 
            className={`text-gray-50 text-sm lg:text-lg whitespace-nowrap block truncate transition-max-width duration-300 ${showTitle ? 'max-w-full' : 'max-w-0' } overflow-x-hidden`}>
            {postTitle}
          </span>
        </div>

    </header>
  );
}

export default Header;