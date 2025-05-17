import React from "react";





const Header = () => {
  return (
    
        <header className="w-full bg-white shadow-md fixed top-0 left-0">
            <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <div className="text-xl font-bold"> Aniket</div>
                <ul className="flex space-x-6 text-sm font-medium">
                    <li><button className="hover:text-blue-600">Projects</button></li>
                    <li><button className="hover:text-blue-600">Resume</button></li>
                    <li><button className="hover:text-blue-600">Contact</button></li>
                    <li><button className="hover:text-blue-600">🌙</button></li>
                </ul>
            </nav>

        </header>

   
  )
}

export default Header