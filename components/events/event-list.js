import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  const { items } = props;
  return (
    <div className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          image={event.image}
          date={event.date}
          location={event.location}
          title={event.title}
        />
      ))}
    </div>
  );
}

export default EventList;
