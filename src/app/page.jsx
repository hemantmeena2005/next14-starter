import Image from "next/image";
import styles from "./home.module.css"
const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1>Creative Thuoght Agency.</h1>
      <p>Lorem, ipsum dolor sit amet consectetur . Vero, asperiores perspiciatis sint laborum voluptate  voluptatibus vitae eligendi sed!</p>
      <div className={styles.btns}>
        <button className={styles.btn}>Learn More</button>
        <button className={styles.btn}>Contact Us</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" fill alt="" fill className={styles.brandImg} />
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" fill className={styles.heroImg} />
    </div>
  </div>;
};

export default Home;