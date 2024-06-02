import React from 'react'
import styles from './postuser.module.css'
import { getUser } from '@/lib/data'
import Image from 'next/image'
// Fetch data using api
// const getuser = async (userId)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:'no-store'});
//     if(!res.ok){
//         throw Error("somthing is wrong");
//     }
//     return res.json();
// }

const PostUser = async ({userId}) => {
    // Fetch data using api
    // const user = await getuser(userId);


    //witout api
    const user = await getUser(userId);

  return (
    <div className={styles.container}>
        {<Image
            height={50}
            width={50}
            className={styles.avatar}
            src={user.img ? user.img : '/noavatar.png'}
            alt=""
          />}
          <div className={styles.texts}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.username}</span>
          </div>
    </div>
  )
}

export default PostUser