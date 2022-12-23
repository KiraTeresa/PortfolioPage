import './footer.scss'
import { Link } from 'react-router-dom';
// import GitHub from '../../assets/images/GitHub_Logo_White.png'
// import LinkedIn from '../../assets/images/LI-Logo.png'

function Footer() {
    return (
        <footer className="dark">
            <div className='footer-wrapper'>
                <div>Kira Teresa Soba, visit me on</div>
                <div>
                    {/* <a href="https://github.com/KiraTeresa"><img src={GitHub} alt="GitHub Logo" /></a>
                    <a href="https://www.linkedin.com/in/kira-teresa-soba/"><img src={LinkedIn} alt="LinkedIn Logo" /></a> */}
                    <a href="https://www.linkedin.com/in/kira-teresa-soba/"><p className='zenDots'>Linkedin</p></a>
                    <a href="https://github.com/KiraTeresa"><p className='zenDots'>GitHub</p></a>
                    <Link to="/legal-notice">legal notice</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;