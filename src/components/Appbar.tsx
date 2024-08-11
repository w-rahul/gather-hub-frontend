import { ButtonComp } from './Button';
import { GrabIcon } from './Icon';

export const Appbar = () =>{
    return <div className=" flex justify-between px-10 py-4 bg-zinc-900">
        <div className='flex'>
        <header className="">
            <a href="#" className="">
                <GrabIcon className="h-8 w-8" />
            </a>
        </header>
        <div className="text-2xl font-bold ml-6 ">
        GatherHub
        </div>
        </div>
        <div className='mr-8 '>
            <ButtonComp />
        </div>
    </div>
}

