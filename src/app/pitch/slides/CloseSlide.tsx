export default function CloseSlide({ isActive }: { isActive?: boolean }) {
  return (
    <div className={`slide ${isActive ? "active" : ""}`} id="s10">
      <div className="logo-small white">
        <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" fill="white"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(30 20 20)" fill="white"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(60 20 20)" fill="white"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(90 20 20)" fill="white"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(120 20 20)" fill="white"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(150 20 20)" fill="white"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(180 20 20)" fill="white"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(210 20 20)" fill="white"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(240 20 20)" fill="white"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(270 20 20)" fill="white"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(300 20 20)" fill="white"/>
          <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(330 20 20)" fill="white"/>
        </svg>
        <span className="logo-text" style={{color: "white"}}>Candexa AI</span>
      </div>
      <div className="slide-num white">10 / 10</div>

      <div className="s10-left">
        {/* Decoratives */}
        <svg style={{position: "absolute", top: 0, left: 0, opacity: 0.1}} width="100%" height="100%" viewBox="0 0 800 720" preserveAspectRatio="xMidYMid slice">
          <circle cx="700" cy="700" r="300" fill="white"/>
          <circle cx="-50" cy="-50" r="200" fill="white"/>
          <circle cx="400" cy="200" r="80" fill="white" opacity="0.5"/>
        </svg>

        <div className="s10-eyebrow" style={{position: "relative", zIndex: 2}}>The Future of Hiring</div>
        <h1 className="s10-headline" style={{position: "relative", zIndex: 2}}>The Email-native ATS  <br/>& Job Network,<br/>In Your Inbox.</h1>
        <p className="s10-desc" style={{position: "relative", zIndex: 2}}>Candexa AI agents unlocks the new job network and intelligent hiring infrastructure; right in your inbox.</p>
        <div className="s10-contact" style={{position: "relative", zIndex: 2}}>
          <div className="s10-contact-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="2" stroke="white" strokeWidth="1.5"/><path d="M1 5l7 5 7-5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <a href="mailto:geo@candexa.ai">geo@candexa.ai</a>
          </div>
          <div className="s10-contact-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="white" strokeWidth="1.5"/><path d="M8 1.5C8 1.5 6 5 6 8s2 6.5 2 6.5M1.5 8h13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
            www.candexa.ai
          </div>
        </div>
      </div>

      <div className="s10-right">
        {/* Deco on dark */}
        <svg style={{position: "absolute", top: 0, left: 0, opacity: 0.07}} width="100%" height="100%" viewBox="0 0 500 720" preserveAspectRatio="xMidYMid slice">
          <circle cx="400" cy="200" r="200" fill="#ff8233"/>
          <circle cx="50" cy="600" r="150" fill="#ff8233"/>
        </svg>

        <div className="s10-right-title" style={{position: "relative", zIndex: 2}}>Why invest</div>
        <div className="s10-tag-large" style={{position: "relative", zIndex: 2}}>Invisible<br/><span>infrastructure.</span></div>

        <div className="future-list" style={{position: "relative", zIndex: 2}}>
          <div className="future-item">
            <div className="f-dot"></div>
            <span>4B+ email users. Zero new behaviour needed.</span>
          </div>
          <div className="future-item">
            <div className="f-dot"></div>
            <span>$969B talent economy to activate.</span>
          </div>
          <div className="future-item">
            <div className="f-dot"></div>
            <span>4 revenue streams, high-margin, global Day 1.</span>
          </div>
          <div className="future-item">
            <div className="f-dot"></div>
            <span>The deeper the use, the harder to churn.</span>
          </div>
          <div className="future-item">
            <div className="f-dot"></div>
            <span>The future of hiring is Email-native AI.</span>
          </div>
        </div>

        <div style={{position: "relative", zIndex: 2, marginTop: "28px"}}>
          <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
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
            <span style={{color: "white", fontWeight: 900, fontSize: "18px", letterSpacing: "-0.5px"}}>Candexa AI</span>
          </div>
        </div>
      </div>
    </div>
  )
}
