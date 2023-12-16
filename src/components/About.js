import '../assets/About.scss'


function About() {

    return (
        <section className="about__me" id='presentation'>
            <h1>Qui suis-je ?</h1>
            <div className='about__me--info'>
                <div className='about__me--info--me'>
                        <div className='about__me--info--me--img'>
                            <img src='/portfolio/img/Icone_ed.jpg' alt='Edward Kaiser'/>
                        </div>
                        <h2>Nom:</h2>
                        <p id="about__me--name">Kaiser Edward</p>
                        <h2>Âge :</h2>
                        <p id="about__me--age">27</p>
                        <h2>Localisation :</h2>
                        <p id="about__me--localisation">Bouches-du-Rhone, France</p>
                </div>
                <div className='about__me--info--text'>
                    <p>
                        Salut ! Je suis Edward, un passionné de 27 ans qui a trouvé sa véritable vocation dans le monde du 
                        développement web. Mon parcours a commencé dans les salles de classe d'un BTS comptabilité et gestion, mais rapidement, j'ai réalisé que mes véritables passions résidaient ailleurs.
                        Après avoir exploré différents domaines professionnels, j'ai finalement atterri dans le développement 
                        web. Ce fut un tournant décisif ! La combinaison de créativité et de logique m'a immédiatement captivé, 
                        me propulsant dans un monde où chaque ligne de code est une opportunité de créer quelque chose d'unique.
                        En dehors de mon parcours professionnel, je nourris un intérêt pour la création de jeux vidéo. 
                        Bien que cela reste un hobby, j'aime explorer cet univers fascinant et m'immerger dans la création ludique.
                    </p>
                </div>

            </div>
        </section>
    )
}
export default About