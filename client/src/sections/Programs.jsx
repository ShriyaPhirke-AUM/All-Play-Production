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
export default function Programs({ onSelect, hideIntroDescription = false, hideProgramsSection = false, hideLearningSection = false }) {
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
                        <p>नाट्य आणि रंगभूमी विद्यालय हा मुलांमध्ये आणि तरुणांमध्ये सर्जनशीलता, आत्मविश्वास आणि अभिनय कौशल्ये विकसित करण्यासाठी समर्पित एक अनोखा उपक्रम आहे. महाराष्ट्राच्या समृद्ध सांस्कृतिक वारशाची आणि पारंपरिक नाट्यपरंपरेची ओळख करून देणे, हा देखील या उपक्रमाचा महत्त्वाचा उद्देश आहे.</p>
                        <p>आमचा विश्वास आहे की, नाट्यकला ही केवळ एक सादरीकरणाची कला नसून, ती बुद्धिमत्ता, कल्पनाशक्ती, प्रसंगावधान, आत्मअभिव्यक्ती आणि सर्जनशील विचारशक्ती विकसित करणारे प्रभावी माध्यम आहे. नियोजनबद्ध प्रशिक्षण, प्रत्यक्ष कृतीतून शिक्षण आणि व्यावहारिक अनुभव यांच्या माध्यमातून विद्यार्थी मराठी रंगभूमीचे विविध पैलू जाणून घेतात, आपल्या सांस्कृतिक मुळांशी अधिक दृढ नाते जोडतात आणि जीवनासाठी आवश्यक कौशल्ये विकसित करतात.</p>
                        <p>या कार्यक्रमामध्ये एकूण ३५ सखोल प्रशिक्षण सत्रांचा समावेश असून, त्याची सांगता ४५ मिनिटांच्या नाट्यप्रयोगाने होते. हा नाट्यप्रयोग अथर्व युनिव्हर्सिटी, मुंबई येथील प्रतिष्ठित सभागृहात (मालाड, मुंबई) सादर केला जातो. विद्यार्थ्यांना विद्यापीठाच्या अंतर्गत नाट्य आणि चित्रपट निर्मितीमध्ये सहभागी होण्याच्या संधीही मिळतात. यामुळे त्यांना रंगमंचावर तसेच रंगमंचाबाहेरील विविध क्षेत्रांत प्रत्यक्ष अनुभव मिळवता येतो.</p>
                        <h3>अभ्यासक्रमाची प्रमुख वैशिष्ट्ये</h3>
                        <ul>
                          <li><strong>वयोगट:</strong> ७–१४ वर्षे आणि १५–१९ वर्षे</li>
                          <li><strong>कार्यक्रमाचा कालावधी:</strong> ३५ सत्रे</li>
                          <li><strong>अंतिम सादरीकरण:</strong> अथर्व युनिव्हर्सिटी, मुंबई येथील प्रतिष्ठित सभागृहात ४५ मिनिटांचा नाट्यप्रयोग</li>
                          <li><strong>प्रमाणपत्र:</strong> कार्यक्रम पूर्ण केल्यानंतर प्रमाणपत्र प्रदान केले जाईल.</li>
                          <li><strong>प्रत्येक तुकडीतील विद्यार्थ्यांची संख्या:</strong> प्रत्येक विद्यार्थ्याला वैयक्तिक लक्ष देऊन प्रभावी प्रशिक्षण देता यावे, यासाठी लहान तुकड्यांना प्राधान्य दिले जाते.</li>
                          <li><strong>सादरीकरणाच्या संधी:</strong> विद्यापीठाच्या अंतर्गत नाट्य आणि चित्रपट निर्मितीमध्ये सहभागी होण्याची संधी.</li>
                        </ul>
                        <p>महाराष्ट्राचा समृद्ध नाट्यवारसा जतन करून तो पुढील पिढीपर्यंत पोहोचवणे आणि तरुण कलाकारांना शिका · व्यक्त व्हा · सादर करा · प्रगती करा यासाठी सक्षम बनवणे, हे या कार्यक्रमाचे प्रमुख उद्दिष्ट आहे.</p>
                        <p><strong>स्थळ:</strong> अथर्व युनिव्हर्सिटी, मुंबई, मालाड पश्चिम, मुंबई, महाराष्ट्र – ४०००९५</p>
                        <p><strong>संपर्क:</strong> 9082244109 | 9167967756</p>
                      </div>
                    ) : (
                      <div lang="en">
                        <p>The School of Drama &amp; Theatre is a unique initiative dedicated to nurturing the creativity, confidence and performance skills of children and young people while introducing them to Maharashtra&#39;s rich cultural heritage and age-old theatrical traditions.</p>
                        <p>We believe theatre is more than a performing art; it develops intelligence, imagination, wit, self-expression and creative thinking. Through structured training, hands-on learning and practical exposure, students explore the world of Marathi theatre, build a deeper connection with their cultural roots and develop essential life skills.</p>
                        <p>The programme consists of in depth 35 sessions, culminating in a 45-minute theatrical performance which is presented in Atharva University Mumbai's prestigious auditorium (Malad, Mumbai). Students also get opportunities to participate in in-house theatre and film productions, gaining valuable experience both on stage and beyond.</p>
                        <h3>Course Highlights</h3>
                        <ul>
                          <li><strong>Age Groups:</strong> 7-14 years and 15-19 years</li>
                          <li><strong>Programme Duration:</strong> 35 sessions</li>
                          <li><strong>Final Presentation:</strong> A 45-minute performance at Atharva University Mumbai&#39;s prestigious auditorium</li>
                          <li><strong>Certification:</strong> Certificate awarded upon completion</li>
                          <li><strong>Batch Size:</strong> We prefer small batches to ensure focused, personalised learning</li>
                          <li><strong>Performance Opportunities:</strong> Participation in in-house theatre and film productions</li>
                        </ul>
                        <p>The programme aims to preserve and pass on Maharashtra&#39;s vibrant theatrical legacy to the next generation, empowering young performers to Learn &middot; Express &middot; Perform &middot; Grow</p>
                        <p><strong>Venue:</strong> Atharva University Mumbai, Malad West, Mumbai, Maharashtra - 400095</p>
                        <p><strong>Contact:</strong> <a href="tel:9082244109">9082244109</a> | <a href="tel:9167967756">9167967756</a></p>
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
                        <p>‘ऑल प्ले… अ कार्निव्हल ऑफ जॉय’ हा ऑल प्ले प्रॉडक्शन्सचा वंचित मुलांसाठीचा एक विशेष उपक्रम असून, त्याला अथर्व फाउंडेशनचे सहकार्य लाभले आहे.</p>
                        <p>या उपक्रमाद्वारे नाटक आणि रंगभूमीच्या माध्यमातून मुलांच्या जीवनात सकारात्मक परिवर्तन घडवून आणण्याचा प्रयत्न केला जातो. प्रत्येक मूल महत्त्वाचे आहे, या विश्वासावर आधारित हा उपक्रम मुलांमधील सुप्त कलागुणांना वाव देणे, त्यांचा आत्मविश्वास वाढवणे आणि त्यांना स्वतःची ओळख व क्षमता जाणून घेण्यासाठी प्रोत्साहित करणे हे उद्दिष्ट ठेवतो.</p>
                        <p>विविध नाट्यविषयक उपक्रम आणि रंगमंचावरील सादरीकरणांच्या माध्यमातून मुलांना आपल्या मनातील संकोच दूर करण्यासाठी, निर्भयपणे स्वतःच्या भावना व्यक्त करण्यासाठी आणि स्वतःसह आजूबाजूच्या जगाला अधिक चांगल्या प्रकारे समजून घेण्यासाठी प्रोत्साहित केले जाते.</p>
                        <p>या उपक्रमाची सुरुवात गोराई, मनोरी आणि बोरिवली येथील ग्रामीण व आदिवासी समुदायांतील मुलांना सहभागी करून घेण्यापासून झाली. कोविड-१९ महामारीच्या काळात शाळा बंद असताना आणि इंटरनेट व मोबाईल उपकरणांचा मर्यादित प्रवेश असतानाही, ऑल प्ले प्रॉडक्शन्सने नाटक व रंगभूमीच्या माध्यमातून मुलांपर्यंत पोहोचण्याचे कार्य सुरू ठेवले. यामुळे मुलांना शिकण्याच्या आणि अर्थपूर्ण उपक्रमांमध्ये सहभागी होण्याच्या संधी उपलब्ध झाल्या.</p>
                        <h3>उपक्रमाची प्रमुख वैशिष्ट्ये</h3>
                        <ul>
                          <li><strong>समुदायाभिमुख उपक्रम:</strong> वंचित घटकांतील मुलांना सहभागी करून घेणे.</li>
                          <li><strong>सर्वसमावेशक संधी:</strong> वंचित मुलांसाठी नाट्यकला आणि सर्जनशील अभिव्यक्तीच्या संधी उपलब्ध करून देणे.</li>
                          <li><strong>सर्जनशीलतेचा शोध:</strong> कल्पनाशक्ती, आत्मशोध आणि निर्भयपणे स्वतःला व्यक्त करण्यास प्रोत्साहन देणे.</li>
                          <li><strong>सादरीकरणाच्या संधी:</strong> मुलांना रंगमंचावर आपले कलागुण सादर करण्यासाठी व्यासपीठ उपलब्ध करून देणे.</li>
                          <li><strong>सर्वांगीण विकास:</strong> संवादकौशल्ये, भावनिक व शारीरिक अभिव्यक्ती विकसित करणे आणि आत्मसन्मान वाढवणे.</li>
                        </ul>
                        <p>‘ऑल प्ले… अ कार्निव्हल ऑफ जॉय’ हा बालपणाचा आनंदोत्सव आहे, जो सर्जनशीलता, आनंद आणि निरागसता यांचा सुंदर मिलाफ घडवून आणतो.</p>
                        </div>
                    ) : (
                      <div lang="en">
                        <p>“All Play… a carnival of joy!” is a special initiative by All Play Productions for underprivileged children and is supported by Atharva Foundation.</p>
                        <p>This program brings the transformative power of theatre and drama in these children. Rooted in the belief that every child matters, the programme aims to nurture innate talents, build confidence and help children discover their unique identities and potential.</p>
                        <p>Through engaging theatrical activities and stage performances, children are encouraged to overcome inhibitions, express themselves fearlessly and develop a deeper understanding of themselves and the world around them.</p>
                        <p>The initiative began by engaging children from rural and tribal communities in Gorai, Manori and Borivali. During the COVID-19 pandemic, when schools were closed and access to the internet and mobile devices was limited, All Play Productions continued reaching out to children through drama &amp; theatre, providing opportunities to educate and engage them in meaningful ways.</p>
                        <p><strong>Programme Highlights</strong></p>
                        <ul>
                          <li><strong>Community Outreach:</strong> Engaging underprivileged children.</li>
                          <li><strong>Inclusive Opportunities:</strong> Making theatre and creative expression accessible to underprivileged children.</li>
                          <li><strong>Creative Exploration:</strong> Encouraging imagination, self-discovery and fearless self-expression.</li>
                          <li><strong>Performance Opportunities:</strong> Providing a platform for children to showcase their talents through stage performances.</li>
                          <li><strong>Holistic Development:</strong> Developing communication, emotional &amp; physical expressions and building self esteem.</li>
                          <li>“All Play… a carnival of joy!” is a celebration of childhood, bringing creativity, joy and innocence together in a magical way.</li>
                        </ul>
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
      {!hideProgramsSection && <section id="programs" className="section programs-section programs-design">
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
      </section>}
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
      {!hideLearningSection && <section className="section learning-section programs-design">
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
      </section>}
    </>
  );
}
