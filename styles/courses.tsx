import styled from 'styled-components'

const CoursesStyle = styled.section`
    .banner{
        background: -webkit-radial-gradient(55% 23%,#adadad,#000,#4f5054);
        padding: 90px 10px 3px;

        .container{
            h2{
                color: #fff;
                font-size: 50px;
                font-weight: 300;
            }
        }
    }
    .body{
        padding: 100px 20px;
        background-color: #fafafa;
        .note{
            padding: 20px;
            background-color: #fff;
            max-width: 530px;
            width: 100%;
            margin: 0 auto;
            border: 1px solid #b60108;
            position: relative;
            margin-bottom: 100px;
            p{
                margin:0;
            }
            img{
                position: absolute;
                width: 30px;
                top: -29px;
                right: 0;
                left: 0;
                margin: 0 auto;
                z-index: 1;
            }
            &:after{
                content: "";
                height: 7px;
                width: 100px;
                background-color: #b60108;
                position: absolute;
                top: -4px;
                right: 0;
                left: 0;
                margin: 0 auto;
            }
        }
        .grid{
            display: grid;
            grid-template-columns: repeat(3, auto);
            column-gap: 20px;
            justify-content: space-between;
            row-gap: 20px;
        }
    }

    @media(max-width:500px){
        .body{
            .grid{
                grid-template-columns: repeat(2, auto);
                row-gap: 20px;
                justify-content: center;
            }
        }
    }
`

export default CoursesStyle