import Image from 'next/image'
import {ThumbUpIcon} from '@heroicons/react/outline'
import { forwardRef } from 'react'


const ThumbNail = forwardRef(({result}, ref) => {
    const BASE_PATH= 'https://image.tmdb.org/t/p/original'
    return (
        <div ref={ref} className="group cursor-pointer p-2 transition duration-200 ease-in transform
         sm:hover:scale-105 hover:z-50">
            {/* Thumbnail Image of Movies */}
            <Image 
            layout='responsive'
            src={`${BASE_PATH}${result.backdrop_path || result.poster_path}`||
                `${BASE_PATH}${result.poster_path}`
            }
            height={1080}
            width={1920}
            />
            {/* Text Description of Movies */}
            <div className='p-2'>
            
                <h2 className='text-green-500 mt-1 text-2xl transition-all duration-100 ease-in-out
                 group-hover:font-bold '>
                    {result.name || result.title || result.original_name}
                    </h2>

                <p className='truncate max-w-md'>{result.overview}</p>

                    <p className=" flex items-center opacity-0 group-hover:opacity-100
                     transition-opacity duration-150">
                        {result.media_type && `${result.media_type} *`}{' '}
                        {result.release_date || result.first_air_date} *{' '}
                        <ThumbUpIcon className=' h-5 mx-2'/> {result.vote_count}
                    </p>
            </div>
        </div>
    )
}
)

export default ThumbNail
