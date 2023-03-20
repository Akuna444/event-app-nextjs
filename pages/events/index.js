import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../helpers/api-utils";

function AllEvents(props) {
  const events = props.allEvents;
  return (
    <div>
      <EventList items={events} />
    </div>
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
