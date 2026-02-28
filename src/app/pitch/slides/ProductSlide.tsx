export default function ProductSlide({ isActive }: { isActive?: boolean }) {
  return (
    <div className={`slide ${isActive ? "active" : ""}`} id="s5">
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
      <div className="slide-num">05 / 10</div>

      <div className="s5-header">
        <h2 className="s5-title">The <span>Product</span></h2>
        <div className="s5-cta">One click → AI hiring system</div>
      </div>

      <div className="s5-cols">
        <div className="product-col rec" style={{ position: "relative", overflow: "hidden" }}>
          <img src="/recruiters-bg.png" alt="Recruiters Background" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.75)", zIndex: 1 }}></div>
          
          <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", height: "100%" }}>
            <div className="col-label mt-12" style={{ color: "#ff8233", background: "none", padding: 0 }}>For Recruiters</div>
            <div className="col-title" style={{ color: "white" }}>Your AI Hiring<br/>Command Centre</div>
            <div className="feature-item" style={{ color: "white", marginBottom: "24px" }}>
              <div className="feat-check">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              Auto-capture applicants from inbox
            </div>
            <div className="feature-item" style={{ color: "white", marginBottom: "24px" }}>
              <div className="feat-check">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              AI resume parsing + smart ranking
            </div>
            <div className="feature-item" style={{ color: "white", marginBottom: "24px" }}>
              <div className="feat-check">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              Send AI-powered interviews via email
            </div>
            <div className="feature-item" style={{ color: "white", marginBottom: "24px" }}>
              <div className="feat-check">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              Auto-schedule & manage calendar
            </div>
            <div className="feature-item" style={{ color: "white", marginBottom: "24px" }}>
              <div className="feat-check">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              Live pipeline view inside inbox
            </div>
          </div>
        </div>

        <div className="product-col can" style={{ position: "relative", overflow: "hidden" }}>
          <img src="/candidates-bg.png" alt="Candidates Background" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.75)", zIndex: 1 }}></div>

          <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", height: "100%" }}>
            <div className="col-label mt-12" style={{ color: "#ff8233", background: "none", padding: 0 }}>For Candidates</div>
            <div className="col-title" style={{ color: "white" }}>Your Personal<br/>Job Agent</div>
            <div className="feature-item" style={{ color: "white", marginBottom: "24px" }}>
              <div className="feat-check">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              Personal job agent that lives in your inbox
            </div>
            <div className="feature-item" style={{ color: "white", marginBottom: "24px" }}>
              <div className="feat-check">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              Matched roles surfaced automatically
            </div>
            <div className="feature-item" style={{ color: "white", marginBottom: "24px" }}>
              <div className="feat-check">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              Guided applications with AI assist
            </div>
            <div className="feature-item" style={{ color: "white", marginBottom: "24px" }}>
              <div className="feat-check">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              Real-time application tracking
            </div>
            <div className="feature-item" style={{ color: "white", marginBottom: "24px" }}>
              <div className="feat-check">
                <svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              No new login — stays in email
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
