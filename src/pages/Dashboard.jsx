import { Navigate, Link } from 'react-router-dom';
import { getTopicsForLevel, getLessonsForTopic, getLevelById } from '../data/content';
import TopicCard from '../components/TopicCard';

export default function Dashboard({ selectedLevel, getTopicProgress }) {
  if (!selectedLevel) return <Navigate to="/" replace />;

  const level = getLevelById(selectedLevel);
  const topics = getTopicsForLevel(selectedLevel);

  const totalLessons = topics.reduce((sum, t) => sum + getLessonsForTopic(t.id).length, 0);

  return (
    <div>
      {/* ── Header ─── */}
      <div className="flex items-start justify-between flex-wrap gap-4 mb-8 md:mb-10 animate-fade-in-up">
        <div>
          <div className="text-3xl mb-2">{level.emoji}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy tracking-tight leading-none">
            {level.displayName.toUpperCase()}
          </h1>
          <p className="text-sm text-slate font-bold uppercase tracking-wider mt-2">{level.tagline}</p>
          <p className="text-sm text-slate font-bold mt-1">{topics.length} topics · {totalLessons} lessons</p>
        </div>
        <Link
          to="/"
          className="px-5 py-3 border-4 border-navy text-navy font-black text-sm uppercase tracking-wider hover:bg-navy hover:text-white transition-colors self-start"
        >
          Change Level
        </Link>
      </div>

      {/* ── Desktop welcome strip ─── */}
      <div className="hidden md:block mb-8 bg-navy text-white px-8 py-5 border-4 border-black shadow-[6px_6px_0px_0px_#FAC206] animate-fade-in-up delay-75">
        <p className="text-base font-bold leading-relaxed">
          Welcome! Pick any topic below to start learning. Each topic has a few short lessons — work at whatever pace feels comfortable. You can always come back and pick up where you left off. 🎉
        </p>
      </div>

      {/* ── Topics grid ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        {topics.map((topic, i) => {
          const topicLessons = getLessonsForTopic(topic.id);
          const progress = getTopicProgress(topicLessons);
          return (
            <div
              key={topic.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${100 + i * 60}ms` }}
            >
              <TopicCard
                topic={topic}
                lessonCount={topicLessons.length}
                progress={progress}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
