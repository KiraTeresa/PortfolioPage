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
                    <p className='zenDots'>Linkedin</p>
                    <p className='zenDots'>GitHub</p>
                </div>
            </section>
        </div>
    )
}

export default ContactHead;