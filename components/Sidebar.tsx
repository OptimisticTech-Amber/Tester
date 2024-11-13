"use client"


import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './ui/button'

const Sidebar = () => {
  

  return (
    <aside className="hidden h-15 w-full top-0 left-0 bg-[#070f1a]  text-white shadow-md shadow-purple-200/50 lg:flex">
        
          <SignedIn>
           <ul className='flex justify-between items-center w-full px-4'>
              <li className=" cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl='/' showName />
              </li>
              <li>
                Hello 
              </li>
              </ul>
         
          </SignedIn>

          <SignedOut>
            <Button asChild className=" bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
      
    </aside>
  )
}

export default Sidebar