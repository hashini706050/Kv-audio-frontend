import { useState } from "react";

export default function Tessting(){

   const [count,setCount] = useState(0)
   
   const [itemName, setItemName] = useState("coconut")

    return(
        <div className="w-full bg-red-900 flex flex-col justify-center items-center  h-screen">
            <h1 className="text-9xl">
                {count} {itemName}
            </h1>

            <button  className="w-[200px] h-[60px] bg-black text-white rounded-lg" onClick={
                ()=>{
                    const newcount = count+1
                    setCount(newcount)
                }}>
                    Count
                </button>
                <div className="w-full flex justify-evenly items-center p-4 gap-2">
                <button  className="w-[200px] h-[60px] bg-black text-white rounded-lg" onClick={
                    ()=>{
                        setItemName("Cocunuts")
                    }
                }>
                    Cocunut
                </button>
                <button  className="w-[200px] h-[60px] bg-black text-white rounded-lg" onClick={
                    ()=>{
                        setItemName("Bananas")
                    }
                }>
                    Banana
                </button>
                <button  className="w-[200px] h-[60px] bg-black text-white rounded-lg" onClick={
                    ()=>{
                        setItemName("Apples")
                    }
                }>
                    Apple
                </button>
                <button  className="w-[200px] h-[60px] bg-black text-white rounded-lg" onClick={
                    ()=>{
                        setItemName("Others")
                    }
                }>
                    Other
                </button>

                </div>
        </div>
    )
}