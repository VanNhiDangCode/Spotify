import { RiFileList3Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiPushpinFill } from "react-icons/ri";
import { BsSave2Fill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Body_Mid_Body from "./Body_Mid_Body";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Sidebar from "./Sidebar";
function Body_Index () {
return (
    <>
    <div className="bg-black w-full flex  overflow-auto   " >
{/* body-Left */}
    <Sidebar/> 
    
{/* body-mid */}
     <div className="bg-gradient-to-b from-[#1f2937] to-black w-3/4  mx-3 rounded-xl py-4 px-8 h-screen overflow-y-auto pt-[75px] " >
    <div className="" >
  <button className="bg-white/10 text-white px-3 py-1 rounded-full" >Tất Cả</button>
  <button className="bg-white/10 text-white px-3 py-1 rounded-full ml-3 " >Nhạc</button>
  <button className="bg-white/10 text-white px-3 py-1 rounded-full ml-3" >Podcast</button>
    </div>
    <div className="flex space-x-4 pt-6 ">

  <div className="flex items-center bg-white/10 text-white rounded-lg p-2 w-72">
    <img
      src="https://tse1.mm.bing.net/th?id=OIP.oT_ZG9X2QFZinSaGHXtKOQHaHa&pid=Api&P=0&h=180" 
      alt="Hip-hop Việt"
      className="w-10 h-10 rounded"
    />
    <span className="ml-2 font-semibold">Hip-hop Việt</span>
  </div>

  <div className="flex items-center bg-white/10 text-white rounded-lg p-2 w-72">
    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-purple-500 to-blue-400 rounded">
      ❤️
    </div>
    <span className="ml-2 font-semibold">Bài hát đã thích</span>
  </div>
</div>
<div>
<Body_Mid_Body/>
</div>
     </div>
{/* body-right */}
     <div className="bg-[#121212] w-1/3 p-4 h-screen overflow-y-auto pt-[80px] " > 
     <div className=" flex items-center justify-between w-full bg-[#121212]  "  >
 <div>
 <h2 className="text-white" >HipHop Việt</h2>
 </div>
  <div className="text-white flex text-2xl space-x-4    " >
  <BsThreeDots />
  <IoMdClose />
  </div>
     </div>

<div className="pt-5">
<img src="https://tse3.mm.bing.net/th?id=OIP.IWFduIo0bz7mB40jOJqswQHaHa&pid=Api&P=0&h=180" alt="" className="w-full h-auto rounded-lg " />
 <div className="flex justify-between items-center mt-5 " >
  <div className="text-white" >
  <h2 className="text-2xl" >Đánh Đổi</h2>
  <p className="text-xl" >Obito</p>
  </div  >
  <MdOutlineAddCircleOutline  className="w-8 h-8 text-gray-500  " />
 </div>
 

</div>

<div className="pt-5">
<img src="https://tse3.mm.bing.net/th?id=OIP.IWFduIo0bz7mB40jOJqswQHaHa&pid=Api&P=0&h=180" alt="" className="w-full h-auto rounded-lg " />
 <div className="flex justify-between items-center mt-5 " >
  <div className="text-white" >
  <h2 className="text-2xl" >Đánh Đổi</h2>
  <p className="text-xl" >Obito</p>
  </div  >
  <MdOutlineAddCircleOutline  className="w-8 h-8 text-gray-500  " />
 </div>
 

</div>

<div className="pt-5">
<img src="https://tse3.mm.bing.net/th?id=OIP.IWFduIo0bz7mB40jOJqswQHaHa&pid=Api&P=0&h=180" alt="" className="w-full h-auto rounded-lg " />
 <div className="flex justify-between items-center mt-5 " >
  <div className="text-white" >
  <h2 className="text-2xl" >Đánh Đổi</h2>
  <p className="text-xl" >Obito</p>
  </div  >
  <MdOutlineAddCircleOutline  className="w-8 h-8 text-gray-500  " />
 </div>
 

</div>

<div className="pt-5">
<img src="https://tse3.mm.bing.net/th?id=OIP.IWFduIo0bz7mB40jOJqswQHaHa&pid=Api&P=0&h=180" alt="" className="w-full h-auto rounded-lg " />
 <div className="flex justify-between items-center mt-5 " >
  <div className="text-white" >
  <h2 className="text-2xl" >Đánh Đổi</h2>
  <p className="text-xl" >Obito</p>
  </div  >
  <MdOutlineAddCircleOutline  className="w-8 h-8 text-gray-500  " />
 </div>
 

</div>

     </div>

    </div>
    </>
);

}
export default Body_Index