export function Header(){
    return (
        <header>
            <div className="h-14 bg-zinc-700 flex items-center gap-4 rounded-none">
                <div className="h-5 w-5 rounded-full bg-red-600 ml-3"></div>
                <div className="h-5 w-5 rounded-full bg-yellow-600"></div>
                <div className="h-5 w-5 rounded-full bg-green-600"></div>
            </div>
            <div className="flex justify-between mt-6">
                <div className="flex gap-3 items-center">
                    <div className="h-4 w-4 bg-white ml-4 rounded-sm"/>
                    <div className="flex">
                    <h1 className="font-bold font-mono text-2xl text-white">Hero</h1><h1 className="font-bold font-mono text-2xl text-violet-700">Tofu</h1>
                </div>
            </div>
                <div className="flex items-center gap-3 mr-3 text-white">
                    <a href="#">Log in</a>
                    <button className="bg-violet-700 p-2 rounded-bl-xl">Get Started</button>
                </div>
            </div>  
        </header>
    )
}