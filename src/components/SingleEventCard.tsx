import { SingleEventProps } from "../hooks/SingleEvent"

import { format } from 'date-fns';
import { ButtonComp } from "./Button";
import { TokenRole } from "../hooks/TokenRole";
import { UserIdFromToken } from "../hooks/UserIdFromToken";
import axios, { head } from "axios";
import { BACKEND_URL } from "../config";
import { useParams } from "react-router-dom";
    
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
            {DecodedRole == 'VIEWER' ? <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 ">
                <ButtonComp onclick={async ()=>{
                   try {
                    axios.post(`${BACKEND_URL}/registrations/${EventID.id}`,{
                        userID : DecodedUserId,
                        eventID : EventID.id
                    }, {
                        headers:{
                            Authorization : "Bearer " + localStorage.getItem("token")
                        }
                        
                    })       
                    alert("successfuly registered for the event")

                   } catch (error) {
                        alert("You are already registered / An error has been occured")
                   } 
                    
                }} label="Register" width="w-40"/>
            </div> : null}
        </div>
    </div>
}