import styles from "./meetOurTeam.module.css";
import MeetOurTeamData from "./meetOurTeamData";

const MeetOurTeam = () => {
  return (
    <section className={styles.wrapper}>
      <h1>MEET OUR TEAM</h1>
      <div>
        <p>Its all about people </p>
        <p>
        From planning and strategy,to technology and
        marketing the, individual that make up XYZ company share a passion for
        financial success which influences everything we do. We prefer
        insourcing to outsourcing. so you have a team that understands your
        needs and is passionate about your success. The Result is consisitently
        great work and phenomal results that you are proud of.
        </p>
      </div>
      <div className={styles.memberList}>
        {MeetOurTeamData.map((item) => (
          <div className={styles.memberitem} key={item.id}>
            <div className={styles.memberImage}>
              <img src={item.image} alt="" />
            </div>
            <div >
              <p>{item.fname}</p>
              <p>{item.phoneno1}</p>
              <p>{item.phoneno2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
