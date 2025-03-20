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
import SidebarMid from "./SidebarMid";
function Body_Index () {
return (
    <>
    <div className="bg-black w-full flex  overflow-auto   " >
{/* body-Left */}
    <Sidebar/> 
    
{/* body-mid */}
    <SidebarMid/>
{/* body-right */}
   <SidebarRight/>

    </div>
    </>
);

}
export default Body_Index