import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Timeline from './components/Timeline';
import EventPage from './components/EventPage';
import BlogSection from './components/BlogSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/blog/:postId" element={<BlogSection />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
