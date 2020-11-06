import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import "../styles/myworks.scss"
import workData from "../data/work.json"
import LinkImage from "../images/link.svg"

import SwiperCore, {
  Navigation,
  Autoplay,
  EffectFade,
  EffectCoverflow,
} from "swiper";
import useWindowsize from "../hooks/useWindowsize"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { variants, item } from "../variants/variants"
import "swiper/components/navigation/navigation.scss";
import { motion } from 'framer-motion'
import SEO from '../components/seo'

SwiperCore.use([
  Navigation,
  Autoplay,
  EffectFade,
  EffectCoverflow,
]);

const MyWork = () => {
  const { width } = useWindowsize()

  return (
    <Layout>
      <SEO 
        title="My Works - worked on some exciting projects"
      />
        <motion.div 
          variants={variants}
          initial="hidden"
          animate="show"
          className="workcontainer"
        >
            <div className="email">
              <span className="line"></span>
              <span><a className="email-link" href = "mailto: ranganath.developer@gmail.com">ranganath.developer@gmail.com</a></span>
            </div>
            <div className="menu-options">
              <span><Link to="/about-me">About Me</Link></span>
              <span><Link to="/github">Github</Link></span>
              <span><Link to="/contact-me">Contact Me</Link></span>
            </div>
            <motion.h1 variants={item}>What I have built</motion.h1>
            {
              workData.projects.map(data => {
                return (
                  <motion.div variants={item} key={data.project_id} className="work-info">
                    <div className="swiper">
                      <Swiper
                        autoplay={{
                          delay: 5000,
                          disableOnInteraction: false,
                          stopOnLastSlide: false
                        }}
                        navigation={data.pic.length <= 1 ? false : true }
                        spaceBetween={20}
                        slidesPerView={width > 870 ?  2 : 1 }
                        >
                        {
                          data.pic.map(img => {
                            return(
                              <SwiperSlide className="slide" key={img}>
                                <img src={img} alt="work samples" width="500px" />
                              </SwiperSlide>
                            )
                          })
                        }
                      </Swiper>
                    </div>
                    <div className="info">
                      <div className="name-container">
                        <h2>{data.name}</h2>
                        {
                          data.private === false ? null : 
                          <a href={data.github} target="_blank" rel="noreferrer"><img src="https://user-images.githubusercontent.com/57658387/97781353-e5fb1f00-1b47-11eb-8daf-f021c452bce6.png" alt="work samples" /></a>
                        }
                      </div>
                      <p>{data.short_desc}</p>
                      <div className="tech">
                        {data.techs.map(tech => {
                          return <p key={tech} className="name">{tech}</p>
                        })}
                      </div>
                      <div className="link">
                        <img src={LinkImage} alt="work samples" />
                        <a href={data.link} target="_blank" rel="noreferrer">{data.link}</a>
                      </div>
                    </div>
                  </motion.div>
                )
              })
            }
        </motion.div>
    </Layout>
  )
}

export default MyWork