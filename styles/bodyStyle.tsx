import styled from "styled-components";

export const Banner = styled.section`
    height: 1000px ;
    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        top:0px;
        text-align: center;
        font-size: 18px;
        background-color: #FFF ;
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

    .banner_event_0,  .banner_event_1, .banner_event_2, .banner_event_3,  .banner_event_3_responsivo, .banner_event_4, .banner_event_4_responsivo{
        a{
            width: 100%;
            height: 100%;
            img{
                object-position: bottom;
            }
        }
    }

    .banner_event_0{
        background-color: rgb(1, 13, 25) ;
        cursor: pointer; 
    }

    .banner_event_1{
        background-color: #fff6ea ;
        cursor: pointer;
    }

    .banner_event_2{
        background-color: #c2ebff;
    }

    .banner_event_3{
        background: rgb(74,0,151);
        background: linear-gradient(90deg, rgba(74,0,151,1) 0%, rgba(147,0,125,1) 100%);
    }

    //Tentando fazer com que o fundo do site adapte-se a cor das fotos
    .banner_event_3_responsivo{
        width: 100%;

    }

    .banner_event_4{
        background-color: #ffffff;
    }

    .banner_event_4_responsivo{
        display: none;
    }

    @media(max-width:1440px){
        height: 467px ;     
    }

    @media(max-width:500px){
        height: 350px ;
        .banner_event_2{
            img{
                object-position: center;
            }
        }
        .banner_event_4{
            display: none;
        }

        .banner_event_4_responsivo{
            display: flex;
            background-color: #071620;
            img{
                max-width: 274px;
                margin: 0 auto;
            }
        }

        .banner_event_3{
            display: none;
        }

        .banner_event_3_responsivo{
            display: flex;
            background: rgb(56,1,161);
            background: linear-gradient(0deg, rgba(56,1,161,1) 0%, rgba(159,2,125,1) 100%);
            img{
                max-width: 274px;
                margin: 0 auto;
            }
        }
    }

    @media(max-width:410px){
        .banner_event_4_responsivo,  .banner_event_3_responsivo{
            img{
                max-width: 290px;
            }
        }
    }

    @media(max-width:375px){
        .banner_event_4_responsivo,  .banner_event_3_responsivo{
            img{
                max-width: 293px;
            }
        }
    }
`

export const SectionAboutIct= styled.section`
    background-color: #f7f8fa ;
    border-radius: 50px;
    padding: 100px  15px;
    overflow: hidden;
    margin: 2%;
    text-justify: distribute;
    
    .container{
        display: flex ;
        align-items: center;
        justify-content: space-between;
        

        #about_ict_left{
            max-width: 455px;            
            p{
                font-size: 20px;
                line-height: 35px;
                text-align: justify;
            }
            h1{
                font-color: blue;
            }
            h1:hover {
                background-color: #024CAD;
                color: white;
            }


        }
    
        #logo_ict{
            max-width: 430px;
            &:hover{
                transform: scale(1.1);
    
            }
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
    background-color: #f7f8fa ;
    border-radius: 50px;
    padding: 100px 50px;
    position: relative;
    margin: 2%;
    
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
        background: #024CAD;
        border-radius: 40px;
        max-width: 150px;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        margin: 35px auto 0 ;

        a{
            color: #fff;
        }

        &:hover{
            text-decoration: none;
            background:#00C4CC;
        }
    }
    

    // &:after{
    //     content: "";
    //     width: 80%;
    //     height: 1px;
    //     background-color: #afafaf;
    //     position: absolute;
    //     bottom: 0;
    //     right: 0;
    //     left: 0;
    //     margin: 0 auto;
    // }

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
    background-color: #f7f8fa ;
    border-radius: 50px;
    margin: 2%;

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
            text-align? center;
        }


    }
`

export const SectionTitles = styled.section`
    background-color: #f7f8fa ;
    border-radius: 50px;
    margin: 2%;

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
            text-align? center;
        }


    }
`