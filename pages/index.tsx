import type { NextPage } from 'next'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import Header from '../src/components/header'
import {Banner, SectionAboutIct} from '../styles/bodyStyle'
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
      <SectionAboutIct>
        <div className="container">
          <div id='about_ict_left'>
            <h1>ICT Academy</h1>
            <p>
              A Huawei ICT Academy é uma parceria entre a Huawei e instituições do mundo todo. Através dessa parceria, instituições parceiras disponibilizam treinamentos de tecnologia Huawei ICT, encorajando estudantes a conseguirem o certificado da Huawei e desenvolver talentos com habilidades práticas para a indústria ICT e a comunidade.
            </p>
          </div>
          <img src='ict.png' alt='ICT Academy logo' id='logo_ict'/>
        </div>
      </SectionAboutIct>
      
      </Banner>
    </>
  )
}

export default Home
