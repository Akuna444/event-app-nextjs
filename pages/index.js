import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
  const featuredEvent = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvent} />
    </div>
  );
}

export default HomePage;
