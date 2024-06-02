import React, { Suspense } from "react";
import styles from "./singlepost.module.css";
import Image from "next/image";
import PostUser from "@/components/postuser/PostUser";
import { getPost } from "@/lib/data";
// const getdata = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error('Something went wrong');
//   }
//   return res.json();
// }
export const generateMetadata = async ({params})=>{
  const {slug} = params;
  const post = await getPost(slug);
  return {
    title : post.title,
    description : post.desc
  }
}

const SinglePostPage = async ({params}) => {
  const {slug} = params;
  //with api
  // const post = await  getdata(slug);

  //without api
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={post.img}
          alt=""
          fill
        />
      </div>}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          
          {post && <Suspense fallback={<div>Loading....</div>}>
          <PostUser userId = {post.userId} />
          </Suspense>}
          <div className={styles.detailtext}>
            <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>{post.createdAt ? new Date(post.createdAt).toString().slice(4,16) : ""}</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.desc}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
