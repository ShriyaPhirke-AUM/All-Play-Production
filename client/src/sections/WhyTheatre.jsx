import { SectionHeading, Artwork, Reveal } from "../components/UI";

const benefits = [
  "Greater confidence & self-expression",
  "Clearer speech & communication",
  "Improved focus & concentration",
  "Stronger creativity & imagination",
  "Better listening & response",
  "Improved teamwork & empathy",
  "Greater body & emotional awareness",
  "Discipline, responsibility & stage confidence",
];

const learningSteps = ["Explore", "Practise", "Observe", "Get feedback", "Repeat"];

export default function WhyTheatre() {
  return (
    <section id="why-theatre" className="section why-section why-theatre-content">
      <div className="container why-theatre-layout">
        <div className="why-theatre-hero">
          <Reveal className="why-copy">
            <SectionHeading eyebrow="WHY THEATRE?">
              More Than Acting, <em>Skills for Life</em>
            </SectionHeading>
            <p className="why-intro">
              Theatre gives children a space where there is no single 'right' way to be creative. Through role-play, improvisation and performance, children practise communicating clearly, taking creative decisions, understanding different points of view and working with a group. The process of rehearsing and performing can also strengthen confidence, self-discipline and a sense of achievement.
            </p>
          </Reveal>
          <Reveal className="why-visual">
            <Artwork
              src="/Demo.jpeg"
              alt="Children performing together on stage at All Play Productions"
            />
            <div className="why-quote">
              “The best thing they bring off the stage? <em>Themselves.</em>”
            </div>
            <span className="image-label">ALL PLAY ON STAGE</span>
          </Reveal>
        </div>
        <section className="why-benefit-panel" aria-label="What theatre helps children develop">
          <p className="eyebrow"><span aria-hidden="true" />SKILLS THAT GROW THROUGH THEATRE</p>
          <ul className="why-benefits">
            {benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
          </ul>
        </section>
        <div className="why-process">
          <div className="why-process-heading">
            <p className="eyebrow"><span aria-hidden="true" />HOW CHILDREN LEARN</p>
            <h2>From Practice <em>to Performance</em></h2>
          </div>
          <div className="why-process-copy">
            <p>
              Children are encouraged to explore rather than simply memorise. Every concept is introduced through activity, followed by practice, observation, feedback and repetition. The trainer creates a positive environment where children can experiment, make mistakes, learn from one another and gradually develop confidence on stage.
            </p>
            <ol className="why-learning-steps" aria-label="The learning process">
              {learningSteps.map((step, index) => (
                <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
