import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Clock3, HeartPulse, Menu, Phone, X } from 'lucide-react'

const links = [
  ['Home', '/'], ['About', '/about'], ['Departments', '/departments'],
  ['Doctors', '/doctors'], ['Services', '/services'], ['Contact', '/contact'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <span><Clock3 size={14} /> Emergency care, day and night</span>
          <a href="tel:+919876543210"><Phone size={14} /> +91 98765 43210</a>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link to="/" className="brand" aria-label="MediCare Hospital home" onClick={() => setMenuOpen(false)}>
            <span className="brand__mark"><HeartPulse size={22} strokeWidth={2.3} /></span>
            <span className="brand__name">MediCare<span>Hospital</span></span>
          </Link>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Main navigation">
            {links.map(([label, path]) => (
              <NavLink key={path} to={path} end={path === '/'} onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}>
                {label}
              </NavLink>
            ))}
            <Link className="button nav-appointment" to="/appointment" onClick={() => setMenuOpen(false)}>Book appointment <ArrowUpRight size={16} /></Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar