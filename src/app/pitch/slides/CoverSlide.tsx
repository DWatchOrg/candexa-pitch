export default function CoverSlide({ isActive }: { isActive?: boolean }) {
  return (
    <div className={`slide ${isActive ? "active" : ""}`} id="s1">
      {/* Logo top-left */}
      <div className="logo-small">
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div className="slide-num">01 / 10</div>

      {/* Decorative shapes */}
      <svg className="deco" style={{top: "-40px", left: "-40px", opacity: 0.06}} width="300" height="300" viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="140" fill="#ff8233"/>
      </svg>
      <svg className="deco" style={{bottom: "20px", left: "20px", opacity: 0.08}} width="120" height="120" viewBox="0 0 120 120">
        <rect x="10" y="10" width="100" height="100" rx="22" fill="#ff8233" transform="rotate(15 60 60)"/>
      </svg>

      <div className="s1-left">
        <div className="s1-tag w-fit">The World First Email-native ATS & Job Network</div>
        <h1 className="s1-headline">Source & Hire Talents,<br/><span>Right from your Inbox.</span></h1>
        <p className="s1-sub">
AI agents that convert your email to a robust ATS and job network. No new software. No integrations. Just activate.</p>
        <div className="s1-pills">
          <span className="pill">Gmail</span>
          <span className="pill">Outlook</span>
          <span className="pill">Yahoo</span>
          <span className="pill">Zoho</span>
          <span className="pill">4B+ Users</span>
        </div>
        {/* <div className="s1-contact">
          <a href="mailto:investors@candexa.ai">investors@candexa.ai</a><br/>
          <a href="https://www.candexa.ai">www.candexa.ai</a>
        </div> */}
      </div>

      <div className="s1-right" style={{ position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Background Grid Image */}
        <img 
          src="/cover-grid.png" 
          alt="Candidate Grid" 
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} 
        />
        
        {/* Dark Overlay */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.65)" }} />

        {/* Centered Content over Overlay */}
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"20px", position:"relative", zIndex:2}}>
          <svg width="120" height="120" viewBox="0 0 40 40" fill="none">
            <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" fill="white" opacity="0.9"/>
            <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(30 20 20)" fill="white" opacity="0.9"/>
            <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(60 20 20)" fill="white" opacity="0.9"/>
            <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(90 20 20)" fill="white" opacity="0.9"/>
            <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(120 20 20)" fill="white" opacity="0.9"/>
            <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(150 20 20)" fill="white" opacity="0.9"/>
            <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(180 20 20)" fill="white" opacity="0.9"/>
            <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(210 20 20)" fill="white" opacity="0.9"/>
            <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(240 20 20)" fill="white" opacity="0.9"/>
            <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(270 20 20)" fill="white" opacity="0.9"/>
            <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(300 20 20)" fill="white" opacity="0.9"/>
            <ellipse cx="20" cy="6.5" rx="3.5" ry="6.5" transform="rotate(330 20 20)" fill="white" opacity="0.9"/>
          </svg>
          <div style={{color:"white", fontWeight:900, fontSize:"26px", letterSpacing:"-1px", textAlign:"center", lineHeight:1.2}}>Candexa AI</div>
          <div style={{color:"rgba(255,255,255,0.7)", fontSize:"12px", fontWeight:600, letterSpacing:"1px", textAlign:"center", textTransform:"uppercase"}}>intelligent Hiring Infrastructure built on Email</div>
        </div>
      </div>
    </div>
  )
}
