import { SingleEventProps } from "../hooks/SingleEvent"
import { format } from 'date-fns';
import { ButtonComp } from "./Button";
import { TokenRole } from "../hooks/TokenRole";
import { UserIdFromToken } from "../hooks/UserIdFromToken";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ViewRigestered } from "./ViewRegistered";
import { useRegistrations } from "../hooks/Registrations";
    
export const SingleEvent = ({hello}:{hello:SingleEventProps}) =>{
    const formatDate = (isoDate: string) => {
        const dateObj = new Date(isoDate);
        const day = dateObj.getDate();
        const month = format(dateObj, 'MMMM');
        const suffix = ['th', 'st', 'nd', 'rd'][
            (day % 10 <= 3 && Math.floor(day / 10) !== 1) ? day % 10 : 0
        ];
    
        return `${month} ${day}${suffix}`;
    };

    const DecodedRole = TokenRole()
    const DecodedUserId = UserIdFromToken()  
    const EventID = useParams() as {id : string}
    const Navigate = useNavigate()
    const organizerId = hello.organizerId
    const [EventOwner, setEventOwner] = useState(false)
    
    const{loading, registrations} = useRegistrations({id : EventID.id || ""})

    const [isRegistered, setisRegistered] = useState<boolean>(false)

    interface ApiResponse {
        registered : boolean
    }

    useEffect(()=>{
        const CheckIsRegistered = async () =>{
        try {
            const response = await axios.get<ApiResponse>(`${BACKEND_URL}/registrations/${EventID.id}/${DecodedUserId}`, {
                headers:{
                    Authorization : "Bearer " + localStorage.getItem("token")
                }
            })
            setisRegistered(response.data.registered)
        
            if(organizerId == DecodedUserId){
                setEventOwner(true)
            }

        } catch (error) {
                console.error("Error checking the registration" + error)

        }
    }

    CheckIsRegistered()

},[EventID.id, DecodedUserId])

    const eventhandler =  async () =>{
            if(isRegistered){
                return
            }
           try {
            await axios.post(`${BACKEND_URL}/registrations/${EventID.id}`,{}, {
                headers:{
                    Authorization : "Bearer " + localStorage.getItem("token")
                }
                
            })       
                setisRegistered(true);
                alert("Successfully registered for the event");

           } catch (error) {
                alert("You are already registered / An error has been occured")
           } 
         }

    return   <div className="h-screen flex items-center justify-center items w-full">
        <div className="mb-16 rounded-2xl w-1/3 max-h-screen min-h-96 grid p-2 grid-rows-[60%_40%] bg-zinc-900">
            <div className="p-3">  
            <div className=" p-4 text-4xl font-bold font-serif">
                {hello.title}
            </div>
            <div className="mb-6 px-6 py-1 h-36 overflow-y-auto font-mono"
            style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#555 #2d2d2d',
              }}>
                {hello.description} 
            </div>
        </div>
            <div className="">
                <div className="border-t-2">
                    <div className="mt-4 text-center grid grid-cols-2 grid-rows-2 h-full gap-8 text-md font-semibold font-serif">
                    <div className="h-full">
                        Category 
                        <div className="font-mono font-thin">
                        {hello.category} 
                        </div>
                        </div>
                    <div className=" h-full">
                        Location
                        <div className="font-mono font-thin">
                        {hello.location}
                        </div>
                    </div>
                    <div className="h-full">
                        Date
                        <div className="font-mono font-thin">
                        {formatDate(hello.date)}
                        </div>
                        </div>
                    <div className="h-full">
                        Organizer
                        <div className="font-mono font-thin">
                        {hello.organizer.name}
                        </div>
                        </div>
                    </div>
                </div>    
            </div>
            {DecodedRole == 'VIEWER' ? <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
                {!isRegistered? <ButtonComp onclick={eventhandler} label={"Register"} width="w-40"/> :
                <ButtonComp label={"Registered"} width="w-40"/>}
            </div> : null}
            {DecodedRole == 'ORGANIZER' && EventOwner ?
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
            <ButtonComp onclick={async ()=>{
                try {
                    await axios.delete(`${BACKEND_URL}/event/${EventID.id}`,{
                        headers:{
                            Authorization : "Bearer " + localStorage.getItem("token")
                        }
                    })
                    alert("Event Deleted Succeddfuly")
                    Navigate("/events")
                } catch (error) {
                    console.error(error)
                    alert("You are not authorized / Error deleting event")
                }
            }} label= "Delete" width="w-40"/> 
            </div>
            : null}
        </div>
        <div className="absolute right-5 top-1/3">

            <ViewRigestered registrations={registrations} />
        </div>
    </div>
}

