import styled from 'styled-components'

const FooterStyle = styled.footer`
  background: ffff;
  padding: 10px 10px;

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