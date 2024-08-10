
import { Link } from "react-router-dom"
import { format } from 'date-fns';
 
interface EventsProps {
  title : string
  description : string
  date : string
  category : string
  location : string
  organizerName? : string
  id?: string
}

export const EventCard = ({id, title, description, date, category, location, organizerName} : EventsProps) => {
  const formatDate = (isoDate: string) => {
    const dateObj = new Date(isoDate);
    const day = dateObj.getDate();
    const month = format(dateObj, 'MMMM');
    const suffix = ['th', 'st', 'nd', 'rd'][
        (day % 10 <= 3 && Math.floor(day / 10) !== 1) ? day % 10 : 0
    ];

    return `${month} ${day}${suffix}`;
};

// Debugging log to check if dates are correct
console.log(`Event ID: ${id}, Date: ${date}, Formatted Date: ${formatDate(date)}`);

    return(
      <Link to={`/${id}`} className="block max-w-sm w-full h-96 ">
       <div className="rounded-2xl max-w-sm w-full h-64 bg-zinc-900 text-white grid grid-rows-[70%_40%] ">
        <div className="p-4 hover:bg-zinc-950">
          <div className="text-center font-bold text-xl line-clamp-1">
            {title}
            </div>
          <div className="text-center mt-4 line-clamp-4 m-2 ">
            {description}  
          </div>
        </div>
        <div className="  items-center bg-zinc-800">
         <div className="grid grid-cols-2 text-center text-lg p-4 "> 
          <div>  {formatDate(date)}</div>
          <div className="text-center line-clamp-1 "> {location} </div>
          </div>
          <div className="grid grid-cols-2 rounded-b-lg text-center bg-zinc-700 p-3 text-lg">
          <div className="text-center line-clamp-1">
            {category}
          </div>
          <div className="text-center">
             By {organizerName} 
          </div>
          </div>
          
        </div>
      </div>
      </Link>
  )
  };
