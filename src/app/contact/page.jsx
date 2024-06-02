// "use client"
import Image from "next/image"
import styles from "./contact.module.css"
// import dynamic from "next/dynamic"
// import HydrationTest from "@/components/hydrationTest"
// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"),{ssr:false})
export const metadata = {
  title: 'Contact page',
  description: 'Next.js starter app description',
}


const ContactPage = () => {
  // const a = Math.random();
  // console.log(a);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src='/contact.png' fill alt="conact"  />
      </div>
      <div className={styles.formContainer}>
          {/* <HydrationTestNoSSR/> */}
          {/* <div suppressHydrationWarning >{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Your full Name" />
          <input type="text" placeholder="Your Email.." />
          <input type="text" placeholder="Phone Number(optional)" />
          <textarea placeholder="Message" name="" id="" cols="20" rows="3"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage