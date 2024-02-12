import styles from "./whoAreWe.module.css";
import graph from '../../assets/images/graph.png'

const WhoAreWe = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.details}>
        <h1>WHO WE ARE</h1>
        <div className={styles.grouptexts}>
          <p>I believe that through knowledge and discipline ,financial peace for
          all of us</p> 
          <p>Since founding Financial Technology Advisers in 2014 we have
          dedicated ourselves to he provision of services what differentiates us
          from other advisers or consultances is a a genuine motivation to see
          our clients succeed today's technology allows our clients to take
          their knowledge o the market in ways that previous generaions could
          only dream of</p> 

          <p>That's why FTA is dedicated to seeing you choose the
          right technology strategy ensuring you maintain a competitive edge
          over your peers</p>
        </div>
        <div className={styles.graph}>
          <img src={graph} alt="graph" />
        </div>
        <h3>FINANCIAL TECHNOLOGY ADVISORS</h3>
      </div>
      <div className={styles.moredetails}>
        <p>TODAY'S TECHNOLOGY ALLOWS OUR CLIENTS TO TAKE THEIR KNOWLEDGE TO THE MARKET IN WAYS THAT PREVIOUS GENERATIONS COULD ONLY DREAM OF</p>
      </div>
    </section>
  );
};

export default WhoAreWe;
