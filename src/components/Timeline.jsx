import { useRef, useEffect } from 'react';
import { getEventsGroupedByMonth } from '../data/events';
import TimelineNode from './TimelineNode';
import './Timeline.css';

function Timeline() {
  const timelineRef = useRef(null);
  const groupedEvents = getEventsGroupedByMonth();
  const months = Object.keys(groupedEvents).sort();

  // Restore scroll position from localStorage
  useEffect(() => {
    const savedPosition = localStorage.getItem('timelineScrollPosition');
    if (savedPosition && timelineRef.current) {
      timelineRef.current.scrollLeft = parseInt(savedPosition, 10);
    }
  }, []);

  // Save scroll position on scroll
  const handleScroll = () => {
    if (timelineRef.current) {
      localStorage.setItem('timelineScrollPosition', timelineRef.current.scrollLeft.toString());
    }
  };

  return (
    <div className="timeline-page">
      <div className="timeline-intro">
        <h1>GUE NextGen Scholar</h1>
        <p className="intro-text">
          A journey through technical diving education and underwater exploration.
          <span className="scroll-hint"> Scroll horizontally to explore the timeline →</span>
        </p>
      </div>

      <div className="timeline-container" ref={timelineRef} onScroll={handleScroll}>
        <div className="timeline-track">
          <div className="timeline-line" />

          {months.map((month, index) => {
            const eventsInMonth = groupedEvents[month];
            const hasMultiple = eventsInMonth.length > 1;

            return (
              <div key={month} className={`timeline-month ${hasMultiple ? 'multiple' : ''}`}>
                {eventsInMonth.map((event) => (
                  <TimelineNode key={event.id} event={event} />
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="timeline-legend">
        <div className="legend-item">
          <span className="legend-dot course" />
          <span>Course</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" />
          <span>Workshop / Trip</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot future" />
          <span>Upcoming</span>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
