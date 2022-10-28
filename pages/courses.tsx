import Header from '../src/components/header'
import Footer from '../src/components/footer'
import CoursesStyle from '../styles/courses'

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

                </div>
            </CoursesStyle>
            <Footer/>
        </>
    )
}