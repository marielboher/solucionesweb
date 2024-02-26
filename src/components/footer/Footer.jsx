import './footer.css'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import linkedin from '../../assets/linkedin.svg'
const Footer = () => {
  return (
    <div className='container-footer'>
        <div className='text-footer'>
            <h3>Solucionesweb</h3>
            <p className='line-footer'></p>
           <div className='container-list'>
                <div className="lista-nav">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Services</li>
                    </ul>
                </div>
                <p>© 2024 All rights reserved.</p>
           </div>
        </div>
        <div className="container-icons">
           <div className='icons'>
                <img src={linkedin}></img>
                <img src={instagram}></img>
                <img src={facebook}></img>
           </div>
            <div className="support">
                <p>Support: solucionesweb@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer