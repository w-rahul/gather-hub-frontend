export const ButtonComp =({label, onclick, width}: {label?:string, onclick?:()=> void, width?:string }) =>{
    return <div>
        <button onClick={onclick} className={`bg-white text-black text-center ${ width || "w-full"} py-3 font-semibold rounded-xl hover:bg-zinc-300`}>{label}</button>
    </div>
}