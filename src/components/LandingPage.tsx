import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-[#F1F1F1] pt-1'>
     <div className='bigText mt-20 px-20'>
        {["We create" ,"eye opeing","presentaions"].map((item,index)=>{
            return <div className='masked'>
            <h1 className="uppercase text-9xl leading-[6.5vw] tracking-tighter font-['Founders_Grotesk'] font-semibold">{item}</h1>
            </div>
})}


     </div>
    </div>
  )
}

export default LandingPage
