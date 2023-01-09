import './about.scss'
import MeImage from '../../assets/images/ks22-037-marcgilsdorf-Kopie.png'
import { useEffect, useState } from 'react';


function Introduction({ position }) {
    const [isVisible, setIsVisible] = useState(true)

    // const listenToScroll = () => {
    //     let heightToHide = 2;
    //     const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    //     console.log("WinScroll: ", winScroll)
    //     if (winScroll > heightToHide) {
    //         setIsVisible(false)
    //     } else {
    //         setIsVisible(true)
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", listenToScroll)
    //     return () => window.removeEventListener("scroll", listenToScroll)
    // }, [listenToScroll])


    return (
        <section className={`introduction`}>
            {/* <div className='img-wrapper'>
                <img src={MeImage} alt="Kira Teresa Soba" />
            </div> */}
            {/* <div className={`text ${isVisible ? "" : "hide"}`}> */}
            <h2 className='slideOut'>Hi. I'm Kira</h2>
            <h2 className='zenDots slideOut'>Fullstack Web Developer</h2>
            {/* </div> */}
        </section >
    )
}

export default Introduction;