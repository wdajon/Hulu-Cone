import Image from "next/image";
import HeaderItems from "./HeaderItems";
import {HomeIcon,BadgeCheckIcon,CollectionIcon,LightningBoltIcon,SearchIcon,
UserIcon } from '@heroicons/react/outline'

// Delete the Borders in header - border border-white 
function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between
         items-center h-auto">
            {/* Header Icons and Description*/}
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItems title='Home' Icon={HomeIcon}/>
                <HeaderItems title='Trending' Icon={LightningBoltIcon}/>
                <HeaderItems title='Verified' Icon={BadgeCheckIcon}/>
                <HeaderItems title='Search' Icon={SearchIcon}/>
                <HeaderItems title='Account' Icon={UserIcon}/>
            </div>

            {/* Hulu Image */}
            <Image 
            className="object-contain "
            src='https://links.papareact.com/ua6'
            width={200}
            height={100}
            />



        </header>
    )
}

export default Header
