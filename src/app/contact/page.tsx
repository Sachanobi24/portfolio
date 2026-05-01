'use client'
import { useState } from 'react'
import FadeIn from '@/components/FadeIn'
import { config } from '@/data/config'

export default function ContactPage() {
  const { identity } = config
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Si pas d'URL Formspree configurée, fallback mailto
    const formspreeUrl = (config as any).formspreeUrl
    if (!formspreeUrl) {
      if (!identity.email) {
        alert('Ajoutez votre email dans src/data/config.ts pour activer le formulaire.')
        return
      }
      const subject = encodeURIComponent(form.sujet || 'Contact depuis portfolio')
      const body = encodeURIComponent(`Nom : ${form.nom}\nEmail : ${form.email}\n\n${form.message}`)
      window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`
      setStatus('ok')
      setForm({ nom: '', email: '', sujet: '', message: '' })
      return
    }

    // Envoi direct via Formspree
    setStatus('sending')
    try {
      const res = await fetch(formspreeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.nom,
          email: form.email,
          subject: form.sujet,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('ok')
        setForm({ nom: '', email: '', sujet: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="page-hero-label">09 / Contact</p>
          <h1>Me<br />Contacter</h1>
          <p>Une opportunité de stage, d&apos;alternance ou juste envie d&apos;échanger ? N&apos;hésitez pas !</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Formulaire */}
            <FadeIn>
              <h2 className="section-title">Envoyer un message</h2>

              {status === 'ok' && (
                <div style={{
                  background: 'rgba(127,255,0,0.08)',
                  border: '1px solid rgba(127,255,0,0.3)',
                  borderRadius: 'var(--radius)',
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8rem',
                  color: 'var(--accent)',
                }}>
                  ✓ Message envoyé avec succès ! Je vous répondrai dès que possible.
                </div>
              )}

              {status === 'error' && (
                <div style={{
                  background: 'rgba(255,50,50,0.08)',
                  border: '1px solid rgba(255,50,50,0.3)',
                  borderRadius: 'var(--radius)',
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8rem',
                  color: '#ff5050',
                }}>
                  ✗ Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contact-nom">Nom complet <span style={{ color: 'var(--secondary)' }}>*</span></label>
                  <input type="text" id="contact-nom" name="nom" placeholder="John Doe" required
                    value={form.nom} onChange={handleChange} autoComplete="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Adresse email <span style={{ color: 'var(--secondary)' }}>*</span></label>
                  <input type="email" id="contact-email" name="email" placeholder="john@exemple.fr" required
                    value={form.email} onChange={handleChange} autoComplete="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-sujet">Sujet</label>
                  <input type="text" id="contact-sujet" name="sujet" placeholder="Proposition de stage, question..."
                    value={form.sujet} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message <span style={{ color: 'var(--secondary)' }}>*</span></label>
                  <textarea id="contact-message" name="message" placeholder="Votre message..." required
                    value={form.message} onChange={handleChange} />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ opacity: status === 'sending' ? 0.6 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </FadeIn>

            {/* Infos */}
            <FadeIn delay={150}>
              <h2 className="section-title">Informations</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>

                {identity.email && (
                  <div className="card" style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>📧</span>
                      <div>
                        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Email</p>
                        <a href={`mailto:${identity.email}`} style={{ fontSize: '0.9rem' }}>{identity.email}</a>
                      </div>
                    </div>
                  </div>
                )}

                <div className="card" style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>📍</span>
                    <div>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Localisation</p>
                      <p style={{ fontSize: '0.9rem' }}>{identity.ville || 'Avranches, Normandie, France'}</p>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>🎓</span>
                    <div>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Formation</p>
                      <p style={{ fontSize: '0.9rem' }}>BTS SIO option SISR</p>
                    </div>
                  </div>
                </div>
              </div>

              {(identity.linkedin || identity.github) && (
                <>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    Retrouvez-moi sur
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {identity.linkedin && (
                      <a href={identity.linkedin} target="_blank" rel="noopener noreferrer" className="card"
                        style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)' }}>
                        <span style={{ fontSize: '1.2rem' }}>💼</span>
                        <span style={{ fontSize: '0.9rem' }}>LinkedIn</span>
                        <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-display)' }}>→</span>
                      </a>
                    )}
                    {identity.github && (
                      <a href={identity.github} target="_blank" rel="noopener noreferrer" className="card"
                        style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)' }}>
                        <span style={{ fontSize: '1.2rem' }}>🐙</span>
                        <span style={{ fontSize: '0.9rem' }}>GitHub</span>
                        <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-display)' }}>→</span>
                      </a>
                    )}
                  </div>
                </>
              )}
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  )
}
