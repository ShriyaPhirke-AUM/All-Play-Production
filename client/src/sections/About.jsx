import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal, SectionHeading } from "../components/UI";
const posters = [
  { src: "/documents/school.png", alt: "All Play Productions school play poster" },
  { src: "/documents/kshitija.jpeg", alt: "Kshitija play poster" },
  { src: "/bol-bol-raani.jpeg", alt: "Bol Bol Raani short film poster" },
  { src: "/documents/shriGanesha.jpeg", alt: "Shri Ganesha play poster" },
  { src: "/documents/ghongaBasant.jpeg", alt: "Ghonga Basant play poster" },
];
export default function About() {
  const [activePoster, setActivePoster] = useState(0);
  useEffect(() => {
    const preloadedPosters = posters.map(({ src }) => {
      const image = new window.Image();
      image.src = src;
      return image;
    });
    const timer = window.setInterval(() => {
      setActivePoster((current) => (current + 1) % posters.length);
    }, 4000);
    return () => {
      window.clearInterval(timer);
      preloadedPosters.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, []);
  return (
    <>
      <section id="about" className="section about-section">
        <div className="container about-story-layout">
          <Reveal className="about-poster-wall">
            <AnimatePresence initial={false} mode="sync">
              <motion.img
                key={posters[activePoster].src}
                src={posters[activePoster].src}
                alt={posters[activePoster].alt}
                loading="eager"
                decoding="async"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </Reveal>
          <Reveal className="about-story-copy">
            <SectionHeading eyebrow="THE ALL PLAY PRODUCTIONS STORY">
              Where Creativity
              <br />
              Meets <em>Confidence</em>
            </SectionHeading>
            <p>
              We take immense pleasure in introducing an ancient art of Drama &amp; performing arts to children and inculcate the qualities it develops in our children. It’s an endeavor to empower them about themselves and life through fun and joy, to illuminate their brilliance and shine their individuality through the processes, as who they are and be confident to share themselves with world. It’s an effort to let them know that they do matter and bring out their uniqueness joyfully.
            </p>
            <p>
              Over the years, All Play Productions has trained approximately 600+ children and teenagers and created around 50 theatrical productions. Our students have participated in Maharashtra Rajya Bal Natya Spardha, Jhankriti – a global competition, and have received opportunities on platforms such as Chala Hawa Yeu Dya ( A Zee Marathi reality show),etc. They have also been featured in All Play Production’s first ever Marathi short film - Bol Bol Rani, Itta Itta Aani.
            </p>
            <a className="text-link section-read-more" href="/why-theatre">Read more about the theatre ↗</a>
            <div className="highlights">
              {[
                "Structured Training",
                "Creative Exposure",
                "Live Performances",
                "Skills for Life",
              ].map((text) => (
                <span key={text}>
                  <Check size={16} />
                  {text}
                </span>
              ))}
            </div>
            <div className="about-impact" aria-label="All Play impact">
              <div><strong>600+</strong><span>children &amp; youth</span></div>
              <div><strong>50+</strong><span>theatrical productions</span></div>
              <div className="short-film-impact"><strong>1</strong><span>short<br />film</span></div>
            </div>
          </Reveal>
        </div>
      </section>

    </>
  );
}
