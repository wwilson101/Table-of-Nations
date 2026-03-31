import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send } from 'lucide-react'
import './GetInvolved.css'

const HERO_IMG = 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=80'

const ROLES = [
  {
    id: 'donor',
    title: 'Financial Partner',
    icon: '💛',
    who: 'Faith-driven givers who want to know their donation transforms lives.',
    how: 'Monthly or one-time giving that equips and sends real leaders.',
    cta: 'Give Now',
    href: '/give',
  },
  {
    id: 'trainee',
    title: 'Trainee / Participant',
    icon: '🩺',
    who: 'Healthcare workers, missionaries, and ministry leaders ready to serve cross-culturally.',
    how: 'Apply for our next training cohort and get equipped to serve.',
    cta: 'Apply to Train',
    href: '#form',
  },
  {
    id: 'partner',
    title: 'Strategic Partner',
    icon: '🤝',
    who: 'Organizations like YWAM, Samaritan\'s Purse, university programs, and global health groups.',
    how: 'Co-deploy teams, share resources, and multiply impact together.',
    cta: 'Partner With Us',
    href: '#form',
  },
]

export default function GetInvolved() {
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '', newsletter: false })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire to backend / Resend email / CRM
    setSubmitted(true)
  }

  return (
    <div className="get-involved">

      <section className="page-hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content fade-up">
          <p className="section-label" style={{ color: 'var(--cream)' }}>Get Involved</p>
          <h1 className="page-hero__title">Find Your Place<br /><em>in the Mission</em></h1>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="join-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <p className="section-label">You Belong Here</p>
            <div className="divider" style={{ margin: '0 auto 1rem' }} />
            <h2 className="section-title">Three Ways to Join</h2>
            <p className="section-body" style={{ margin: '0 auto' }}>
              Whether you give, serve, or partner — there's a place for you in this mission.
            </p>
          </div>

          <div className="role-cards">
            {ROLES.map(role => (
              <div key={role.id} className="role-card">
                <span className="role-icon">{role.icon}</span>
                <h3>{role.title}</h3>
                <p className="role-who"><strong>Who:</strong> {role.who}</p>
                <p className="role-how"><strong>How:</strong> {role.how}</p>
                <Link to={role.href} className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                  {role.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / INTEREST FORM */}
      <section className="form-section" id="form">
        <div className="container form-section__inner">
          <div className="form-section__text">
            <p className="section-label">Get in Touch</p>
            <div className="divider" />
            <h2 className="section-title">Tell Us How<br />You Want to Help</h2>
            <p className="section-body">
              Not sure where you fit? Fill out the form and we'll connect you with the right next step. No pressure — just a conversation.
            </p>
          </div>

          <div className="form-section__form">
            {submitted ? (
              <div className="form-success">
                <span className="form-success__icon">✦</span>
                <h3>You're In!</h3>
                <p>Thank you for reaching out. We'll be in touch within 2–3 business days.</p>
                <Link to="/give" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                  Give While You Wait
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="role">I'm interested in...</label>
                  <select id="role" name="role" value={form.role} onChange={handleChange}>
                    <option value="">Select your role</option>
                    <option value="donor">Giving / Financial Partnership</option>
                    <option value="trainee">Training / Participating</option>
                    <option value="partner">Organizational Partnership</option>
                    <option value="prayer">Prayer Support</option>
                    <option value="other">Not Sure Yet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Tell Us About Yourself</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your background, questions, or anything you'd like us to know..."
                  />
                </div>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={form.newsletter}
                    onChange={handleChange}
                  />
                  <span>Sign me up for the Table of Nations newsletter</span>
                </label>
                <button type="submit" className="btn-primary form-submit">
                  <Send size={16} />
                  Send My Interest
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  )
}
