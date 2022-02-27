function MenuAnimatedButton({ onClick, closeMode }) {

    return (
        <button 
        aria-label="Mostrar ou esconder menu"
        className="fixed flex flex-col items-center justify-center right-3 bottom-3 z-50 w-14 h-14 rounded-full bg-gray-800 text-white hover:bg-gray-700"
        onClick={onClick}
        >
        <div className="h-8 flex flex-col items-center justify-between">
            <span 
                className={`block bg-white h-1 rounded-full transition duration-300 origin-center transform ${closeMode ? 'w-10 rotate-45 translate-y-3.5' : 
                'w-7 rotate-0 translate-y-0'}`}>
            </span>
            <span className={`block bg-white rounded-full w-7 h-1 transition duration-300 transform ${closeMode ? 'opacity-0' : 'opacity-100'}`}></span>
            <span 
                className={`block bg-white h-1 rounded-full transition duration-300 origin-center transform ${closeMode ? 'w-10 -rotate-45 -translate-y-3.5' :
                'w-7 rotate-0 translate-y-0'}`}>
            </span>
        </div>
        </button>
    )
}

export default MenuAnimatedButton;