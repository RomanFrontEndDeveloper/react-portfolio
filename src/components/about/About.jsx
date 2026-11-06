import React from "react";
import "./About.css";
import { aboutImg } from "../../assets/images";
import { FaDownload } from "react-icons/fa";
import SectionTitle from "../sectionTitle/SectionTitle";
import { motion as Motion } from "motion/react";
import { slideInVariants } from "../../utils/animation";
import { profList } from "../../data/profList";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <SectionTitle title="About me" subtitle="About me" />

        <div className="about-wrapper">
          <Motion.div
            className="about-img"
            variants={slideInVariants("left", 0.9, 100, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <img src={aboutImg} alt="aboutImg" />
          </Motion.div>

          <div className="about-info">
            <div className="description">
              <Motion.h3
                custom={0}
                variants={slideInVariants("right", 0.5, 50, true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                I'm Roman
              </Motion.h3>

              <Motion.h4
                custom={0}
                variants={slideInVariants("left", 0.5, 100, true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                Frontend & Full Stack <span> Developer </span>
                <span id="dark-span"> based in </span>
                <span> Ukraine </span>
              </Motion.h4>

              <Motion.p
                custom={0}
                variants={slideInVariants("right", 0.5, 100, true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                I build modern, responsive, and scalable web applications using
                React, Next.js, TypeScript, Node.js, Express, and MongoDB. I
                enjoy creating clean user interfaces, writing maintainable code,
                and developing applications that deliver great user experiences.
              </Motion.p>
            </div>

            <ul className="proffesional-list">
              {profList.map((item, index) => (
                <Motion.li
                  className="list-item"
                  key={item.id}
                  custom={index}
                  variants={slideInVariants("right", 0.5, 50, true)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <span className="number">{item.number}</span>

                  <span className="text">{item.text}</span>
                </Motion.li>
              ))}
            </ul>

            {/*
                        <Motion.a
                            href=''
                            className='inner-info-link'
                            custom={3}
                            variants={slideInVariants('bottom', 0.7, 70, false)}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            Download
                            <FaDownload />
                        </Motion.a>
                        */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
