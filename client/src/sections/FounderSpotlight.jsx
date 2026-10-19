import { Artwork, Reveal } from "../components/UI";
import { ArrowUpRight } from "lucide-react";

export default function FounderSpotlight() {
  return (
    <section className="section founder-section" aria-labelledby="founder-title">
      <div className="founder-layout">
        <Reveal className="portrait-frame">
          <Artwork src="/documents/founder%20landscape.png" alt="Mrs. Varshaa Raane, Founder and Creator of All Play Productions" />
        </Reveal>
        <Reveal className="founder-copy">
          <p className="eyebrow"><span />THE HEART BEHIND ALL PLAY PRODUCTIONS</p>
          <h2 id="founder-title">Meet Our <em>Founder</em></h2>
          <h3 className="founder-name">Mrs. Varshaa Raane</h3>
          <p className="founder-role">Founder &amp; Creator - All Play Productions · Trustee - Atharva University Mumbai · Vice Chairman - Atharva Foundation</p>
          <p>Actor, filmmaker and advocate for creative education. Mrs. Varshaa Raane created All Play Productions to make performing arts an empowering experience for young learners.</p>
          <a className="text-link" href="/founder">Read more about our founder <ArrowUpRight size={17} aria-hidden="true" /></a>
        </Reveal>
      </div>
    </section>
  );
}
