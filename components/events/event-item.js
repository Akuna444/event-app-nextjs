import Link from "next/link";
import classes from "./event-item.module.css";

function EventItem(props) {
  const { title, id, location, image, date } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    date: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");
  const exproleLink = `/events/${id}`;
  return (
    <ul>
      <li className={classes.item}>
        <img src={"/" + image} alt={title} />
        <div className={classes.content}>
          <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
              <time>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
              <h2>{formattedAddress}</h2>
            </div>
          </div>
          <div className={classes.actions}>
            <Link href={exproleLink}>Explore Events</Link>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default EventItem;
