import Header from '../src/components/header'
import Footer from '../src/components/footer'
import Card from '../src/components/cards'
import CoursesStyle from '../styles/courses'
import courses from '../src/data/courses.json'

export default function Courses(){
    return(
        <>
            <Header class='white'/>
            <CoursesStyle>
                <div className="banner">
                    <div className="container">
                        <h2>Cursos</h2>
                    </div>
                </div>
                <div className="body">
                    <div className="container">
                        <div className="note">
                            <p>A Huawei ICT Academy oferece diversos cursos sobre
                                as tecnologias mais recentes e que estão em alta no mercado.
                                <br/> Todos os cursos são online e gratuitos! E ao final do curso
                                você ainda pode obter um certificado de conclusão!
                            </p>
                            {/* <img src='pin.png' alt='icone'/> */}
                        </div>
                        
                        <div className="grid">
                            {
                                courses.map(({url, warning, img, title, bg}, index)=>
                                    <Card key={index} url={url} warning={warning} img={img} title={title} bg={bg}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </CoursesStyle>
            <Footer/>
        </>
    )
}