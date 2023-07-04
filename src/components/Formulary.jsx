import { useState, useEffect } from "react"

export function Formulary(){

    const [user, setUser] = useState()
  
    useEffect(() =>{
      fetch("https://api.github.com/users/EriclesCalvt")
      .then((response) => response.json())
      .then((json) => setUser(json))
    }, [])

    return (
        <form className="flex flex-col gap-4">
            <input className="rounded-sm h-8 p-1" type="text" placeholder=" Your name" />
            <input className="rounded-sm h-8 p-1" type="text" placeholder=" Email" />
            <input className="rounded-sm h-20" type="text" placeholder=" Your message" />
            <input className="bg-violet-700 text-white font-semibold text-sm w-40 p-2 rounded-md" type="submit" value="SEND A MESSAGE"/>
        </form>
    )
}