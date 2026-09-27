export const departments = [
  { name: 'Cardiology', icon: 'HeartPulse', description: 'Heart care that pairs advanced diagnostics with a deeply personal approach.' },
  { name: 'Neurology', icon: 'Brain', description: 'Expert care for conditions of the brain, spine, and nervous system.' },
  { name: 'Orthopedics', icon: 'Bone', description: 'Helping you move with confidence through every stage of recovery.' },
  { name: 'Pediatrics', icon: 'Baby', description: 'Thoughtful, family-centered care for every stage of childhood.' },
  { name: 'Dermatology', icon: 'ScanFace', description: 'Specialist care for healthy skin, hair, and nails.' },
  { name: 'Oncology', icon: 'Ribbon', description: 'Coordinated cancer care focused on the whole person.' },
  { name: 'General Medicine', icon: 'Stethoscope', description: 'Your first point of care for everyday health and prevention.' },
  { name: 'Gynecology', icon: 'Flower2', description: 'Compassionate, comprehensive care through every life chapter.' },
]

export const doctors = [
  { name: 'Dr. Ananya Mehta', specialty: 'Cardiology', experience: '14 years', image: 'photo-1559839734-2b71ea197ec2', initials: 'AM', availability: 'Today, 2:30 PM' },
  { name: 'Dr. Rohan Kapoor', specialty: 'Neurology', experience: '12 years', image: 'photo-1612349317150-e413f6a5b16d', initials: 'RK', availability: 'Tomorrow, 10:00 AM' },
  { name: 'Dr. Meera Nair', specialty: 'Pediatrics', experience: '10 years', image: 'photo-1594824476967-48c8b964273f', initials: 'MN', availability: 'Today, 4:15 PM' },
  { name: 'Dr. Arjun Rao', specialty: 'Orthopedics', experience: '16 years', image: 'photo-1622253692010-333f2da6031d', initials: 'AR', availability: 'Thu, 11:30 AM' },
  { name: 'Dr. Kavya Iyer', specialty: 'Dermatology', experience: '9 years', image: 'photo-1622902046580-2b47f47f5471', initials: 'KI', availability: 'Tomorrow, 3:00 PM' },
  { name: 'Dr. Sanjay Shah', specialty: 'General Medicine', experience: '18 years', image: 'photo-1582750433449-648ed127bb54', initials: 'SS', availability: 'Today, 1:00 PM' },
]

export const services = [
  { name: 'Emergency Care', icon: 'Siren', description: 'Rapid, round-the-clock support when every moment matters.' },
  { name: 'Diagnostic Services', icon: 'ScanLine', description: 'Clear answers through advanced imaging and diagnostics.' },
  { name: 'Laboratory', icon: 'TestTubeDiagonal', description: 'Accurate testing and timely results, all under one roof.' },
  { name: 'Pharmacy', icon: 'Pill', description: 'Trusted medicines and guidance from our in-house team.' },
  { name: 'Ambulance', icon: 'Ambulance', description: 'Prompt transfers with trained paramedics on board.' },
  { name: 'Health Checkups', icon: 'ClipboardPlus', description: 'Personalized preventive packages for every age.' },
  { name: 'ICU & Critical Care', icon: 'Activity', description: 'Specialist-led care supported by continuous monitoring.' },
  { name: 'Surgical Services', icon: 'Scissors', description: 'Modern operating theatres and coordinated recovery care.' },
]

export const facilities = [
  { name: 'Critical care, closely monitored', label: '01 / ICU', image: 'photo-1511174511562-5f7f18b874f8' },
  { name: 'Surgery with precision', label: '02 / Operation theatre', image: 'photo-1551076805-e1869033e561' },
  { name: 'Room to rest and recover', label: '03 / Private rooms', image: 'photo-1631049307264-da0ec9d70304' },
  { name: 'Imaging, made clearer', label: '04 / Diagnostics', image: 'photo-1584982751601-97dcc096659c' },
  { name: 'Care beyond the consultation', label: '05 / Pharmacy', image: 'photo-1576602976047-174e57a47881' },
  { name: 'Always ready to respond', label: '06 / Emergency', image: 'photo-1586773860418-d37222d8fce3' },
]

export const testimonials = [
  { quote: 'From the first conversation to my last follow-up, I felt like a person, not a number. The team made a difficult week feel manageable.', name: 'Priya S.', detail: 'Cardiology patient', initials: 'PS' },
  { quote: 'The doctors took time to explain every step, and the nursing team was wonderfully attentive. We felt supported as a family.', name: 'Vikram R.', detail: 'Patient family member', initials: 'VR' },
  { quote: 'Booking was simple, the clinic ran on time, and I left with a clear plan. Care that feels both modern and genuinely human.', name: 'Nisha K.', detail: 'Outpatient patient', initials: 'NK' },
]

export const faqs = [
  { question: 'How do I book an appointment?', answer: 'Use our online appointment form to choose a department, doctor, and preferred time. Our team will confirm your visit by phone or email.' },
  { question: 'Is emergency care available overnight?', answer: 'Yes. Our emergency department and ambulance service are available 24 hours a day, every day.' },
  { question: 'What should I bring to my first visit?', answer: 'Please bring a photo ID, any current prescriptions, relevant medical records, and your insurance details if applicable.' },
  { question: 'Can I choose a specific doctor?', answer: 'Absolutely. Browse our doctor directory, filter by specialty, and select the doctor that is right for you when booking.' },
]

export const quickActions = [
  { title: 'Book appointment', description: 'Find a time that works for you.', icon: 'CalendarDays', to: '/appointment', tone: 'mint' },
  { title: 'Find a doctor', description: 'Meet your care team.', icon: 'UserRoundSearch', to: '/doctors', tone: 'blue' },
  { title: 'Emergency care', description: 'Here when you need us most.', icon: 'Siren', to: 'tel:+919876543210', tone: 'coral' },
  { title: 'Contact hospital', description: 'We are happy to help.', icon: 'MessageCircle', to: '/contact', tone: 'sand' },
]

export const hospitalAddress = '42 Wellness Avenue, Jubilee Hills, Hyderabad, Telangana 500033'