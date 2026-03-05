import { Navigate, Link } from 'react-router-dom';
import { getTopicsForLevel, getLessonsForTopic, getLevelById } from '../data/content';
import ProgressBar from '../components/ProgressBar';

export default function Progress({ selectedLevel, completedLessons, getTopicProgress }) {
  if (!selectedLevel) return <Navigate to="/" replace />;

  const level = getLevelById(selectedLevel);
  const topics = getTopicsForLevel(selectedLevel);

  const totalLessons = topics.reduce((sum, t) => sum + getLessonsForTopic(t.id).length, 0);
  const totalCompleted = topics.reduce((sum, t) => {
    const tl = getLessonsForTopic(t.id);
    return sum + tl.filter(l => completedLessons.includes(l.id)).length;
  }, 0);
  const overallPercent = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  const encouragement = overallPercent === 0
    ? 'Ready to start your learning journey? Pick a topic and dive in!'
    : overallPercent < 25
    ? 'Great start! Every lesson you complete builds your confidence.'
    : overallPercent < 50
    ? "You're making wonderful progress! Keep going — you're doing great."
    : overallPercent < 75
    ? "You're more than halfway there! Your dedication is inspiring."
    : overallPercent < 100
    ? "Almost there! Just a few more lessons and you'll have completed everything."
    : 'You completed every lesson! You should be incredibly proud of yourself. 🏆';

  return (
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy mb-2 tracking-tight animate-fade-in-up">MY PROGRESS</h1>
      <p className="text-sm text-slate font-bold uppercase tracking-wider mb-8 animate-fade-in-up delay-75">
        {level.emoji} {level.displayName}
      </p>

      {/* Desktop: two-column layout */}
      <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12 mb-8">

        {/* Overall stats */}
        <div className="bg-white border-4 border-navy p-8 mb-8 md:mb-0 text-center shadow-[8px_8px_0px_0px_#FAC206] animate-scale-in delay-150">
          <div className="text-[80px] md:text-[100px] lg:text-[120px] font-black text-navy leading-none mb-2 tracking-tighter">
            {overallPercent}%
          </div>
          <p className="text-xl text-ink font-black mb-1">
            {totalCompleted} of {totalLessons} lessons completed
          </p>
          <p className="text-base text-slate mt-4 max-w-xs mx-auto font-bold leading-relaxed">{encouragement}</p>
          <div className="mt-6 max-w-xs mx-auto">
            <ProgressBar percent={overallPercent} />
          </div>
          <div className="mt-8">
            <Link
              to="/topics"
              className="inline-block bg-sunshine text-ink px-8 py-4 font-black text-base uppercase tracking-wider border-4 border-navy hover:shadow-[4px_4px_0px_0px_#2C3E50] transition-all min-h-12"
            >
              Go to Topics &rarr;
            </Link>
          </div>
        </div>

        {/* Per-topic breakdown */}
        <div className="animate-slide-in-right delay-225">
          <h2 className="text-xl md:text-2xl font-black text-navy mb-4 uppercase tracking-tight">By Topic</h2>
          <div className="space-y-3">
            {topics.map((topic, i) => {
              const topicLessons = getLessonsForTopic(topic.id);
              const progress = getTopicProgress(topicLessons);
              const completed = topicLessons.filter(l => completedLessons.includes(l.id)).length;
              return (
                <Link
                  key={topic.id}
                  to={`/topics/${topic.id}`}
                  className="block bg-white border-4 border-navy p-4 hover:shadow-[4px_4px_0px_0px_#FAC206] hover:-translate-y-0.5 transition-all animate-fade-in-up"
                  style={{ animationDelay: `${300 + i * 50}ms` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl" aria-hidden="true">{topic.emoji}</span>
                    <span className="text-sm md:text-base font-black text-navy tracking-tight flex-1 min-w-0 truncate">{topic.title}</span>
                    <span className="flex-shrink-0 px-2 py-1 bg-cream text-navy text-xs font-black border-2 border-navy">
                      {completed}/{topicLessons.length}
                    </span>
                  </div>
                  <ProgressBar percent={progress} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
