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
function Body_Index () {
return (
    <>
    <div className="bg-black w-full flex justify-between " >

     <div className="w-1/3 ml-1 min-h-[90vh] bg-[#121212] rounded-lg "  >
      <div className="flex justify-between p-3  " >
      <RiFileList3Fill className="text-white w-9 h-9 " />
     <div className="flex" >
     <IoMdAdd className="text-white w-8 h-8" />
     <FaArrowRight className="text-white w-8 h-8 pl-3 "  />
     </div>
      </div>
      <div className="p-3" >
        <button className="bg-gray-800 text-white py-1 px-3 rounded-xl " >Danh Sách Phát</button>
        <button className="bg-gray-800 text-white py-1 px-3 rounded-xl ml-3 " >Nghệ Sĩ</button>
      </div>
      <div className="flex justify-between items-center  " >
     <div className="pl-4" >
     <FaSearch className="w-5 h-5 text-white " />
     </div>
   
        <div className="flex text-white items-center pr-4 " >
        <h2 className="pr-4" >Gần Đây</h2>
        <FaListUl className="w-5 h-5 " />
        </div>
   
      </div>
      <div className="flex pl-3 pt-4 " >
        <div>
            <button className="bg-purple-300 p-3 rounded-md " ><FaHeart className="w-7 h-7 text-white " /></button>
        </div>
        <div className="text-white pl-2 " >
            <h1>Bài Hát Yêu Thích</h1>
            <h3 className="flex items-center " > <RiPushpinFill className="w-5 h-5" />Danh Sách Phát-21 Bài Hát</h3>
        </div>
      </div>

      <div className="flex pl-3 pt-4 " >
        <div>
            <button className="bg-green-600 p-3 rounded-md " ><BsSave2Fill className="w-7 h-7 text-white " /></button>
        </div>
        <div className="text-white pl-2 " >
            <h1>Tập Của Bạn</h1>
            <h3 className="flex items-center " > <RiPushpinFill className="w-5 h-5" />Các Tệp Đã Lưu Và Tải Xuống</h3>
        </div>
      </div>

      <div className="flex pl-3 pt-4 " >
        <div>
            <button className="bg-purple-300 p-3 rounded-md " ><FaHeart className="w-7 h-7 text-white " /></button>
        </div>
        <div className="text-white pl-2 " >
            <h1>Bài Hát Yêu Thích</h1>
            <h3 className="flex items-center " > <RiPushpinFill className="w-5 h-5" />Danh Sách Phát-21 Bài Hát</h3>
        </div>
      </div>

      <div className="flex pl-3 pt-4 " >
        <div>
            <button className="bg-purple-300 p-3 rounded-md " ><FaHeart className="w-7 h-7 text-white " /></button>
        </div>
        <div className="text-white pl-2 " >
            <h1>Bài Hát Yêu Thích</h1>
            <h3 className="flex items-center " > <RiPushpinFill className="w-5 h-5" />Danh Sách Phát-21 Bài Hát</h3>
        </div>
      </div>

      <div className="flex pl-3 pt-4 " >
        <div>
            <button className="bg-purple-300 p-3 rounded-md " ><FaHeart className="w-7 h-7 text-white " /></button>
        </div>
        <div className="text-white pl-2 " >
            <h1>Bài Hát Yêu Thích</h1>
            <h3 className="flex items-center " > <RiPushpinFill className="w-5 h-5" />Danh Sách Phát-21 Bài Hát</h3>
        </div>
      </div>

     </div>
{/* body-mid */}
     <div className="bg-gradient-to-b from-[#1f2937] to-black w-full mx-3 rounded-xl py-4 px-8 " >
    <div className="" >
  <button className="bg-white/10 text-white px-3 py-1 rounded-full" >Tất Cả</button>
  <button className="bg-white/10 text-white px-3 py-1 rounded-full ml-3 " >Nhạc</button>
  <button className="bg-white/10 text-white px-3 py-1 rounded-full ml-3" >Podcast</button>
    </div>
    <div className="flex space-x-4 pt-6 ">
  {/* Ô Hip-hop Việt */}
  <div className="flex items-center bg-white/10 text-white rounded-lg p-2 w-72">
    <img
      src="https://tse1.mm.bing.net/th?id=OIP.oT_ZG9X2QFZinSaGHXtKOQHaHa&pid=Api&P=0&h=180" 
      alt="Hip-hop Việt"
      className="w-10 h-10 rounded"
    />
    <span className="ml-2 font-semibold">Hip-hop Việt</span>
  </div>

  {/* Ô Bài hát đã thích */}
  <div className="flex items-center bg-white/10 text-white rounded-lg p-2 w-72">
    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-purple-500 to-blue-400 rounded">
      ❤️ {/* Thay bằng icon thực tế */}
    </div>
    <span className="ml-2 font-semibold">Bài hát đã thích</span>
  </div>
</div>
<Body_Mid_Body/>
     </div>
{/* body-right */}
     <div className="bg-[#121212] w-1/3 p-4 " >
     <div className=" flex  justify-between  "  >
  <h2 className="text-white" >HipHop Việt</h2>
  <div className="text-white flex text-2xl  " >
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

     </div>

    </div>
    </>
);

}
export default Body_Index