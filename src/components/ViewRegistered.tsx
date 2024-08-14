import { useState } from "react"
import { Heading } from "./Heading"

export const ViewRigestered = () =>{

    const [UserCount, setUserCount] = useState<number>(0)

    return <div className=" bg-zinc-700 w-full h-full text-white p-3 rounded-xl">
        <div className="flex items-center bg-red-500">
            <Heading label="Registered Users" />
            <div className="text-4xl pl-3 p-2 pb-4 font-medium">
                {UserCount}
            </div>
        </div>
        <div className="bg-emerald-800 p-1 text-xl">
            asdfdsfghdshdhdh
        </div>
    </div>
}