import styles from './whyChooseUs.module.css'
import smillingMan from '../../assets/images/Smiling young man standing and holding tablet computer (1).png'
import WhyChooseUsData from './whyChooseUsData'

const WhyChooseUs = () => {

  const word = 'A trust is a way of managing assets [money,investments ,land or buildings] for people -types of trust how they are taxed where to get helpA trust is a way of managing assets [money, investments, land or buildings] for people -types of trust how they are taxed where to get help'

  return (
    <section id='clients' className={styles.wrapper}>
      <div className={styles.smillingMan}>
        <img src={smillingMan} alt="smillingman" />
      </div>
      <div className={styles.whychooseus}>
        <h1>WHY CHOOSE US ?</h1>
        <p>{word}</p>
        <div className={styles.reasonsGrid}>
          {WhyChooseUsData.map((item) => (
            <div key={item.id} className={styles.reasonitem}>
              <div className={styles.reason}>
                <div className={styles.circle}></div>
                <h4>{item.title}</h4>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
