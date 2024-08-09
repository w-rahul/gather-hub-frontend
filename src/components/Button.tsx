export const Button =({label}: {label:string}) =>{
    return <div>
        <button className="bg-white text-black text-center  w-96 py-3 font-semibold rounded-xl hover:bg-zinc-300">{label}</button>
    </div>
}