import Logo from '../../assets/GengarIcon-removebg-preview.png'
import './Header.css'

export const Header = ({ children }) => (
    <header className="header-app">
        <div className="header-content">
            <img className='Logo' src={Logo} alt="" />
            <div className='titleLogo'>
                {children}
            </div>
        </div>
       
    </header>
  );
  