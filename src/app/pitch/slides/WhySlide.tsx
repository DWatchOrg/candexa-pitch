export default function WhySlide({ isActive }: { isActive?: boolean }) {
  return (
    <div className={`slide ${isActive ? "active" : ""}`} id="s8">
      <div className="logo-small white">
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
        <span className="logo-text" style={{color: "white"}}>Candexa AI</span>
      </div>
      <div className="slide-num white">08 / 10</div>

      <div className="s8-left">
        {/* Deco */}
        <svg style={{position: "absolute", top: 0, left: 0, opacity: 0.1}} width="100%" height="100%" viewBox="0 0 500 720" preserveAspectRatio="xMidYMid slice">
          <circle cx="-50" cy="-50" r="250" fill="white"/>
          <circle cx="550" cy="750" r="200" fill="white"/>
        </svg>
        <div className="s8-left-title" style={{position: "relative", zIndex: 2}}>Why We<br/>Win.</div>
        <div className="s8-left-desc" style={{position: "relative", zIndex: 2}}>
          The deeper you work from email,<br/>the harder it is to churn.<br/><br/>
          Candexa AI becomes invisible infrastructure — always on, always working.
        </div>
      </div>

      <div className="s8-right">
        <h2 className="s8-title">Our <span>Unfair</span><br/>Advantages</h2>
        <div className="win-item">
          <div className="win-check">✓</div>
          <div className="win-text"><em>Battle tested team</em> — serial entrepreneurs & HR Innovators</div>
        </div>
        <div className="win-item">
          <div className="win-check">✓</div>
          <div className="win-text"><em>Low CAC</em> — email-native viral distribution</div>
        </div>
        <div className="win-item">
          <div className="win-check">✓</div>
          <div className="win-text"><em>Zero heavy onboarding</em> — activate and go</div>
        </div>
        <div className="win-item">
          <div className="win-check">✓</div>
          <div className="win-text">Works with <em>Gmail, Outlook, Yahoo, Zoho</em> — all clients</div>
        </div>
        <div className="win-item">
          <div className="win-check">✓</div>
          <div className="win-text"><em>Zero behavior change</em> — works where people already live</div>
        </div>
        <div className="win-item">
          <div className="win-check">✓</div>
          <div className="win-text"><em>High retention</em> — embedded in daily workflow</div>
        </div>
      </div>
    </div>
  )
}
