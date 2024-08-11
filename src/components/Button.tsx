export const ButtonComp =({label, onclick}: {label?:string, onclick?:()=> void}) =>{
    return <div>
        <button onClick={onclick} className="bg-white text-black text-center w-full py-3 font-semibold rounded-xl hover:bg-zinc-300">{label}</button>
    </div>
}