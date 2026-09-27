import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Activity, ArrowLeft, ArrowRight, ArrowUpRight, Ambulance, Baby, Bandage,
  Bone, Brain, CalendarDays, Check, ChevronDown, CircleHelp, ClipboardPlus,
  Clock3, Flower2, HeartPulse, MapPin, MessageCircle, Phone, Pill, Ribbon,
  ScanFace, ScanLine, Scissors, ShieldCheck, Siren, Sparkles, Stethoscope,
  TestTubeDiagonal, UserRoundSearch, UsersRound, X,
} from 'lucide-react'
import { departments, doctors, facilities, faqs, hospitalAddress, quickActions, services, testimonials } from '../data/content.js'
import ContactForm from './ContactForm.jsx'

const iconMap = {
  Activity, Ambulance, Baby, Bandage, Bone, Brain, CalendarDays, ClipboardPlus,
  Flower2, HeartPulse, MessageCircle, Pill, Ribbon, ScanFace, ScanLine, Scissors,
  Siren, Stethoscope, TestTubeDiagonal, UserRoundSearch,
}

function SectionTitle({ eyebrow, title, copy, link, to }) {
  return (
    <div className="section-head">
      <div><span className="section-kicker">{eyebrow}</span><h2 className="section-heading">{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>
      {link && <Link className="text-link" to={to}>{link} <ArrowRight size={16} /></Link>}
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-layout">
        <div className="hero-copy reveal">
          <span className="hero-eyebrow"><span className="live-dot" /> Your health, in thoughtful hands</span>
          <h1>Advanced healthcare.<br /><span>Compassionate care.</span></h1>
          <p>Comprehensive healthcare powered by experienced medical professionals, advanced technology, and patient-centered care.</p>
          <div className="hero-buttons"><Link className="button" to="/appointment">Book an appointment <ArrowRight size={16} /></Link><Link className="button button--outline" to="/services">Explore services <ArrowUpRight size={16} /></Link></div>
          <div className="hero-trust"><div className="trust-avatars" aria-hidden="true"><span>AM</span><span>RK</span><span>MN</span></div><div><strong>Care from people who listen</strong><small>Trusted by 50,000+ patients</small></div></div>
        </div>
        <div className="hero-visual reveal">
          <div className="hero-image-frame"><img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1100&q=88" alt="MediCare physician welcoming a patient" /></div>
          <div className="hero-image-label"><span className="label-icon"><HeartPulse size={17} /></span><span><strong>Here for every chapter</strong><small>Care that sees all of you</small></span></div>
          <div className="hero-stat"><span className="hero-stat__icon"><Clock3 size={16} /></span><span><strong>24/7</strong><small>Emergency care</small></span></div>
          <span className="hero-orbit hero-orbit--one" aria-hidden="true" /><span className="hero-orbit hero-orbit--two" aria-hidden="true" />
        </div>
      </div>
      <div className="container hero-bottom"><span>HYDERABAD, INDIA</span><span className="hero-bottom-line" /><span>GOOD CARE CHANGES EVERYTHING</span></div>
    </section>
  )
}

export function QuickActions() {
  return (
    <section className="quick-actions container" aria-label="Quick actions">
      {quickActions.map((action) => {
        const Icon = iconMap[action.icon]
        const content = <><span className={`quick-icon quick-icon--${action.tone}`}><Icon size={21} /></span><span className="quick-copy"><strong>{action.title}</strong><small>{action.description}</small></span><ArrowUpRight className="quick-arrow" size={17} /></>
        return action.to.startsWith('tel:') ? <a className="quick-card" href={action.to} key={action.title}>{content}</a> : <Link className="quick-card" to={action.to} key={action.title}>{content}</Link>
      })}
    </section>
  )
}

export function AboutSection() {
  return (
    <section className="section about-section">
      <div className="container about-layout">
        <div className="about-visual">
          <img className="about-image" src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85" alt="Bright, modern hospital interior" loading="lazy" />
          <div className="about-image-caption"><span className="about-caption-mark"><HeartPulse size={18} /></span><span><strong>Better care, built around you.</strong><small>Since 2008 · Hyderabad</small></span></div>
          <span className="about-image-index">01 — 04</span>
        </div>
        <div className="about-copy"><span className="section-kicker">A little about us</span><h2 className="section-heading">Good medicine starts with listening.</h2><p className="section-copy">At MediCare, we bring modern medicine and human connection together. Our teams take time to understand your needs, explain your options, and walk with you through every next step.</p><div className="mission-list"><div><span className="mission-mark"><Check size={15} /></span><p><strong>Our mission</strong><small>Make exceptional healthcare feel personal, clear, and close to home.</small></p></div><div><span className="mission-mark"><Sparkles size={15} /></span><p><strong>Our vision</strong><small>A healthier community where everyone can move forward with confidence.</small></p></div></div><Link className="text-link" to="/about">Our story <ArrowRight size={16} /></Link></div>
      </div>
      <div className="container stats-row"><div><strong>20<span>+</span></strong><small>Specialist departments</small></div><div><strong>100<span>+</span></strong><small>Experienced doctors</small></div><div><strong>50<span>k</span></strong><small>Patients cared for</small></div><div><strong>24<span>/7</span></strong><small>Emergency support</small></div></div>
    </section>
  )
}

export function DepartmentCards({ filterable = false, limit }) {
  const [selected, setSelected] = useState('All')
  const shown = departments.filter((item) => selected === 'All' || item.name === selected).slice(0, limit || departments.length)

  return <>
    {filterable && <div className="filter-row" role="group" aria-label="Filter departments"><button className={selected === 'All' ? 'filter-chip filter-chip--active' : 'filter-chip'} onClick={() => setSelected('All')}>All departments</button>{departments.map((item) => <button key={item.name} className={selected === item.name ? 'filter-chip filter-chip--active' : 'filter-chip'} onClick={() => setSelected(item.name)}>{item.name}</button>)}</div>}
    <div className="department-grid">{shown.map((department, index) => { const Icon = iconMap[department.icon]; return <article className="department-card" key={department.name}><div className="department-card__top"><span className="icon-box"><Icon size={21} /></span><span className="card-index">0{index + 1}</span></div><h3>{department.name}</h3><p>{department.description}</p><Link to="/appointment" className="text-link">View department <ArrowRight size={15} /></Link></article> })}</div>
  </>
}

export function DepartmentsSection({ filterable = false, limit }) {
  return <section className="section section--soft"><div className="container"><SectionTitle eyebrow="Care, by specialty" title="The right expertise, all in one place." copy="A connected team of specialists, working together around what matters to you." link={!filterable && 'All departments'} to="/departments" /><DepartmentCards filterable={filterable} limit={limit} /></div></section>
}

export function DoctorCards({ filterable = false, limit }) {
  const [query, setQuery] = useState('')
  const [specialty, setSpecialty] = useState('All specialties')
  const specialties = ['All specialties', ...new Set(doctors.map((doctor) => doctor.specialty))]
  const shown = doctors.filter((doctor) => doctor.name.toLowerCase().includes(query.toLowerCase()) && (specialty === 'All specialties' || doctor.specialty === specialty)).slice(0, limit || doctors.length)

  return <>
    {filterable && <div className="doctor-filters"><label className="doctor-search"><UserRoundSearch size={18} /><span className="sr-only">Search doctors</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by doctor name" /></label><label className="doctor-specialty"><span className="sr-only">Filter by specialty</span><select value={specialty} onChange={(event) => setSpecialty(event.target.value)}>{specialties.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={15} /></label></div>}
    {shown.length ? <div className="doctor-grid">{shown.map((doctor, index) => <article className="doctor-card" key={doctor.name}><Link className="doctor-photo" to="/doctors" aria-label={`View ${doctor.name}'s profile`}><img src={`https://images.unsplash.com/${doctor.image}?auto=format&fit=crop&w=650&q=80`} alt={doctor.name} loading="lazy" /><span className="doctor-photo-index">M / 0{index + 1}</span></Link><div className="doctor-card__body"><span className="doctor-specialty-label">{doctor.specialty}</span><h3>{doctor.name}</h3><p>{doctor.experience} experience</p><div className="doctor-card__actions"><Link className="text-link" to="/doctors">View profile</Link><Link className="doctor-book" to="/appointment" aria-label={`Book an appointment with ${doctor.name}`}><ArrowUpRight size={17} /></Link></div></div></article>)}</div> : <p className="empty-results">No doctors match that search. Try a different name or specialty.</p>}
  </>
}

export function DoctorsSection({ filterable = false, limit }) {
  return <section className="section"><div className="container"><SectionTitle eyebrow="People behind your care" title="Meet the people who listen first." copy="Skilled, thoughtful physicians who make space for your questions and your goals." link={!filterable && 'Meet our doctors'} to="/doctors" /><DoctorCards filterable={filterable} limit={limit} /></div></section>
}

export function ServiceCards({ limit }) {
  return <div className="service-grid">{services.slice(0, limit || services.length).map((service, index) => { const Icon = iconMap[service.icon]; return <article className="service-item" key={service.name}><span className="service-count">0{index + 1}</span><span className="service-icon"><Icon size={23} /></span><div><h3>{service.name}</h3><p>{service.description}</p></div><ArrowUpRight className="service-arrow" size={17} /></article> })}</div>
}

export function ServicesSection({ limit }) {
  return <section className="section section--soft"><div className="container"><SectionTitle eyebrow="Here for the whole journey" title="Care that meets you where you are." copy="From a first question to ongoing support, the right resources are always within reach." link="Explore all services" to="/services" /><ServiceCards limit={limit} /></div></section>
}

export function WhyChooseUs() {
  const items = [
    { icon: UsersRound, title: 'Doctors who listen', copy: 'Expert care that begins by understanding you.' },
    { icon: ScanLine, title: 'Technology with purpose', copy: 'Modern diagnostics, always in service of people.' },
    { icon: Clock3, title: 'Ready around the clock', copy: 'Urgent care and emergency support, day or night.' },
    { icon: HeartPulse, title: 'One connected team', copy: 'Specialists working together on your care.' },
    { icon: ShieldCheck, title: 'Thoughtful spaces', copy: 'A calm, welcoming place designed for recovery.' },
    { icon: Bandage, title: 'Care that continues', copy: 'Guidance and support beyond your appointment.' },
  ]
  return <section className="section why-section"><div className="container"><SectionTitle eyebrow="The MediCare difference" title="Built around what matters most: you." copy="Excellent outcomes matter. So does how you feel along the way." /><div className="why-grid">{items.map(({ icon: Icon, title, copy }, index) => <article className="why-item" key={title}><span className="why-index">0{index + 1}</span><span className="why-icon"><Icon size={22} /></span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
}

export function FacilitiesSection({ limit }) {
  const shown = facilities.slice(0, limit || facilities.length)
  return <section className="section section--soft"><div className="container"><SectionTitle eyebrow="Spaces that support healing" title="A better environment for getting better." copy="Every detail, from the first hello to the quiet of your room, is part of your care." /><div className="facility-grid">{shown.map((facility, index) => <article className={`facility-card facility-card--${index % 3}`} key={facility.name}><img src={`https://images.unsplash.com/${facility.image}?auto=format&fit=crop&w=1000&q=80`} alt={facility.name} loading="lazy" /><div className="facility-overlay"><span>{facility.label}</span><h3>{facility.name}</h3></div></article>)}</div></div></section>
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const item = testimonials[active]
  const previous = () => setActive((active - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((active + 1) % testimonials.length)
  return <section className="section testimonial-section"><div className="container testimonial-layout"><div><span className="section-kicker">Words from our community</span><h2 className="section-heading">The difference is in how you feel.</h2><p className="section-copy">Sample patient stories, shared to give you a sense of the care experience.</p><div className="carousel-controls"><button aria-label="Previous testimonial" onClick={previous}><ArrowLeft size={18} /></button><span>0{active + 1} <i>/</i> 0{testimonials.length}</span><button aria-label="Next testimonial" onClick={next}><ArrowRight size={18} /></button></div></div><article className="testimonial-quote" aria-live="polite"><span className="quote-mark">“</span><blockquote>{item.quote}</blockquote><div className="testimonial-person"><span>{item.initials}</span><div><strong>{item.name}</strong><small>{item.detail} · Sample content</small></div></div><div className="testimonial-dots">{testimonials.map((review, index) => <button key={review.name} onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} aria-current={active === index}>{active === index ? <span /> : null}</button>)}</div></article></div></section>
}

export function FaqSection() {
  const [open, setOpen] = useState(0)
  return <section className="section faq-section"><div className="container faq-layout"><div><span className="section-kicker">A few helpful answers</span><h2 className="section-heading">Good questions deserve clear answers.</h2><p className="section-copy">Still wondering about something? Our team is just a call away.</p><a className="text-link" href="tel:+919876543210">Talk to our team <Phone size={15} /></a></div><div className="faq-list">{faqs.map((faq, index) => <article className={`faq-item${open === index ? ' faq-item--open' : ''}`} key={faq.question}><button aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}><span>{faq.question}</span><span className="faq-toggle">{open === index ? <X size={16} /> : <ArrowRight size={16} />}</span></button>{open === index && <p>{faq.answer}</p>}</article>)}</div></div></section>
}

export function EmergencyCTA() {
  return <section className="emergency-band"><div className="container emergency-inner"><div className="emergency-symbol"><Siren size={25} /></div><div className="emergency-copy"><span>NEED MEDICAL ASSISTANCE?</span><h2>We're here. Any time.</h2><p>Emergency services are available 24/7.</p></div><div className="emergency-actions"><a className="emergency-phone" href="tel:+919876543210"><span>Emergency line</span><strong>+91 98765 43210</strong></a><a className="button button--white" href="https://maps.google.com/?q=42+Wellness+Avenue+Hyderabad" target="_blank" rel="noreferrer">Get directions <MapPin size={16} /></a></div></div></section>
}

export function ContactSection() {
  return <section className="section contact-section"><div className="container contact-layout"><div className="contact-copy"><span className="section-kicker">We're easy to reach</span><h2 className="section-heading">Your next step starts with a conversation.</h2><p className="section-copy">Whether you are planning a visit or just have a question, our team is ready to help.</p><div className="contact-details"><a href="tel:+919876543210"><span className="contact-detail-icon"><Phone size={17} /></span><span><small>Call us, any time</small><strong>+91 98765 43210</strong></span></a><a href="mailto:hello@medicarehospital.in"><span className="contact-detail-icon"><MessageCircle size={17} /></span><span><small>Write to us</small><strong>hello@medicarehospital.in</strong></span></a><div><span className="contact-detail-icon"><MapPin size={17} /></span><span><small>Find the hospital</small><strong>{hospitalAddress}</strong></span></div></div><div className="map-placeholder"><div className="map-grid" /><span className="map-pin"><MapPin size={23} /></span><span className="map-label">MEDICARE HOSPITAL <small>Jubilee Hills, Hyderabad</small></span><a href="https://maps.google.com/?q=42+Wellness+Avenue+Hyderabad" target="_blank" rel="noreferrer" aria-label="Open MediCare Hospital in maps"><ArrowUpRight size={17} /></a></div></div><div className="contact-form-wrap"><div className="contact-form-heading"><span className="icon-box"><CircleHelp size={20} /></span><div><h3>How can we help?</h3><p>We usually respond within one working day.</p></div></div><ContactForm /></div></div></section>
}

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', updateVisibility, { passive: true })
    updateVisibility()
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return visible ? <button className="scroll-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top"><ArrowUpRight size={19} /></button> : null
}