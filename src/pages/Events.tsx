import { useEffect } from "react";
import { EventCard } from "../components/EventCard";
import { useNavigate } from "react-router-dom";
import { useEvents } from "../hooks/Events";
import { Appbar } from "../components/Appbar";

export const Events = () =>{

    const letsGooo = useNavigate() 
    const token = localStorage.getItem("token")
    
    useEffect(()=>{
        if(!token){
            alert("You are not LoggedIn")
            letsGooo("/login")
        }
    },[token, letsGooo])

    const {loading, events} = useEvents()

    if(loading){
        return <div className="w-full h-screen flex items-center bg-black justify-center text-white font-bold text-3xl">
            Loading.....
        </div>
    }
    
    return <div className="bg-black min-h-screen ">
       <Appbar />
    <div className="grid grid-cols-4 gap-10 p-10 max-w-screen min-h-scree">
        {events.map((theprop) =><EventCard
          key={theprop.id}
          id={theprop.id}
          title={theprop.title}
          description= {theprop.description}
          category={theprop.title}
          date={theprop.date}
          location={theprop.location}
          organizerName={theprop.organizer.name}
        />)} 
    </div>    

    </div>
}




