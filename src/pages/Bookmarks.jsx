import { Link } from 'react-router-dom';
import { getLessonById, getTopicById } from '../data/content';

function BookmarkIcon({ filled }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </svg>
  );
}

export default function Bookmarks({ bookmarkedLessons, isLessonComplete, toggleBookmark }) {
  const bookmarks = bookmarkedLessons
    .map(id => {
      const lesson = getLessonById(id);
      if (!lesson) return null;
      const topic = getTopicById(lesson.topicId);
      return { lesson, topic };
    })
    .filter(Boolean);

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-black text-navy tracking-tight mb-2">Saved Lessons</h1>
      <p className="text-lg text-slate font-bold mb-8">
        Lessons you&apos;ve bookmarked for easy access
      </p>

      {bookmarks.length === 0 ? (
        <div className="bg-white border-4 border-navy p-10 text-center shadow-[8px_8px_0px_0px_#FAC206]">
          <div className="text-5xl mb-4">🔖</div>
          <p className="text-xl font-black text-navy mb-2">No saved lessons yet</p>
          <p className="text-lg text-slate font-bold mb-6">
            Tap the bookmark icon on any lesson to save it here for quick access later.
          </p>
          <Link
            to="/topics"
            className="inline-block px-8 py-4 border-4 border-navy bg-navy text-white font-black uppercase tracking-wider hover:bg-ink transition-colors min-h-12"
          >
            Browse Lessons
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {bookmarks.map(({ lesson, topic }) => {
            const complete = isLessonComplete(lesson.id);
            return (
              <div
                key={lesson.id}
                className="bg-white border-4 border-navy flex items-stretch"
              >
                <Link
                  to={`/lessons/${lesson.id}`}
                  className="flex-1 flex items-center gap-3 p-4 hover:bg-cream transition-colors"
                >
                  {topic && (
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">
                      {topic.emoji}
                    </span>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-ink text-base leading-tight">{lesson.title}</p>
                    {topic && (
                      <p className="text-sm text-slate font-bold mt-0.5">{topic.title}</p>
                    )}
                  </div>
                  {complete && (
                    <span className="flex-shrink-0 w-7 h-7 bg-sky border-2 border-navy flex items-center justify-center" aria-label="Completed">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  )}
                </Link>
                <button
                  onClick={() => toggleBookmark(lesson.id)}
                  className="flex items-center justify-center w-14 border-l-4 border-navy text-sunshine hover:bg-sunshine hover:text-navy transition-colors"
                  aria-label={`Remove bookmark for ${lesson.title}`}
                >
                  <BookmarkIcon filled />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
