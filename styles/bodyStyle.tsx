import styled from "styled-components";

export const Banner = styled.section`
    height: 615px ;
    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .banner_front{
        background-image: url('/bgbanner.jpg');
        background-size: auto;
        background-position: bottom;
        background-repeat: no-repeat;
    }
    .banner_event_1{
        background-image: url('/seeds.jpg');
        background-size: auto;
        background-position: bottom;
        background-repeat: no-repeat;
        background-color: #fff6ea ;
    }

    .banner_event_2{
        background-image: url('/ict.jpg');
        background-size: auto;
        background-position: bottom;
        background-repeat: no-repeat;
    }
`

export const SectionAboutIct= styled.section`
    background-color: #f7f8fa ;
    padding: 100px  15px;
    overflow: hidden;
    
    .container{
        display: flex ;
        align-items: center;
        justify-content: space-between;
        
        #about_ict_left{
            max-width: 455px;            
            p{
                font-size: 20px;
                line-height: 35px;
            }
        }
    
        #logo_ict{
            max-width: 430px;
        }
    }
`

export const SectionCourses = styled.section`
    background-color: #fff;
    padding: 100px 15px;

    .grid{
        display: grid;
        grid-template-columns: repeat(3, auto);
    }
`