import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

function EventDetail() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Events Found</p>
        </ErrorAlert>
        <div className="center">
          <Button onClick={() => router.back()}>Go Back</Button>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        address={event.location}
        image={event.image}
        imageAlt={event.title}
        date={event.date}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetail;
