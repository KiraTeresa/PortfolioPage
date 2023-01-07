import MeImage from '../../assets/images/ks22-037-marcgilsdorf-Kopie.png'

function MyImage({ position }) {
    return (
        <section className={`${position} me-image`}>
            <img src={MeImage} alt="Kira Teresa Soba" />
        </section>
    )
}

export default MyImage;