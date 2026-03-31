import { Link } from 'react-router-dom'
import './About.css'

const HERO_IMG = 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1600&q=80'
const FOUNDER_IMG = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80'
const FIELD_IMG = 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=900&q=80'

const PARTNERS = [
  { name: 'YWAM', desc: 'Youth With A Mission' },
  { name: 'UofN', desc: 'University of the Nations' },
  { name: "Samaritan's Purse", desc: 'Global Relief & Development' },
  { name: 'Global Health Partners', desc: 'Healthcare in Mission' },
]

const VALUES = [
  {
    title: 'Faith-Rooted',
    body: 'We serve because of who God is and what He has done. Our work is an overflow of the gospel, not a substitute for it.',
  },
  {
    title: 'Relational',
    body: 'We don\'t parachute in. We build trust, train together, and walk alongside leaders for the long haul.',
  },
  {
    title: 'Multiplicative',
    body: 'Every leader we train trains others. We\'re not building a program — we\'re starting a movement.',
  },
  {
    title: 'Excellent',
    body: 'The nations deserve our best. We bring clinical rigor, spiritual depth, and operational excellence to everything we do.',
  },
]

export default function About() {
  return (
    <div className="about-page">

      <section className="page-hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content fade-up">
          <p className="section-label" style={{ color: 'var(--cream)' }}>About</p>
          <h1 className="page-hero__title">Our Story &amp;<br /><em>Our Why</em></h1>
        </div>
      </section>

      {/* ORIGIN STORY — placeholder for founder content */}
      <section className="origin">
        <div className="container origin__inner">
          <div className="origin__text">
            <p className="section-label">How It Started</p>
            <div className="divider" />
            <h2 className="section-title">Born Out of a Burden<br />for the Nations</h2>
            <p className="section-body">
              Table of Nations began with a simple conviction: too many people in the world's most underserved communities lack both healthcare and hope — and too many trained believers don't know how to bring both together.
            </p>
            <p className="section-body" style={{ marginTop: '1rem' }}>
              We exist to close that gap. By equipping healthcare workers and missionaries with the tools, training, and support they need — and then sending them — we're building a movement of leaders who heal and proclaim.
            </p>
            <blockquote className="scripture" style={{ marginTop: '1.75rem' }}>
              "He has sent me to proclaim good news to the poor… to set at liberty those who are oppressed." — Luke 4:18
            </blockquote>
          </div>
          <div className="origin__founder">
            <div
              className="founder-img"
              style={{ backgroundImage: `url(${FOUNDER_IMG})` }}
            />
            <div className="founder-card">
              <h3>The Founder</h3>
              <p className="founder-role">Founder & Executive Director</p>
              {/* TODO: Replace with your bio */}
              <p className="founder-bio">
                [Your story goes here. Share your background, your call, what led you to start Table of Nations, and what drives you every day. Be personal — donors give to people, not just organizations.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <p className="section-label">What We Believe</p>
            <div className="divider" style={{ margin: '0 auto 1rem' }} />
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className="value-card">
                <span className="value-number">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIELD IMAGE BREAK */}
      <div
        className="full-bleed-img"
        style={{ backgroundImage: `url(${FIELD_IMG})` }}
      >
        <div className="full-bleed-img__overlay" />
        <div className="container full-bleed-img__text">
          <p className="section-label" style={{ color: 'var(--cream)' }}>Our Reach</p>
          <h2 className="section-title light">
            From Training Rooms<br />to the Field
          </h2>
          <p className="section-body light">
            We've trained leaders across multiple continents. Each one carries the mission forward in their community — multiplying far beyond what we could do alone.
          </p>
        </div>
      </div>

      {/* PARTNERS */}
      <section className="partners">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <p className="section-label">Who We Work With</p>
            <div className="divider" style={{ margin: '0 auto 1rem' }} />
            <h2 className="section-title">Strategic Partners</h2>
            <p className="section-body" style={{ margin: '0 auto' }}>
              We don't work alone. These organizations share our vision for a world where healthcare and the gospel go hand in hand.
            </p>
          </div>
          <div className="partner-grid">
            {PARTNERS.map((p, i) => (
              <div key={i} className="partner-tile">
                <span className="partner-name">{p.name}</span>
                <span className="partner-desc">{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="about-cta">
        <div className="container text-center">
          <p className="section-label">Ready to Join?</p>
          <div className="divider" style={{ margin: '0 auto 1rem' }} />
          <h2 className="section-title">Be Part of<br />What God Is Doing</h2>
          <p className="section-body" style={{ margin: '0 auto 2.5rem' }}>
            Whether you give, serve, or pray — there's a seat at this table for you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/give" className="btn-primary">Support the Mission</Link>
            <Link to="/get-involved" className="btn-dark">Get Involved</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
