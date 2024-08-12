export const CreateEvent = () => {
    return   <div className="h-screen flex items-center justify-center items w-full">
    <div className="rounded-2xl w-1/3 max-h-screen min-h-96 grid p-2 grid-rows-[60%_40%] bg-zinc-900">
        <div className="p-3">  
        <div className=" p-4 text-4xl font-bold font-serif">
        title
        </div>
        <div className="mb-6 px-6 py-1 h-36 overflow-y-auto font-mono"
        style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#555 #2d2d2d',
          }}>
            description 
        </div>
    </div>
        <div className="">
            <div className="border-t-2">
                <div className="mt-4 text-center grid grid-cols-2 grid-rows-2 h-full gap-8 text-md font-semibold font-serif">
                <div className="h-full">
                    Category 
                    <div className="font-mono font-thin">
                    category 
                    </div>
                    </div>
                <div className=" h-full">
                    Location
                    <div className="font-mono font-thin">
                    Location
                    </div>
                </div>
                <div className="h-full">
                    Date
                    <div className="font-mono font-thin">
                    date
                    </div>
                    </div>
                <div className="h-full">
                    Organizer
                    <div className="font-mono font-thin">
                    name
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