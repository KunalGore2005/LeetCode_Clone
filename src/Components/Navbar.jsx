import React,{UseState} from 'react'
import { Search, BellDot, Flame, User } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(null);

    const toggleDropdown = (dropdown) => {
        setIsOpen(isOpen === dropdown ? null : dropdown);
    };
  return (
    <div  className='flex justify-between items-center h-[7vh] p-[1/2vh] min-w-295 bg-white'>
        <div className='flex gap-7'>
            <div>
                <img src="https://brandlogos.net/wp-content/uploads/2025/11/leetcode-logo_brandlogos.net_c4kgx.png" alt="logo" className='h-[3vh]' />
            </div>
            <Link to='/explore'>Explore</Link>
            <Link to='/problems'>Problems</Link>
            <Link to='/contest'>Contest</Link>
            <Link to='/discuss'>Discuss</Link>
            <div className="relative">
                <button 
                    onClick={() => toggleDropdown("interview")}
                    className="cursor-pointer"
                >
                    Interview
                </button>

                {isOpen === "interview" && (
                    <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                        <div className="p-2 hover:bg-gray-100 cursor-pointer">Online Interview</div>
                        <div className="p-2 hover:bg-gray-100 cursor-pointer">Assesment</div>
                    </div>
                )}
            </div>
            <div className="relative">
                <button 
                    onClick={() => toggleDropdown("store")}
                    className="cursor-pointer"
                >
                    Store
                </button>

                {isOpen === "store" && (
                    <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                        <div className="p-2 text-amber-400 hover:bg-gray-100 cursor-pointer">Redeem</div>
                        <div className="p-2 text-amber-400 hover:bg-gray-100 cursor-pointer">Premium</div>
                    </div>
                )}
            </div>
        </div>
        <div className='flex gap-4 items-center'>
            <div className='flex items-center px-1 h-[5vh] w-[26vh] bg-gray-100 rounded-full'>
                <Search className='h-4'/>
                <input placeholder='Search' className='bg-gray-100 text-sm text-gray-500 focus:outline-none'/>
            </div>
            <div className='flex items-center'>
                <BellDot className='h-4'/>
            </div>
            <div className='flex justify-center items-center h-4'>
                <div><Flame className='h-4'/></div>
                <div className='text-sm'>17</div>
            </div>
            <div className='flex rounded-full bg-gray-200 p-1'>
                <Link to='/profile'><User className='h-4'/></Link>
                
            </div>
            <div className='bg-amber-100 text-amber-500 font-medium text-sm rounded-xl px-3 py-1'>
                Premium
            </div>
        </div>
    </div>
  )
}

export default Navbar