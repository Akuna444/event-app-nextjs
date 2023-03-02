import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

import classes from "./event-item.module.css";

function EventItem(props) {
  const { title, id, location, image, date } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exproleLink = `/events/${id}`;
  return (
    <ul>
      <li className={classes.item}>
        <img src={"/" + image} alt={title} />
        <div className={classes.content}>
          <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
              <DateIcon />
              <time>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
              <AddressIcon />
              <address>{formattedAddress}</address>
            </div>
          </div>
          <div className={classes.actions}>
            <Button link={exproleLink}>
              <span>Explore Events</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default EventItem;
