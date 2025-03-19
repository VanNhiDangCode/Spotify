import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Playlist () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
      };
    return (
<>
<div className=" flex justify-between text-white pt-4 capitalize " >
    <h1 className="text-2xl">Dựa trên nhạc bạn nghe gần đây</h1>
    <h3 className="">Hiện Tất Cả</h3>
</div>
<div className=" capitalize ml-[-16px] " >
<Slider className="ml-1" {...settings}>
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

    <div className="w-1/5 hover:bg-white/20 hover:rounded-md p-4 " >
<img src="https://tse1.mm.bing.net/th?id=OIP._MAal6cW13Jov6NqQd-S8gAAAA&pid=Api&P=0&h=180" alt="" className="w-full h-48 rounded-lg " />
<h2 className="text-gray-500" >em hứa tháng 4 quay về nhưng đó là lời nói dối</h2>
    </div>

    <div className="w-1/5 hover:bg-white/20 hover:rounded-md p-4 " >
<img src="https://tse1.mm.bing.net/th?id=OIP._MAal6cW13Jov6NqQd-S8gAAAA&pid=Api&P=0&h=180" alt="" className="w-full h-48 rounded-lg " />
<h2 className="text-gray-500" >em hứa tháng 4 quay về nhưng đó là lời nói dối</h2>
    </div>

    <div className="w-1/5 hover:bg-white/20 hover:rounded-md p-4 " >
<img src="https://tse1.mm.bing.net/th?id=OIP._MAal6cW13Jov6NqQd-S8gAAAA&pid=Api&P=0&h=180" alt="" className="w-full h-48 rounded-lg " />
<h2 className="text-gray-500" >em hứa tháng 4 quay về nhưng đó là lời nói dối</h2>
    </div>
    <div className="w-1/5 hover:bg-white/20 hover:rounded-md p-4 " >
<img src="https://tse1.mm.bing.net/th?id=OIP._MAal6cW13Jov6NqQd-S8gAAAA&pid=Api&P=0&h=180" alt="" className="w-full h-48 rounded-lg " />
<h2 className="text-gray-500" >em hứa tháng 4 quay về nhưng đó là lời nói dối</h2>
    </div>
    <div className="w-1/5 hover:bg-white/20 hover:rounded-md p-4 " >
<img src="https://tse1.mm.bing.net/th?id=OIP._MAal6cW13Jov6NqQd-S8gAAAA&pid=Api&P=0&h=180" alt="" className="w-full h-48 rounded-lg " />
<h2 className="text-gray-500" >em hứa tháng 4 quay về nhưng đó là lời nói dối</h2>
    </div>
    <div className="w-1/5 hover:bg-white/20 hover:rounded-md p-4 " >
<img src="https://tse1.mm.bing.net/th?id=OIP._MAal6cW13Jov6NqQd-S8gAAAA&pid=Api&P=0&h=180" alt="" className="w-full h-48 rounded-lg " />
<h2 className="text-gray-500" >em hứa tháng 4 quay về nhưng đó là lời nói dối</h2>
    </div>
    <div className="w-1/5 hover:bg-white/20 hover:rounded-md p-4 " >
<img src="https://tse1.mm.bing.net/th?id=OIP._MAal6cW13Jov6NqQd-S8gAAAA&pid=Api&P=0&h=180" alt="" className="w-full h-48 rounded-lg " />
<h2 className="text-gray-500" >em hứa tháng 4 quay về nhưng đó là lời nói dối</h2>
    </div>
    </Slider>
</div>
</>
    );
}
export default Playlist