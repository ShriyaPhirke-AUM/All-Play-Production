import { useState } from "react";
import { Star } from "lucide-react";
import { SectionHeading } from "../components/UI";

export default function TestimonialsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    const form = event.currentTarget;
    form.querySelector("[role=alert]").textContent = "";
    setSubmitted(false);
    const values = Object.fromEntries(new FormData(form));
    values.publishPermission = form.elements.publishPermission.checked;
    try {
      const response = await fetch("/api/feedback", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "We could not submit your feedback. Please try again.");
      form.reset();
      setSubmitted(true);
    } catch (error) {
      form.querySelector("[role=alert]").textContent = error.message || "Unable to reach the server. Please try again.";
    } finally { setBusy(false); }
  }
  return <div className="testimonials-page">
    <section className="section testimonials-intro"><div className="container">
      <div className="section-heading">
        <p className="eyebrow"><span aria-hidden="true" />Real stories. Growing confidence. Lasting memories.</p>
        <h1>Voices of <em>All Play Productions</em></h1>
      </div>
    </div></section>
    <section className="section parent-quotes"><div className="container">
      <div className="parent-feedback-grid">
        <article className="parent-feedback-card">
          <span className="feedback-card-mark" aria-hidden="true">❞</span>
          <blockquote>“My child has become more confident and expressive.”</blockquote>
          <p className="feedback-attribution">— Parent of a student</p>
          <small>Example testimonial</small>
        </article>
        <article className="parent-feedback-card">
          <span className="feedback-card-mark feedback-card-star" aria-hidden="true">☆</span>
          <p className="feedback-card-rating" aria-label="5 out of 5 stars">★★★★★</p>
          <p className="feedback-card-experience">Overall experience: Excellent</p>
          <p className="feedback-attribution">— Parent feedback</p>
          <small>Example feedback card</small>
        </article>
      </div>
    </div></section>
    <section className="section testimonial-category"><div className="container">
      <SectionHeading eyebrow="PARENT STORIES">Parents Speak</SectionHeading>
    </div></section>
    <section className="section testimonial-category celebrity-category"><div className="container">
      <SectionHeading eyebrow="FROM THE ARTS COMMUNITY">Celebrity Voices</SectionHeading>
    </div></section>
    <section className="section feedback-section" id="share-feedback"><div className="container feedback-layout">
      <div><SectionHeading eyebrow="SHARE YOUR EXPERIENCE">We’d love to <em>hear from you.</em></SectionHeading></div>
      <form className="enquiry-form feedback-form" onSubmit={submit}>
        <h3>A Note from You</h3>
        <p className="feedback-intro">Share your thoughts, reflections and memories.</p>
        <label><span className="feedback-label-text">Parent's Name<span aria-hidden="true">*</span></span><input name="name" required maxLength="100" autoComplete="name" placeholder="Parent or guardian's name" /></label>
        <label><span className="feedback-label-text">Relationship to the student<span aria-hidden="true">*</span></span><select name="relationship" required defaultValue=""><option value="" disabled>Select your relationship</option><option>Parent</option><option>Student</option><option>Visitor</option><option>Other</option></select></label>
        <label>The Student's Name<input name="studentName" maxLength="100" placeholder="The Student's full name" /></label>
        <fieldset className="rating-fieldset">
          <legend>Overall experience rating<span aria-hidden="true">*</span></legend>
          <div className="rating-control">
            {[1, 2, 3, 4, 5].map((value) => <span className="rating-option" key={value}>
              <input id={`feedback-rating-${value}`} type="radio" name="rating" value={value} required aria-label={`${value} out of 5 stars`} />
              <label htmlFor={`feedback-rating-${value}`} title={`${value} out of 5 stars`}><Star size={30} fill="currentColor" /></label>
            </span>)}
          </div>
        </fieldset>
        <label><span className="feedback-label-text">Written feedback<span aria-hidden="true">*</span></span><textarea name="feedback" rows="5" required maxLength="2000" placeholder="Share your experience with All Play Productions" /></label>
        <label className="feedback-consent"><input name="publishPermission" type="checkbox" /><span>I give permission for my feedback to be published on the website.</span></label>
        <p className="form-note">* Required. Your feedback will be emailed to All Play Productions.</p>
        <button className="button" type="submit" disabled={busy}>{busy ? "Submitting…" : "Submit Feedback"}</button>
        <p className="feedback-success" role="status" aria-live="polite">{submitted ? "Thank you! Your feedback has been submitted." : ""}</p>
        <p className="feedback-error" role="alert" aria-live="assertive"></p>
      </form>
    </div></section>
  </div>;
}
