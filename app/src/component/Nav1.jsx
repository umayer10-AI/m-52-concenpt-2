"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav1 = () => {

    const p = usePathname()

    const links = [
        {
            name: 'Home',
            path: "/",
        },
        {
            name: 'All Destination',
            path: "/destination",
        },
        {
            name: 'My Booking',
            path: "/booking",
        },
        {
            name: 'Add',
            path: "/add-destination",
        },
    ]

    return (
        <div>
            {
                links.map(v => {
                    <Link href={v.name}>
                        {
                            p===v.path?
                            <Button size='sm' className={'bg-linear-to-r from-orange-400 to-red-600'}>{v.name}</Button>
                            : <button>{v.name}</button>
                        }
                    </Link>
                })
            }
        </div>
    );
};

export default Nav1;