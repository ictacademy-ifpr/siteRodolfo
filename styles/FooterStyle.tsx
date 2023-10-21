import styled from 'styled-components'

const FooterStyle = styled.footer`
  background: ffff;
  padding: 10px 10px;

  img{
    max-width: 50px;
    width: 100%;
    padding: 5%;
    margin-right: 50px;
    margin-left: 50px;

    &:hover{
      transform: scale(1.4);

    }

  }

  .container{
    display: flex;
    align-items: center;
    justify-content: center;

    .logo_huawei{
        max-width: 50px;
        width: 100%;
    }

    .logo_ifpr{  
        max-width: 50px;
        width: 100%;
    }

    .logo_ict{  
      max-width: 150px;
      width: 100%;
  }


    .city{
        color: #fff; 
        font-size: 20px;
        margin: 0 65px ;
    }
  }
    
`

export default FooterStyle