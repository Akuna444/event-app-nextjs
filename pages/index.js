import { Fragment } from "react";
import { useRouter } from "next/router";

import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import EventsSearch from "../components/events/events-search";

function HomePage() {
  const featuredEvent = getFeaturedEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvent} />
    </Fragment>
  );
}

export default HomePage;
