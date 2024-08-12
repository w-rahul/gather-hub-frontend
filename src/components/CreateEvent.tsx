import { useState } from "react"
import { InputBox2 } from "./Input"
import { ButtonComp } from "./Button"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { UserIdFromToken } from "../hooks/UserIdFromToken"
import { useNavigate } from "react-router-dom"


export const CreateEvent = () => {
    
    const [title, settitle] = useState("") 
    const [description, setdescription] = useState("") 
    const [location, setlocation] = useState("") 
    const [Category, setCategory] = useState("") 
    const [date, setdate] = useState("")
    const Navigate = useNavigate()

    const UserIdByToken = UserIdFromToken()

    return <div> 
     <div className="h-screen flex items-center justify-center items w-full">
        <div className="rounded-2xl w-1/3 max-h-screen min-h-96 grid p-2 grid-rows-[55%_50%] bg-zinc-900">
         <div className="p-3">  
        <div className=" p-4 text-4xl font-bold font-serif">
        <InputBox2 onchange={(e)=>{
            settitle(e.target.value)
        }} label="Title" placeholder="Add your Title"/>
        </div>
        <div className="mb-6 px-6 py-1 h-36 overflow-y-auto font-mono">
        <InputBox2 onchange={(e)=>{
          setdescription(e.target.value)
        }} label="Description" placeholder="Add your Description" />
        </div>
    </div>
        <div className="">
         <div className="border-t-2">
            <div className="font-mono px-8 mt-4 text-center grid grid-cols-2 grid-rows-2 h-full gap-8 text-md font-semibold">
                <div className="h-full">
                    <InputBox2 onchange={(e)=>{
          setCategory(e.target.value)
        }} label="Category" placeholder="Add Category" />
                    </div>

                    <div className="h-full">
                    <InputBox2 onchange={(e)=>{
          setlocation(e.target.value)
        }} label="Location" placeholder="Add Location" />
                    </div>

                    <div className="h-full">
                    <InputBox2 onchange={(e)=>{
          setdate(e.target.value)
        }} label="Date" type="date" placeholder="Add Date" />
                    </div>

                    <div className=" h-full flex justify-center mt-9">
                    {/* <InputBox2 onchange={(e)=>{
            setname(e.target.value)
        }} label="Name" placeholder="Add Organizer Name" /> */}
        <div>
             <ButtonComp onclick={async ()=>{
                try {
                    await axios.post(`${BACKEND_URL}`,{
                        title: title,
                        description: description,
                        date: date,
                        location: location,
                        category: Category,
                        organizerId : UserIdByToken
                    },{
                        headers:{
                            Authorization : "Bearer " + localStorage.getItem("token")
                        }
                    })
                    Navigate("/")
                } catch (error) {
                      console.error("Error occured while creating event " + error)                  
                }

             }} label="Register" width="w-36"/>
    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</div>
}

// import { format } from 'date-fns';
    
// export const SingleEvent = ({hello}:{hello:SingleEventProps}) =>{
//     const formatDate = (isoDate: string) => {
//         const dateObj = new Date(isoDate);
//         const day = dateObj.getDate();
//         const month = format(dateObj, 'MMMM');
//         const suffix = ['th', 'st', 'nd', 'rd'][
//             (day % 10 <= 3 && Math.floor(day / 10) !== 1) ? day % 10 : 0
//         ];
    
//         return `${month} ${day}${suffix}`;
//     };