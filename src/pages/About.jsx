import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-black text-navy mb-2 tracking-tight">ABOUT SUSU</h1>
      <p className="text-sm text-slate font-bold uppercase tracking-wider mb-8">
        Tech Awareness Association
      </p>

      <div className="space-y-6">
        <section className="bg-white border-4 border-navy p-8 shadow-[8px_8px_0px_0px_#FAC206]">
          <h2 className="text-2xl font-black text-navy mb-4 uppercase tracking-tight">What is TAA?</h2>
          <p className="text-lg text-ink leading-relaxed mb-4">
            Tech Awareness Association (TAA) is a student-founded nonprofit based in Shrewsbury, Massachusetts. We believe that everyone — regardless of age or experience — deserves access to technology and the knowledge to use it confidently.
          </p>
          <p className="text-lg text-ink leading-relaxed">
            Our volunteers teach device repair, host tech literacy workshops, and work to reduce electronic waste in our community. We started because we saw our grandparents and neighbors struggling with technology and knew we could help.
          </p>
        </section>

        <section className="bg-white border-4 border-navy p-8">
          <h2 className="text-2xl font-black text-navy mb-4 uppercase tracking-tight">Why We Built Susu</h2>
          <p className="text-lg text-ink leading-relaxed mb-4">
            Susu was created to bring our in-person teaching approach online. The name &ldquo;Susu&rdquo; comes from the concept of community support and mutual aid — the idea that knowledge should be shared freely and without judgment.
          </p>
          <p className="text-lg text-ink leading-relaxed">
            We designed every screen, every word, and every interaction with seniors in mind. Large text, warm language, and simple step-by-step guidance — because learning technology should never feel intimidating.
          </p>
        </section>

        <section className="bg-white border-4 border-navy p-8">
          <h2 className="text-2xl font-black text-navy mb-4 uppercase tracking-tight">Find a Workshop</h2>
          <p className="text-lg text-ink leading-relaxed mb-6">
            We regularly host free workshops at libraries, senior centers, and community spaces in the Shrewsbury, MA area. Check our website for upcoming events!
          </p>
          <a
            href="https://www.techawarenessma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sunshine text-ink px-10 py-5 font-black text-lg uppercase tracking-wider border-4 border-navy hover:shadow-[4px_4px_0px_0px_#2C3E50] transition-all min-h-12"
          >
            Visit Our Website &rarr;
          </a>
        </section>

        <section className="bg-white border-4 border-navy p-8">
          <h2 className="text-2xl font-black text-navy mb-4 uppercase tracking-tight">Get in Touch</h2>
          <p className="text-lg text-ink leading-relaxed">
            Have questions, feedback, or want to volunteer? Visit{' '}
            <a
              href="https://www.techawarenessma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky underline font-bold"
            >
              techawarenessma.com
            </a>{' '}
            to learn more and connect with us.
          </p>
        </section>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/topics"
          className="inline-block bg-sunshine text-ink px-10 py-5 font-black text-lg uppercase tracking-wider border-4 border-navy hover:shadow-[4px_4px_0px_0px_#2C3E50] transition-all min-h-12"
        >
          Start Learning &rarr;
        </Link>
      </div>
    </div>
  );
}
