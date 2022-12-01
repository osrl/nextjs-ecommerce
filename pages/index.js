import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles["home"]}>
      <div className={styles["container"]}>
        <Carousel>
          <div>
            <Image src={"/images/promotional.png"} width={1200} height={500} />
          </div>
          <div>
            <Image src={"/images/promotional.png"} width={1200} height={500} />
          </div>
          <div>
            <Image src={"/images/promotional.png"} width={1200} height={500} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
