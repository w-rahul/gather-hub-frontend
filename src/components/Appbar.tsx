import React from 'react';

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
            <button className='bg-white text-black text-center w-20 py-2 font-semibold rounded-xl hover:bg-zinc-300'>Log in</button>
        </div>
    </div>
}


interface GrabIconProps extends React.SVGProps<SVGSVGElement> {}

const GrabIcon: React.FC<GrabIconProps> = (props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" />
            <path d="M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
            <path d="M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
            <path d="M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
        </svg>
    );
};


