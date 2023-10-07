import React from 'react'
import Cover from './../assets/Demo.jpg'
import {Card, CardFooter, Image} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";

function ProjectTab({cover, title, desc}) {
  return (
    <Card isFooterBlurred className="w-full h-[300px] col-span-1">
      
      <Image
        removeWrapper
        alt={title}
        className="z-0 w-full h-full object-cover"
        src={cover}
      />
      
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className='pr-2'>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        </div>
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-large text-white">{title}</p>
            <p className="text-tiny text-white/60">{desc}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default ProjectTab