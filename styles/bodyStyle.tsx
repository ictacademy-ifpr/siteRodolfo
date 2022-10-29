import styled from "styled-components";

export const Banner = styled.section`
    height: 530px ;
    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
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
        object-fit: scale-down;
    }
    .banner_front{
        background-image: url('/bgbanner.jpg');
        background-size: auto;
        background-position: bottom;
        background-repeat: no-repeat;
    }
    .banner_event_1{
        background-color: #fff6ea ;
        img{
            object-position: bottom;
        }
    }

    .banner_event_2{
        background-color: #c2ebff;
        img{
            object-position: bottom;
        }
    }

    @media(max-width:500px){
        height: 350px ;
        .banner_event_2{
        img{
            object-position: center;
        }
    }
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

    @media(max-width:950px){
        .container{
            flex-direction: column-reverse;
            h1, p{
                text-align: center;
            }
            #logo_ict{
                max-width: 360px;
            }
        }
    }
    @media(max-width:500px){
        padding: 50px ;
        .container{
            #logo_ict{
                max-width: 230px;
            }
            #about_ict_left{
                p{
                    font-size: 18px;
                }
            }
        }
    }
`

export const SectionCourses = styled.section`
    background-color: #fff;
    padding: 100px 50px;
    position: relative;
    
    .grid{
        display: grid;
        grid-template-columns: repeat(3, auto);
        column-gap: 20px;
        justify-content: space-between;
    }

    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        a{
            background: -webkit-radial-gradient(30% 30%,#ed4b50,#b60108,#e91322);
            color: #fff;
            border-radius: 40px;
            max-width: 150px;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            margin-top: 35px ;

            &:hover{
                text-decoration: none;
                background:#b60108;
            }
        }
    }

    &:after{
        content: "";
        width: 80%;
        height: 1px;
        background-color: #afafaf;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
    }

    @media(max-width:500px){
        padding: 50px 50px;
        .grid{
            grid-template-columns: repeat(1, auto);
            row-gap: 20px;
            justify-content: center;
        }
    }
`

export const SectionTeam = styled.section`
    padding: 100px 50px;
    .grid{
        display: grid;
        grid-template-columns: repeat(2, auto);
        row-gap: 60px;
    }

    @media(max-width:800px){
        .grid{
            grid-template-columns: repeat(1, auto);
            justify-content: center;
        }
    }
    @media(max-width:500px){
        padding: 50px 20px;
        h1{
            margin-bottom: 50px ;
        }
    }
`