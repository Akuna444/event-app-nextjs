import { Fragment } from "react";
import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

function EventDetail(props) {
  const event = props.selectedEvent;

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

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 1800,
  };
}

export async function getStaticPaths() {
  const allEvents = await getFeaturedEvents();
  const eventIds = allEvents.map((event) => ({
    params: { eventId: event.id },
  }));
  return {
    paths: eventIds,
    fallback: "blocking",
  };
}
