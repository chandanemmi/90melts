import * as React from "react";
import styles from "./PageOne.module.css";
import Image from "next/image";
import logo from "../../assets/logo.png";
// import Lottie from "lottie-react";
// import animationData from "../../assets/lottie/animation.json";

const PageOne = () => {
  return (
    <div className={styles.page_one}>
      <div className={styles.imageContainer}>
        <Image src={logo} alt="logo" width={80} height={80} className={styles.image}/>
          {/* <Lottie
              animationData={animationData}
              loop={true}
              style={{ height: "300px", width: "300px", padding: 0, margin: 0 }} 
            /> */}
      </div>
      <div className={styles.content}>
        <h1 style={{marginBottom:'20px',color:'yellowgreen'}}>90's Melts</h1>
        <p style={{fontFamily:'sans-serif',fontSize:'16px',lineHeight:'23px'}}>
          90's Melts logo is a captivating scene that encapsulates the very
          essence of our culinary passion. At its core stands a distinctive
          barbecue stand The vivid portrayal of fire and smoke symbolizes not
          just the cooking process but the soulful journey our dishes undertake
          before reaching your plate. Surrounding the barbecue stand are three
          elegant half-circle lines, each exuding a sense of artistry and
          movement Within each half-circle are three dots, a subtle nod to the
          meticulous craftsmanship and attention to detail we pour into every
          dish we serve. It's not just a logo; it's a culinary statement,
          inviting you to savor the rich tapestry of flavors we proudly bring to
          the streets. Welcome to 90's Melts where every detail in our logo is a
          prelude to a symphony of taste and tradition.Welcome aboard, where
          every dish tells a story, and every moment is a feast for the senses.
        </p>
      </div>
    </div>
  );
};

export default PageOne;
