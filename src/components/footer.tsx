import FooterStyle from '../../styles/FooterStyle'

export default function Footer(){
    return(
        <FooterStyle>
            <div className="container">
                <img src='huawei-transp.png' alt='logo Huawei' className='logo_huawei'/>
                <span className='city'>Londrina - Paraná</span>
                <img src='ifpr-logo-branca.png' alt='logo IFPR' className='logo_ifpr'/>
            </div>
        </FooterStyle>
    )
}