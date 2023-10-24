import FooterStyle from '../../styles/FooterStyle'

export default function contactForm(){
    return(
        <ContactFormStyle>
            <div className="container">
                {/* <img src='huawei-transp.png' alt='logo Huawei' className='logo_huawei'/>
                <span className='city'>Londrina - Paraná</span>
                <img src='ifpr-logo-branca.png' alt='logo IFPR' className='logo_ifpr'/>
                <img src='3.png' alt='logo IFPR e ICT' className='logo_ict'/> */}
                <a href='https://www.facebook.com/ictacademy.ifpr'>
                    <img src={'facebook.png'} />
                </a>
                <a href='https://www.instagram.com/ictacademy.ifpr/'>
                    <img src={'instagram.png'} />
                </a>
                <a href='https://www.linkedin.com/company/ictacademy-ifpr/'>
                    <img src={'linkedin.png'} />
                </a>
                <a href='https://www.youtube.com/@ictacademyifpr'>
                    <img src={'youtube.png'} />
                </a>
                <a href=''>
                    <img src={'telegram.png'} />
                </a>


            </div>
        </ContactFormStyle>
    )
}