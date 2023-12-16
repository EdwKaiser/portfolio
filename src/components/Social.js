
import { IconeInstagram, IconeEmail,IconeGithubReseau  } from '../img/icone/icone.js'



function Social() {


    return(
        <div>
            <a href='https://github.com/EdwKaiser' target="_blank" rel="noopener noreferrer"><IconeGithubReseau width={'50'} height={'50'} /> </a>
            <a href='https://www.instagram.com/edwardkaiser/' target="_blank" rel="noopener noreferrer"><IconeInstagram width={'50'} height={'50'} /> </a>
            <a href={`mailto:edward.kaiser.a@hotmail.com`} target="_blank" rel="noopener noreferrer"><IconeEmail width={'50'} height={'50'} /> </a>
        </div>
    )
}
export default Social