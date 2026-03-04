import { Navigate, Link } from 'react-router-dom';
import { getTopicsForLevel, getLessonsForTopic, getLevelById } from '../data/content';
import ProgressBar from '../components/ProgressBar';

export default function Progress({ selectedLevel, completedLessons, getTopicProgress }) {
  if (!selectedLevel) {
    return <Navigate to="/" replace />;
  }

  const level = getLevelById(selectedLevel);
  const topics = getTopicsForLevel(selectedLevel);

  const totalLessons = topics.reduce((sum, t) => sum + getLessonsForTopic(t.id).length, 0);
  const totalCompleted = topics.reduce((sum, t) => {
    const topicLessons = getLessonsForTopic(t.id);
    return sum + topicLessons.filter(l => completedLessons.includes(l.id)).length;
  }, 0);
  const overallPercent = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  const encouragement = overallPercent === 0
    ? 'Ready to start your learning journey? Pick a topic and dive in!'
    : overallPercent < 25
    ? 'Great start! Every lesson you complete builds your confidence.'
    : overallPercent < 50
    ? 'You\'re making wonderful progress! Keep going — you\'re doing great.'
    : overallPercent < 75
    ? 'You\'re more than halfway there! Your dedication is inspiring.'
    : overallPercent < 100
    ? 'Almost there! Just a few more lessons and you\'ll have completed everything.'
    : 'You completed every lesson! You should be incredibly proud of yourself.';

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-black text-navy mb-2 tracking-tight">MY PROGRESS</h1>
      <p className="text-sm text-slate font-bold uppercase tracking-wider mb-8">
        {level.emoji} {level.displayName}
      </p>

      {/* Overall stats */}
      <div className="bg-white border-4 border-navy p-8 mb-8 text-center shadow-[8px_8px_0px_0px_#FAC206]">
        <div className="text-[100px] md:text-[120px] font-black text-navy leading-none mb-2 tracking-tighter">
          {overallPercent}%
        </div>
        <p className="text-xl text-ink font-black mb-1">
          {totalCompleted} of {totalLessons} lessons completed
        </p>
        <p className="text-base text-slate mt-4 max-w-md mx-auto font-bold">{encouragement}</p>
        <div className="mt-6 max-w-sm mx-auto">
          <ProgressBar percent={overallPercent} />
        </div>
      </div>

      {/* Per-topic breakdown */}
      <h2 className="text-2xl font-black text-navy mb-4 uppercase tracking-tight">By Topic</h2>
      <div className="space-y-3">
        {topics.map(topic => {
          const topicLessons = getLessonsForTopic(topic.id);
          const progress = getTopicProgress(topicLessons);
          const completed = topicLessons.filter(l => completedLessons.includes(l.id)).length;
          return (
            <Link
              key={topic.id}
              to={`/topics/${topic.id}`}
              className="block bg-white border-4 border-navy p-5 hover:shadow-[4px_4px_0px_0px_#FAC206] hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl" aria-hidden="true">{topic.emoji}</span>
                <span className="text-lg font-black text-navy tracking-tight flex-1">{topic.title}</span>
                <span className="px-3 py-1 bg-cream text-navy text-sm font-black border-2 border-navy">
                  {completed}/{topicLessons.length}
                </span>
              </div>
              <ProgressBar percent={progress} />
            </Link>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/topics"
          className="inline-block bg-sunshine text-ink px-10 py-5 font-black text-lg uppercase tracking-wider border-4 border-navy hover:shadow-[4px_4px_0px_0px_#2C3E50] transition-all min-h-12"
        >
          Back to Topics &rarr;
        </Link>
      </div>
    </div>
  );
}
