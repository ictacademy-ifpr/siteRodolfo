import type { NextPage } from 'next'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import { motion } from "framer-motion"

import Header from '../src/components/header'
import { Banner, SectionAboutIct, SectionCourses, SectionTeam} from '../styles/bodyStyle'
import Card from '../src/components/cards'
import Collabs from '../src/components/collabs'
import Footer from '../src/components/footer'

import courses from '../src/data/courses.json'
import collabs from '../src/data/collabs.json'

// Página Inicial do Site

const Home: NextPage = () => {
  
  SwiperCore.use([Autoplay])

  return (
    <>
      {/* Cabeçalho com as logos e menus */}
      
      <Header class='white'/>

      <Banner>
        <Swiper autoplay={{ delay: 6000 }} pagination={true} modules={[Pagination]} className="mySwiper" slidesPerView={1} spaceBetween={0}>

          {/* Alterando este primeiro SwiperSlide, altera o primeiro banner mostrado no site */}
        
          <SwiperSlide key={1} className="banner_event_3_responsivo">
            <img src='Banner Rodolfo (1).png' alt='Banner Rodolfo 1'/>
          </SwiperSlide>
          <SwiperSlide key={2} className="banner_event_3_responsivo">
            <img src='Banner Rodolfo (2).png' alt='Banner Rodolfo 2'/>
          </SwiperSlide>
          <SwiperSlide key={3} className="banner_event_3_responsivo">
            <img src='Banner Rodolfo (3).png' alt='Banner Rodolfo 3'/>
          </SwiperSlide>

        </Swiper>

      </Banner>

      {/* <SectionCourses>
        <div className="container">
          <motion.h1
            initial={{ transform: 'translateY(100px)', opacity: 0}}
            whileInView={{ transform: 'translateY(0px)', opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            Cursos
          </motion.h1>
          <motion.div
            initial={{ transform: 'translateY(200px)', opacity: 0}}
            whileInView={{ transform: 'translateY(0px)', opacity: 2}}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
              <div className="grid">
                {
                  courses.slice(0, 3).map(({url, warning, img, title, bg}, index)=>
                    <Card key={index} url={url} warning={warning} img={img} title={title} bg={bg}/>
                  )
                }
              </div>
              <div className="btn">
                <Link  href="/courses">
                   Ver mais
                </Link>
              </div>
          </motion.div>
        </div>
      </SectionCourses> */}
      
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
              <a href='https://www.ictacademy.com/'>
                <img src='ICTLogo.png' alt='ICT Academy logo' id='logo_ict' />
              </a>

            </motion.div>
        </div>
      </SectionAboutIct>


      <SectionTeam>
        <div className="container">
          <motion.h1
            initial={{ transform: 'translateY(100px)', opacity: 0}}
            whileInView={{ transform: 'translateY(0px)', opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            Meu trabalho na ICT Academy IFPR
          </motion.h1>
          <motion.div
            initial={{ transform: 'translateY(200px)', opacity: 0}}
            whileInView={{ transform: 'translateY(0px)', opacity: 2}}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
              <div className="grid">
                {
                  collabs.map((item, index)=>
                    <Collabs key={index} photo={item.photo} name={item.name} description={item.description} link={item.link}/>
                  )
                }
              </div>
          </motion.div>
        </div>
      </SectionTeam>




      <Footer/>
    </>
  )
}

export default Home
