import './about.scss'

function Introduction({ isVisible }) {
    return (
        <section className={`introduction ${isVisible ? 'visible' : 'hidden'}`}>
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