import { useState } from "react";
import Link from "next/link";

import MenuAnimatedButton from "./MenuAnimatedButton";
import { FaAngleRight } from "react-icons/fa";

function SideMenu({ categories, selectedCategory }) {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <>
        <nav 
            id="mobile-menu" 
            className={`fixed h-full z-50 w-64 p-6 bg-gray-900 left-0 top-0 transition transform ${showMenu ? "translate-x-0" : "-translate-x-full"}`}>
            <Link
                href="/"
            >
                <a className="w-full flex items-center justify-center mb-5">
                    <img src="/images/Logo.svg" alt="Logotipo" />
                </a>
            </Link>
            <ul>
                {categories.map(category => {
                    const isSelected = category.slug === selectedCategory.slug;

                    return (
                        <li 
                            key={category.slug}
                            className="w-full py-3 flex items-center justify-start text-white group"
                        >
                            <FaAngleRight 
                                color={isSelected ? "#2563eb" : "#ffffff" }
                                size={28} 
                                className={`transition ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                            />
                            <Link 
                                href={`/${category.slug}`}
                            >
                                <a className="capitalize text-lg hover:text-blue-500">{category.name}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>

        <MenuAnimatedButton
            closeMode={showMenu}
            onClick={() => setShowMenu(() => !showMenu)}
        />
        </>
    );
}

export default SideMenu;