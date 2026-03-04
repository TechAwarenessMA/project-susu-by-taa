import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getLessonById, getTopicById } from '../data/content';
import StepList from '../components/StepList';
import CompletionBanner from '../components/CompletionBanner';

export default function Lesson({ isLessonComplete, completeLesson, uncompleteLesson }) {
  const { id } = useParams();
  const lesson = getLessonById(id);
  const [completedSteps, setCompletedSteps] = useState([]);

  if (!lesson) {
    return <Navigate to="/topics" replace />;
  }

  const topic = getTopicById(lesson.topicId);
  const isComplete = isLessonComplete(lesson.id);

  function handleToggleStep(stepNumber) {
    setCompletedSteps(prev =>
      prev.includes(stepNumber)
        ? prev.filter(n => n !== stepNumber)
        : [...prev, stepNumber]
    );
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div>
      {/* Back link */}
      <Link
        to={`/topics/${lesson.topicId}`}
        className="inline-flex items-center gap-2 text-navy text-sm font-black uppercase tracking-wider mb-6 hover:text-sky hover:gap-3 transition-all"
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 10H5M5 10L10 5M5 10L10 15" />
        </svg>
        Back
      </Link>

      {/* Breadcrumb */}
      <div className="inline-block px-4 py-2 bg-navy text-white font-black text-xs uppercase tracking-wider mb-6">
        {topic?.emoji} {topic?.title}
      </div>

      {/* 1. Welcome Banner */}
      <section className="bg-white border-4 border-navy p-8 mb-8 shadow-[8px_8px_0px_0px_#FAC206]">
        <h1 className="text-3xl md:text-4xl font-black text-navy tracking-tight mb-2">{lesson.title}</h1>
        <p className="text-lg text-slate font-bold">Let&apos;s learn this together, one step at a time.</p>
      </section>

      {/* 2. Why This Matters */}
      <section className="bg-white border-4 border-navy p-6 mb-8">
        <h2 className="text-xl font-black text-navy uppercase tracking-tight mb-3">Why This Matters</h2>
        <p className="text-lg text-ink leading-relaxed">{lesson.whyItMatters}</p>
      </section>

      {/* 3. Step-by-Step Guide */}
      <section className="bg-white border-4 border-navy p-6 mb-8">
        <h2 className="text-xl font-black text-navy uppercase tracking-tight mb-6">Step-by-Step Guide</h2>
        <StepList
          steps={lesson.steps}
          completedSteps={completedSteps}
          onToggleStep={handleToggleStep}
        />
      </section>

      {/* 4. Key Things to Remember */}
      <section className="bg-white border-4 border-navy p-6 mb-8">
        <h2 className="text-xl font-black text-navy uppercase tracking-tight mb-4">Key Things to Remember</h2>
        <ul className="space-y-2">
          {lesson.keyPoints.map((point, i) => (
            <li
              key={i}
              className={`text-lg text-ink pl-4 py-3 ${
                i === 0
                  ? 'border-l-8 border-sunshine bg-[#FFFDF0] font-bold'
                  : 'border-l-8 border-cream'
              }`}
            >
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Try It Yourself */}
      <section className="mb-8 bg-white border-4 border-sky p-6 shadow-[6px_6px_0px_0px_#16C0FF]">
        <h2 className="text-xl font-black text-navy uppercase tracking-tight mb-3">Try It Yourself</h2>
        <p className="text-lg text-ink leading-relaxed">{lesson.tryItYourself}</p>
      </section>

      {/* 6. Completion Banner */}
      <section className="mb-8">
        <CompletionBanner
          isComplete={isComplete}
          onMarkComplete={() => completeLesson(lesson.id)}
          onUnmarkComplete={() => uncompleteLesson(lesson.id)}
        />
      </section>

      {/* 7. Need More Help */}
      <section className="bg-white border-4 border-navy p-6 text-center">
        <h2 className="text-xl font-black text-navy uppercase tracking-tight mb-4">Need More Help?</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.techawarenessassociation.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy font-black text-sm uppercase tracking-wider hover:text-sky transition-colors underline"
          >
            Contact TAA
          </a>
          <span className="hidden sm:inline text-slate">|</span>
          <a
            href="https://www.techawarenessassociation.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy font-black text-sm uppercase tracking-wider hover:text-sky transition-colors underline"
          >
            Find a Workshop
          </a>
        </div>
      </section>

      {/* Print button */}
      <div className="mt-6 text-center no-print">
        <button
          onClick={handlePrint}
          className="px-8 py-4 border-4 border-navy text-navy font-black uppercase tracking-wider hover:bg-navy hover:text-white transition-colors min-h-12"
        >
          Print This Lesson
        </button>
      </div>
    </div>
  );
}
