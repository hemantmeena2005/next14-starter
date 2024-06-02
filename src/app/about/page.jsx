import Image from "next/image"
import styles from "./about.module.css"

export const metadata = {
  title: ' About page',
  description: 'Next.js starter app description',
}


const AboutPage = () => {
  console.log('lets check');
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Agency,</h2>
        <h1>Lorem ipsum dolor,  adipi sicing elit. Similique, deleniti.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi incidunt beatae optio sapiente, nisi ipsum quam vero vitae necessitatibus placeat laudantium omnis molestias voluptatum dolore facere ullam fugit quidem autem!</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of Experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/about.png" alt="author" fill />
      </div>
    </div>
  )
}

export default AboutPage