"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './links.module.css';
import NavLink from './navlinks/navlink';
import Image from 'next/image';

const links = [
    { title: 'HomePage', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Blog', path: '/blog' },
];
const Links = () => {
    const [open,setOpen] = useState(false);
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
        <div className={styles.link}>
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
                ))}
            {session ? (
                <>
                    {isAdmin && (
                        <NavLink item={{ title: 'Admin', path: '/admin' }} />
                        )}
                    <button className={styles.btn} >Logout</button>
                </>
            ) : (
                <NavLink item={{ title: 'Login', path: '/login' }} />
                )}
        </div>
        <Image className={styles.menu} src='/menu.png' onClick={()=>setOpen(prev=> !prev)}  alt='' height={30} width={30}/>
        {
            open&& <div className={styles.mobileLinks}>
                {links.map((link)=>(
                    <NavLink item={link} key={link.title}></NavLink>
                ))}
            </div>
        }
        </div>
    );
};

export default Links;
