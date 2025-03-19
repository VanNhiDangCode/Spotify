import { RiFileList3Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiPushpinFill } from "react-icons/ri";
import { BsSave2Fill } from "react-icons/bs";
function Sidebar () {
return (

    <>
     <div className="w-1/3 ml-1  bg-[#121212] rounded-lg pt-16 h-screen "  >
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
        <div className="">
            <img className="w-14 h-14 rounded-[50%] " src="https://tse1.mm.bing.net/th?id=OIP.UuS0AUQj1dhPM4zP2nGfAgHaKA&pid=Api&P=0&h=180" alt="" />
        </div>
        <div className="text-white pl-2 " >
            <h1>Sơn Tùng</h1>
            <h3 className="flex items-center " >Ca Sĩ</h3>
        </div>
      </div>

      <div className="flex pl-3 pt-4 " >
        <div className="">
            <img className="w-14 h-14 rounded-[50%] " src="https://tse4.mm.bing.net/th?id=OIP.jkC4Sk0M3_iJLRRybxv5GwHaJ0&pid=Api&P=0&h=180" alt="" />
        </div>
        <div className="text-white pl-2 " >
            <h1>Thầy Giao Ba</h1>
            <h3 className="flex items-center " >Ca Sĩ</h3>
        </div>
      </div>
      <div className="flex pl-3 pt-4 " >
        <div className="">
            <img className="w-14 h-14 rounded-[50%] " src="https://tse2.mm.bing.net/th?id=OIP.fLINYROx1r2B7joiZU_wuQHaD4&pid=Api&P=0&h=180" alt="" />
        </div>
        <div className="text-white pl-2 " >
            <h1>Trấn Thành</h1>
            <h3 className="flex items-center " >Ca Sĩ</h3>
        </div>
      </div>

     </div>
    </>
);

} 
export default Sidebar