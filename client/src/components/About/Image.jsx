import MeImage from '../../assets/images/ks22-037-marcgilsdorf-Kopie.png'

function MyImage({ className }) {
    return (
        <div className={`${className}`}>
            <img src={MeImage} alt="Kira Teresa Soba" />
        </div>
    )
}

export default MyImage;