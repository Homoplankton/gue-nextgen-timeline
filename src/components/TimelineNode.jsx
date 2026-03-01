import { Link } from 'react-router-dom';
import './TimelineNode.css';

function TimelineNode({ event, hideDate }) {
  const isCourse = event.type === 'course';
  const isFuture = event.status === 'future';

  const typeLabels = {
    course: 'COURSE',
    workshop: 'WORKSHOP',
    trip: 'TRIP',
    project: 'PROJECT',
  };

  return (
    <Link
      to={`/event/${event.id}`}
      className={`timeline-node ${isCourse ? 'course' : ''} ${isFuture ? 'future' : ''}`}
    >
      <div className={`node-dot ${isCourse ? 'course' : ''} ${isFuture ? 'future' : ''}`} />
      <div className="node-content">
        <span className="node-type">{typeLabels[event.type] || event.type.toUpperCase()}</span>
        <h3 className="node-title">{event.title}</h3>
        {!hideDate && <span className="node-date">{event.displayDate}</span>}
      </div>
    </Link>
  );
}

export default TimelineNode;
