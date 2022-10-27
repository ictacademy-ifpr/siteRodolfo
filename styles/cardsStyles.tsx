import styled from "styled-components"

export const CardStyle = styled.div`
    height: 300px;
    width: 300px; 
    border-radius: 30px;
    overflow: hidden;
    cursor: pointer;

    .card_img{
        width: 100%;
        height: 100%;
        border-radius: 30px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: rgba(5, 2, 53, 0.4);
        background-blend-mode: multiply;
        transition: 1s ;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            transform: scale(1.1);
            transition: 1s ;
            background-color: rgba(5, 2, 53, 0.6);
            p{
                color: #fff;
                transition: 1s ;
            }
        }

        p{
            color: rgba(255, 255, 255, 0.5);
            font-size: 40px;
            position: absolute;
            font-weight: 500;
            max-width: 170px;
            text-align: center;
            line-height:1 ;
        }
    }
`