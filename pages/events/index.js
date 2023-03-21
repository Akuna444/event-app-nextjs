import { Fragment } from "react";

import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../helpers/api-utils";
import Head from "next/head";

function AllEvents(props) {
  const events = props.allEvents;
  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEvents;

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      allEvents: allEvents,
    },
    revalidate: 60,
  };
}
