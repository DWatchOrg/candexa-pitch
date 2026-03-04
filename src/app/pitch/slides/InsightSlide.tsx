export default function InsightSlide({ isActive }: { isActive?: boolean }) {
  return (
    <div className={`slide ${isActive ? "active" : ""}`} id="s3">
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
      <div className="slide-num">03 / 10</div>

      <div className="s3-left">
        <div className="s3-big-num">4B+</div>
        <div className="s3-label">Email users worldwide</div>
        <h2 className="s3-title">Every professional already has an email,</h2>
        <div className="s3-items">
          <div className="s3-item"><span className="s3-dot"></span> Every Application</div>
          <div className="s3-item"><span className="s3-dot"></span> Every Rejection</div>
          <div className="s3-item"><span className="s3-dot"></span> Every Interview</div>
          <div className="s3-item"><span className="s3-dot"></span> Every Offer</div>
          
        <h2 className="s3-title">already lives there.</h2>
              </div>
              
        <div className="s3-callout">
        Yet hiring is fragmented across dozens of platforms,  Email is the <span>largest unoptimized</span> hiring infrastructure in the world.
        </div>
      </div>

      <div className="s3-right">
        {/* Decorative circles on orange bg */}
        <svg style={{position: "absolute", top: 0, left: 0, opacity: 0.1}} width="100%" height="100%" viewBox="0 0 400 720" preserveAspectRatio="xMidYMid slice">
          <circle cx="350" cy="80" r="120" fill="white"/>
          <circle cx="50" cy="500" r="160" fill="white"/>
        </svg>
        <div className="s3-right-title" style={{position: "relative", zIndex: 2}}>Candexa AI Brings Hiring  to <br/>Your Inbox</div>
        <div className="s3-icon-grid" style={{position: "relative", zIndex: 2}}>
          <div className="s3-icon-card">
            <div className="ico">📩</div>
            <div className="ico-label">Applications</div>
          </div>
          <div className="s3-icon-card">
            <div className="ico">📅</div>
            <div className="ico-label">Screening</div>
          </div>
          <div className="s3-icon-card">
            <div className="ico">🎯</div>
            <div className="ico-label">Interviews</div>
          </div>
          <div className="s3-icon-card">
            <div className="ico">✅</div>
            <div className="ico-label">Offers</div>
          </div>
        </div>
        <div style={{position: "relative", zIndex: 2, marginTop: "20px", background: "rgba(0,0,0,0.15)", borderRadius: "12px", padding: "16px 18px", width: "100%"}}>
          <div style={{fontSize: "22px", fontWeight: 900, color: "white", letterSpacing: "-0.5px"}}>Zero new tools.</div>
          <div style={{fontSize: "12px", color: "rgba(255,255,255,0.7)", marginTop: "4px", fontWeight: 600}}>Just activate Candexa AI.</div>
        </div>
      </div>
    </div>
  )
}
