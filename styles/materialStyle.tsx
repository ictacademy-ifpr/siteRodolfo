import styled from "styled-components";

const MaterialStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    text-align: justify;

    a {
        text-decoration: none;
        color: inherit;
    
        &:hover {
          transform: scale(1.1);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
    }


    .title{
        text-align: left;

        list-style-type: disc;
        font-size: 30px;
        margin-right: 20px;
        color: #024CAD;
        margin-bottom: 10px;
    }
    .description{
        p{
            margin:0 ;
            
        }

        .description_text{
            max-width: 5260px;
            font-size: 20px;
            margin-bottom: 10px;
        }
    }

    @media(max-width:500px){
        .photo{
            max-width: 150px;
            width: 100%;
            height: 150px;
        }
    }
    @media(max-width:400px){
        flex-direction: column;
        .photo{
            margin: 0 ;
        }
        .description{
            .description_text{
                margin: 0 auto;
            }
        }
    }
`

export default MaterialStyle

