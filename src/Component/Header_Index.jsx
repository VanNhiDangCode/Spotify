import { FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";
function Header_Index () {
 
   return (
    <>
    <div  >
   <div className="bg-black flex justify-center p-2 " >
    
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
   </div>
    </div>
    </>
   );

}
export default Header_Index