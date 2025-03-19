import Againlist from "../pages/Againlist";
import Playlist from "../pages/Playlist";
function Body_Mid_Body (){
    return (
<>
<div className="flex justify-between text-white pt-4 flex-1 overflow-auto  " >
    <h1 className="text-2xl">Dành Cho Bạn</h1>
    <h3 className="">Hiện Tất Cả</h3>
</div>
{/*list nghệ sĩ*/}
<div className="flex capitalize ml-[-16px] " >
    <div className="w-1/5 hover:bg-white/20 hover:rounded-md p-4  " >
<img src="https://tse2.mm.bing.net/th?id=OIP.wq2tdv0O83VJsCilZpsQIQHaHa&pid=Api&P=0&h=180" alt="" className="w-full h-48 rounded-lg " />
<h2 className="text-gray-500" >Sơn Tùng Mtp Hát Live Hơn 10 Năm Chưa Hát</h2>
    </div>

    <div className="w-1/5 hover:bg-white/20 hover:rounded-md p-4 " >
<img src="https://thesmartlocal.com/vietnam/wp-content/uploads/2020/12/Johnny-Tri-Nguyen-1.jpg" alt="" className="w-full h-48 rounded-lg " />
<h2 className="text-gray-500" >mầy muốn lấy trợ lớn,tại sao không ?</h2>
    </div>

    <div className="w-1/5 hover:bg-white/20 hover:rounded-md p-4 " >
<img src="https://tse3.mm.bing.net/th?id=OIP.72zNqwPoyRHKwFCMJh5B1gHaHa&pid=Api&P=0&h=180" alt="" className="w-full h-48 rounded-lg " />
<h2 className="text-gray-500" >hãi cảm nhận nỗi đau mà ta đã từng chãy qua</h2>
    </div>

    <div className="w-1/5 hover:bg-white/20 hover:rounded-md p-4 " >
<img src="https://tse1.mm.bing.net/th?id=OIP._MAal6cW13Jov6NqQd-S8gAAAA&pid=Api&P=0&h=180" alt="" className="w-full h-48 rounded-lg " />
<h2 className="text-gray-500" >em hứa tháng 4 quay về nhưng đó là lời nói dối</h2>
    </div>

</div>

{/* danh sách nghe gần đây */}
< Playlist/>
{/* danh sách phát gần đây*/}
<Againlist/>
</>
    );
}
export default Body_Mid_Body