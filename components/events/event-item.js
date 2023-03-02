import Link from "next/link";

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
      <li>
        <img src={"/" + image} alt={title} />
        <div>
          <div>
            <h2>{title}</h2>
          </div>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <h2>{formattedAddress}</h2>
          </div>
        </div>
        <div>
          <Link href={exproleLink}>Explore Events</Link>
        </div>
      </li>
    </ul>
  );
}

export default EventItem;
