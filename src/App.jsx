import { Routes, Route } from 'react-router-dom';
import { useProgress } from './hooks/useProgress';
import Layout from './components/Layout';
import SkillSelect from './pages/SkillSelect';
import Dashboard from './pages/Dashboard';
import TopicDetail from './pages/TopicDetail';
import Lesson from './pages/Lesson';
import Progress from './pages/Progress';
import About from './pages/About';
import Glossary from './pages/Glossary';
import Search from './pages/Search';
import Bookmarks from './pages/Bookmarks';

export default function App() {
  const {
    selectedLevel,
    completedLessons,
    bookmarkedLessons,
    setLevel,
    completeLesson,
    uncompleteLesson,
    isLessonComplete,
    getTopicProgress,
    toggleBookmark,
    isBookmarked,
  } = useProgress();

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <SkillSelect
              selectedLevel={selectedLevel}
              onSetLevel={setLevel}
            />
          }
        />
        <Route
          path="/topics"
          element={
            <Dashboard
              selectedLevel={selectedLevel}
              getTopicProgress={getTopicProgress}
            />
          }
        />
        <Route
          path="/topics/:id"
          element={
            <TopicDetail
              isLessonComplete={isLessonComplete}
              getTopicProgress={getTopicProgress}
            />
          }
        />
        <Route
          path="/lessons/:id"
          element={
            <Lesson
              isLessonComplete={isLessonComplete}
              completeLesson={completeLesson}
              uncompleteLesson={uncompleteLesson}
              isBookmarked={isBookmarked}
              toggleBookmark={toggleBookmark}
            />
          }
        />
        <Route
          path="/progress"
          element={
            <Progress
              selectedLevel={selectedLevel}
              completedLessons={completedLessons}
              getTopicProgress={getTopicProgress}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/bookmarks"
          element={
            <Bookmarks
              bookmarkedLessons={bookmarkedLessons}
              isLessonComplete={isLessonComplete}
              toggleBookmark={toggleBookmark}
            />
          }
        />
      </Routes>
    </Layout>
  );
}
