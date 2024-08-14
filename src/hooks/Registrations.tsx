import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

export interface registrationsSchema {
    "user": {
        "name": string;
    };
} 

export interface ApiResponse {
    Registrations : registrationsSchema[]
}

export const useRegistrations = ({id} : {id :string}) =>{

    const[registrations, setregistrations] = useState<registrationsSchema[]>([])
    const[loading, setloading] = useState(true)

    useEffect(()=>{
            try {
                 axios.get<ApiResponse>(`${BACKEND_URL}/registrations/${id}`,{
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