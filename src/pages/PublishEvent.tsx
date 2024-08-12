import { CreateEvent } from "../components/CreateEvent"
import { useNavigate } from "react-router-dom"
import { Appbar } from "../components/Appbar"

export const PublishEvent = () =>{

    const Navigate = useNavigate()
    
    return <div className="bg-black w-full h-screen overflow-hidden text-white">
        <div><Appbar width="w-20" label="Logout" onclick={()=>{
                    localStorage.removeItem("token")
                    Navigate("/login")
        }}/>
        </div>
        <div>
            <CreateEvent />
        </div>
    </div>
}