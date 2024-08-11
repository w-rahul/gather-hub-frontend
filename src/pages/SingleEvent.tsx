import { Appbartwo } from "./Events"

export const SingleEvent = () =>{
    return <div className="w-full h-screen overflow-hidden"> 
        <div>
        <Appbartwo />
        </div>
        <div className="h-screen flex items-center justify-center items w-full  bg-black text-white">
        <div className="rounded-2xl w-1/3 max-h-screen min-h-96 grid grid-rows-[60%_40%] bg-zinc-900">
            <div className="p-3 ">  
            <div className=" p-4 text-4xl font-bold">
                Title
            </div>
            <div className="mb-6 px-6 py-1 h-36 overflow-y-auto"
            style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#555 #2d2d2d',
              }}>
                content content content content content content content content content content content content content content content  content content content content content content content content content content content content  content content content content content content content content content content content content  content content content content content 
            </div>
        </div>
            <div className="">
                <div>
                    <div className="mt-4 text-center grid grid-cols-2 grid-rows-2 h-full gap-8 text-md font-semibold ">
                    <div className="h-full">
                        Category 
                        <div>
                        Social 
                        </div>
                        </div>
                    <div className=" h-full">
                        Location
                        <div>
                        India
                        </div>
                    </div>
                    <div className="h-full">
                        Date
                        <div>
                        25th feb
                        </div>
                        </div>
                    <div className="h-full">
                        Organizer
                        <div>
                        Admin
                        </div>
                        </div>
                    </div>
 
                </div>
            </div>
        </div>
    </div>
</div>
}