import styled from "styled-components";

const CollabsStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    .photo{
        max-width: 200px;
        width: 100%;
        height: 200px;
        border-radius: 1000px;
        overflow: hidden;
        margin-right: 20px ;

        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
    .description{
        p{
            margin:0 ;
        }
        .name{
            font-size: 30px;
            color: #b60108;
            margin-bottom: 10px;
        }
        .description_text{
            max-width: 260px;
            font-size: 15px;
            margin-bottom: 10px;
        }
    }
`

export default CollabsStyle