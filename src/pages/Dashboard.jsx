import { Navigate, Link } from 'react-router-dom';
import { getTopicsForLevel, getLessonsForTopic, getLevelById } from '../data/content';
import TopicCard from '../components/TopicCard';

export default function Dashboard({ selectedLevel, getTopicProgress }) {
  if (!selectedLevel) {
    return <Navigate to="/" replace />;
  }

  const level = getLevelById(selectedLevel);
  const topics = getTopicsForLevel(selectedLevel);

  return (
    <div>
      {/* Header card */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-navy tracking-tight">
            {level.emoji} {level.displayName.toUpperCase()}
          </h1>
          <p className="text-sm text-slate font-bold uppercase tracking-wider mt-2">{level.tagline}</p>
        </div>
        <Link
          to="/"
          className="px-5 py-3 border-4 border-navy text-navy font-black text-sm uppercase tracking-wider hover:bg-navy hover:text-white transition-colors"
        >
          Change Level
        </Link>
      </div>

      {/* Topics grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map(topic => {
          const topicLessons = getLessonsForTopic(topic.id);
          const progress = getTopicProgress(topicLessons);
          return (
            <TopicCard
              key={topic.id}
              topic={topic}
              lessonCount={topicLessons.length}
              progress={progress}
            />
          );
        })}
      </div>
    </div>
  );
}
