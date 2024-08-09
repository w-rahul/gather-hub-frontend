 export const Heading = ({label} : {label :string}) =>{
    return <div className="text-4xl pb-3 font-bold">
        {label}
    </div>
 }

 export const SubHeading = ({label} : {label :string}) =>{
    return <div className="text-md ">
        {label}
    </div>
 }