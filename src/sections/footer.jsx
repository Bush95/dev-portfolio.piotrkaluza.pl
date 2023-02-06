import Contact from './contact';
import Social from './social';
import "../scss/sections/footer.scss"

export default function Footer() {
  return (
    <div className="page-footer">
        <Contact />
        <Social />
      <p className="page-footer__copy">&copy; Piotr Kałuża {(new Date()).getFullYear()}. All rights reserved.</p>
    </div>
  )
}
