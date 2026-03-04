import Image from 'next/image';
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
                     <Image src="/geo.png" alt="Godspower Eseurhobo" fill style={{objectFit:'cover', objectPosition:'top'}}/>
                   </div>
                   <div className="st-founder-tag">Future of Work Innovator</div>
                   <div className="st-founder-bio">
                     Product and sales leader driving <b>$29M+ ARR</b> at MBO Partners &amp; overseeing <b>$8M+</b> in government AI initiatives.
                   </div>
                   <div className="st-founder-name">Godspower Eseurhobo</div>
                   <div className="st-founder-role">Founder &amp; CEO | Chief Errand Officer</div>
                 </div>
     
                 {/* Founder 2 */}
                 <div className="st-founder">
                   <div className="st-photo-wrap">
                     <Image src="/alexs.jpeg" alt="Alexander Torrenegra" fill style={{objectFit:'cover', objectPosition:'top'}}/>
                   </div>
                   <div className="st-founder-tag">Serial Entrepreneur | SharkTank</div>
                   <div className="st-founder-bio">
                     SharkTank Investor; bootstrapped Voice123 to <b>$200M GMV</b> &amp; secured <b>$22M</b> in funding for Torre AI.
                   </div>
                   <div className="st-founder-name">Alexander Torrenegra</div>
                   <div className="st-founder-role">Executive Chairman &amp; Angel Investor</div>
                 </div>
               </div>
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
