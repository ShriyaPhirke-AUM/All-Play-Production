import { PrimaryButton } from "../components/UI";
import DoodleRail from "../components/Doodles";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <DoodleRail />
      <img
        className="hero-art"
        src="/hero.png"
        width="1536"
        height="1024"
        alt="Watercolor illustration of children dancing, playing theatre and flying colorful kites"
        fetchPriority="high"
      />
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow">
          <span />
          Drama · Theatre · Cinema · Performing Arts
        </p>
        <h1>
          Discover the
          <br />
          Artist <em>Within You</em>
        </h1>
        <p className="hero-copy">
          Drama &amp; Theatre training for young imaginations. Build confidence, find your
          voice and discover the joy of performance.
        </p>
        <div className="button-row">
          <PrimaryButton href="/programs">Explore Our Programs</PrimaryButton>
          <PrimaryButton href="/contact#contact" secondary>
            Enquire Now
          </PrimaryButton>
        </div>
        <p className="hero-affiliations">
          <span className="hero-affiliations-label">Affiliated by</span>
          <span className="hero-affiliations-list">
            <strong>Atharva University Mumbai</strong>
            <span aria-hidden="true">|</span>
            <strong>Atharva School of Film Making</strong>
            <span aria-hidden="true">·</span>
            <strong>Atharva School of Fashion &amp; Arts</strong>
          </span>
        </p>
      </div>
    </section>
  );
}
