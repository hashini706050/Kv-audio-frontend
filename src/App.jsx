import'./App.css';
import ProductCard from './components/productCard';
import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";

function App() {

  return (
    <div className='w-full h-screen flex'>
      <div className="w-[300px] h-full bg-green-300">
        <button className="w-full h-[40px] text-[25px] font-bold bg-red-400 flex justify-center items-center">
          <BsGraphDown/>
          Dashboard
        </button>
        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <FaRegBookmark/>
          Bookings
        </button>
        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <MdOutlineLocalGroceryStore/>
          Items
        </button>
        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <FaRegUser/>
          Users
        </button>
        <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <MdOutlineReviews/>
          Reviews
        </button>

      </div>
      <div className="flex-1 h-full bg-red-900 relative">
      

      </div>
      
    </div>
  )
}

export default App





































