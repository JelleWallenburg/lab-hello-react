import ironhackLogo from '../images/ironhack-logo-xs.png';
import menuLogo from '../images/menu-top-xs.png'

import './Header.css';

function Header(){
    return(
        <nav>
            <ul>
                <li><img classname='ironhack-log' alt= 'ironhack logo' src= {ironhackLogo} /></li>
                <li><img clasName='menu-logo' alt= 'menu logo'src= {menuLogo}/></li>
            </ul>
        </nav>
        
    )
};

export default Header;