import React from 'react';
import styles from "./postCard.module.css";
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
        {post.img && <Image 
          src={post.img} 
          alt='' 
          layout='fill' 
          className={styles.img} 
        />}
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
