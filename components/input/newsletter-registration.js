import { useContext, useRef } from "react";
import classes from "./newsletter-registration.module.css";
import NotificationContext from "../../store/notification-context";

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const NotificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();
    const userEmail = emailInputRef.current.value;

    NotificationCtx.showNotification({
      title: "Sending...!",
      message: "Sending Newsletter...",
      status: "pending",
    });
    // fetch user input (state or refs)
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: userEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || "Something Went Wrong");
        });
      })
      .then((data) => {
        NotificationCtx.showNotification({
          title: "Success!",
          message: "Successfully registered",
          status: "success",
        });
      })
      .catch((error) => {
        NotificationCtx.showNotification({
          title: "Failed!",
          message: error.message || "Failed to send your Newsletter!",
          status: "error",
        });
      });
  }
  // optional: validate input
  // send valid data to API

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailInputRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
