import FooterStyle from '../../styles/FooterStyle'

export default function Footer(){
    return(
        <FooterStyle>
            <div className="container">
                <a href='https://www.linkedin.com/in/profrodolfobarriviera/?originalSubdomain=br'>
                    <img src={'linkedin.png'} />
                </a>
                <a href='ictacademyifpr.com.br'>
                    <img src={'ICTLogo.png'} />
                </a>
                <a href='https://www.youtube.com/@profrodolfobarriviera5164/featured'>
                    <img src={'youtube.png'} />
                </a>

            </div>
        </FooterStyle>
    )
}