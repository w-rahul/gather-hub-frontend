import { useNavigate } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { Button } from "../components/Button"
import { Heading, SubHeading } from "../components/Heading"
import { InputBox2 } from "../components/Input"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Register = () =>{
    
    interface RegisterResponse {
        token: string;
    }

    const[username , SetName] = useState("")
    const[Email, SetEmail] = useState("")
    const[Password , SetPassword] = useState("")
    const[role , Setrole] = useState("VIEWER")

    const Navigate = useNavigate()

    return <div className="w-full h-screen bg-black text-white overflow-hidden">
        <div>
            <Appbar onclick={()=>{
                Navigate("/login")
            }} label="Log in" />
        </div>
     <div className="flex justify-center items-center w-full h-full bg-black text-white">
        
    <div className="w-4/12 h-auto bg-zinc-900 p-9 rounded-xl"
    style={{ boxShadow: '0 4px 6px rgba(255, 255, 255, 0.4)' }}
    >        
        <div className="mb-6">
        <Heading  label="Create your account" />
        <div className="max-w-sm">
        <SubHeading label="Join the GatherHub community and start discovering exclusive events" />
        </div>
        </div>
    
        <div >
            <InputBox2 onchange={(e)=>{
                SetName(e.target.value)
            }} placeholder="Your Name..." label="Name"  />

            <InputBox2 onchange={(e)=>{
                SetEmail(e.target.value)
            }} placeholder="example@domain.com" label="Email" />

            <InputBox2 onchange={(e)=>{
                SetPassword(e.target.value)
            }} placeholder="******" label="Password" />

            <InputBox2 onchange={(e)=>{
                Setrole(e.target.value)
            }} placeholder="role" label="Role" type="list" options={['VIEWER','ORGANIZER']} /> 
           
            

            <div className="flex flex-col items-center mt-8">
                <Button onclick={async ()=>{
                    try {
                        const response = await axios.post<RegisterResponse>(`${BACKEND_URL}/auth/register`, {
                            name : username,
                            email : Email,
                            password : Password,
                            role : role
                        })
                        localStorage.setItem("token", response.data.token)
                        Navigate("/events")    
                    } catch (error) {
                        console.log(error)
                    }
                    
                }} label="Register" /> 
            </div>
        </div>
        </div>
        
    </div>
</div>
}