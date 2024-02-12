import styles from './whatWeDo.module.css'
import whatWeDoData from './whatWeDoData'

const WhatWeDo = () => {
  return (
    <section className={styles.wrapper}>
      <h1>WHAT WE DO</h1>
      <p>FTA IS DEDICATED TO SEEING YOU CHOOSE THE RIGHT TECHNOLOGY STRATEGY ENSURING YOU MAINTAIN A COMPETITIVE EDGE OVER YOUR PEERS</p>
      <div className={styles.services}>
        {whatWeDoData.map((item) => (
          <div key={item.id} className={styles.serviceitem}>
            <div className={styles.serviceImage}>
              <img src={item.image} alt={item.tile} />
            </div>
            <div className={styles.servicetitle}>
              <div className={styles.circle}></div>
              <h4>{item.tile}</h4>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhatWeDo
