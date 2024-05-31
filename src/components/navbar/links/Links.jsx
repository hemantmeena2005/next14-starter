import React from 'react';
import Link from 'next/link';
import styles from './links.module.css';
import NavLink from './navlinks/navlink';

const Links = () => {
    const links = [
        { title: 'HomePage', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Blog', path: '/blog' },
    ];
    const session = true;
    const isAdmin = true;

    return (
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
    );
};

export default Links;