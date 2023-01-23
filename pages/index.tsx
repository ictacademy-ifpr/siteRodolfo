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

const Home: NextPage = () => {
  
  SwiperCore.use([Autoplay])

  return (
    <>
      <Header class='transparent'/>
      <Banner>
        <Swiper autoplay={{ delay: 6000 }} pagination={true} modules={[Pagination]} className="mySwiper" >
          <SwiperSlide key={1} className="banner_event_3">
            <a href="https://forms.gle/VhkCNudEfXNTq1vB7" target="_blank" rel="noreferrer">
              <img src='cloud_services_banner.png' alt='Inscrições para Cloud Services'/>
            </a>
          </SwiperSlide>
          <SwiperSlide key={1} className="banner_event_3_responsivo">
            <a href="https://forms.gle/VhkCNudEfXNTq1vB7" target="_blank" rel="noreferrer">
              <img src='cloud_services_banner_responsivo.png' alt='Inscrições para Cloud Services'/>
            </a>
          </SwiperSlide>
          <SwiperSlide key={1} className="banner_event_4">
            <a href="https://forms.gle/Km3EeD7fSVq1kFkNA" target="_blank" rel="noreferrer">
              <img src='5G_banner.png' alt='Inscrições para curso 5G'/>
            </a>
          </SwiperSlide>
          <SwiperSlide key={1} className="banner_event_4_responsivo">
            <a href="https://forms.gle/Km3EeD7fSVq1kFkNA" target="_blank" rel="noreferrer">
              <img src='5G_banner_responsivo.png' alt='Inscrições para curso 5G'/>
            </a>
          </SwiperSlide>
          <SwiperSlide key={1} className="banner_event_0">
            <a href="https://forms.gle/S4ve6X1bgs1rAzLK9" target="_blank" rel="noreferrer">
              <img src='backgorund.png' alt='Inscrições para Cloud Services'/>
            </a>
          </SwiperSlide>
          <SwiperSlide key={1} className="banner_event_1">
            <a href="https://www.huawei.com/br/news/br/2021/seeds-for-the-future-2021" target="_blank" rel="noreferrer">
              <img src='seeds.jpg' alt='Imagem ICT Evento'/>
            </a>
          </SwiperSlide>
          <SwiperSlide key={2} className="banner_event_2">
            <a href="https://www.huawei.com/br/news/br/2021/seeds-for-the-future-2021" target="_blank" rel="noreferrer">
              <img src='ict_v2.png' alt='Imagem ICT Evento'/>
            </a>
          </SwiperSlide>
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
      </SectionCourses>

      <SectionTeam>
        <div className="container">
          <motion.h1
            initial={{ transform: 'translateY(100px)', opacity: 0}}
            whileInView={{ transform: 'translateY(0px)', opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            Colaboradores
          </motion.h1>
          <motion.div
            initial={{ transform: 'translateY(200px)', opacity: 0}}
            whileInView={{ transform: 'translateY(0px)', opacity: 2}}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
              <div className="grid">
                {
                  collabs.map((item, index)=>
                    <Collabs key={index} photo={item.photo} name={item.name} description={item.description}/>
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
