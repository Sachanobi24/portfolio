'use client'

import { useEffect, useState, useCallback } from 'react'

type Visit = {
  ip: string; page: string; device: string; browser: string
  referer: string; country: string; city: string; region: string; timestamp: string
}
type Stats = { visits: Visit[]; pageCounts: Record<string, number>; totalVisits: number }

const DEVICE_ICON: Record<string, string> = { mobile: '📱', tablet: '📟', desktop: '🖥️' }
const BROWSER_ICON: Record<string, string> = { Chrome: '🌐', Firefox: '🦊', Safari: '🧭', Edge: '🌀', unknown: '❓' }

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div style={{ border: '1px solid var(--border)', background: 'var(--bg-card)', padding: '24px', flex: '1', minWidth: '160px' }}>
      <div style={{ color: 'var(--primary)', fontSize: '10px', letterSpacing: '3px', marginBottom: '8px' }}>{label}</div>
      <div style={{ color: 'var(--text-main)', fontSize: '32px', fontWeight: 700, lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ color: 'var(--text-dim)', fontSize: '11px', marginTop: '6px' }}>{sub}</div>}
    </div>
  )
}

export default function AdminPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date())

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/stats')
      if (res.ok) { setStats(await res.json()); setLastRefresh(new Date()) }
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }, [])

  useEffect(() => {
    fetchStats()
    const interval = setInterval(fetchStats, 30000)
    return () => clearInterval(interval)
  }, [fetchStats])

  const deviceCounts = stats?.visits.reduce((acc: Record<string, number>, v) => {
    acc[v.device] = (acc[v.device] || 0) + 1; return acc
  }, {}) || {}

  const uniqueIPs = stats ? new Set(stats.visits.map((v) => v.ip)).size : 0

  const countryCounts = stats?.visits.reduce((acc: Record<string, number>, v) => {
    if (v.country !== 'Unknown') acc[v.country] = (acc[v.country] || 0) + 1; return acc
  }, {}) || {}
  const topCountry = Object.entries(countryCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || '—'

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}>

      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)' }}>
        <div>
          <div style={{ color: 'var(--primary)', fontSize: '10px', letterSpacing: '4px', marginBottom: '4px' }}>PORTFOLIO ANALYTICS</div>
          <div style={{ fontSize: '20px', fontWeight: 700 }}>Dashboard Visiteurs</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: 'var(--text-dim)', fontSize: '10px', letterSpacing: '2px' }}>DERNIÈRE MAJ</div>
          <div style={{ color: 'var(--primary)', fontSize: '11px' }}>{lastRefresh.toLocaleTimeString('fr-FR')}</div>
          <button onClick={fetchStats} style={{ marginTop: '6px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--primary)', fontSize: '10px', fontFamily: 'inherit', padding: '4px 10px', cursor: 'pointer', letterSpacing: '1px' }}>
            ↻ REFRESH
          </button>
        </div>
      </div>

      <div style={{ padding: '32px' }}>
        {loading ? (
          <div style={{ color: 'var(--primary)', textAlign: 'center', padding: '80px', letterSpacing: '4px', fontSize: '12px' }}>
            CHARGEMENT DES DONNÉES...
          </div>
        ) : (
          <>
            {/* Stats */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <StatCard label="TOTAL VISITES" value={stats?.totalVisits || 0} />
              <StatCard label="VISITEURS UNIQUES" value={uniqueIPs} sub="basé sur IP" />
              <StatCard label="PAYS PRINCIPAL" value={topCountry} />
              <StatCard label="APPAREIL #1" value={Object.entries(deviceCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || '—'} />
            </div>

            {/* Pages + Devices */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <div style={{ flex: 2, minWidth: '280px', border: '1px solid var(--border)', background: 'var(--bg-card)', padding: '24px' }}>
                <div style={{ color: 'var(--primary)', fontSize: '10px', letterSpacing: '3px', marginBottom: '16px' }}>PAGES VISITÉES</div>
                {Object.entries(stats?.pageCounts || {}).sort((a, b) => b[1] - a[1]).map(([page, count]) => {
                  const max = Math.max(...Object.values(stats?.pageCounts || {}))
                  const pct = Math.round((count / max) * 100)
                  return (
                    <div key={page} style={{ marginBottom: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{page}</span>
                        <span style={{ color: 'var(--primary)', fontSize: '12px', fontWeight: 700 }}>{count}</span>
                      </div>
                      <div style={{ height: '2px', background: 'rgba(0,212,255,0.1)', borderRadius: '1px' }}>
                        <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg, var(--primary), var(--accent))', transition: 'width 0.5s ease' }} />
                      </div>
                    </div>
                  )
                })}
                {Object.keys(stats?.pageCounts || {}).length === 0 && (
                  <div style={{ color: 'var(--text-dim)', fontSize: '12px' }}>Aucune donnée encore</div>
                )}
              </div>

              <div style={{ flex: 1, minWidth: '200px', border: '1px solid var(--border)', background: 'var(--bg-card)', padding: '24px' }}>
                <div style={{ color: 'var(--primary)', fontSize: '10px', letterSpacing: '3px', marginBottom: '16px' }}>APPAREILS</div>
                {Object.entries(deviceCounts).map(([device, count]) => (
                  <div key={device} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '20px' }}>{DEVICE_ICON[device] || '❓'}</span>
                    <div>
                      <div style={{ color: 'var(--text-main)', fontSize: '13px', textTransform: 'capitalize' }}>{device}</div>
                      <div style={{ color: 'var(--primary)', fontSize: '11px' }}>{count} visite{count > 1 ? 's' : ''}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Table */}
            <div style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}>
              <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: 'var(--primary)', fontSize: '10px', letterSpacing: '3px' }}>DERNIÈRES VISITES</div>
                <div style={{ color: 'var(--text-dim)', fontSize: '11px' }}>{stats?.visits.length || 0} entrées</div>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-dark)' }}>
                      {['HEURE', 'IP', 'PAGE', 'PAYS / VILLE', 'APPAREIL', 'NAVIGATEUR', 'REFERER'].map((h) => (
                        <th key={h} style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--text-dim)', fontSize: '10px', letterSpacing: '2px', fontWeight: 400, whiteSpace: 'nowrap' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {stats?.visits.map((visit, i) => (
                      <tr key={i} style={{ borderTop: '1px solid var(--border)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-card-hover)')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      >
                        <td style={{ padding: '10px 16px', color: 'var(--text-dim)', whiteSpace: 'nowrap' }}>
                          {new Date(visit.timestamp).toLocaleTimeString('fr-FR')}
                          <div style={{ color: 'var(--text-dim)', fontSize: '10px', opacity: 0.6 }}>{new Date(visit.timestamp).toLocaleDateString('fr-FR')}</div>
                        </td>
                        <td style={{ padding: '10px 16px', color: 'var(--primary)', fontFamily: 'monospace' }}>{visit.ip}</td>
                        <td style={{ padding: '10px 16px', color: 'var(--text-muted)' }}>{visit.page}</td>
                        <td style={{ padding: '10px 16px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                          {visit.country}{visit.city !== 'Unknown' && <span style={{ color: 'var(--text-dim)' }}> / {visit.city}</span>}
                        </td>
                        <td style={{ padding: '10px 16px', whiteSpace: 'nowrap' }}>{DEVICE_ICON[visit.device] || '❓'} <span style={{ color: 'var(--text-muted)' }}>{visit.device}</span></td>
                        <td style={{ padding: '10px 16px', whiteSpace: 'nowrap' }}>{BROWSER_ICON[visit.browser] || '❓'} <span style={{ color: 'var(--text-muted)' }}>{visit.browser}</span></td>
                        <td style={{ padding: '10px 16px', color: 'var(--text-dim)', maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {visit.referer === 'direct' ? <span style={{ opacity: 0.5 }}>direct</span> : visit.referer}
                        </td>
                      </tr>
                    ))}
                    {(stats?.visits.length || 0) === 0 && (
                      <tr><td colSpan={7} style={{ padding: '40px', textAlign: 'center', color: 'var(--text-dim)' }}>Aucune visite enregistrée</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
