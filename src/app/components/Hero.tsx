import React from 'react'


const Hero =() => {
    return (
        <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/image.png)] bg-cover"
        style={{backgroundSize:"20%",backgroundPosition: "left 100px top 100px"}}
        >
   
       <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[60px] sm:text-[70px] font-bold leading-tight flex justify-center item-center'>
            <div className='mt-40'>
                <p >I'm</p>
                <p >Nadia</p>
                <p>Muhammad Musharraf Hussain</p>
             
            </div>
        </div>
       </div>
      </div>
    

    )
}

export default Hero