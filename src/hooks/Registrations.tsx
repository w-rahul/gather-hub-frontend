import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

interface registrationsSchema {
    "registrations" :{
        "user":{
            "name": string
        }
    }
} 

interface ApiResponse {
    Registrations : registrationsSchema[]
}

export const useRegistrations = ({id} : {id :string}) =>{

    const[registrations, setregistrations] = useState<registrationsSchema[]>([])
    const[loading, setloading] = useState(true)

    useEffect(()=>{
            try {
                 axios.get<ApiResponse>(`${BACKEND_URL}/${id}`,{
                    headers :{
                        Authorization : "Bearer " + localStorage.getItem("token")
                    }
                })
                .then((response)=>{
                    setregistrations(response.data.Registrations )   
                    setloading(false)
                })

            } catch (error) {
                console.log(error)
                alert("Something went wrong fetching registrations")
            }    

    },[])

      return {
        loading,
        registrations
      }  
}