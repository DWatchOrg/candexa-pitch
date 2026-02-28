export default function MarketSlide({ isActive }: { isActive?: boolean }) {
  return (
    <div className={`slide ${isActive ? "active" : ""}`} id="s7">
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
      <div className="slide-num white">07 / 10</div>

      {/* Decorative circles */}
      <svg className="deco" style={{bottom: "-80px", right: "-80px", opacity: 0.06}} width="400" height="400" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="190" fill="#ff8233"/>
      </svg>

      <h2 className="s7-title">A <span>Massive</span><br/>Opportunity</h2>
      <p className="s7-sub">We are not fighting for the ATS market share, we have built a new category by activating email-native hiring agents at a global scale.</p>

      <div className="market-row">
        <div className="market-bubble-wrap">
          <div className="market-bubble" style={{width: "150px", height: "150px", background: "#ff8233"}}>
            <div className="bubble-val" style={{fontSize: "28px"}}>$47.3B</div>
            <div className="bubble-lbl">Total</div>
          </div>
          <div className="market-name">Global HR Tech<br/>Market</div>
        </div>
        <div className="market-bubble-wrap">
          <div className="market-bubble" style={{width: "120px", height: "120px", background: "rgba(255,130,51,0.6)"}}>
            <div className="bubble-val" style={{fontSize: "22px"}}>$18.6B</div>
            <div className="bubble-lbl">Fees</div>
          </div>
          <div className="market-name">ATS Market</div>
        </div>
        <div className="market-bubble-wrap">
          <div className="market-bubble" style={{width: "100px", height: "100px", background: "rgba(255,130,51,0.4)"}}>
            <div className="bubble-val" style={{fontSize: "18px"}}>$185B</div>
            <div className="bubble-lbl">Tech</div>
          </div>
          <div className="market-name">Recruitment <br/>Automation</div>
        </div>
        <div className="market-bubble-wrap">
          <div className="market-bubble" style={{width: "130px", height: "130px", background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.2)"}}>
            <div className="bubble-val" style={{fontSize: "26px"}}>4B+</div>
            <div className="bubble-lbl">Users</div>
          </div>
          <div className="market-name">Email<br/>Infrastructure</div>
        </div>
      </div>

      <div className="s7-bottom">
        <div className="s7-bottom-text">
          The largest professional network isn't LinkedIn, it's your inbox 
        </div>
      </div>
    </div>
  )
}
