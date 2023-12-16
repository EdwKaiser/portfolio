
import '../assets/Menu.scss';
import { useState, useEffect} from 'react';

function Menu({ afficherContenu }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [height, setHeight] = useState(400);
  const [index, setIndex] = useState(1); 
  const viewportHeight = window.innerHeight;

  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const viewportHeight = window.innerHeight;
    const newScrollPosition = window.scrollY;
    setScrollPosition(newScrollPosition);

    if (newScrollPosition > viewportHeight - 400) {
      setHeight(400 - (newScrollPosition - (viewportHeight - 410)));
    }


    if (newScrollPosition > viewportHeight - 80 && index < 50 && newScrollPosition > scrollPosition) {
      setIndex((prevIndex) => prevIndex + 1); 

    }else if (index > 0 && newScrollPosition < scrollPosition) {
      setIndex((prevIndex) => prevIndex - 1)

    }
  };

  const handleResize = () => {
    document.documentElement.scrollTop = 0;
    document.documentElement.style.scrollBehavior = 'auto';
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, index]);

  const isScrolledbis =  scrollPosition > viewportHeight - 80; 
  const borderRadius = 50 - index;
 

  const style = {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: `${height}px`,
    minHeight: '70px', 
    maxHeight : isScrolledbis ? '70px' : '',
    borderRadius: isScrolledbis ? `${borderRadius}%` : '',
    backgroundColor: scrollPosition >= viewportHeight ? 'black' : '',
    boxShadow : scrollPosition >= viewportHeight ? 'none' : ''
  };



  return (
    <section id="section__menu">
      <div id='menu' style={scrollPosition > viewportHeight - 400 ? style : {} }>
        <nav id="menu__nav">
          <button  onClick={() => afficherContenu('presentation')}>Présentation</button>
          <button onClick={() => afficherContenu('project')}>Projets</button>
          <button onClick={() => afficherContenu('services')}>Services</button>
          <button onClick={() => afficherContenu('CV')}>CV</button>
        </nav>
      </div>
    </section>
  );
}

export default Menu;
