import '../assets/Footer.scss'
import ContactForm from './ContactFrom'
import Social from './Social'

function Footer(){
    return (
        <footer>
            <ContactForm />
            <div className="social">
                <Social />
                <p>Copyright © 2023 Edward Kaiser.</p>
            </div>
        </footer>
    )
}
export default Footer