import Link from './Link';
import { Fragment } from 'react';

function TopNavLink({ To, selected, children }) {
  return (
    <Link
      href={To}
      className={
        `px-4 flex justify-center items-center h-full text-gray-50 font-bold font text-sm mr-4 hover:bg-gray-700 transition-colors capitalize ${
          selected ? 'border-b-8 border-blue-600' : ''
        }`
      }
    >
      <span className={selected ? 'mt-2' : ''}>{children}</span>
    </Link>
  );
}

function TopNav({ showTitle, selectedCategory, categories }) {
  return (
    <nav className={`w-full h-full left-0 lg:left-auto z-20 flex justify-center lg:justify-start items-center absolute transition-opacity duration-250 ${showTitle ? 'opacity-0' : 'opacity-100' }`}>
      <Link 
        href="/"
        className="flex items-center"
      >
        <img src="/images/Logo.svg" alt="Logotipo" />
      </Link>

      <div className="hidden lg:block pl-12 h-full">
        <ul className="h-full flex item-center">
          {categories.map(category => {
            return (
              <Fragment key={category.slug}>
                <li>
                  <TopNavLink To={`/${category.slug}`} selected={category.slug === selectedCategory.slug}>
                    {category.name}
                  </TopNavLink>
                </li>
              </Fragment>
            )
          })}
        </ul>
      </div>
    </nav>
  );
}

export default TopNav;