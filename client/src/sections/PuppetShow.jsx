import { gallery } from "../data";
import { SectionHeading } from "../components/UI";

const celebrityVisitPhotos = gallery.find((item) => item.title === "Celebrity Visits")?.images ?? [];
const existingPhotos = [
  ...[0, 1, 3, 5, 7, 8, 10, 12, 14, 15, 16, 18, 20, 21, 23].map((index) => gallery[0]?.images[index]),
  celebrityVisitPhotos[0],
  celebrityVisitPhotos[3],
  { src: "/documents/puppet1.JPG", alt: "Puppet performance at All Play Productions" },
  { src: "/documents/puppet2.jpeg", alt: "Puppet show at All Play Productions" },
].filter((photo) => photo && ![
  "/documents/IMG_2140.JPG",
  "/documents/IMG_5192.JPG",
  "/documents/B_carnival3.JPG",
  "/documents/carnivalS4_2.JPG",
].includes(photo.src));
const newStoryPhotos = [
  { src: "/documents/kshitija.jpeg", alt: "Kshitija in an All Play Productions story" },
  { src: "/bol-bol-raani.jpeg", alt: "Bol Bol Raani at All Play Productions" },
  { src: "/documents/shriGanesha.jpeg", alt: "Shri Ganesha story at All Play Productions" },
  { src: "/documents/school.png", alt: "School story at All Play Productions" },
  { src: "/documents/ghongaBasant.jpeg", alt: "Ghonga Basant at All Play Productions" },
];
let nextStoryPhoto = 0;
const featuredPhotos = existingPhotos.flatMap((photo, index) => [
  photo,
  ...(index % 4 === 2 && nextStoryPhoto < newStoryPhotos.length
    ? [newStoryPhotos[nextStoryPhoto++]]
    : []),
]);

export default function PuppetShow() {
  return (
    <section className="puppet-show" aria-labelledby="puppet-show-title">
      <div className="container">
        <SectionHeading eyebrow="A LITTLE THEATRE MAGIC">
          <span id="puppet-show-title">Our stories <em>come alive</em></span>
        </SectionHeading>
        <div className="puppet-stage">
        <div className="puppet-scroll-viewport">
          <div className="puppet-gallery">
            {[0, 1].map((set) => (
              <div className="puppet-gallery-set" key={set} aria-hidden={set === 1}>
                {[...featuredPhotos, ...featuredPhotos].map((photo, index) => (
                  <figure className="puppet-photo" key={`${photo.src}-${index}`} style={{ "--puppet-delay": `${(index % featuredPhotos.length) * -0.7}s` }}>
                    <span className="puppet-strings" aria-hidden="true" />
                    <span className="puppet-frame">
                      <img src={photo.src} alt={set === 0 ? photo.alt : ""} loading="lazy" />
                    </span>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
          <div className="puppet-stage-lights" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
