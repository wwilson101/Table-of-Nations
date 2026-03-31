import { Link } from 'react-router-dom'
import './OurWork.css'

const HERO_IMG = 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1600&q=80'
const ULTRASOUND_IMG = 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80'
const COMMUNITY_IMG = 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80'
const TRAINING_IMG = 'https://images.unsplash.com/photo-1582560475093-ba66accbc7f4?w=800&q=80'

export default function OurWork() {
  return (
    <div className="our-work">

      <section className="page-hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className="page-hero__overlay" />
        <div className="container page-hero__content fade-up">
          <p className="section-label" style={{ color: 'var(--cream)' }}>Our Work</p>
          <h1 className="page-hero__title">What We Do<br /><em>& Why It Matters</em></h1>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="mission-block">
        <div className="container mission-block__inner">
          <div>
            <p className="section-label">Our Mission</p>
            <div className="divider" />
            <h2 className="section-title">Healthcare as Ministry.<br />Training as Mission.</h2>
          </div>
          <div>
            <p className="section-body">
              Table of Nations exists at the intersection of healthcare, faith, and global need. We believe that healing hands and a heart for the nations, together, can change communities from the inside out.
            </p>
            <p className="section-body" style={{ marginTop: '1rem' }}>
              Our work is hands-on. Our approach is relational. And our goal is multiplication — trained leaders who go and train others.
            </p>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="focus-areas">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <p className="section-label">Focus Areas</p>
            <div className="divider" style={{ margin: '0 auto 1rem' }} />
            <h2 className="section-title">Three Pillars of Work</h2>
          </div>

          <div className="work-cards">
            <div className="work-card">
              <div className="work-card__img" style={{ backgroundImage: `url(${ULTRASOUND_IMG})` }} />
              <div className="work-card__body">
                <span className="work-card__tag">Clinical Training</span>
                <h3>Point-of-Care Ultrasound</h3>
                <p>We specialize in hands-on ultrasound training for healthcare workers operating in low-resource settings — bringing life-saving diagnostic skills to the field.</p>
                <ul className="work-list">
                  <li>Portable ultrasound for remote settings</li>
                  <li>FAST exam, obstetric, and cardiac protocols</li>
                  <li>Train-the-trainer model for multiplication</li>
                </ul>
              </div>
            </div>

            <div className="work-card">
              <div className="work-card__img" style={{ backgroundImage: `url(${COMMUNITY_IMG})` }} />
              <div className="work-card__body">
                <span className="work-card__tag">Community Health</span>
                <h3>Serving Underserved Communities</h3>
                <p>We partner with local leaders and organizations to bring healthcare to communities that have been forgotten — because every person deserves dignity and care.</p>
                <ul className="work-list">
                  <li>Primary care support in the field</li>
                  <li>Maternal and child health focus</li>
                  <li>Integrated spiritual and physical care</li>
                </ul>
              </div>
            </div>

            <div className="work-card">
              <div className="work-card__img" style={{ backgroundImage: `url(${TRAINING_IMG})` }} />
              <div className="work-card__body">
                <span className="work-card__tag">Leadership Development</span>
                <h3>Equipping the Next Generation</h3>
                <p>Training isn't a one-time event — it's a movement. We invest deeply in leaders who will take what they learn and multiply it in their communities.</p>
                <ul className="work-list">
                  <li>Cohort-based leadership training</li>
                  <li>Mentorship & ongoing support</li>
                  <li>Partnership with YWAM & global ministries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BAND */}
      <section className="why-band">
        <div className="container">
          <div className="why-band__inner">
            <div className="why-item">
              <span className="why-number">2.0B</span>
              <span className="why-label">People lack access to basic healthcare</span>
            </div>
            <div className="why-item">
              <span className="why-number">400M</span>
              <span className="why-label">Cannot afford essential health services</span>
            </div>
            <div className="why-item">
              <span className="why-number">1</span>
              <span className="why-label">Trained leader changes everything</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work-cta">
        <div className="container text-center">
          <p className="section-label">Be Part of the Story</p>
          <div className="divider" style={{ margin: '0 auto 1.5rem' }} />
          <h2 className="section-title">Your Support Sends Leaders</h2>
          <p className="section-body" style={{ margin: '0 auto 2.5rem' }}>
            Every gift funds real training, real deployment, real transformation. See how your giving makes a difference.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/give" className="btn-primary">Give Now</Link>
            <Link to="/get-involved" className="btn-dark">Get Involved</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
