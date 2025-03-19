import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { Routes, Route, Link } from "react-router-dom"; 

export default function AdminPage(){
  return(
      <div className='w-full h-screen flex'>
            <div className="w-[300px] h-full bg-green-300">
              <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
                <BsGraphDown/>
                Dashboard
              </button>
              <Link to="/admin/bookings" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
                <FaRegBookmark/>
                Bookings
              </Link>
              <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
                <MdOutlineLocalGroceryStore/>
                Items
              </Link>
              <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
                <FaRegUser/>
                Users
              </button>
              <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
                <MdOutlineReviews/>
                Reviews
              </button>
      
            </div>

            <div className="flex-1 w-[calc(100vw-400px)] bg-blue-900 relative">
              <Routes path="/*">
                  <Route path="/bookings" element={<h1>Bookings</h1>}/>
                  <Route path="/items" element={<h1>Items</h1>}/>
              
              </Routes>
      
            </div>
            
          </div>
  )
}







