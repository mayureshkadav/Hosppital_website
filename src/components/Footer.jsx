import { ArrowUpRight, Camera, Globe, HeartPulse, MapPin, Phone, Send, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { departments, hospitalAddress, services } from '../data/content.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-about">
          <Link to="/" className="brand brand--footer"><span className="brand__mark"><HeartPulse size={22} /></span><span className="brand__name">MediCare<span>Hospital</span></span></Link>
          <p>Thoughtful medicine. Exceptional people. Care that moves you forward.</p>
          <div className="social-links" aria-label="Social media">
            <a href="https://www.facebook.com" aria-label="Facebook"><UsersRound size={17} /></a>
            <a href="https://www.instagram.com" aria-label="Instagram"><Camera size={17} /></a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn"><Globe size={17} /></a>
          </div>
        </div>
        <div className="footer-column"><h3>Explore</h3><Link to="/about">About us</Link><Link to="/departments">Departments</Link><Link to="/doctors">Our doctors</Link><Link to="/services">Services</Link><Link to="/contact">Contact</Link></div>
        <div className="footer-column"><h3>Departments</h3>{departments.slice(0, 5).map((item) => <Link key={item.name} to="/departments">{item.name}</Link>)}</div>
        <div className="footer-column footer-contact"><h3>Find us</h3><p><MapPin size={16} />{hospitalAddress}</p><a href="tel:+919876543210"><Phone size={16} />+91 98765 43210</a><a href="mailto:hello@medicarehospital.in"><Send size={16} />hello@medicarehospital.in</a><Link className="footer-directions" to="/contact">Get directions <ArrowUpRight size={14} /></Link></div>
        <div className="footer-column footer-services"><h3>Care services</h3>{services.slice(0, 4).map((item) => <Link key={item.name} to="/services">{item.name}</Link>)}</div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} MediCare Hospital. All rights reserved.</span><span>Care, with clarity.</span></div>
    </footer>
  )
}

export default Footer