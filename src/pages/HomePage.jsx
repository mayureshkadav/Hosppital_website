import {
  AboutSection, ContactSection, DepartmentsSection, DoctorsSection, EmergencyCTA,
  FaqSection, FacilitiesSection, Hero, QuickActions, ServicesSection,
  TestimonialsSection, WhyChooseUs,
} from '../components/HomeSections.jsx'

function HomePage() {
  return <>
    <Hero />
    <QuickActions />
    <AboutSection />
    <DepartmentsSection limit={4} />
    <DoctorsSection limit={3} />
    <ServicesSection limit={4} />
    <WhyChooseUs />
    <FacilitiesSection limit={3} />
    <TestimonialsSection />
    <FaqSection />
    <EmergencyCTA />
    <ContactSection />
  </>
}

export default HomePage