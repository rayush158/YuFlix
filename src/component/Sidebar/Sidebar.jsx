import React from 'react'
import { FaHome , FaFirefoxBrowser , FaPlayCircle, FaHeart , FaClock, FaHistory} from "react-icons/fa"
const Sidebar = () => {
  return (
    <div className="h-[88vh] p-3 space-y-3 flex-[0.20]   dark:bg-gray-900 dark:text-gray-100">
	<div className="flex items-center p-2 space-x-4">
		<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
		<div>
			<h2 className="text-lg font-semibold">Ayush Kumar</h2>
			<span className="flex items-center space-x-1">
				<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
			</span>
		</div>
	</div>
	<div className="divide-y divide-gray-700 max-h-full	">
		<ul className="pt-2 pb-4 space-y-1 text-sm">
			<li className="dark:bg-gray-800 dark:text-gray-50">
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    <FaHome />
					<span>Home</span>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    <FaFirefoxBrowser />
					<span>Browse</span>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    <FaPlayCircle />
					<span>Playlist</span>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<FaHeart />
					<span>Liked Videos</span>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<FaClock />
					<span>Watch later</span>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<FaHistory />   
					<span>History</span>
				</a>
			</li>
		</ul>
	
	</div>
</div>
  )
}

export default Sidebar