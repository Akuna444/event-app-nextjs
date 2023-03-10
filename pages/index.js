import { Fragment } from "react";

import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import EventsSearch from "../components/events/events-search";

function HomePage() {
  const featuredEvent = getFeaturedEvents();
  return (
    <Fragment>
      <EventsSearch />
      <EventList items={featuredEvent} />
    </Fragment>
  );
}

export default HomePage;
