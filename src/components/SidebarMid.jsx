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
import SidebarRight from "./SidebarRight";
function SidebarMid (){
    return (
<>
<div className=" pl-4  w-3/4  rounded-xl   overflow-y-auto h-screen   pt-16 " >
    <div className="   rounded-xl bg-gradient-to-b from-[#1f2937] to-black py-4 pt-6 px-10 overflow-y-auto  " >
    <div  >
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
     </div>
</>
    );
} 
export default SidebarMid