export default function Roadmap({ isActive }: { isActive?: boolean }) {
  return (
    <div className={`slide ${isActive ? "active" : ""}`} id="s2">
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
        <span className="logo-text">Candexa AI</span>
      </div>
      <div className="slide-num white">10 / 11</div>

      {/* Decorative */}
      <svg className="deco" style={{top: "-60px", right: "-60px", opacity: 0.04}} width="300" height="300" viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="140" fill="#ff8233"/>
      </svg>

      <h1 className="s2-headline">Future<br/><span>Roadmap .</span></h1>
      <p className="s2-sub">We are building the world's first Intelligent Hiring Infrastructure, for Email.</p>

      <div className="s2-grid">
        <div className="pain-card">
          <div className="pain-num">Goal 1</div>
          <div className="pain-label">Unified "Email-as-an-ATS" Ecosystem</div>
        </div>
        <div className="pain-card">
          <div className="pain-num">Goal 2</div>
          <div className="pain-label">Advanced Conversational Behavioral Analytics</div>
        </div>
        <div className="pain-card">
          <div className="pain-num">Goal 3</div>
          <div className="pain-label">Expansion of the "Autonomous Hiring Agent" Suite in Email</div>
        </div>
        <div className="pain-card">
          <div className="pain-num">Goal 4</div>
          <div className="pain-label">Global "Professional Network" Layer across all Email Users.</div>
        </div>
        <div className="pain-card">
          <div className="pain-num">Goal 5</div>
          <div className="pain-label">Deep Enterprise Infrastructure Integration & Scaling</div>
        </div>
      </div>

      <div className="s2-bottom">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L28 28H4L16 4Z" fill="#ff8233" opacity="0.8"/>
        </svg>
        <div className="s2-bottom-text">The problem isn&#39;t a lack of tools. It&#39;s <span>fragmented infrastructure  </span>and we are solving that with Candexa AI.</div>
      </div>
    </div>
  )
}
