import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <div>
      {items.map((event) => (
        <EventItem
          key={event.id}
          image={event.image}
          date={event.date}
          location={event.location}
        />
      ))}
    </div>
  );
}

export default EventList;
