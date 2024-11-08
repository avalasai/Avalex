import { Outlet } from "react-router-dom";
import Adminsidebar from "./sidebar";
import Adminheader from "./header";

function AdminLayout(){
    return(

        <div className="flex min-h-screen w-full">
            {/* admin side bar */}
            <Adminsidebar/>
            <div className="flex flex-1 flex-col">
                {/* admin header  */}
                <Adminheader/>
                <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
                    <Outlet/>
                </main>

            </div>
        </div>
    );
}

export default AdminLayout;