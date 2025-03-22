import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { MdOutlineAddCircleOutline } from "react-icons/md";

function SidebarRight({ setIsSidebarVisible }) {
    return (
        <div className="w-1/3 pt-[60px] h-screen overflow-x-hidden overflow-y-auto">
            <div className="bg-[#121212] w-full p-4 rounded-xl ml-3">
                {/* Header */}
                <div className="flex items-center justify-between w-full bg-[#121215] sticky top-0 p-4">
                    <h2 className="text-white">HipHop Việt</h2>
                    <div className="text-white flex text-2xl space-x-4">
                        <BsThreeDots />
                        <IoMdClose onClick={() => setIsSidebarVisible(false)} />
                    </div>
                </div>

                {/* Music List */}
                {[...Array(4)].map((_, index) => (
                    <div className="pt-5" key={index}>
                        <img
                            src="https://tse3.mm.bing.net/th?id=OIP.IWFduIo0bz7mB40jOJqswQHaHa&pid=Api&P=0&h=180"
                            alt="Album Cover"
                            className="w-full h-auto rounded-lg"
                        />
                        <div className="flex justify-between items-center mt-5">
                            <div className="text-white">
                                <h2 className="text-2xl">Đánh Đổi</h2>
                                <p className="text-xl">Obito</p>
                            </div>
                            <MdOutlineAddCircleOutline className="w-8 h-8 text-gray-500" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SidebarRight;
