import { useEffect, useState } from 'react'
import Link from 'next/link'
import HeaderStyle from '../../styles/headerStyle'
import { AiOutlineMenu } from "react-icons/ai";


interface Props{
    class: string
}

export default function Header(props:Props){
    const [menuOpen, setMenuOpen] = useState(false)

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
                    <Link href='/'>
                        <div className='imagesBox'>
                            <div className='ifpr'>
                                <img src="/ifpr degrade.png"  alt='logo do instituo federal do paraná'/>
                            </div>
                            <div className='huawei'>
                                <img src='/huawei degrade.png'  alt='logo Huawei'/>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='menu_links'>
                    
                    <div className='links'> <Link href='/'><a>Home</a></Link></div>
                    <div className='links'> <Link href='/courses'><a>Cursos</a></Link></div>
                    <div className='links'> <Link href='/midia'><a>Mídia</a></Link></div>
                </div>
            
                {/*<button className='btn_menu' onClick={() => setMenuOpen(!menuOpen)}>
                    <AiOutlineMenu/>
                </button>

                <div className='menu' id={menuOpen==true?'open':'close'}>
                    <Link href='/'><a>Home</a></Link>
                    <Link href='/courses'><a>Cursos</a></Link>
                    <Link href='/midia'><a>Mídia</a></Link>
                    <Link href='/'><a>Equipe</a></Link> 
                </div> */}

            </div>
        </HeaderStyle>
    )
}