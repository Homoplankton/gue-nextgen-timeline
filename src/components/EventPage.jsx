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

  const typeLabels = {
    course: 'COURSE',
    workshop: 'WORKSHOP',
    trip: 'TRIP',
    project: 'PROJECT',
  };

  return (
    <div className="event-page">
      <div className="event-container">
        <Link to="/" className="back-link">← Back to Timeline</Link>

        <header className="event-hero">
          <span className={`event-badge ${event.type}`}>
            {typeLabels[event.type] || event.type.toUpperCase()}
          </span>
          <h1 className="event-title">{event.title}</h1>
          <p className="event-date">{event.displayDate}</p>
          <p className="event-description">{event.description}</p>
        </header>

        {event.externalUrl ? (
          <div className="event-content">
            <a
              href={event.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              View Full Guide →
            </a>
          </div>
        ) : (
          <div className="event-content">
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

            {event.sections?.prerequisites && (
              <section className="event-section">
                <h2>Prerequisites</h2>
                <p>{event.sections.prerequisites}</p>
              </section>
            )}

            {event.sections?.reflections && (
              <section className="event-section">
                <h2>Reflections</h2>
                <p className="reflections-text">{event.sections.reflections}</p>
              </section>
            )}

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
        )}

        <nav className="event-navigation">
          <div className="event-nav-row">
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
          </div>

          <Link to="/" className="timeline-button">
            Back to Timeline
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default EventPage;
