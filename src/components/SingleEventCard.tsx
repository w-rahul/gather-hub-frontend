import { SingleEventProps } from "../hooks/SingleEvent"

import { format } from 'date-fns';

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

    return   <div className="h-screen flex items-center justify-center items w-full">
        <div className="rounded-2xl w-1/3 max-h-screen min-h-96 grid grid-rows-[60%_40%] bg-zinc-900">
            <div className="p-3 ">  
            <div className=" p-4 text-4xl font-bold">
                {hello.title}
            </div>
            <div className="mb-6 px-6 py-1 h-36 overflow-y-auto"
            style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#555 #2d2d2d',
              }}>
                {hello.description} 
            </div>
        </div>
            <div className="">
                <div>
                    <div className="mt-4 text-center grid grid-cols-2 grid-rows-2 h-full gap-8 text-md font-semibold ">
                    <div className="h-full">
                        category 
                        <div>
                        {hello.category} 
                        </div>
                        </div>
                    <div className=" h-full">
                        Location
                        <div>
                        {hello.location}
                        </div>
                    </div>
                    <div className="h-full">
                        Date
                        <div>
                        {formatDate(hello.date)}
                        </div>
                        </div>
                    <div className="h-full">
                        Organizer
                        <div>
                        {hello.organizer.name}
                        </div>
                        </div>
                    </div>
 
                </div>
            </div>
        </div>
    </div>
}