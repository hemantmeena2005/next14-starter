import React from 'react'
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container} >
      <div className={styles.logo}>Vagaland</div>
      <div className={styles.text}>
        All copyrights reserved @2024 to our agency.</div>
    </div>
  )
}

export default Footer