export default function ShiftSlide({ isActive }: { isActive?: boolean }) {
  return (
    <div className={`slide ${isActive ? "active" : ""}`} id="s4">
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
      <div className="slide-num">04 / 10</div>

      {/* Deco */}
      <svg className="deco" style={{bottom: "-80px", right: "-80px", opacity: 0.04}} width="320" height="320" viewBox="0 0 320 320">
        <circle cx="160" cy="160" r="150" fill="#ff8233"/>
      </svg>

      <h2 className="s4-title">The <span>Shift</span></h2>

      <div className="s4-compare">
        <div className="model-card old">
          <div className="model-tag">Old Model</div>
          <div className="model-title">Platform-Based ATS</div>
          <div className="model-steps">
            <div className="model-step">
              <div className="step-num">1</div>
              Login to platform
            </div>
            <div className="model-step">
              <div className="step-num">2</div>
              Open dashboard
            </div>
            <div className="model-step">
              <div className="step-num">3</div>
              Connect Integrations
            </div>
            <div className="model-step">
              <div className="step-num">4</div>
              Switch between 10+ tabs
            </div>
          </div>
        </div>

        <div className="s4-arrow">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" fill="#ff8233"/>
            <path d="M20 30H40M33 23L40 30L33 37" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="model-card new">
          <div className="model-tag">New Model</div>
          <div className="model-title">Email-Native Hiring</div>
          <div className="model-steps">
            <div className="model-step">
              <div className="step-num">1</div>
              Open your inbox
            </div>
            <div className="model-step">
              <div className="step-num">2</div>
            {`  AI handles everything(sourcing, screening, scheduling).`}
            </div>
            <div className="model-step">
              <div className="step-num">3</div>
              Agentic & NLP-based automation in Email threads
            </div>
            <div className="model-step">
              <div className="step-num">4</div>
              Zero context switching
            </div>
          </div>
        </div>
      </div>

      <div className="s4-bottom">
        We don&#39;t add another tool. We <span>upgrade the one everyone already uses.</span>
      </div>
    </div>
  )
}
