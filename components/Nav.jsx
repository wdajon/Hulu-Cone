import requests from "../utility/requests"
import { useRouter } from "next/router";


const Nav = () => {
    const router = useRouter();

    return (
        <nav className=" relative mb-5">
            <div className="flex px-5 sm:px-10 text-2xl whitespace-nowrap space-x-10 sm:space-x-20
             overflow-x-scroll scrollbar-hide pb-2">
              {Object.entries(requests).map(([key, {title,url}]) =>(
                   <h2 onClick={()=> router.push(`?genre=${key}`)}
                    key={key} className="hover:scale-125 hover:text-green-500 active:text-red-500
                   cursor-pointer transition duration-100 transform last:pr-24 ">{title}</h2>
              )) }  
                
            </div>
            <div className=" absolute top-0 right-0
             bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
        </nav>
    )
}

export default Nav
