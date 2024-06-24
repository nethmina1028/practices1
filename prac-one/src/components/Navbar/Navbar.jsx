import React from 'react'
import Logo from "../../assets/website/coffee_logo.png"

function Navbar() {

    const navItems = [
        { label: "Home", href: "#" },
        { label: "Services", href: "#" },
        { label: "About", href: "#" },
        
      ];
      
  return (
   <nav className='w-full py-2 bg-gradient-to-r from-secondary to-secondary/90 ' >
    <div className='container top-0 max-container padding-container ' >
    <div className='flex flex-row justify-between '>
        <a href="#" className='flex items-center gap-2 text-2xl font-bold tracking-wider text-white font-cursive ' >
           <img src={Logo} alt="logo" width={64} height={29} />
           Coffee Cafe
        </a>
       
       <div className='items-center hidden gap-8 lg:flex text-neutral-400 '>
       <ul className='items-center hidden gap-4 p-2 space-x-8 text-xl font-sm lg:flex ml-14 '>
        {navItems.map((item,index) =>(
                       <li key={index}>
                        <a href={item.href} className='hover:text-white '>{item.label}</a>
                       </li> 
                    ))}
       </ul>
       <button className='px-8 py-2 border rounded-sm text-md bg-primary hover:text-white hover:bg-brandDark ' >Order
         </button>

       </div>
        
    
    </div>
    
    </div>
   </nav>
  )
}

export default Navbar