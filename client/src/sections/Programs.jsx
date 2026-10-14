import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { SectionHeading, Reveal } from "../components/UI";
import { ProgramCard, LearningCard } from "../components/Cards";
import { programs, learning } from "../data";
const featuredPrograms = [
  {
    id: "all-play-carnival-of-joy",
    title: "All Play...A Carnival of Joy !",
    description: "A theatre carnival celebrating every child’s chance to explore, express and perform, supported by Atharva Foundation.",
  },
  {
    id: "school-of-drama-theatre",
    title: "School of Drama & Theatre",
    description: "A half-year drama course for young performers, with in-depth training and a final presentation at Atharva auditorium.",
  },
  {
    id: "all-play-production",
    title: "Productions",
    description: "A woman blessed with mystical powers has always struggled to live a “normal” life. Different from those around her, she often finds herself misunderstood and unaccepted by society. Her deeply personal journey explores resilience, vulnerability, and the courage to embrace her true self.",
  },
];
export default function Programs({ onSelect, hideIntroDescription = false }) {
  const [activeProgram, setActiveProgram] = useState(null);
  const [carnivalMarathi, setCarnivalMarathi] = useState(true);
  const [dramaMarathi, setDramaMarathi] = useState(true);
  const [productionMarathi, setProductionMarathi] = useState(true);
  const showProgramDescription = (programId) => {
    setActiveProgram((currentProgram) => currentProgram === programId ? null : programId);
  };
  return (
    <>
      <section className="programs-intro-section" aria-label="About our programs">
        <div className="container">
          <div className="profile-intro programs-intro">
            <div>
              <p className="eyebrow">FIND YOUR SPOTLIGHT</p>
              <h1>Learn, Express, Perform <em>and Grow</em></h1>
            </div>
          </div>
        </div>
      </section>
      <section className="section featured-programs-section programs-design" aria-label="Featured programs">
        <div className="container">
          <div className="featured-programs-grid">
            {featuredPrograms.map((program) => (
              <button className={`featured-program-card featured-program-card-${program.id}`} key={program.id} type="button" onClick={() => showProgramDescription(program.id)} aria-controls={`${program.id}-description`} aria-expanded={activeProgram === program.id}>
                <span className="eyebrow">EXPLORE</span>
                <h2>{program.title}</h2>
                <span className="text-link">Read more {activeProgram === program.id ? <ArrowUp size={16} /> : <ArrowDown size={16} />}</span>
              </button>
            ))}
          </div>
          <div className="featured-program-descriptions">
            {featuredPrograms.filter((program) => program.id === activeProgram).map((program) => (
              <article className={`featured-program-description featured-description-${program.id}`} id={`${program.id}-description`} key={program.id}>
                <h2>{program.title}</h2>
                {program.id === "school-of-drama-theatre" ? (
                  <div className="drama-course-details">
                    <button className="text-link" type="button" onClick={() => setDramaMarathi((current) => !current)} aria-pressed={dramaMarathi}>
                      {dramaMarathi ? "Read in English" : "मराठीत वाचा"}
                    </button>
                    {dramaMarathi ? (
                      <div lang="mr">
                        <p>&#x928;&#x93e;&#x91f;&#x94d;&#x92f;&#x915;&#x932;&#x93e; &#x935; &#x930;&#x902;&#x917;&#x92d;&#x942;&#x92e;&#x940; &#x935;&#x93f;&#x926;&#x94d;&#x92f;&#x93e;&#x932;&#x92f; &#x939;&#x93e; &#x92e;&#x941;&#x932;&#x93e;&#x902;&#x92e;&#x927;&#x94d;&#x92f;&#x947; &#x906;&#x923;&#x93f; &#x924;&#x930;&#x941;&#x923;&#x93e;&#x902;&#x92e;&#x927;&#x94d;&#x92f;&#x947; &#x938;&#x930;&#x94d;&#x91c;&#x928;&#x936;&#x940;&#x932;&#x924;&#x93e;, &#x906;&#x924;&#x94d;&#x92e;&#x935;&#x93f;&#x936;&#x94d;&#x935;&#x93e;&#x938; &#x906;&#x923;&#x93f; &#x905;&#x92d;&#x93f;&#x928;&#x92f; &#x915;&#x94c;&#x936;&#x932;&#x94d;&#x92f;&#x947; &#x935;&#x93f;&#x915;&#x938;&#x93f;&#x924; &#x915;&#x930;&#x923;&#x94d;&#x92f;&#x93e;&#x938;&#x93e;&#x920;&#x940; &#x938;&#x92e;&#x930;&#x94d;&#x92a;&#x93f;&#x924; &#x90f;&#x915; &#x905;&#x928;&#x94b;&#x916;&#x93e; &#x909;&#x92a;&#x915;&#x94d;&#x930;&#x92e; &#x906;&#x939;&#x947;. &#x92f;&#x93e; &#x92e;&#x93e;&#x927;&#x94d;&#x92f;&#x92e;&#x93e;&#x924;&#x942;&#x928; &#x92e;&#x939;&#x93e;&#x930;&#x93e;&#x937;&#x94d;&#x91f;&#x94d;&#x930;&#x93e;&#x91a;&#x94d;&#x92f;&#x93e; &#x938;&#x92e;&#x943;&#x926;&#x94d;&#x927; &#x938;&#x93e;&#x902;&#x938;&#x94d;&#x915;&#x943;&#x924;&#x93f;&#x915; &#x935;&#x93e;&#x930;&#x936;&#x93e;&#x91a;&#x940; &#x906;&#x923;&#x93f; &#x92a;&#x93e;&#x930;&#x902;&#x92a;&#x930;&#x93f;&#x915; &#x928;&#x93e;&#x91f;&#x94d;&#x92f;&#x915;&#x932;&#x947;&#x91a;&#x940; &#x913;&#x933;&#x916; &#x928;&#x935;&#x94d;&#x92f;&#x93e; &#x92a;&#x93f;&#x922;&#x940;&#x932;&#x93e; &#x915;&#x930;&#x942;&#x928; &#x926;&#x93f;&#x932;&#x940; &#x91c;&#x93e;&#x924;&#x947;.</p>
                        <p>&#x928;&#x93e;&#x91f;&#x94d;&#x92f;&#x915;&#x932;&#x93e; &#x939;&#x940; &#x915;&#x947;&#x935;&#x933; &#x90f;&#x915; &#x938;&#x93e;&#x926;&#x930;&#x940;&#x915;&#x930;&#x923;&#x93e;&#x91a;&#x940; &#x915;&#x932;&#x93e; &#x928;&#x938;&#x942;&#x928;, &#x924;&#x940; &#x92c;&#x941;&#x926;&#x94d;&#x927;&#x93f;&#x92e;&#x924;&#x94d;&#x924;&#x93e;, &#x915;&#x932;&#x94d;&#x92a;&#x928;&#x93e;&#x936;&#x915;&#x94d;&#x924;&#x940;, &#x935;&#x93f;&#x928;&#x94b;&#x926;&#x92c;&#x941;&#x926;&#x94d;&#x927;&#x940;, &#x906;&#x924;&#x94d;&#x92e;&#x905;&#x92d;&#x93f;&#x935;&#x94d;&#x92f;&#x915;&#x94d;&#x924;&#x940; &#x906;&#x923;&#x93f; &#x938;&#x930;&#x94d;&#x91c;&#x928;&#x936;&#x940;&#x932; &#x935;&#x93f;&#x91a;&#x93e;&#x930;&#x93e;&#x902;&#x928;&#x93e; &#x91a;&#x93e;&#x932;&#x928;&#x93e; &#x926;&#x947;&#x923;&#x93e;&#x930;&#x947; &#x92a;&#x94d;&#x930;&#x92d;&#x93e;&#x935;&#x940; &#x92e;&#x93e;&#x927;&#x94d;&#x92f;&#x92e; &#x906;&#x939;&#x947;. &#x928;&#x93f;&#x92f;&#x94b;&#x91c;&#x928;&#x92c;&#x926;&#x94d;&#x927; &#x92a;&#x94d;&#x930;&#x936;&#x93f;&#x915;&#x94d;&#x937;&#x923;, &#x92a;&#x94d;&#x930;&#x924;&#x94d;&#x92f;&#x915;&#x94d;&#x937; &#x915;&#x943;&#x924;&#x940;&#x924;&#x942;&#x928; &#x936;&#x93f;&#x915;&#x94d;&#x937;&#x923; &#x906;&#x923;&#x93f; &#x935;&#x94d;&#x92f;&#x93e;&#x935;&#x939;&#x93e;&#x930;&#x93f;&#x915; &#x905;&#x928;&#x941;&#x92d;&#x935; &#x92f;&#x93e;&#x902;&#x91a;&#x94d;&#x92f;&#x93e; &#x92e;&#x93e;&#x927;&#x94d;&#x92f;&#x92e;&#x93e;&#x924;&#x942;&#x928; &#x935;&#x93f;&#x926;&#x94d;&#x92f;&#x93e;&#x930;&#x94d;&#x925;&#x940; &#x92e;&#x930;&#x93e;&#x920;&#x940; &#x930;&#x902;&#x917;&#x92d;&#x942;&#x92e;&#x940;&#x91a;&#x93e; &#x905;&#x92d;&#x94d;&#x92f;&#x93e;&#x938; &#x915;&#x930;&#x924;&#x93e;&#x924;, &#x906;&#x92a;&#x932;&#x94d;&#x92f;&#x93e; &#x938;&#x93e;&#x902;&#x938;&#x94d;&#x915;&#x943;&#x924;&#x93f;&#x915; &#x92e;&#x941;&#x933;&#x93e;&#x902;&#x936;&#x940; &#x905;&#x927;&#x93f;&#x915; &#x918;&#x91f;&#x94d;&#x91f; &#x928;&#x93e;&#x924;&#x947; &#x91c;&#x94b;&#x921;&#x924;&#x93e;&#x924; &#x906;&#x923;&#x93f; &#x91c;&#x940;&#x935;&#x928;&#x93e;&#x938;&#x93e;&#x920;&#x940; &#x906;&#x935;&#x936;&#x94d;&#x92f;&#x915; &#x915;&#x94c;&#x936;&#x932;&#x94d;&#x92f;&#x947; &#x935;&#x93f;&#x915;&#x938;&#x93f;&#x924; &#x915;&#x930;&#x924;&#x93e;&#x924;.</p>
                        <p>&#x92f;&#x93e; &#x915;&#x93e;&#x930;&#x94d;&#x92f;&#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x924; &#x935;&#x93f;&#x926;&#x94d;&#x92f;&#x93e;&#x930;&#x94d;&#x925;&#x94d;&#x92f;&#x93e;&#x902;&#x928;&#x93e; &#x936;&#x93f;&#x915;&#x923;&#x94d;&#x92f;&#x93e;&#x91a;&#x940;, &#x938;&#x94d;&#x935;&#x924;&#x903;&#x932;&#x93e; &#x935;&#x94d;&#x92f;&#x915;&#x94d;&#x924; &#x915;&#x930;&#x923;&#x94d;&#x92f;&#x93e;&#x91a;&#x940;, &#x938;&#x93e;&#x926;&#x930;&#x940;&#x915;&#x930;&#x923; &#x915;&#x930;&#x923;&#x94d;&#x92f;&#x93e;&#x91a;&#x940; &#x906;&#x923;&#x93f; &#x92a;&#x94d;&#x930;&#x917;&#x924;&#x940; &#x938;&#x93e;&#x927;&#x923;&#x94d;&#x92f;&#x93e;&#x91a;&#x940; &#x938;&#x902;&#x927;&#x940; &#x92e;&#x93f;&#x933;&#x924;&#x947;. &#x92f;&#x93e; &#x915;&#x93e;&#x930;&#x94d;&#x92f;&#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x924; &#x90f;&#x915;&#x942;&#x923; &#x969;&#x96b; &#x938;&#x924;&#x94d;&#x930;&#x93e;&#x902;&#x91a;&#x93e; &#x938;&#x92e;&#x93e;&#x935;&#x947;&#x936; &#x906;&#x939;&#x947;. &#x915;&#x93e;&#x930;&#x94d;&#x92f;&#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x91a;&#x94d;&#x92f;&#x93e; &#x936;&#x947;&#x935;&#x91f;&#x940; &#x905;&#x925;&#x930;&#x94d;&#x935;&#x93e; &#x92f;&#x941;&#x928;&#x93f;&#x935;&#x94d;&#x939;&#x930;&#x94d;&#x938;&#x93f;&#x91f;&#x940; &#x92e;&#x941;&#x902;&#x92c;&#x908;&#x91a;&#x94d;&#x92f;&#x93e; &#x92a;&#x94d;&#x930;&#x924;&#x93f;&#x937;&#x94d;&#x920;&#x93f;&#x924; &#x938;&#x92d;&#x93e;&#x917;&#x943;&#x939;&#x93e;&#x924; &#x96a;&#x96b; &#x92e;&#x93f;&#x928;&#x93f;&#x91f;&#x93e;&#x902;&#x91a;&#x947; &#x928;&#x93e;&#x91f;&#x94d;&#x92f;&#x92a;&#x94d;&#x930;&#x92f;&#x94b;&#x917; &#x938;&#x93e;&#x926;&#x930; &#x915;&#x947;&#x932;&#x947; &#x91c;&#x93e;&#x924;&#x93e;&#x924;. &#x92a;&#x94d;&#x930;&#x924;&#x94d;&#x92f;&#x947;&#x915; &#x935;&#x93f;&#x926;&#x94d;&#x92f;&#x93e;&#x930;&#x94d;&#x925;&#x94d;&#x92f;&#x93e;&#x932;&#x93e; &#x935;&#x948;&#x92f;&#x915;&#x94d;&#x924;&#x93f;&#x915; &#x932;&#x915;&#x94d;&#x937; &#x906;&#x923;&#x93f; &#x92a;&#x94d;&#x930;&#x92d;&#x93e;&#x935;&#x940; &#x92a;&#x94d;&#x930;&#x936;&#x93f;&#x915;&#x94d;&#x937;&#x923; &#x92e;&#x93f;&#x933;&#x93e;&#x935;&#x947;, &#x92f;&#x93e;&#x938;&#x93e;&#x920;&#x940; &#x906;&#x92e;&#x94d;&#x939;&#x940; &#x932;&#x939;&#x93e;&#x928; &#x917;&#x91f;&#x93e;&#x902;&#x928;&#x93e; &#x92a;&#x94d;&#x930;&#x93e;&#x927;&#x93e;&#x928;&#x94d;&#x92f; &#x926;&#x947;&#x924;&#x94b;. &#x915;&#x93e;&#x930;&#x94d;&#x92f;&#x915;&#x94d;&#x930;&#x92e; &#x92f;&#x936;&#x938;&#x94d;&#x935;&#x940;&#x930;&#x940;&#x924;&#x94d;&#x92f;&#x93e; &#x92a;&#x942;&#x930;&#x94d;&#x923; &#x915;&#x947;&#x932;&#x94d;&#x92f;&#x93e;&#x928;&#x902;&#x924;&#x930; &#x935;&#x93f;&#x926;&#x94d;&#x92f;&#x93e;&#x930;&#x94d;&#x925;&#x94d;&#x92f;&#x93e;&#x902;&#x928;&#x93e; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x92a;&#x924;&#x94d;&#x930; &#x926;&#x93f;&#x932;&#x947; &#x91c;&#x93e;&#x924;&#x947;. &#x924;&#x938;&#x947;&#x91a;, &#x935;&#x93f;&#x926;&#x94d;&#x92f;&#x93e;&#x92a;&#x940;&#x920;&#x93e;&#x91a;&#x94d;&#x92f;&#x93e; &#x905;&#x902;&#x924;&#x930;&#x94d;&#x917;&#x924; &#x928;&#x93e;&#x91f;&#x94d;&#x92f; &#x906;&#x923;&#x93f; &#x91a;&#x93f;&#x924;&#x94d;&#x930;&#x92a;&#x91f; &#x928;&#x93f;&#x930;&#x94d;&#x92e;&#x93f;&#x924;&#x940;&#x92e;&#x927;&#x94d;&#x92f;&#x947; &#x938;&#x939;&#x92d;&#x93e;&#x917;&#x940; &#x939;&#x94b;&#x923;&#x94d;&#x92f;&#x93e;&#x91a;&#x940; &#x938;&#x902;&#x927;&#x940; &#x92e;&#x93f;&#x933;&#x924;&#x947;, &#x91c;&#x94d;&#x92f;&#x93e;&#x92e;&#x941;&#x933;&#x947; &#x930;&#x902;&#x917;&#x92e;&#x902;&#x91a;&#x93e;&#x935;&#x930; &#x906;&#x923;&#x93f; &#x924;&#x94d;&#x92f;&#x93e;&#x92a;&#x932;&#x940;&#x915;&#x921;&#x947;&#x939;&#x940; &#x92e;&#x94c;&#x932;&#x94d;&#x92f;&#x935;&#x93e;&#x928; &#x905;&#x928;&#x941;&#x92d;&#x935; &#x92a;&#x94d;&#x930;&#x93e;&#x92a;&#x94d;&#x924; &#x939;&#x94b;&#x924;&#x94b;.</p>
                        <h3>&#x905;&#x92d;&#x94d;&#x92f;&#x93e;&#x938;&#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x91a;&#x940; &#x935;&#x948;&#x936;&#x93f;&#x937;&#x94d;&#x91f;&#x94d;&#x92f;&#x947;</h3>
                        <ul>
                          <li><strong>&#x935;&#x92f;&#x94b;&#x917;&#x91f;:</strong> &#x96d;&#x2013;&#x967;&#x96a; &#x935;&#x930;&#x94d;&#x937;&#x947; &#x906;&#x923;&#x93f; &#x967;&#x96b;&#x2013;&#x967;&#x96f; &#x935;&#x930;&#x94d;&#x937;&#x947;</li>
                          <li><strong>&#x915;&#x93e;&#x930;&#x94d;&#x92f;&#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x91a;&#x93e; &#x915;&#x93e;&#x932;&#x93e;&#x935;&#x927;&#x940;:</strong> &#x969;&#x96b; &#x938;&#x924;&#x94d;&#x930;&#x947;</li>
                          <li><strong>&#x905;&#x902;&#x924;&#x93f;&#x92e; &#x938;&#x93e;&#x926;&#x930;&#x940;&#x915;&#x930;&#x923;:</strong> &#x96a;&#x96b; &#x92e;&#x93f;&#x928;&#x93f;&#x91f;&#x93e;&#x902;&#x91a;&#x93e; &#x928;&#x93e;&#x91f;&#x94d;&#x92f;&#x92a;&#x94d;&#x930;&#x92f;&#x94b;&#x917;</li>
                          <li><strong>&#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x92a;&#x924;&#x94d;&#x930;:</strong> &#x915;&#x93e;&#x930;&#x94d;&#x92f;&#x915;&#x94d;&#x930;&#x92e; &#x92a;&#x942;&#x930;&#x94d;&#x923; &#x915;&#x947;&#x932;&#x94d;&#x92f;&#x93e;&#x928;&#x902;&#x924;&#x930; &#x92a;&#x94d;&#x930;&#x92e;&#x93e;&#x923;&#x92a;&#x924;&#x94d;&#x930;</li>
                          <li><strong>&#x92a;&#x94d;&#x930;&#x936;&#x93f;&#x915;&#x94d;&#x937;&#x923; &#x92a;&#x926;&#x94d;&#x927;&#x924;&#x940;:</strong> &#x935;&#x948;&#x92f;&#x915;&#x94d;&#x924;&#x93f;&#x915; &#x932;&#x915;&#x94d;&#x937; &#x906;&#x923;&#x93f; &#x926;&#x930;&#x94d;&#x91c;&#x947;&#x926;&#x93e;&#x930; &#x92a;&#x94d;&#x930;&#x936;&#x93f;&#x915;&#x94d;&#x937;&#x923;&#x93e;&#x938;&#x93e;&#x920;&#x940; &#x932;&#x939;&#x93e;&#x928; &#x917;&#x91f;&#x93e;&#x902;&#x928;&#x93e; &#x92a;&#x94d;&#x930;&#x93e;&#x927;&#x93e;&#x928;&#x94d;&#x92f;</li>
                          <li><strong>&#x938;&#x93e;&#x926;&#x930;&#x940;&#x915;&#x930;&#x923;&#x93e;&#x91a;&#x94d;&#x92f;&#x93e; &#x938;&#x902;&#x927;&#x940;:</strong> &#x905;&#x902;&#x924;&#x930;&#x94d;&#x917;&#x924; &#x928;&#x93e;&#x91f;&#x94d;&#x92f;&#x92a;&#x94d;&#x930;&#x92f;&#x94b;&#x917; &#x906;&#x923;&#x93f; &#x91a;&#x93f;&#x924;&#x94d;&#x930;&#x92a;&#x91f; &#x928;&#x93f;&#x930;&#x94d;&#x92e;&#x93f;&#x924;&#x940;&#x92e;&#x927;&#x94d;&#x92f;&#x947; &#x938;&#x939;&#x92d;&#x93e;&#x917;&#x940; &#x939;&#x94b;&#x923;&#x94d;&#x92f;&#x93e;&#x91a;&#x940; &#x938;&#x902;&#x927;&#x940;</li>
                        </ul>
                        <p>&#x92e;&#x939;&#x93e;&#x930;&#x93e;&#x937;&#x94d;&#x91f;&#x94d;&#x930;&#x93e;&#x91a;&#x93e; &#x938;&#x92e;&#x943;&#x926;&#x94d;&#x927; &#x928;&#x93e;&#x91f;&#x94d;&#x92f;&#x935;&#x93e;&#x930;&#x938;&#x93e; &#x92a;&#x941;&#x922;&#x940;&#x932; &#x92a;&#x93f;&#x922;&#x940;&#x92a;&#x930;&#x94d;&#x92f;&#x902;&#x924; &#x92a;&#x94b;&#x939;&#x94b;&#x91a;&#x935;&#x923;&#x947; &#x906;&#x923;&#x93f; &#x924;&#x94d;&#x92f;&#x93e;&#x91a;&#x947; &#x91c;&#x924;&#x928; &#x915;&#x930;&#x923;&#x947; &#x939;&#x947; &#x92f;&#x93e; &#x915;&#x93e;&#x930;&#x94d;&#x92f;&#x915;&#x94d;&#x930;&#x92e;&#x93e;&#x91a;&#x947; &#x92a;&#x94d;&#x930;&#x92e;&#x941;&#x916; &#x909;&#x926;&#x94d;&#x926;&#x93f;&#x937;&#x94d;&#x91f; &#x906;&#x939;&#x947;. &#x936;&#x93f;&#x915;&#x93e; &#xb7; &#x935;&#x94d;&#x92f;&#x915;&#x94d;&#x924; &#x935;&#x94d;&#x939;&#x93e; &#xb7; &#x938;&#x93e;&#x926;&#x930; &#x915;&#x930;&#x93e; &#xb7; &#x92a;&#x94d;&#x930;&#x917;&#x924;&#x940; &#x915;&#x930;&#x93e; &#x92f;&#x93e; &#x92e;&#x942;&#x932;&#x94d;&#x92f;&#x93e;&#x902;&#x926;&#x94d;&#x935;&#x93e;&#x930;&#x947; &#x935;&#x93f;&#x926;&#x94d;&#x92f;&#x93e;&#x930;&#x94d;&#x925;&#x94d;&#x92f;&#x93e;&#x902;&#x928;&#x93e; &#x938;&#x94d;&#x935;&#x924;&#x903;&#x92e;&#x927;&#x940;&#x932; &#x915;&#x932;&#x93e;&#x917;&#x941;&#x923; &#x913;&#x933;&#x916;&#x923;&#x94d;&#x92f;&#x93e;&#x938; &#x906;&#x923;&#x93f; &#x915;&#x932;&#x93e;&#x915;&#x93e;&#x930; &#x92e;&#x94d;&#x939;&#x923;&#x942;&#x928; &#x924;&#x938;&#x947;&#x91a; &#x935;&#x94d;&#x92f;&#x915;&#x94d;&#x924;&#x940; &#x92e;&#x94d;&#x939;&#x923;&#x942;&#x928; &#x935;&#x93f;&#x915;&#x938;&#x93f;&#x924; &#x939;&#x94b;&#x923;&#x94d;&#x92f;&#x93e;&#x938; &#x92a;&#x94d;&#x930;&#x94b;&#x924;&#x94d;&#x938;&#x93e;&#x939;&#x93f;&#x924; &#x915;&#x947;&#x932;&#x947; &#x91c;&#x93e;&#x924;&#x947;.</p>
                        <p><strong>&#x938;&#x94d;&#x925;&#x933;:</strong> &#x905;&#x925;&#x930;&#x94d;&#x935;&#x93e; &#x92f;&#x941;&#x928;&#x93f;&#x935;&#x94d;&#x939;&#x930;&#x94d;&#x938;&#x93f;&#x91f;&#x940; &#x92e;&#x941;&#x902;&#x92c;&#x908;, &#x92e;&#x93e;&#x932;&#x93e;&#x921; &#x92a;&#x936;&#x94d;&#x91a;&#x93f;&#x92e;, &#x92e;&#x941;&#x902;&#x92c;&#x908;, &#x92e;&#x939;&#x93e;&#x930;&#x93e;&#x937;&#x94d;&#x91f;&#x94d;&#x930; &#x2013; &#x96a;&#x966;&#x966;&#x966;&#x96f;&#x96b;</p>
                        <p><strong>&#x938;&#x902;&#x92a;&#x930;&#x94d;&#x915;:</strong> <a href="tel:9082244109">9082244109</a> | <a href="tel:9930255054">9930255054</a> | <a href="tel:9167967756">9167967756</a></p>
                      </div>
                    ) : (
                      <div lang="en">
                        <p>The School of Drama &amp; Theatre is a unique initiative dedicated to nurturing the creativity, confidence and performance skills of children and young people while introducing them to Maharashtra&#39;s rich cultural heritage and age-old theatrical traditions.</p>
                        <p>We believe theatre is more than a performing art; it develops intelligence, imagination, wit, self-expression and creative thinking. Through structured training, hands-on learning and practical exposure, students explore the world of Marathi theatre, build a deeper connection with their cultural roots and develop essential life skills.</p>
                        <p>The programme offers young learners opportunities to learn, express, perform and grow. The programme consists of 35 sessions, culminating in a 45-minute theatrical performance at Atharva University Mumbai&#39;s prestigious auditorium. We prefer small batches to ensure focused, personalised learning. Students also receive a certificate upon completion and get opportunities to participate in in-house theatre and film productions, gaining valuable experience both on stage and beyond.</p>
                        <h3>Course Highlights</h3>
                        <ul>
                          <li><strong>Age Groups:</strong> 7-14 years and 15-19 years</li>
                          <li><strong>Programme Duration:</strong> 35 sessions</li>
                          <li><strong>Final Presentation:</strong> A 45-minute performance at Atharva University Mumbai&#39;s prestigious auditorium</li>
                          <li><strong>Certification:</strong> Certificate awarded upon completion</li>
                          <li><strong>Batch Size:</strong> We prefer small batches to ensure focused, personalised learning</li>
                          <li><strong>Performance Opportunities:</strong> Participation in in-house theatre and film productions</li>
                        </ul>
                        <p>The programme aims to preserve and pass on Maharashtra&#39;s vibrant theatrical legacy to the next generation, empowering young performers to Learn &middot; Express &middot; Perform &middot; Grow while discovering their potential as artists and individuals.</p>
                        <p><strong>Venue:</strong> Atharva University Mumbai, Malad West, Mumbai, Maharashtra - 400095</p>
                        <p><strong>Contact:</strong> <a href="tel:9082244109">9082244109</a> | <a href="tel:9930255054">9930255054</a> | <a href="tel:9167967756">9167967756</a></p>
                      </div>
                    )}
                  </div>
                ) : program.id === "all-play-carnival-of-joy" ? (
                  <div className="drama-course-details">
                    <button className="text-link" type="button" onClick={() => setCarnivalMarathi((current) => !current)} aria-pressed={carnivalMarathi}>
                      {carnivalMarathi ? "Read in English" : "मराठीत वाचा"}
                    </button>
                    {carnivalMarathi ? (
                      <div lang="mr">
                        <p>ऑल प्ले…आनंदाचा उत्सव या उपक्रमात आपले स्वागत आहे! ऑल प्ले प्रॉडक्शन्सचा हा एक विशेष उपक्रम असून, अथर्व फाउंडेशनच्या सहकार्याने वंचित घटकांतील मुलांपर्यंत नाट्यकलेचा आणि सर्जनशील अभिव्यक्तीचा आनंद पोहोचवण्याचे कार्य करतो.</p>
                        <p>प्रत्येक मूल महत्त्वाचे आहे, या दृढ विश्वासावर आधारित हा उपक्रम नाटक, अभिनय आणि रंगमंचीय सादरीकरणाच्या माध्यमातून मुलांमध्ये आत्मविश्वास निर्माण करतो, त्यांना स्वतःला ओळखण्यास मदत करतो आणि निर्भयपणे स्वतःच्या भावना व विचार व्यक्त करण्यासाठी प्रोत्साहित करतो. मुलांना आपल्यातील क्षमता ओळखण्याची, संकोचावर मात करण्याची आणि आपली सर्जनशीलता व्यक्त करण्याची संधी देणारे हे एक सर्वसमावेशक व्यासपीठ आहे.</p>
                        <p>या उपक्रमाची सुरुवात गोराई, मनोरी आणि बोरिवली येथील ग्रामीण व आदिवासी समुदायांतील मुलांपासून झाली. कोविड-१९ महामारीच्या काळात शाळा बंद होत्या आणि इंटरनेट तसेच मोबाईल उपकरणांची उपलब्धता मर्यादित होती. अशा परिस्थितीतही ऑल प्ले प्रॉडक्शन्सने अभिनय, नाटक, रंगभूमी आणि रंगमंचीय सादरीकरणांच्या माध्यमातून मुलांना सहभागी करून घेतले. यामुळे त्यांना स्वतःच्या व्यक्तिमत्त्वाचे विविध पैलू जाणून घेता आले आणि रंगमंचावर सादरीकरण करण्याचा आनंद अनुभवता आला.</p>
                        <h3>उपक्रमाची ठळक वैशिष्ट्ये</h3>
                        <ul>
                          <li>सर्वसमावेशक संधी: वंचित घटकांतील मुलांना नाट्यकला आणि सर्जनशील अभिव्यक्तीची संधी उपलब्ध करून देणे.</li>
                          <li>आत्मविश्वासाची जोपासना: मुलांच्या मनातील संकोच व भीती दूर करून त्यांच्यात आत्मविश्वास निर्माण करणे.</li>
                          <li>सर्जनशीलतेचा विकास: नाटक आणि रंगभूमीच्या माध्यमातून कल्पनाशक्ती, आत्मशोध आणि निर्भय अभिव्यक्तीला प्रोत्साहन देणे.</li>
                          <li>सादरीकरणाच्या संधी: मुलांना आपले कलागुण रंगमंचावर सादर करण्यासाठी व्यासपीठ उपलब्ध करून देणे.</li>
                          <li>समुदायाभिमुख उपक्रम: गोराई, मनोरी आणि बोरिवली येथील ग्रामीण व आदिवासी समुदायांतील मुलांपर्यंत पोहोचणे.</li>
                          <li>सर्वांगीण विकास: संवादकौशल्य, सांघिक कार्य, व्यक्तिमत्त्व विकास आणि भावनिक अभिव्यक्ती यांना प्रोत्साहन देणे.</li>
                        </ul>
                        <p>ऑल प्ले…आनंदाचा उत्सव हा केवळ एक उपक्रम नसून बालपण, सर्जनशीलता आणि सर्वसमावेशकतेचा आनंदोत्सव आहे. प्रत्येक मुलाला शिकण्याची, स्वतःला व्यक्त करण्याची, सहभागी होण्याची आणि स्वतःतील गुणवैशिष्ट्यांसह आत्मविश्वासाने चमकण्याची संधी मिळावी, हा या उपक्रमाचा मुख्य उद्देश आहे.</p>
                      </div>
                    ) : (
                      <div lang="en">
                        <p>All Play…A Carnival of Joy is a special initiative by All Play Productions that brings the magic of theatre, creativity, and self-expression to underprivileged children.</p>
                        <p>Rooted in the belief that every child matters, the programme uses theatre, drama and stage performances to nurture confidence, encourage self-discovery and empower children to express themselves fearlessly. It provides an inclusive platform for children to discover their potential, overcome inhibitions and showcase their creativity.</p>
                        <p>The journey began with children from rural and tribal communities in Gorai, Manori and Borivali. During the COVID-19 pandemic, when schools were closed and access to the internet and mobile devices was limited, All Play Productions continued engaging children through acting, drama, theatre and stage performances, helping them explore their personalities and discover the joy of performing.</p>
                        <h3>Programme Highlights</h3>
                        <ul>
                          <li>Inclusive Opportunities: Bringing theatre and creative expression to underprivileged children.</li>
                          <li>Confidence Building: Helping children overcome inhibitions and develop self-confidence.</li>
                          <li>Creative Exploration: Encouraging imagination, self-discovery and fearless expression through drama and theatre.</li>
                          <li>Performance Opportunities: Providing a platform for children to showcase their talents on stage.</li>
                          <li>Community Outreach: Engaging children from rural and tribal communities across Gorai, Manori and Borivali.</li>
                          <li>Holistic Development: Nurturing communication, teamwork, personality development and emotional expression.</li>
                        </ul>
                        <p>All Play…A Carnival of Joy is more than a programme; it is a celebration of childhood, creativity and inclusion, where every child gets the opportunity to learn, express, participate and shine.</p>
                      </div>
                    )}
                  </div>
                ) : program.id === "all-play-production" ? (
                  <div className="drama-course-details">
                    <button className="text-link" type="button" onClick={() => setProductionMarathi((current) => !current)} aria-pressed={productionMarathi}>
                      {productionMarathi ? "Read in English" : "मराठीत वाचा"}
                    </button>
                    {productionMarathi ? (
                      <div lang="mr">
                        <p>ऑल प्ले प्रॉडक्शन्सचा प्रवास नेहमीच तरुण कलाकारांना शिकण्यासाठी, सादरीकरण करण्यासाठी आणि स्वतःची कलात्मक क्षमता विकसित करण्यासाठी अर्थपूर्ण संधी उपलब्ध करून देण्याचा राहिला आहे.</p>
                        <p>आजवर आम्ही यशस्वीपणे ५० नाट्यनिर्मिती साकारल्या आहेत. यापैकी अनेक नाटकांनी राज्यस्तरीय स्पर्धांमध्ये तसेच झांकृतीसारख्या प्रतिष्ठित व्यासपीठांवर सहभाग नोंदवला आहे. या अनुभवांमुळे आमच्या विद्यार्थ्यांना कार्यशाळेच्या मर्यादेपलीकडे जाऊन मोठ्या व्यासपीठांवर आपली कला सादर करण्याची संधी मिळाली आहे.</p>
                        <p>रंगभूमीपासून सुरू झालेला आमचा प्रवास चित्रपटसृष्टीपर्यंतही विस्तारला आहे. आमच्या 'बोल बोल राणी, इत्ता इत्ता आणि' या मराठी लघुपटाच्या माध्यमातून विद्यार्थ्यांनी चित्रपटविश्वात पहिले पाऊल टाकले. कॅमेऱ्यासमोर अभिनय करणे, चित्रपट निर्मितीची प्रक्रिया समजून घेणे आणि व्यावसायिक चित्रपट प्रकल्पाचा भाग म्हणून काम करणे, असा अनमोल अनुभव त्यांना मिळाला.</p>
                        <p>या लघुपटाचा प्रवास केवळ निर्मितीपुरता मर्यादित राहिला नाही. विविध चित्रपट महोत्सवांमध्ये त्याची निवड झाली आणि त्याला प्रशंसा व मान्यताही मिळाली. यामध्ये दादासाहेब फाळके चित्रपट महोत्सव आणि मुंबई आंतरराष्ट्रीय चित्रपट महोत्सव यांसारख्या महोत्सवांमधील सहभाग व गौरवाचा समावेश आहे.</p>
                        <p>आमच्यासाठी प्रत्येक निर्मिती ही केवळ एक कलाकृती किंवा सादरीकरण नसते. ती तरुण कलाकारांना प्रत्यक्ष कामाचा अनुभव, व्यावसायिक क्षेत्राची ओळख आणि स्वतःमधील क्षमता शोधण्याची संधी देणारा एक महत्त्वपूर्ण टप्पा असतो — मग ते रंगमंच असो वा रुपेरी पडदा.</p>
                      </div>
                    ) : (
                      <div lang="en">
                        <p>At All Play Productions, our journey has always been about creating meaningful opportunities for young performers to learn, perform and grow.</p>
                        <p>Over the years, we have successfully created 50 theatrical productions, with several productions participating at State-level competitions and platforms such as Jhankriti. These experiences have given our students the opportunity to take their theatre beyond the workshop space and onto larger platforms.</p>
                        <p>Our journey has also expanded from theatre to cinema. Through our Marathi short film Bol Bol Rani, Itta Itta Aani. Our students stepped into the world of film, experiencing the process of camera acting, film production and working as part of a professional film project.</p>
                        <p>The film went beyond the making process and has been travelled to various film festivals, receiving appreciation and recognition, including recognition at the Dadasaheb Phalke Film Festival, Mumba International Film Festival, etc.</p>
                        <p>For us, every production is more than a performance. It is an opportunity to give young artists real-world experiences, professional exposure and platforms to discover their potential—both on stage and on screen.</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p>{program.description}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="programs" className="section programs-section programs-design">
        <div className="container">
          <Reveal className="section-top">
            <SectionHeading
              eyebrow="FIND YOUR SPOTLIGHT"
              description={hideIntroDescription ? undefined : "Theatre training, workshops and performance opportunities for children and young people."}
            >
              Learn, Express, Perform <em>and Grow</em>
            </SectionHeading>
          </Reveal>
          <div className="program-grid">
            {programs.map((program) => (
              <Reveal key={program.id}>
                <ProgramCard program={program} onSelect={onSelect} />
              </Reveal>
            ))}
          </div>
          <p><a className="text-link" href="/documents/all-play-leaflet.pdf" target="_blank" rel="noreferrer">Explore our theatre &rarr;</a></p>
        </div>
      </section>
      {/* Kept for later reuse:
      <section className="section school-outreach-section programs-design">
        <div className="container">
          <SectionHeading eyebrow="THEATRE IN YOUR SCHOOL" description="An introduction to All Play Productions, Atharva Foundation and Atharva University through short videos and a practical demo class led by a theatre trainer.">
            A First Step <em>onto the Stage</em>
          </SectionHeading>
          <p>The school presentation lasts approximately 1 to 1.5 hours. It introduces children to drama, creative expression and the rich theatre culture of Maharashtra.</p>
          <a className="text-link" href="/contact#contact">Enquire about a school presentation ↗</a>
        </div>
      </section>
      */}
      <section className="section learning-section programs-design">
        <div className="container">
          <SectionHeading
            eyebrow="BEYOND THE SCRIPT"
          >
            A Stage for <em>Every Skill</em>
          </SectionHeading>
          <div className="learning-grid">
            {learning.map((item, index) => (
              <Reveal key={item.title}>
                <LearningCard item={item} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
