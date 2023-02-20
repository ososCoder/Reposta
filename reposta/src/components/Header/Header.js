//CSS
import './Header.css';

//MENU
import { FiMenu, FiX, FiHome, FiUsers, FiMail } from 'react-icons/fi';
import { useState } from 'react';

//COMPONENT
export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='Header-header'>
      <h1>Reposta</h1>
      {!showMenu ? (
        <FiMenu className='menu' onClick={() => setShowMenu(!showMenu)} />
      ) : (
        <FiX className='menu-close' onClick={() => setShowMenu(!showMenu)} />
      )}
      <nav className={`Header-nav-${showMenu}`}>
        <ul>
          <li>
            <FiHome className='Header-menu-icons' />
            Inicio
          </li>
          <li>
            <FiUsers className='Header-menu-icons' />
            Sobre Resposta
          </li>
          <li>
            <FiMail className='Header-menu-icons' />
            Contacto
          </li>
        </ul>
      </nav>
    </header>
  );
};
