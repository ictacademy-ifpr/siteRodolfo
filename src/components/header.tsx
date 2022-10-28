import { useEffect } from 'react'
import Link from 'next/link'
import HeaderStyle from '../../styles/headerStyle'

interface Props{
    class: string
}

export default function Header(props:Props){

    useEffect(()=>{
        let head = document.getElementById('transparent')
        
        function handleScroll(){
            if(window.scrollY < 98 && head != null){
                head.style.backgroundColor='transparent'
                head.style.transition= '1s'
            }else if(window.scrollY >= 98 && head != null){
                head.style.backgroundColor='rgba(255, 255, 255, 0.95)'
            }
        }

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    },[])

    return(
        <HeaderStyle>
            <div id={props.class} className='head'>
                <div className="container">
                    <div className='imagesBox'>
                        <img src='/huawei_logo.png' className='huawei' alt='logo Huawei'/>
                        <img src="/ifpr.png" className='ifpr' alt='logo do instituo federal do paraná'/>
                    </div>
                    <nav>
                        <ul>
                            <li><Link href=''>Sobre a Huawei</Link></li>
                            <li><Link href='/courses'>Cursos</Link></li>
                            <li><Link href=''>Eventos</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </HeaderStyle>
    )
}