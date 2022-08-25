import React from 'react'; 
import logo from "../../logo.png";
import { FaSearch  } from "react-icons/fa"

const Navbar = () => {
  return (
<header className="p-4 dark:bg-gray-900 dark:text-gray-100 border-b-2 sticky">
	<div className="container flex justify-between h-10 mx-auto">
		<a rel="noopener noreferrer" href="#"  className="flex items-center p-2"> <img  className="w-16 rounded-full"src={logo}  />
		</a>
		<div className="flex items-center md:space-x-4">
			<div className="relative">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
						<FaSearch />
					</button>
				</span>
				<input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
			</div>
			<button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-gray-900">Log in</button>
			<button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-gray-900">Sign up</button>
		</div>
		<button title="Open menu" type="button" className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
 
  )
}

export default Navbar