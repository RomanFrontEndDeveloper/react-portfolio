import "./Home.css";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaTiktok,
  FaLinkedin,
  FaArrowCircleRight,
} from "react-icons/fa";
import { mainImg } from "../../assets/images";
import { FaArrowDownLong } from "react-icons/fa6";
import { motion as Motion } from "motion/react";

import { iconVariants, slideInVariants } from "../../utils/animation";

const icons = [
  {
    id: 1,
    href: "https://www.facebook.com/romario.trend?mibextid=wwXIfr&rdid=pEcr34F4BAM3ZHxw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1KYdhrgyPa%2F%3Fmibextid%3DwwXIfr#",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    href: "https://www.instagram.com/romario_sport234?igsh=MWhmMmV0YndheTZ4Yg%3D%3D&utm_source=qr",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    href: "https://github.com/RomanFrontEndDeveloper",
    icon: <FaGithub />,
  },
  {
    id: 4,
    href: "https://www.tiktok.com/@roman_trend_234?_r=1&_t=ZM-91snYMPpl0N",
    icon: <FaTiktok />,
  },
  {
    id: 5,
    href: "https://www.linkedin.com/feed/?legoTrackingToken=c34ZpnFFkTBxr71PqmgCc2UMfmlOrSdjtOoZsC5gr6litOoZp6Zdr6litOoVejAVejRApnhPpnlNpl9JtmUCjAZ9l4BjjR0Zuk9OpmhOjThBpShFtOpQrClQrCBvsClHpmlPnS9LqBYOtChxs6xzrDlxr3RAinhBpShFtOoMfmVLqnhFsSZgt6lDp6BT9z0Kc3RBsCZzkT9D9zROol1Ipl9OpOoZp6Zdr6lisCsCc3RKrSBQqndLk71RrT9D9zAVejAVfmhBt7dBtn5BkCRRjD1RrT9D9DhItm5CpmgZp4BMtmZOpOpejQBkildfk3RVgD9Bp79L9DhItm5CpmgZp4BQrClJpSlP9DhKpnhKqjRAinhLr7cCt6NRompBp3RAinhRrTBxr2oOtChxs6xzrDlxr3RBrm5epmtxs2pEt7tLsCsZp4BMs64CcPATejAOfmh9rCZFsT9BtyoOdPcQe3oPcPkNfmh9tioUcmoTd3xCcC4Ooj8Je6gMoyQVpCcQbjcSc34JdzcNoz4Ue30Zp4BQu6lQrCZz",
    icon: <FaLinkedin />,
  },
];

const Home = () => {
  return (
    // home section
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          {icons.map((item, index) => (
            <Motion.a
              href={item.href}
              target="_blank"
              key={item.id}
              custom={index}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              {item.icon}
            </Motion.a>
          ))}
        </div>
        <div className="home-info">
          <Motion.h1
            custom={0}
            variants={slideInVariants("left", 0.5, 100, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Hello I'm Roman
          </Motion.h1>

          <Motion.h3
            custom={1}
            variants={slideInVariants("left", 0.7, 140, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Frontend & Full Stack Developer
          </Motion.h3>

          <Motion.p
            custom={2}
            variants={slideInVariants("left", 0.9, -100, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            I create modern web applications using React, Next.js, TypeScript,
            Node.js, Express, and MongoDB. I enjoy solving real-world problems
            with clean, maintainable code and intuitive user interfaces.
          </Motion.p>

          <Motion.div
            className="cv-buttons"
            custom={5}
            variants={slideInVariants("left", 0.8, 180, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <a
              href="/Roman_Okhremov_CV_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-btn cv-btn-outline"
            >
              View CV
            </a>

            <a href="/Roman_Okhremov_CV_2026.pdf" download className="cv-btn">
              Download CV
            </a>

            <a href="#contact" className="cv-btn">
              Contact me
              <FaArrowCircleRight />
            </a>
          </Motion.div>
        </div>

        <Motion.div
          className="home-img"
          variants={slideInVariants("left", 0.6, -160, true)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <img src={mainImg} alt="mainImg" />
        </Motion.div>
      </div>

      <a href="#about" className="scroll-down">
        Scroll down
        <FaArrowDownLong />
      </a>
    </section>
    // end home section
  );
};

export default Home;
