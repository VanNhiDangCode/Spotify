import { useState } from "react";
import Sidebar from "./Sidebar";
import SidebarMid from "./SidebarMid";
import SidebarRight from "./SidebarRight";

function Body_Index() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    return (
        <div className="bg-black w-full flex overflow-auto">
            {/* Sidebar Left */}
            <Sidebar isSidebarVisible={isSidebarVisible} />

            {/* Sidebar Mid - Truyền trạng thái để điều chỉnh kích thước */}
            <SidebarMid isSidebarVisible={isSidebarVisible} />

            {/* Sidebar Right (chỉ hiển thị nếu isSidebarVisible là true) */}
            {isSidebarVisible && <SidebarRight setIsSidebarVisible={setIsSidebarVisible} />}
        </div>
    );
}

export default Body_Index;
