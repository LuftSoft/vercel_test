"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { set } from "date-fns";
const URL: any = {
  "/assets/storage/certificate/PinkCertificate.png":
    "/assets/storage/certificate/certificate.png",
  "/assets/storage/certificate/certificate.png":
    "/assets/storage/certificate/PinkCertificate.png",
};
export default function Page() {
  const [imgUrl, setImgUrl] = useState<any>();
  /* 
  useEffect(() => {
    let items = document.querySelectorAll(".item");
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");

    let active = 3;
    console.log(items);
    function loadShow() {
      let stt = 0;
      (items[active] as HTMLElement).style.transform = `none`;
      (items[active] as HTMLElement).style.zIndex = "1";
      (items[active] as HTMLElement).style.filter = "none";
      (items[active] as HTMLElement).style.opacity = "1";
      for (var i = active + 1; i < items.length; i++) {
        stt++;
        (items[i] as HTMLElement).style.transform = `translateX(${
          120 * stt
        }px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        (items[i] as HTMLElement).style.zIndex = (-stt).toString();
        (items[i] as HTMLElement).style.filter = "blur(5px)";
        (items[i] as HTMLElement).style.opacity = stt > 2 ? "0" : "0.6";
      }
      stt = 0;
      for (var i = active - 1; i >= 0; i--) {
        stt++;
        (items[i] as HTMLElement).style.transform = `translateX(${
          -120 * stt
        }px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        (items[i] as HTMLElement).style.zIndex = (-stt).toString();
        (items[i] as HTMLElement).style.filter = "blur(5px)";
        (items[i] as HTMLElement).style.opacity = stt > 2 ? "0" : "0.6";
      }
    }
    loadShow();
    if (next === null || prev === null) return;
    next.onclick = function () {
      active = active + 1 < items.length ? active + 1 : active;
      loadShow();
    };
    prev.onclick = function () {
      active = active - 1 >= 0 ? active - 1 : active;
      loadShow();
    };
  }, []);
  return (
    <div className={styles["slider"] + "slider"}>
      <div className={styles["item"] + " item"}>
        <h1>Slide 1</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
        magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
        neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad!
        Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae
        officiis!
      </div>
      <div className={styles["item"] + " item"}>
        <h1>Slide 2</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
        magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
        neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad!
        Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae
        officiis!
      </div>
      <div className={styles["item"] + " item"}>
        <h1>Slide 3</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
        magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
        neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad!
        Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae
        officiis!
      </div>
      <div className={styles["item"] + " item"}>
        <h1>Slide 4</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
        magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
        neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad!
        Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae
        officiis!
      </div>
      <div className={styles["item"] + " item"}>
        <h1>Slide 5</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
        magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
        neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad!
        Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae
        officiis!
      </div>
      <div className={styles["item"] + " item"}>
        <h1>Slide 6</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
        magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
        neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad!
        Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae
        officiis!
      </div>
      <div className={styles["item"] + " item"}>
        <h1>Slide 7</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni
        magnam unde ipsam repudiandae explicabo expedita labore, sequi minus
        neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad!
        Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae
        officiis!
      </div>
      <button id="next">{">"}</button>
      <button id="prev">{"<"}</button>
    </div>
  );
  */
  return (
    <div>
      <Image
        src={"/assets/storage/certificate/PinkCertificate.png"}
        alt="certificate"
        width={800}
        height={600}
        className="mx-auto"
        style={{
          cursor: "pointer",
          maxWidth: "100%",
          height: "auto",
          boxShadow: "box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          display: "block",
        }}
        onToggle={() => setImgUrl(URL[imgUrl])}
      />
    </div>
  );
}
