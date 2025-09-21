// Exportações centralizadas dos componentes
export { default as Navbar } from './Navbar'
export { default as Hero } from './Hero'
export { default as About } from './About'
export { default as Services } from './Services'
export { default as Testimonials } from './Testimonials'
export { default as Contact } from './Contact'
export { default as Footer } from './Footer'
export { AnimatedSection } from './AnimatedSection'
export { default as ServiceModal } from './ServiceModal'

// Re-exportar tipos úteis
export type { Service } from './Services'
export type { Testimonial } from './Testimonials'
export type { ServiceData } from './ServiceModal'