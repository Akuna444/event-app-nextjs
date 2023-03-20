import { Fragment } from "react";
import { useRouter } from "next/router";

import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";
import EventsSearch from "../components/events/events-search";

function HomePage(props) {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featruedEvent = await getFeaturedEvents();

  return {
    props: {
      events: featruedEvent,
    },
  };
}

export default HomePage;
