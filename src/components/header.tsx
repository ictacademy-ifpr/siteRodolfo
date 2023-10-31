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
                            <div className='logoRodolfo'>
                                <img src="/logoRodolfo.png"  alt='logo doprofRodolfo'/>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='menu_links'>
                    
                    <div className='links'> <Link href='/'><a>Home</a></Link></div>
                    <div className='links'> <Link href='http://www.ictacademyifpr.com.br/'><a>ICT Academy</a></Link></div>
                </div>
            
   

            </div>
        </HeaderStyle>
    )
}