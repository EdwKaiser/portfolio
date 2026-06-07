import '../assets/Menu.scss';
import { useState, useEffect } from 'react';

function Menu({ afficherContenu }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight);

      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Début de la transformation
  const startTransform = viewportHeight - 400;

  // Fin de la transformation
  const endTransform = viewportHeight;

  // Progression entre 0 et 1
  const progress = Math.min(
    1,
    Math.max(
      0,
      (scrollPosition - startTransform) / (endTransform - startTransform)
    )
  );

  // Hauteur : 400px au début, 70px à la fin
  const heightValue = 400 - progress * 330;

  // Border-radius : 50% au début, 0% à la fin
  const borderRadiusValue = 50 - progress * 50;

  const isTransforming = scrollPosition > startTransform;
  const isFinalMenu = scrollPosition >= endTransform;

  const menuStyle = isTransforming
    ? {
        position: 'fixed',
        top: 0,
        width: '100%',
        height: isFinalMenu ? '70px' : `${heightValue}px`,
        minHeight: '70px',
        maxHeight: '400px',
        borderRadius: isFinalMenu ? '0%' : `${borderRadiusValue}%`,
        backgroundColor: isFinalMenu ? 'black' : '',
        boxShadow: isFinalMenu ? 'none' : '',
        zIndex: 1000,
      }
    : {};

  return (
    <section id="section__menu">
      <div id="menu" style={menuStyle}>
        <nav id="menu__nav">
          <button onClick={() => afficherContenu('presentation')}>
            Présentation
          </button>

          <button onClick={() => afficherContenu('project')}>
            Projets
          </button>

          <button onClick={() => afficherContenu('services')}>
            Services
          </button>

          <button onClick={() => afficherContenu('CV')}>
            CV
          </button>
        </nav>
      </div>
    </section>
  );
}

export default Menu;