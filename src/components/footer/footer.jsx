import styles from './footer.module.css'
import graph from '../../assets/images/footergraph.png'
import { RecentNewsData, ServiceData } from './footerData'
import arrow from '../../assets/images/Vector (11).png'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.aboutus}>
        <p >ABOUT US</p>
        <div className={styles.graph}>
          <img src={graph} alt="graph" />
        </div>
        <h3>FINANCIAL TECHNOLOGY ADVISORS</h3>
        <p className={styles.about}>Since founding Financial Technology Advisors in 2014 we have dedicated ourselves to the position of services .What diffeentiates us from other advisors or consultancies is a genuine motivation to see our clients succeEd .today’s technology allows our clients to take their knowlegde to the market in ways that pr</p>
      </div>
      <div className={styles.services}>
        <p>SERVICES</p>
        <div>
          {ServiceData.map((item) => (
            <div key={item.id} className={styles.servicelist}>
              <div>
                <img src={arrow} alt="arrow" />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.recentnew}>
        <p>RECENT NEWS</p>
        {RecentNewsData.map((item) => (
          <div key={item.id} className={styles.recentnewsitem}>
            <p>{item.text}</p>
            <div className={styles.readmore}>
              <p>READ MORE</p>
              <div>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
