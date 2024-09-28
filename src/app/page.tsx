import React from 'react'
import Image from 'next/image'
export const page = () => {
  return (
    <div><figure className="md:flex bg-green-300 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-50 md:h-60  mx-left" rounded-b-2xl h-16 w-24  bg-teal-400 m-2 src="/my-pic.jpg" alt="" width="384" height="512"/>
     
    <div className="pt-9 md:p-8 text-left md:center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Hlo,I am Mubashir”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          M.Mubashir”
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Engineer, R,Y,k
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page