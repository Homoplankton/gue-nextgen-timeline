import { useParams, Link, useNavigate } from 'react-router-dom';
import { getEventById, getAdjacentEvents } from '../data/events';
import './EventPage.css';

function EventPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = getEventById(id);
  const { previous, next } = getAdjacentEvents(id);

  if (!event) {
    return (
      <div className="event-page">
        <div className="event-not-found">
          <h1>Event Not Found</h1>
          <p>The event you're looking for doesn't exist.</p>
          <Link to="/" className="back-link">← Back to Timeline</Link>
        </div>
      </div>
    );
  }

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
    <div className="event-page">
      <div className="event-container">
        {/* Back button */}
        <Link to="/" className="back-link">← Back to Timeline</Link>

        {/* Hero section */}
        <header className="event-hero">
          <span className={`event-badge ${event.type}`}>
            {getTypeLabel(event.type)}
          </span>
          <h1 className="event-title">{event.title}</h1>
          <p className="event-date">{event.displayDate}</p>
          <p className="event-description">{event.description}</p>
        </header>

        {/* Content sections */}
        <div className="event-content">
          {/* Equipment section */}
          {event.sections?.equipment && event.sections.equipment.length > 0 && (
            <section className="event-section">
              <h2>Equipment</h2>
              <ul className="equipment-list">
                {event.sections.equipment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Prerequisites section */}
          {event.sections?.prerequisites && (
            <section className="event-section">
              <h2>Prerequisites</h2>
              <p>{event.sections.prerequisites}</p>
            </section>
          )}

          {/* Reflections section */}
          {event.sections?.reflections && (
            <section className="event-section">
              <h2>Reflections</h2>
              <p className="reflections-text">{event.sections.reflections}</p>
            </section>
          )}

          {/* Image gallery placeholder */}
          {event.images && event.images.length > 0 && (
            <section className="event-section">
              <h2>Gallery</h2>
              <div className="image-gallery">
                {event.images.map((image, index) => (
                  <img key={index} src={image} alt={`${event.title} - ${index + 1}`} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Navigation */}
        <nav className="event-navigation">
          <button
            className="nav-button prev"
            onClick={() => previous && navigate(`/event/${previous.id}`)}
            disabled={!previous}
          >
            <span className="nav-direction">← Previous</span>
            {previous && <span className="nav-event-title">{previous.title}</span>}
          </button>

          <button
            className="nav-button next"
            onClick={() => next && navigate(`/event/${next.id}`)}
            disabled={!next}
          >
            <span className="nav-direction">Next →</span>
            {next && <span className="nav-event-title">{next.title}</span>}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default EventPage;
