import { Fragment } from "react";

import Head from "next/head";
import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";
import Comments from "../../components/input/comments";

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
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
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
      <Comments eventId={event.id} />
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
