import Image from 'next/image';

export default function Future({ isActive }: { isActive?: boolean }) {
  return (
    <div className={`slide ${isActive ? "active" : ""}`} id="s9-team">
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

      {/* LEFT PANEL — dark, two founder cards side by side */}
      <div className="st-left">
        <svg style={{position:"absolute",top:0,left:0,opacity:0.07}} width="100%" height="100%" viewBox="0 0 560 720" preserveAspectRatio="xMidYMid slice">
          <circle cx="500" cy="100" r="200" fill="white"/>
          <circle cx="-50" cy="650" r="180" fill="white"/>
        </svg>

        <div className="st-left-inner" style={{position:"relative", zIndex:2}}>
          <div className="st-slide-tag">The Team</div>
          <h2 className="st-left-title">The perfect pedigree to <span>"Make AI in hiring more efficient"</span></h2>

          <div className="st-founders">
            {/* Founder 1 */}
            <div className="st-founder">
              <div className="st-photo-wrap">
                <Image src="/founder.jpeg" alt="Godspower Eseurhobo" fill style={{objectFit:'cover', objectPosition:'top'}}/>
              </div>
              <div className="st-founder-tag">3X Global HR Innovator</div>
              <div className="st-founder-bio">
                Product and sales leader driving <b>$29M+ ARR</b> at MBO Partners &amp; overseeing <b>$8M+</b> in government AI initiatives.
              </div>
              <div className="st-founder-name">Godspower Eseurhobo</div>
              <div className="st-founder-role">Co-founder &amp; CEO | Chief Errand Officer</div>
            </div>

            {/* Founder 2 */}
            <div className="st-founder">
              <div className="st-photo-wrap">
                <Image src="/team-photo.jpeg" alt="Alexander Torrenegra" fill style={{objectFit:'cover', objectPosition:'top'}}/>
              </div>
              <div className="st-founder-tag">Serial Entrepreneur</div>
              <div className="st-founder-bio">
                SharkTank Investor; bootstrapped Voice123 to <b>$200M GMV</b> &amp; secured <b>$20M</b> in funding for Torre AI.
              </div>
              <div className="st-founder-name">Alexander Torrenegra</div>
              <div className="st-founder-role">Co-founder &amp; ECM | Fundraising &amp; Partnership Strategy</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — light, quote + badges + logos */}
      <div className="st-right">
        <div className="st-quote">
          "Our vision is to build the <em>intelligence infrastructure</em> that powers <em>fair, efficient,</em> and <em>human-centered</em> hiring globally."
        </div>

        <div className="st-partners-label">Backed by experience at</div>
        <div className="st-partner-strip">
          <span>MBO Partners</span>
          <span>·</span>
          <span>AFRISPLASH</span>
          <span>·</span>
          <span>Translators without Borders</span>
          <span>·</span>
          <span>GIZ</span>
          <span>·</span>
          <span>Remote</span>
        </div>

        <div className="st-milestones">
          <div className="st-badge st-badge-orange">
            Led Chesslang Founding Product Team to <strong>$1.4M ARR</strong> Bootstrapped
          </div>
          <div className="st-badge st-badge-orange">
            Contributed to <strong>$29M ARR</strong> at MBO Partners <em>(Acquired)</em>
          </div>
          <div className="st-badge st-badge-dark">
            Bootstrapped Voice123 to <strong>$200M+ GMV</strong> <em>(Acquired)</em>
          </div>
          <div className="st-badge st-badge-dark">
            Founded Torre AI, raising over <strong>$20M</strong> Series A, and growing
          </div>
        </div>

        <div className="st-logo-bar">
          <span>SHARK TANK</span>
          <span>MIT Innovators Under 35</span>
          <span>endeavor</span>
          <span>Stanford</span>
        </div>
      </div>
    </div>
  )
}
