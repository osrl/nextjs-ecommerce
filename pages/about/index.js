import React from "react";
import Image from "next/image";
import styles from "./contact.module.scss";

const contact = () => {
  return (
    <>
      <div className={styles["about"]}>
        <div className={styles["container"]}>
          <div className={styles["about-container"]}>
            <div className={styles["about-left"]}>
              <Image
                src="/images/aboutus.png"
                alt="Contact us picture"
                width={400}
                height={300}
              />
            </div>
            <div className={styles["about-right"]}>
              <h2>Know About Our Ecommerce Business, History</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <button>About us</button>
            </div>
          </div>

          <div className={styles["features"]}>
            <h3>Our Features</h3>
            <div className={styles["features-cards"]}>
              <div className={styles["features-card"]}>
                <Image src="/images/free-delivery.png" width={65} height={65} />

                <h5>Free Delivery</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
              <div className={styles["features-card"]}>
                <Image src="/images/cashback.png" width={65} height={65} />
                <h5>100% Cash Back</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
              <div className={styles["features-card"]}>
                <Image
                  src="/images/premium-quality.png"
                  width={65}
                  height={65}
                />
                <h5>Quality Product</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
              <div className={styles["features-card"]}>
                <Image
                  src="/images/24-hours-support.png"
                  width={65}
                  height={65}
                />
                <h5>24/7 Support</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
