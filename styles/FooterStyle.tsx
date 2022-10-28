import styled from 'styled-components'

const FooterStyle = styled.footer`
  background: -webkit-radial-gradient(30% 30%,#ed4b50,#b60108,#e91322);
  padding: 10px 10px;

  .container{
    display: flex;
    align-items: center;
    justify-content: center;

    .logo_huawei{
        max-width: 90px;
        width: 100%;
    }

    .logo_ifpr{  
        max-width: 50px;
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