import { Link } from 'react-router-dom'
import { ArrowRight, Clock3, HeartPulse, MapPin, Phone } from 'lucide-react'
import AppointmentForm from '../components/AppointmentForm.jsx'
import {
  AboutSection, ContactSection, DepartmentsSection, DoctorsSection, EmergencyCTA,
  FacilitiesSection, ServiceCards, WhyChooseUs,
} from '../components/HomeSections.jsx'

function PageIntro({ kicker, title, copy }) {
  return <section className="inner-hero"><div className="container inner-hero__content"><span className="section-kicker">{kicker}</span><h1>{title}</h1><p>{copy}</p></div></section>
}

export function AboutPage() {
  return <><PageIntro kicker="A little about us" title="Care should feel like care." copy="A hospital for the moments that matter, built on trusted medicine and the belief that how we care is part of the outcome." /><AboutSection /><WhyChooseUs /><FacilitiesSection /><EmergencyCTA /></>
}

export function DepartmentsPage() {
  return <><PageIntro kicker="Care, by specialty" title="The right expertise, all in one place." copy="Explore our specialist departments and find the kind of care that feels right for you." /><DepartmentsSection filterable /><div className="department-note container"><span className="icon-box"><HeartPulse size={21} /></span><div><h2>Not sure where to start?</h2><p>Our care team can help guide you to the right specialist.</p></div><a className="button" href="tel:+919876543210">Talk to our team <Phone size={16} /></a></div></>
}

export function DoctorsPage() {
  return <><PageIntro kicker="People behind your care" title="Meet the people who listen first." copy="Get to know our doctors, explore their specialties, and find a time that works for you." /><DoctorsSection filterable /><section className="doctor-availability"><div className="container doctor-availability__inner"><span><Clock3 size={18} /> Need help finding the right specialist?</span><Link className="text-link" to="/appointment">Let us help <ArrowRight size={16} /></Link></div></section></>
}

export function ServicesPage() {
  return <><PageIntro kicker="Here for the whole journey" title="Care that meets you where you are." copy="From preventive screenings to round-the-clock emergency care, our services support your health at every step." /><section className="section"><div className="container"><ServiceCards /></div></section><WhyChooseUs /><EmergencyCTA /></>
}

export function AppointmentPage() {
  return <><PageIntro kicker="Your care starts here" title="Let's find a time for you." copy="Tell us a little about what you need. A member of our care team will be in touch to confirm your visit." /><section className="section appointment-page"><div className="container appointment-layout"><div className="appointment-aside"><span className="section-kicker">Simple, personal, secure</span><h2 className="section-heading">A good first step can change a lot.</h2><p className="section-copy">Choose your preferred department and time. Our team will take care of the details with you.</p><div className="appointment-points"><p><span><CheckMark /></span>Choose a doctor or let us match you</p><p><span><CheckMark /></span>We'll call to confirm your time</p><p><span><CheckMark /></span>Your details stay confidential</p></div><div className="appointment-help"><span className="appointment-help__icon"><Phone size={18} /></span><span><small>Prefer to speak with us?</small><a href="tel:+919876543210">+91 98765 43210</a></span></div></div><div className="appointment-form-wrap"><div className="appointment-form-heading"><span className="form-step">01</span><div><h2>Appointment request</h2><p>All fields marked with a label are required.</p></div></div><AppointmentForm /></div></div></section></>
}

function CheckMark() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 10 3.2 3.2L15 6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export function ContactPage() {
  return <><PageIntro kicker="We're easy to reach" title="Let's start a conversation." copy="A question, a visit, or a little help finding your way around. Our team is here for you." /><ContactSection /><section className="contact-hours"><div className="container contact-hours__inner"><div><Clock3 size={20} /><span><strong>Emergency department</strong><small>Open 24 hours, every day</small></span></div><div><MapPin size={20} /><span><strong>Outpatient clinics</strong><small>Monday–Saturday, 8:00 AM–8:00 PM</small></span></div><a href="tel:+919876543210"><Phone size={17} />+91 98765 43210</a></div></section></>
}