import { useState } from 'react'
import { Heart, Shield, Globe } from 'lucide-react'
import './Give.css'

const HERO_IMG = 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=80'

const TIERS = [
  {
    amount: 25,
    label: 'Seed Giver',
    impact: 'Provides training materials for one leader in the field.',
  },
  {
    amount: 75,
    label: 'Equipper',
    impact: 'Covers one day of hands-on ultrasound training.',
    featured: true,
  },
  {
    amount: 150,
    label: 'Sender',
    impact: 'Supports one week of a missionary's deployment costs.',
  },
  {
    amount: 500,
    label: 'Nation Builder',
    impact: 'Fully funds one leader's training cohort participation.',
  },
]

export default function Give() {
  const [custom, setCustom] = useState('')
  const [selected, setSelected] = useState(75)
  const [freq, setFreq] = useState('monthly')

  const amount = custom ? Number(custom) : selected

  return (
    <div className="give-page">

      <section className="give-hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
        <div className="give-hero__overlay" />
        <div className="container give-hero__content fade-up">
          <p className="section-label" style={{ color: 'var(--cream)' }}>Support the Mission</p>
          <h1 className="give-hero__title">Your Gift<br /><em>Changes Nations</em></h1>
          <p className="give-hero__sub">
            Every dollar equips a healthcare leader. Every leader heals a community. That's the math of generosity.
          </p>
        </div>
      </section>

      {/* GIVING WIDGET */}
      <section className="giving-section">
        <div className="container giving-section__inner">

          <div className="giving-widget">
            <h2 className="giving-widget__title">Give to Equip &amp; Send</h2>

            {/* Frequency */}
            <div className="freq-toggle">
              <button
                className={freq === 'monthly' ? 'active' : ''}
                onClick={() => setFreq('monthly')}
              >
                Monthly
              </button>
              <button
                className={freq === 'one-time' ? 'active' : ''}
                onClick={() => setFreq('one-time')}
              >
                One-Time
              </button>
            </div>

            {/* Tier buttons */}
            <div className="tier-grid">
              {TIERS.map(tier => (
                <button
                  key={tier.amount}
                  className={`tier-btn ${selected === tier.amount && !custom ? 'active' : ''} ${tier.featured ? 'tier-btn--featured' : ''}`}
                  onClick={() => { setSelected(tier.amount); setCustom('') }}
                >
                  {tier.featured && <span className="tier-badge">Most Popular</span>}
                  <span className="tier-amount">${tier.amount}</span>
                  <span className="tier-label">{tier.label}</span>
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="custom-amount">
              <label htmlFor="custom">Or enter a custom amount ($)</label>
              <div className="custom-input-wrap">
                <span className="custom-prefix">$</span>
                <input
                  type="number"
                  id="custom"
                  value={custom}
                  onChange={e => { setCustom(e.target.value); setSelected(null) }}
                  placeholder="Other amount"
                  min={1}
                />
              </div>
            </div>

            {/* Impact statement */}
            {amount > 0 && (
              <div className="impact-statement">
                <Heart size={16} />
                <span>
                  {custom
                    ? `Your gift of $${amount} goes directly to equipping and sending leaders.`
                    : TIERS.find(t => t.amount === selected)?.impact
                  }
                </span>
              </div>
            )}

            {/* Checkout placeholder — wire to Stripe */}
            <button
              className="btn-primary give-btn"
              onClick={() => alert('TODO: Connect to Stripe Checkout')}
            >
              Give {amount > 0 ? `$${amount}` : ''} {freq === 'monthly' ? '/ month' : 'Now'}
            </button>

            <p className="give-note">
              <Shield size={13} />
              Secure giving. Table of Nations is a registered nonprofit. Your gift may be tax-deductible.
            </p>
          </div>

          <div className="giving-trust">
            <p className="section-label">Why Give Here</p>
            <div className="divider" />
            <h2 className="section-title">You Can Trust<br />Where This Goes</h2>
            <p className="section-body">
              We know that trust is earned. Here's our commitment to you as a financial partner.
            </p>
            <div className="trust-items">
              <div className="trust-item">
                <Globe size={22} />
                <div>
                  <h4>Field-First Funding</h4>
                  <p>The majority of every gift goes directly to training and deployment — not overhead.</p>
                </div>
              </div>
              <div className="trust-item">
                <Shield size={22} />
                <div>
                  <h4>Full Transparency</h4>
                  <p>Partners receive regular updates showing exactly how their gifts are used.</p>
                </div>
              </div>
              <div className="trust-item">
                <Heart size={22} />
                <div>
                  <h4>Faith-Rooted Accountability</h4>
                  <p>Our stewardship is grounded in Scripture and overseen by a committed board.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
