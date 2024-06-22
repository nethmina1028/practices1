import React from 'react'
import Logo from "../../assets/website/coffee_logo.png"

function Navbar() {

    const navItems = [
        { label: "Home", href: "#" },
        { label: "Services", href: "#" },
        { label: "About", href: "#" },
        
      ];
      
  return (
   <nav className='w-full bg-gradient-to-r from-secondary to-secondary/90 py-2 ' >
    <div className='container max-container padding-container top-0  ' >
    <div className='flex justify-between flex-row '>
        <a href="#" className='flex items-center font-cursive font-bold text-2xl  gap-2 text-white tracking-wider ' >
           <img src={Logo} alt="logo" width={64} height={29} />
           Coffee Cafe
        </a>
       
       <div className='lg:flex items-center gap-8 hidden text-neutral-400 '>
       <ul className='items-center gap-4 text-xl font-sm space-x-8  hidden lg:flex ml-14 p-2  '>
        {navItems.map((item,index) =>(
                       <li key={index}>
                        <a href={item.href} className='hover:text-white '>{item.label}</a>
                       </li> 
                    ))}
       </ul>
       <button className='text-md px-8 py-2 border rounded-full bg-primary hover:text-white hover:bg-brandDark ' >Order
         </button>

       </div>
        
    
    </div>
    
    </div>
   </nav>
  )
}

export default Navbar