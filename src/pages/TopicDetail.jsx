import { useParams, Navigate, Link } from 'react-router-dom';
import { getTopicById, getLessonsForTopic } from '../data/content';
import ProgressBar from '../components/ProgressBar';

export default function TopicDetail({ isLessonComplete, getTopicProgress }) {
  const { id } = useParams();
  const topic = getTopicById(id);

  if (!topic) {
    return <Navigate to="/topics" replace />;
  }

  const lessons = getLessonsForTopic(id);
  const progress = getTopicProgress(lessons);

  return (
    <div>
      <Link
        to="/topics"
        className="inline-flex items-center gap-2 text-navy text-sm font-black uppercase tracking-wider mb-8 hover:text-sky hover:gap-3 transition-all"
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 10H5M5 10L10 5M5 10L10 15" />
        </svg>
        Back
      </Link>

      {/* Topic header card */}
      <div className="bg-white border-4 border-navy p-8 mb-8 shadow-[8px_8px_0px_0px_#FAC206]">
        <h1 className="text-3xl md:text-4xl font-black text-navy tracking-tight mb-2">
          {topic.emoji} {topic.title}
        </h1>
        <p className="text-sm text-slate font-bold uppercase tracking-wider mb-6">
          {lessons.length} lesson{lessons.length !== 1 ? 's' : ''} &middot; {progress}% complete
        </p>
        <div className="max-w-md">
          <ProgressBar percent={progress} />
        </div>
      </div>

      {/* Lesson list */}
      <div className="space-y-3">
        {lessons.map((lesson, i) => {
          const complete = isLessonComplete(lesson.id);
          return (
            <Link
              key={lesson.id}
              to={`/lessons/${lesson.id}`}
              className={`flex items-center gap-4 p-5 border-4 transition-all min-h-[64px] ${
                complete
                  ? 'bg-white border-navy shadow-[4px_4px_0px_0px_#16C0FF]'
                  : 'bg-white border-navy hover:shadow-[4px_4px_0px_0px_#FAC206] hover:-translate-y-0.5'
              }`}
            >
              <div
                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center text-lg font-black border-4 ${
                  complete
                    ? 'bg-sky text-white border-navy'
                    : 'bg-cream text-navy border-navy'
                }`}
              >
                {complete ? (
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10L8 14L16 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span className={`text-lg font-black tracking-tight ${complete ? 'text-navy' : 'text-navy'}`}>
                {lesson.title}
              </span>
              <svg className="ml-auto flex-shrink-0 text-navy" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 4L14 10L8 16" />
              </svg>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
