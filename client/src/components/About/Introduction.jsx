import './about.scss'
import MeImage from '../../assets/images/ks22-037-marcgilsdorf-Kopie.png'

function Introduction() {
    return (
        <div className='dark'>
            <section className='introduction top'>
                <div className='img-wrapper'>
                    <img src={MeImage} alt="Kira Teresa Soba" />
                </div>
                <div className='text'>
                    <p className='slideOut'>Hi. I'm Kira</p>
                    <p className='zenDots slideOut'>Fullstack Web Developer</p>
                </div>
            </section >
        </div>
    )
}

export default Introduction;