

// Delete the Borders in Div - border-2 border-red-500 
export default function HeaderItems({title,Icon}) {
    return (
        <div className="group flex flex-col items-center 
        cursor-pointer justify-center w-12 sm:w-20 hover:text-white ">
            
            {/* Icons for Header Navigation */}
            <Icon className="h-8 mb-1 mt-1 hover:animate-bounce"/>
            
            <p className="tracking-widest opacity-0 group-hover:opacity-100 
             ease-in-out transition-opacity duration-75">{title}</p>




        </div>
    )
}


