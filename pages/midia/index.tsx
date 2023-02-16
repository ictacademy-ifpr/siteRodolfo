import Header from '../../src/components/header'
import Footer from '../../src/components/footer'
import MidiaStyle from '../../styles/midia'
import midia from '../../src/data/midia.json'
import CardMidia from '../../src/components/cards_media'

export default function Midia(){
    return(
        <>
            <Header class='white'/>
            <MidiaStyle>
                <div className="banner">
                    <div className="container">
                        <h2>Publicações</h2>
                    </div>
                </div>
                <div className="body">
                    <div className="container">
                        {
                            midia.map(({title, text, img}, index) =>
                                <CardMidia key={index} index={index} title={title} text={text} img={img}/>
                            )
                        }
                    </div>
                </div>
            </MidiaStyle>
            <Footer/>
        </>
    )
}