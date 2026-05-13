"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';

const Nav2 = () => {

    const p = usePathname()

    return (
        <div className='font-semibold flex items-center gap-5'>
            <h2 className='flex items-center gap-1'><FaRegUser />Profile</h2>
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
        </div>
    );
};

export default Nav2;