import { useNavigate, useParams } from "react-router-dom"
import { SingleEvent } from "../components/SingleEventCard"
import { useSingleEvent } from "../hooks/SingleEvent"
import { Appbar } from "../components/Appbar"

export const FullEvent = () =>{

    const Navigate = useNavigate()
    const {id} = useParams()
    const {loading, SingleEventdata} = useSingleEvent({id : id || ""})

    if(loading || !SingleEventdata){
        return <div className="w-full h-screen flex items-center bg-black justify-center text-white font-bold text-3xl">
        Loading.....
    </div>
    }

    return <div className="bg-black w-full h-screen overflow-hidden text-white">
        <div><Appbar width="w-20" label="Logout" onclick={()=>{
                    localStorage.removeItem("token")
                    Navigate("/login")
        }}/>
        </div>
        <div>
            <SingleEvent hello={SingleEventdata} />
        </div>
    </div>
}