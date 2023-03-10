import Link from "next/link";
import { Fragment } from "react";

function MainHeader() {
  return (
    <Fragment>
      <header>
        <div>
          <Link href="/">NextEvents</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/events">Browse All Events</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default MainHeader;
