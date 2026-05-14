"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';

const Nav2 = () => {

    const p = usePathname()
    const { data: session } = authClient.useSession()
    const user = session?.user

    return (
        <div className='font-semibold flex items-center gap-5'>
            <Link href={'/profile'} className='flex items-center gap-1'><FaRegUser />Profile</Link>

            {
                user?
                <div className='flex items-center gap-2'>
                    <Avatar size='sm'>
                        <Avatar.Image alt="John Doe" referrerPolicy='no-referrer' src={user?.image} />
                        <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                    <Button onClick={ async() => await authClient.signOut()} variant='danger-soft' size='sm' className={'border border-red-500 text-white'}>Log Out</Button>
                </div> : 

            <div className='flex items-center gap-5'>
                <Link href={'login'}>
                     {
                        p==='/login'?
                        <Button size='sm' className={'bg-linear-to-r from-orange-400 to-red-600'}>Login</Button>
                        : <button>Login</button>
                     }
                </Link>
                <Link href={'signup'}>
                     {
                        p==='/signup'?
                        <Button size='sm' className={'bg-linear-to-r from-orange-400 to-red-600'}>Sign Up</Button>
                        : <button>Sign Up</button>
                     }
                </Link>
            </div>
            }
            
        </div>
    );
};

export default Nav2;