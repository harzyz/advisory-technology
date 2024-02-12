import styles from './reachOutToUs.module.css'

const ReachOutToUs = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.reachout}>
        <h1>REACH OUT TO US</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Ligula ac orci ut ac cursus pulvinar. Eget at mauris tempor tempor mollis nisl. Viverra at sed nibh ullamcorper lobortis cras velit nunc lectus. Aenean ornare i</p>
      </div>
      <form className={styles.contactForm}>
        <select className={styles.formselect} name="" id="">
          <option value="">Nothing Selected</option>
        </select>
        <div className={styles.formInput}>
          <input className={styles.formselect} placeholder='First Name' type="text" />
          <input className={styles.formselect} placeholder='Last Name' type="text" />
        </div>
        <div className={styles.formInput}>
          <input className={styles.formselect} placeholder='Email' type="email" />
          <input className={styles.formselect} placeholder='Phone number' type="text" />
        </div>
      </form>
    </section>
  )
}

export default ReachOutToUs
