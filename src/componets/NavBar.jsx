function NavBar() {
    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
                <a href="#desing" className="hover:text-gray-300 ">Desing</a>
                <a href="#camera" className="hover:text-gray-300 ">Câmera</a>
                <a href="#performance" className="hover:text-gray-300 ">Perfomance</a>
                <a href="#cores" className="hover:text-gray-300 ">Cores</a>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full cursor-pointer">Comprar</button>
            </div>
        </nav>
    )
}

export default NavBar