export default function ProofSlide({ isActive }: { isActive?: boolean }) {
  return (
    <div className={`slide ${isActive ? "active" : ""}`} id="s6">
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
      <div className="slide-num">06 / 10</div>

      <div className="s6-left">
        <h2 className="s6-title">Proof of<br/>Impact</h2>
        <p className="s6-desc">From application to interview scheduling — all inside email. This is workflow compression at scale.</p>
        <div className="s6-callout">
          <span>This is workflow compression.</span><br/>
          Application → Screening → Interview → Schedule<br/>
          All without leaving your inbox.
        </div>
      </div>

      <div className="s6-right">
        {/* Deco circles */}
        <svg style={{position: "absolute", top: 0, left: 0, opacity: 0.1}} width="100%" height="100%" viewBox="0 0 500 720" preserveAspectRatio="xMidYMid slice">
          <circle cx="400" cy="600" r="200" fill="white"/>
          <circle cx="-30" cy="100" r="150" fill="white"/>
        </svg>
        <div className="stat-bubble" style={{position: "relative", zIndex: 2}}>
          <div className="stat-big">31%</div>
          <div className="stat-label">↓ Reduction in time-to-hire</div>
        </div>
        <div className="stat-bubble" style={{position: "relative", zIndex: 2}}>
          <div className="stat-big">45%</div>
          <div className="stat-label">↓ Reduction in candidate drop-off</div>
        </div>
        <div className="stat-bubble" style={{position: "relative", zIndex: 2}}>
          <div className="stat-big">10+</div>
          <div className="stat-label">Hours saved per recruiter, weekly</div>
        </div>
      </div>
    </div>
  )
}
