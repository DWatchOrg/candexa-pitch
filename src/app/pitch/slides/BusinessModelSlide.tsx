export default function BusinessModelSlide({ isActive }: { isActive?: boolean }) {
  return (
    <div className={`slide ${isActive ? "active" : ""}`} id="s9">
      <div className="logo-small">
        <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" fill="#ff8233"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(30 20 20)" fill="#ff8233"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(60 20 20)" fill="#ff8233"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(90 20 20)" fill="#ff8233"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(120 20 20)" fill="#ff8233"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(150 20 20)" fill="#ff8233"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(180 20 20)" fill="#ff8233"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(210 20 20)" fill="#ff8233"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(240 20 20)" fill="#ff8233"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(270 20 20)" fill="#ff8233"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(300 20 20)" fill="#ff8233"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(330 20 20)" fill="#ff8233"/>
        </svg>
        <span className="logo-text">Candexa AI</span>
      </div>
      <div className="slide-num">09 / 10</div>

      {/* Deco */}
      <svg className="deco" style={{top: "40px", right: "40px", opacity: 0.05}} width="200" height="200" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" stroke="#ff8233" strokeWidth="20" fill="none"/>
      </svg>

      <div className="s9-header">
        <h2 className="s9-title">Business <span>Model</span></h2>
        <div className="s9-sub">High-margin automation. Global from Day 1.</div>
      </div>

      <div className="revenue-grid">
        <div className="rev-card">
          <div className="rev-num">01</div>
          <div className="rev-title">Recruiter Subscription</div>
          <div className="rev-desc">AI Inbox Agent — monthly/annual SaaS. Core product, recurring revenue.</div>
        </div>
        <div className="rev-card">
          <div className="rev-num">02</div>
          <div className="rev-title">AI Interview Credits</div>
          <div className="rev-desc">Usage-based pricing for AI interview generation and scoring.</div>
        </div>
        <div className="rev-card">
          <div className="rev-num">03</div>
          <div className="rev-title">Talent Premium Visibility</div>
          <div className="rev-desc">Candidates pay for boosted placement and enhanced profile visibility.</div>
        </div>
        <div className="rev-card">
          <div className="rev-num">04</div>
          <div className="rev-title">Enterprise Inbox API</div>
          <div className="rev-desc">API layer for enterprises. Integrate Candexa AI at infrastructure level.</div>
        </div>
      </div>

      <div className="s9-footer">
        <div style={{width: "40px", height: "40px", background: "var(--orange)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0}}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2v14M2 9h14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </div>
        <div className="s9-footer-text">
          Four compounding revenue streams. <span>High margin. Built for global scale.</span>
        </div>
      </div>
    </div>
  )
}
