import React from 'react'
import Img2 from '../../assets/coffee2.png';

const ServicesData= [
{
    id:1,
    img:Img2,
    name:"Espresso",
    description:
    "Espresso is a coffee-making method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans.",
    aosDelay:"100",
},

{
    id:2,
    img:Img2,
    name:"Americano",
    description:
    "Espresso is a coffee-making method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans.",
    aosDelay:"300",
},
{
    id:3,
    img:Img2,
    name:"Cappuccino",
    description:
    "Espresso is a coffee-making method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans.",
    aosDelay:"500",
},

];




function Services() {
  return (
    <div className='mt-10'>
      
      <div className='container'>

        <div>
            <h1 className='mb-20 text-4xl font-bold text-center font-cursive'>Best Coffee For You</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'> 
              {ServicesData.map((data,index) => {
                return(
                    <div 
                    data-aos='fade-up'
                    data-aos-delay={data.aosDelay}
                    key={index}
                    className='duration-200 bg-white shadow-xl rounded-2xl hover:bg-primary hover:text-white max-[300px] group relative'
                    >
                        <div className='h-[122px]'>
                            <img
                             src={data.img}
                              alt=""
                              className='max-w-[200px] block mx-auto
                              transform -translate-y-14 
                              group-hover:scale-110
                              group-hover:rotate-6 duration-300 '
                              />
                        </div>
                    
                    <div className='p-4 text-center'>
                      <h1 className='text-xl font-bold'>{data.name}</h1>
                      <p className='text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2'>{data.description}</p>
                    </div>


                    </div>
                );
              })}

        </div>

      </div>


    </div>
       
  )
}

export default Services