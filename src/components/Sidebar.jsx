import { RiFileList3Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { FaArrowRight, FaSearch, FaListUl, FaHeart } from "react-icons/fa";
import { RiPushpinFill } from "react-icons/ri";
import { BsSave2Fill } from "react-icons/bs";

function Sidebar({ isSidebarVisible }) {
    return (
        <div
            className={`p-2 bg-[#121212] rounded-xl mt-16 max-h-[90%] box-border transition-all duration-300 ${
                isSidebarVisible ? "w-1/3" : "w-1/4"
            }`}
        >
            <div className="flex items-center justify-between p-3">
                <div className="text-white flex items-center">
                    <RiFileList3Fill className="text-white w-9 h-9" />
                    <h2 className="pl-2">Thư Viện</h2>
                </div>
                <div className="flex">
                    <div className="flex text-white items-center bg-white/5 rounded-full px-3">
                        <IoMdAdd className="w-8 h-8 pr-2" />
                        <h2>Tạo</h2>
                    </div>
                    <FaArrowRight className="text-white w-8 h-8 pl-3" />
                </div>
            </div>

            <div className="p-3">
                <button className="bg-gray-800 text-white py-1 px-3 rounded-xl">Danh Sách Phát</button>
                <button className="bg-gray-800 text-white py-1 px-3 rounded-xl ml-3">Nghệ Sĩ</button>
            </div>

            <div className="flex justify-between items-center p-3">
                <FaSearch className="w-5 h-5 text-white" />
                <div className="flex text-white items-center">
                    <h2 className="pr-4">Gần Đây</h2>
                    <FaListUl className="w-5 h-5" />
                </div>
            </div>

            <div className="flex pl-3 pt-4">
                <button className="bg-purple-300 p-3 rounded-md">
                    <FaHeart className="w-7 h-7 text-white" />
                </button>
                <div className="text-white pl-2">
                    <h1>Bài Hát Yêu Thích</h1>
                    <h3 className="flex items-center">
                        <RiPushpinFill className="w-5 h-5" />
                        Danh Sách Phát - 21 Bài Hát
                    </h3>
                </div>
            </div>

            <div className="flex pl-3 pt-4">
                <button className="bg-green-600 p-3 rounded-md">
                    <BsSave2Fill className="w-7 h-7 text-white" />
                </button>
                <div className="text-white pl-2">
                    <h1>Tập Của Bạn</h1>
                    <h3 className="flex items-center">
                        <RiPushpinFill className="w-5 h-5" />
                        Các Tệp Đã Lưu Và Tải Xuống
                    </h3>
                </div>
            </div>

            <div className="flex pl-3 pt-4">
                <img className="w-14 h-14 rounded-full" src="https://tse1.mm.bing.net/th?id=OIP.UuS0AUQj1dhPM4zP2nGfAgHaKA&pid=Api&P=0&h=180" alt="Sơn Tùng" />
                <div className="text-white pl-2">
                    <h1>Sơn Tùng</h1>
                    <h3>Ca Sĩ</h3>
                </div>
            </div>

            <div className="flex pl-3 pt-4">
                <img className="w-14 h-14 rounded-full" src="https://tse4.mm.bing.net/th?id=OIP.jkC4Sk0M3_iJLRRybxv5GwHaJ0&pid=Api&P=0&h=180" alt="Thầy Giao Ba" />
                <div className="text-white pl-2">
                    <h1>Thầy Giao Ba</h1>
                    <h3>Ca Sĩ</h3>
                </div>
            </div>

            <div className="flex pl-3 pt-4">
                <img className="w-14 h-14 rounded-full" src="https://tse2.mm.bing.net/th?id=OIP.fLINYROx1r2B7joiZU_wuQHaD4&pid=Api&P=0&h=180" alt="Trấn Thành" />
                <div className="text-white pl-2">
                    <h1>Trấn Thành</h1>
                    <h3>Ca Sĩ</h3>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
