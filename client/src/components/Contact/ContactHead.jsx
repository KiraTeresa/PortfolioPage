import MeImage from '../../assets/images/ks22-037-marcgilsdorf-Kopie.png'

function ContactHead() {
    return (
        <div className='dark'>
            <section className='introduction top'>
                <div className='img-wrapper'>
                    <img src={MeImage} alt="Kira Teresa Soba" />
                </div>
                <div className='text'>
                    <p>Lets connect</p>
                    <a href="https://www.linkedin.com/in/kira-teresa-soba/"><p className='zenDots'>Linkedin</p></a>
                    <a href="https://github.com/KiraTeresa"><p className='zenDots'>GitHub</p></a>
                </div>
            </section>
        </div>
    )
}

export default ContactHead;