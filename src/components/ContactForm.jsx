import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

function ContactForm() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    window.setTimeout(() => {
      setStatus('sent')
      form.reset()
    }, 500)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {status === 'sent' && <div className="status-message" role="status"><CheckCircle2 size={18} /> Thanks for reaching out. Our team will be in touch soon.</div>}
      <div className="form-field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="Your full name" required minLength={2} /></div>
      <div className="form-field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></div>
      <div className="form-field"><label htmlFor="contact-subject">How can we help?</label><select id="contact-subject" name="subject" defaultValue=""><option value="" disabled>Choose a topic</option><option>Appointments</option><option>Billing and insurance</option><option>Medical records</option><option>General enquiry</option></select></div>
      <div className="form-field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" placeholder="Tell us a little more" required minLength={10} /></div>
      <button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'} <Send size={15} /></button>
    </form>
  )
}

export default ContactForm