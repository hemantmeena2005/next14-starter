"use client"
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const NavigationTest = () => {
// client side navigation
  const router = useRouter();
  const pathname= usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get('price');
  console.log(pathname);
  console.log(q);



  const handleClick = () => {
    console.log('clicked');
    router.forward();
  };

  return (
    <div>
      <Link href='/' prefetch={false}>Click Here</Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTest;
