import { Link } from 'react-router-dom';
import './TimelineNode.css';

function TimelineNode({ event }) {
  const isCourse = event.type === 'course';
  const isFuture = event.status === 'future';

  const getTypeLabel = (type) => {
    switch (type) {
      case 'course':
        return 'COURSE';
      case 'workshop':
        return 'WORKSHOP';
      case 'trip':
        return 'TRIP';
      default:
        return type.toUpperCase();
    }
  };

  return (
    <Link
      to={`/event/${event.id}`}
      className={`timeline-node ${isCourse ? 'course' : ''} ${isFuture ? 'future' : ''}`}
    >
      <div className={`node-dot ${isCourse ? 'course' : ''} ${isFuture ? 'future' : ''}`} />
      <div className="node-content">
        <span className="node-type">{getTypeLabel(event.type)}</span>
        <h3 className="node-title">{event.title}</h3>
        <span className="node-date">{event.displayDate}</span>
      </div>
    </Link>
  );
}

export default TimelineNode;
