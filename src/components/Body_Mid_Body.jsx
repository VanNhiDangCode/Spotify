import Againlist from "../pages/Againlist";
import ListSinger from "../pages/ListSinger";
import Playlist from "../pages/Playlist";
function Body_Mid_Body (){
    return (
<>
<div className="flex justify-between text-white pt-4 flex-1 overflow-auto  " >
    <h1 className="text-2xl">Dành Cho Bạn</h1>
    <h3 className="">Hiện Tất Cả</h3>
</div>
{/*list nghệ sĩ*/}
<ListSinger/>

{/* danh sách nghe gần đây */}
< Playlist/>
{/* danh sách phát gần đây*/}
<Againlist/>
</>
    );
}
export default Body_Mid_Body