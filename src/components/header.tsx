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
                    <Link href='/'>
                        <div className='imagesBox'>
                            <div className='huawei'>
                                <img src='/huawei_logo.png'  alt='logo Huawei'/>
                            </div>
                            <div className='ifpr'>
                                <img src="/ifpr.png"  alt='logo do instituo federal do paraná'/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </HeaderStyle>
    )
}