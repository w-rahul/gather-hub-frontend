import { useNavigate } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { Button } from "../components/Button"
import { Heading, SubHeading } from "../components/Heading"
import { InputBox2 } from "../components/Input"

export const Register = () =>{

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
            <InputBox2 placeholder="Your Name..." label="Name" />
            <InputBox2 placeholder="example@domain.com" label="Email" />
            <InputBox2 placeholder="******" label="Password" />
            <InputBox2 placeholder="role" label="Role" type="list" options={['Viewer','Organizer']} /> 
           
            <div className="flex flex-col items-center mt-8">
                <Button label="Register" /> 
            </div>
        </div>
        </div>
        
    </div>
</div>
}