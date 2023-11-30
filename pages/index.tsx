import type { NextPage } from 'next'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import { motion } from "framer-motion"

import Header from '../src/components/header'
import { Banner, SectionAboutIct, SectionMaterials, SectionTeam, SectionTitles} from '../styles/bodyStyle'
import Card from '../src/components/cards'
import Collabs from '../src/components/collabs'
import Footer from '../src/components/footer'
import Titles from '../src/components/titles'
import Materials from '../src/components/materials'

import collabs from '../src/data/collabs.json'
import titles from '../src/data/titles.json'
import materials from '../src/data/materials.json'

// Página Inicial do Site

const Home: NextPage = () => {
  
  SwiperCore.use([Autoplay])

  return (
    <>
      {/* Cabeçalho com as logos e menus */}
      
      
      <div className='BodyContent'>
        <Header class='white'/>
        <div className='headerBase'></div>

        <Banner>
          <Swiper autoplay={{ delay: 6000 }} pagination={true} modules={[Pagination]} className="mySwiper" slidesPerView={1} spaceBetween={0} loop={true}>

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

        
        <SectionAboutIct>
          <div className="container">
            <motion.div
              initial={{ transform: 'translate(-300px)', opacity: 0}}
              whileInView={{ transform: 'translate(0px)', opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              id='about_ict_left'>
              <h1>
                <a href="https://www.ictacademy.com/">ICT Academy</a>
              </h1>
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
        
        <SectionMaterials>
          <div className="container">
              <motion.h1
                initial={{ transform: 'translateY(100px)', opacity: 0}}
                whileInView={{ transform: 'translateY(0px)', opacity: 1}}
                viewport={{ once: true }}
                transition={{ duration: 1 }}>
                Materiais Didáticos
              </motion.h1>
              <motion.div
                initial={{ transform: 'translateY(200px)', opacity: 0}}
                whileInView={{ transform: 'translateY(0px)', opacity: 2}}
                viewport={{ once: true }}
                transition={{ duration: 1 }}>
                  <div className="grid">
                    {
                      materials.map((item, index)=>
                        <Materials key={index} title={item.title} description={item.description} link={item.link}/>
                      )
                    }
                  </div>
              </motion.div>
          </div>
        </SectionMaterials>

        <SectionTitles>
          <div className="container">
              <motion.h1
                initial={{ transform: 'translateY(100px)', opacity: 0}}
                whileInView={{ transform: 'translateY(0px)', opacity: 1}}
                viewport={{ once: true }}
                transition={{ duration: 1 }}>
                Títulos
              </motion.h1>
              <motion.div
                initial={{ transform: 'translateY(200px)', opacity: 0}}
                whileInView={{ transform: 'translateY(0px)', opacity: 2}}
                viewport={{ once: true }}
                transition={{ duration: 1 }}>
                  <div className="grid">
                    {
                      titles.map((item, index)=>
                        <Titles key={index} title={item.title} description={item.description}/>
                      )
                    }
                  </div>
              </motion.div>
          </div>
        </SectionTitles>

      <Footer/>

      </div>  

      
    </>
  )
}

export default Home
