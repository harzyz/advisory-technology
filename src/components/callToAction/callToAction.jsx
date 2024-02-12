import styles from './callToAction.module.css'

const CallToAction = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>DO  YOU FEEL YOU NEED PROFESSIONAL ADVICE</h1>
        <p>That is simple to understand and straightforward to implement</p>
      </div>
      <button className={styles.callbtn}>CALL TO ACTION</button>
    </div>
  )
}

export default CallToAction
