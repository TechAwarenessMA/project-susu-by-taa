import { useState } from 'react';

const ENCOURAGEMENT = [
  'Great job! Keep it up! 🌟',
  'You\'re doing wonderfully! 🎉',
  'Fantastic work! You\'re learning fast! 💪',
  'Excellent! You\'re a natural! ⭐',
];

export default function Quiz({ quiz, lessonTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  if (!quiz || !quiz.questions || quiz.questions.length === 0) return null;

  const questions = quiz.questions;
  const current = questions[currentIndex];
  const isCorrect = selectedOption === current.correct;
  const total = questions.length;

  function handleSelectOption(idx) {
    if (showFeedback) return;
    setSelectedOption(idx);
    setShowFeedback(true);
    const correct = idx === current.correct;
    if (correct) setScore(prev => prev + 1);
    setAnswers(prev => [...prev, { correct }]);
  }

  function handleNext() {
    if (currentIndex + 1 < total) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setFinished(true);
    }
  }

  function handleRetry() {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  }

  const percentage = Math.round((score / total) * 100);
  const encouragement = ENCOURAGEMENT[Math.floor(Math.random() * ENCOURAGEMENT.length)];

  if (finished) {
    return (
      <section className="bg-white border-4 border-navy p-6 mb-8 shadow-[8px_8px_0px_0px_#FAC206]">
        <h2 className="text-xl font-black text-navy uppercase tracking-tight mb-2">Knowledge Check — Results</h2>
        <p className="text-base text-slate font-bold mb-6 uppercase tracking-wider">{lessonTitle}</p>

        <div className="text-center mb-6">
          <div className="text-7xl font-black text-navy mb-2">{percentage}%</div>
          <p className="text-xl font-black text-ink mb-1">
            {score} out of {total} correct
          </p>
          <p className="text-lg text-slate font-bold">
            {percentage === 100
              ? 'Perfect score! You nailed it! 🏆'
              : percentage >= 67
              ? encouragement
              : 'Good effort! Review the lesson and try again. You\'ve got this! 💪'}
          </p>
        </div>

        <div className="flex gap-2 mb-6 justify-center">
          {answers.map((a, i) => (
            <div
              key={i}
              className={`w-8 h-8 border-4 border-navy flex items-center justify-center font-black text-sm ${
                a.correct ? 'bg-[#CCFFCC] text-ink' : 'bg-[#FFCCCC] text-ink'
              }`}
              aria-label={a.correct ? `Question ${i + 1} correct` : `Question ${i + 1} incorrect`}
            >
              {a.correct ? '✓' : '✗'}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleRetry}
            className="px-8 py-4 border-4 border-navy bg-white text-navy font-black uppercase tracking-wider hover:bg-navy hover:text-white transition-colors min-h-12"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white border-4 border-navy p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-black text-navy uppercase tracking-tight">Knowledge Check</h2>
        <span className="px-3 py-1 bg-navy text-white font-black text-sm uppercase tracking-wider">
          {currentIndex + 1} / {total}
        </span>
      </div>

      <p className="text-lg font-black text-ink mb-6 leading-snug">{current.question}</p>

      <div className="space-y-3 mb-6">
        {current.options.map((option, idx) => {
          let buttonClass =
            'w-full text-left px-5 py-4 border-4 font-bold text-base transition-all min-h-12 ';

          if (!showFeedback) {
            buttonClass += 'border-navy text-ink bg-white hover:bg-cream hover:shadow-[4px_4px_0px_0px_#FAC206] cursor-pointer';
          } else if (idx === current.correct) {
            buttonClass += 'border-[#16C0FF] bg-[#E6F9FF] text-ink';
          } else if (idx === selectedOption && idx !== current.correct) {
            buttonClass += 'border-[#FB4B5F] bg-[#FFE8EB] text-ink';
          } else {
            buttonClass += 'border-slate text-slate bg-white opacity-60 cursor-not-allowed';
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              disabled={showFeedback}
              className={buttonClass}
              aria-label={`Option ${String.fromCharCode(65 + idx)}: ${option}`}
            >
              <span className="inline-flex items-center gap-3">
                <span className="w-8 h-8 border-4 border-current flex items-center justify-center font-black text-sm flex-shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                {option}
              </span>
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div
          className={`px-5 py-4 border-4 mb-6 ${
            isCorrect ? 'border-[#16C0FF] bg-[#E6F9FF]' : 'border-[#FB4B5F] bg-[#FFE8EB]'
          }`}
        >
          <p className="font-black text-base text-ink">
            {isCorrect ? '✓ Correct! Well done!' : `✗ Not quite. The correct answer is: "${current.options[current.correct]}"`}
          </p>
        </div>
      )}

      {showFeedback && (
        <button
          onClick={handleNext}
          className="w-full px-8 py-4 border-4 border-navy bg-navy text-white font-black uppercase tracking-wider hover:bg-ink transition-colors min-h-12"
        >
          {currentIndex + 1 < total ? 'Next Question →' : 'See My Results'}
        </button>
      )}
    </section>
  );
}
