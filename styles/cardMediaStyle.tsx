import styled from "styled-components"

const CardMidiaStyle = styled.div`
    border: 1px solid rgba(48, 48, 48, 0.5);
    border-radius: 20px;
    padding: 5px 5px 20px;
    margin: 0 10px;

    .image{
        max-width: 480px;
        width: 100%;
        border-radius: 20px;
        overflow: hidden;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .text{
        margin-bottom: 30px;
        h3{
            margin-left: 10px;
            max-width: 470px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2; 
            -webkit-box-orient: vertical;
            height: 57px;
        }

        p{
            margin-left: 10px;
            max-width: 470px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            line-clamp: 5; 
            -webkit-box-orient: vertical;
        }
    }

    .btn{
        display: flex;
        justify-content: center;

        a{
            margin-left: 10px;
            display: flex;
            width: 90%;
            background: #024CAD;
            color:#fff;
            border-radius: 10px;
            justify-content: center;
            padding: 10px;
            font-size: 18px;

            &:hover{
                background: #00C4CC;
            }
        }
    }
`

export default CardMidiaStyle