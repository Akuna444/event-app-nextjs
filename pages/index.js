import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import NewsLetterRegistration from "../components/input/newsletter-registration";
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
      <Head>
        <title>Next Events</title>
        <meta
          name="description"
          content="Find a lots of great events that allow you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <NewsLetterRegistration />
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
