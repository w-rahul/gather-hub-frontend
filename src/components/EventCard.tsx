
import { Link } from "react-router-dom"
 
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
    return(
      <Link to={`/${id}`} className="block max-w-sm w-full h-96">
       <div className="rounded-2xl max-w-sm w-full h-64 bg-zinc-900 text-white grid grid-rows-[70%_40%]">
        <div className="p-4">
          <div className="text-center font-bold text-4xl line-clamp-1">
            {title}
            </div>
          <div className=" mt-2 line-clamp-4 m-2 ">
            {description}  
          </div>
        </div>
        <div className="  items-center   bg-zinc-800">
         <div className="grid grid-cols-2 text-center text-lg p-4"> 
          <div className="text-center">{category}</div>
          <div className="text-center">{organizerName}</div>
          </div>
          <div className="grid grid-cols-2 rounded-b-lg text-center bg-zinc-700 p-3 text-lg">
          <div>
              {date}
          </div>
          <div>
              {location}
          </div>
          </div>
          
        </div>
      </div>
      </Link>
  )
  };
