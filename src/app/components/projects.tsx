
import React from 'react'
import Heading from './heading';
import Card from './Card';


const data = [
{
    id:0,
    title:"Todo List",
    desc:"A React & Typescript based app managing and organizing your tasks efficientiy.",
    img:"/pic todo.png",
    tags:["React","Node","css","Typescript"],
},
{
id:1,
    title:"Countdown Timer",
    desc:"A Next.js & Typescript powered website to track with an interactive countdown timer.",
    img:"/project 2.png",
    tags:["Next.js","Node","css","Typescript"],
},

{
id:2,
    title:"Weather Widget",
    desc:"A next.js & Typescript based tool for fetching and display real-time weather data.",
    img:"/project3.jpg",
    tags:["React","Node","css","Typescript"],
},

{
    id:3,
    title:"Currency Converter",
    desc:"A simple HTML & Typescript  powered tool for converting with real-time rates.",
    img:"/c.cpic.png",
    tags:["HTML","Node","css","Typescript"],
},
{
id:4,
title:"Static Resume",
desc:"A Typescript-based  interactive resume built with HTMLand CSS.",
img:"/resume pic.jpg",
tags:["React","Node","css","Typescript"],
},

{
    id:5,
    title:"Simple Calulator",
    desc:"A basic HTML and Typescript calculator for performing essential operations.",
    img :"/pic cal.webp",

    tags:["React","Node","css","Typescript"],
    },

]

const Projects = () => {
    return (
        <div id='projects' className="container pt-32 ">
            <Heading title="My Projects" />
            <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img} 
            tags={el.tags}
            
            />))}    
            </div>
        </div>
    )
}

export default Projects