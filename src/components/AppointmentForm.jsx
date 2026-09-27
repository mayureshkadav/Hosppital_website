import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { departments, doctors } from '../data/content.js'

function AppointmentForm() {
  const [department, setDepartment] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const availableDoctors = doctors.filter((doctor) => !department || doctor.specialty === department)
  const today = new Date().toLocaleDateString('en-CA')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      form.reset()
      setDepartment('')
    }, 650)
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      {submitted && <div className="status-message" role="status"><CheckCircle2 size={18} /> Your request is in. Our care team will contact you shortly to confirm your appointment.</div>}
      <div className="form-grid">
        <div className="form-field"><label htmlFor="patient-name">Patient name</label><input id="patient-name" name="name" autoComplete="name" placeholder="Your full name" required minLength={2} /></div>
        <div className="form-field"><label htmlFor="patient-email">Email address</label><input id="patient-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></div>
        <div className="form-field"><label htmlFor="patient-phone">Phone number</label><input id="patient-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" required pattern="[+()0-9 -]{8,}" title="Enter a valid phone number" /></div>
        <div className="form-field"><label htmlFor="patient-department">Department</label><select id="patient-department" name="department" required value={department} onChange={(event) => setDepartment(event.target.value)}><option value="">Choose a department</option>{departments.map((item) => <option key={item.name}>{item.name}</option>)}</select></div>
        <div className="form-field"><label htmlFor="patient-doctor">Preferred doctor</label><select id="patient-doctor" name="doctor" defaultValue=""><option value="">Any available doctor</option>{availableDoctors.map((doctor) => <option key={doctor.name}>{doctor.name}</option>)}</select></div>
        <div className="form-field"><label htmlFor="patient-date">Preferred date</label><input id="patient-date" name="date" type="date" min={today} required /></div>
        <div className="form-field"><label htmlFor="patient-time">Preferred time</label><select id="patient-time" name="time" required defaultValue=""><option value="">Select a time</option><option>09:00 AM – 12:00 PM</option><option>12:00 PM – 03:00 PM</option><option>03:00 PM – 06:00 PM</option></select></div>
        <div className="form-field form-field--full"><label htmlFor="patient-message">Anything we should know? <span>(optional)</span></label><textarea id="patient-message" name="message" placeholder="A short note for your care team" rows="3" /></div>
      </div>
      <div className="form-submit-row"><p>Your information stays private and is only shared with your care team.</p><button className="button" type="submit" disabled={submitting}>{submitting ? 'Sending request…' : 'Request appointment'} <ArrowRight size={16} /></button></div>
    </form>
  )
}

export default AppointmentForm