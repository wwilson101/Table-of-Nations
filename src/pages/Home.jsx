import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Globe, Users, BookOpen } from 'lucide-react'
import './Home.css'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80'
const COMMUNITY_IMAGE = 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=900&q=80'
const MEDICAL_IMAGE = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80'

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="hero__overlay" />
        <div className="container hero__content fade-up">
          <p className="section-label" style={{ color: 'var(--cream)' }}>Healthcare · Faith · Nations</p>
          <h1 className="hero__title">
            Equipping Leaders<br />
            <em>for Every Nation</em>
          </h1>
          <p className="hero__sub">
            We train and send healthcare workers and missionaries to serve in the world's most underserved communities — because every person deserves access to both healing and hope.
          </p>
          <div className="hero__actions">
            <Link to="/give" className="btn-primary">Give to Equip & Send</Link>
            <Link to="/our-work" className="btn-outline">See Our Work</Link>
          </div>
        </div>

        <div className="hero__scroll-hint">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="mission-strip">
        <div className="container mission-strip__inner">
          <div className="mission-stat">
            <span className="mission-stat__num">3</span>
            <span className="mission-stat__label">Continents Reached</span>
          </div>
          <div className="mission-divider" />
          <div className="mission-stat">
            <span className="mission-stat__num">100+</span>
            <span className="mission-stat__label">Leaders Trained</span>
          </div>
          <div className="mission-divider" />
          <div className="mission-stat">
            <span className="mission-stat__num">∞</span>
            <span className="mission-stat__label">Lives Impacted</span>
          </div>
          <div className="mission-divider" />
          <div className="mission-stat">
            <span className="mission-stat__num">1</span>
            <span className="mission-stat__label">Mission: The Nations</span>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="what-we-do">
        <div className="container">
          <div className="what-we-do__header text-center">
            <p className="section-label">What We Do</p>
            <div className="divider" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="section-title">Where Do You Fit Into This?</h2>
            <p className="section-body" style={{ margin: '0 auto' }}>
              Table of Nations bridges the gap between healthcare expertise, faith, and global need. Whether you give, train, or serve — there's a place for you in this mission.
            </p>
          </div>

          <div className="pillars">
            <div className="pillar">
              <div className="pillar__icon">
                <BookOpen size={28} />
              </div>
              <h3>Equip</h3>
              <p>Hands-on training in ultrasound, primary care, and community health — taught through a faith-based, relational approach.</p>
              <Link to="/our-work" className="pillar__link">Learn more <ArrowRight size={14} /></Link>
            </div>
            <div className="pillar">
              <div className="pillar__icon">
                <Globe size={28} />
              </div>
              <h3>Send</h3>
              <p>We deploy trained leaders into underserved communities worldwide — multiplying impact where it's needed most.</p>
              <Link to="/our-work" className="pillar__link">Learn more <ArrowRight size={14} /></Link>
            </div>
            <div className="pillar">
              <div className="pillar__icon">
                <Users size={28} />
              </div>
              <h3>Multiply</h3>
              <p>Every leader we train trains others. Our model is built for multiplication — not just presence, but lasting transformation.</p>
              <Link to="/get-involved" className="pillar__link">Get involved <ArrowRight size={14} /></Link>
            </div>
            <div className="pillar">
              <div className="pillar__icon">
                <Heart size={28} />
              </div>
              <h3>Partner</h3>
              <p>Your financial partnership directly equips and sends leaders. You can trust exactly where your gift goes and why it matters.</p>
              <Link to="/give" className="pillar__link">Give now <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT — WHO WE SERVE */}
      <section className="split-section">
        <div className="split-section__image" style={{ backgroundImage: `url(${MEDICAL_IMAGE})` }} />
        <div className="split-section__content">
          <p className="section-label">Who We Serve</p>
          <div className="divider" />
          <h2 className="section-title">Healthcare Meets<br />the Harvest Field</h2>
          <p className="section-body">
            We work at the intersection of healthcare and missions — training workers who bring both physical healing and spiritual hope to communities that have neither.
          </p>
          <ul className="check-list">
            <li>Healthcare workers ready to serve cross-culturally</li>
            <li>Missionaries needing medical training</li>
            <li>Ministry leaders in underserved regions</li>
            <li>Organizations seeking strategic health partners</li>
          </ul>
          <Link to="/get-involved" className="btn-dark" style={{ marginTop: '2rem', display: 'inline-block' }}>Find Your Place</Link>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <p className="section-label" style={{ color: 'var(--cream)' }}>Join the Mission</p>
            <h2 className="section-title light">
              Ready to Make<br />an Eternal Impact?
            </h2>
            <p className="section-body light">
              Your generosity equips a leader. That leader heals a community. That community changes a nation. It starts with you.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link to="/give" className="btn-primary" style={{ fontSize: '1rem', padding: '1.1rem 2.5rem' }}>
              Support the Mission
            </Link>
            <Link to="/get-involved" className="btn-outline">Get Involved</Link>
          </div>
        </div>
      </section>

      {/* COMMUNITY IMAGE */}
      <section className="community-section">
        <div className="container community-section__inner">
          <div className="community-section__text">
            <p className="section-label">Why It Matters</p>
            <div className="divider" />
            <h2 className="section-title">Your Gift Is a Bridge<br />to the Nations</h2>
            <p className="section-body">
              Billions live without access to basic healthcare. Millions serve faithfully in missions but lack the medical skills to help. We close that gap — and your partnership makes it possible.
            </p>
            <blockquote className="scripture">
              "Go therefore and make disciples of all nations." — Matthew 28:19
            </blockquote>
            <Link to="/about" className="btn-dark" style={{ marginTop: '2rem', display: 'inline-block' }}>Our Story</Link>
          </div>
          <div
            className="community-section__image"
            style={{ backgroundImage: `url(${COMMUNITY_IMAGE})` }}
          />
        </div>
      </section>

    </div>
  )
}
