import './Footer.scss'
import GitHub from '../../assets/images/GitHub_Logo_White.png'
import LinkedIn from '../../assets/images/LI-Logo.png'

function Footer() {
    return (
        <footer className="dark">
            <div className='footer-wrapper'>
                <div>Kira Teresa Soba, visit me on </div>
                <div>
                    <img src={GitHub} alt="GitHub Logo" />
                    <img src={LinkedIn} alt="LinkedIn Logo" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;