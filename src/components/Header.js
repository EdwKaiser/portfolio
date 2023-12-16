
import { Link } from 'react-router-dom'
import '../assets/Header.scss'
import Menu from '../components/Menu.js'


function Header({afficherContenu}) {

 const props = {afficherContenu}

  return (
    <header id="header">
        <div id="header__nav" style={{ display: 'none' }}>
            <ul>
                <li>
                    <Link to="/home">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link>
                        Se connecter
                    </Link>
                </li>
            </ul>
        </div>
        <div className='header__menu'>
            <Menu afficherContenu={props.afficherContenu} />
        </div>
    </header>
  )
}

export default Header
