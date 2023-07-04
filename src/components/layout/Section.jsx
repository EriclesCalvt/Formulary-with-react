import { Formulary } from "../Formulary";
import {ChevronRightSquareIcon} from "lucide-react"
import React from '../../assets/React.png'

export function Section(){
    return (
        <div className="flex justify-around items-center mt-14">
          <div className="flex flex-col">
            <h1 className="font-bold font-mono text-3xl text-white">React Contact From</h1>
            <div className="text-violet-500 flex flex-col gap-2 mt-4">
              <div className="flex gap-2">
                <ChevronRightSquareIcon /> 
                <p className="font-semibold text-lg">Styled and ready for use</p>
              </div>
              <div className="flex gap-2">
                <ChevronRightSquareIcon /> 
                <p className="font-semibold text-lg">Email and slack norification</p>
              </div>              
              <div className="flex gap-2">
                <ChevronRightSquareIcon /> 
                <p className="font-semibold text-lg">No back-end</p>
              </div>
            </div>
          </div>
            <div className="flex flex-col items-center">
              <img className='h-40'  src={React} alt="React logo" />
              <Formulary />
            </div>

        </div> 
    )
}