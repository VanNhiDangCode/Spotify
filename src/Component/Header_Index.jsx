import { FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { ImSpotify } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
function Header_Index () {
 
   return (
    <>
    <div  >
   <div className="bg-black flex  justify-between p-2 items-center " >

      <div className="pl-3" >
      <ImSpotify className="text-white w-9 h-9"  />
      </div>
    
 <div className="w-3/12 flex justify-center items-center  " >
 
    <GoHome className="text-white w-9 h-9  " />
 
 <div className="relative w-full pl-5 " >

<input   type="text" 
                      className="w-full bg-gray-700 p-2 rounded-2xl border-2 border-white bg-transparent text-white placeholder-gray-300"
                      placeholder="Nhập tìm kiếm..."
                  />
  <button className="absolute right-2 top-1/2 transform -translate-y-2 " ><FaSearch className="w-5 h-5 text-white " /></button>
</div>
 </div>

 <div className="flex " >
   <button className="bg-slate-50 py-1 px-3 border-white rounded-lg mr-3 " >Khám Phá Premium</button>
   <IoMdNotifications className="text-white w-9 h-9  "  />
 </div>
   </div>
    </div>
    </>
   );

}
export default Header_Index