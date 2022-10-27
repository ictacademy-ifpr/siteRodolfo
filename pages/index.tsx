import type { NextPage } from 'next'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { motion } from "framer-motion"

import Header from '../src/components/header'
import {Banner, SectionAboutIct, SectionCourses} from '../styles/bodyStyle'
import Card from '../src/components/cards'

import courses from '../src/data/courses.json'

const Home: NextPage = () => {

  return (
    <>
      <Header/>
      <Banner>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide key={1} className="banner_event_1">
          </SwiperSlide>
          <SwiperSlide key={2} className="banner_event_2"></SwiperSlide>
        </Swiper>
      </Banner>
      
      <SectionAboutIct>
        <div className="container">
          <motion.div
            initial={{ transform: 'translate(-300px)', opacity: 0}}
            whileInView={{ transform: 'translate(0px)', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            id='about_ict_left'>
            <h1>ICT Academy</h1>
            <p>
              A Huawei ICT Academy é uma parceria entre a Huawei e instituições do mundo todo. Através dessa parceria, instituições parceiras disponibilizam treinamentos de tecnologia Huawei ICT, 
              encoraja estudantes a conseguirem o certificado da Huawei e a desenvolverem talentos com habilidades práticas para a indústria ICT e a comunidade.
            </p>
          </motion.div>
          <motion.div
            initial={{ transform: 'translate(300px)', opacity: 0}}
            whileInView={{ transform: 'translate(0px)', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}>
              <img src='ict.png' alt='ICT Academy logo' id='logo_ict'/>
            </motion.div>
        </div>
      </SectionAboutIct>

      <SectionCourses>
        <div className="container">
          <h1>Cursos</h1>
          <div className="grid">
            {
              courses.slice(0, 3).map(({url, img, title}, index)=>
                <Card key={index} url={url} img={img} title={title}/>
              )
            }
          </div>
        </div>
      </SectionCourses>
    </>
  )
}

export default Home
