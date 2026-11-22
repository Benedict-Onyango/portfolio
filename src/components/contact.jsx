import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./contact.css";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm();

  const EMAIL = "benedictonyango0@gmail.com";

  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const onSubmit = async (data) => {
    try {
      await axios.post("http://127.0.0.1:8000/api/contact/", data);
      reset();
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="intro">
        <h1>Let's work together</h1>
        <p>
          Have a project in mind? I'd love to hear about it. <br />
          Let's create something amaizing together
        </p>
        <div className="mail_to">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <button onClick={copyEmail}>
            {isCopied ? "Email Copied" : "Copy Email"}
          </button>
        </div>
        <div className="quick_links">
          <a href="https://github.com/Benedict-Onyango">GitHub</a>
          <a href="https://www.linkedin.com/in/benedict-onyango-153958340/">
            LinkedIn
          </a>
        </div>
        <div className="contact_meta">
          Based in Nairobi, Kenya(EAT, UTC+3) <br /> Available for local and
          remote work
        </div>
      </div>
      <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            {...register("name", { required: "Please include your name." })}
          />
          <label htmlFor="name">Full Name</label>
        </div>

        {errors.name && <p className="errors">{errors.name.message} </p>}

        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" "
            {...register("email", { required: "Please include your email." })}
          />
          <label htmlFor="email">Email Address</label>
        </div>

        {errors.email && <p className="errors">{errors.email.message} </p>}

        <div className="form-group">
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder=" "
            {...register("subject", {
              required: "Please include the subject.",
            })}
          />
          <label htmlFor="subject">Subject</label>
        </div>

        {errors.subject && <p className="errors">{errors.subject.message} </p>}

        <div className="form-group">
          <textarea
            name="message"
            id="message"
            style={{ minHeight: "125px" }}
            placeholder=" "
            autoComplete=""
            {...register("message", {
              required: "Please include the message.",
            })}
          ></textarea>
          <label htmlFor="message">Message</label>
        </div>

        {errors.message && <p className="errors">{errors.message.message} </p>}

        <div className="hp" aria-hidden="true">
          <label htmlFor="website">Leave this empty</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex="-1"
            autoomplete="off"
            {...register("website")}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit_btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
        {isSubmitSuccessful && (
          <p
            className="success"
            id="form-status"
            role="status"
            aria-live="polite"
          >
            Message Sent
          </p>
        )}
        {error && (
          <p
            className="errors"
            id="form-status"
            role="status"
            aria-live="polite"
          >
            Failed to send Message
          </p>
        )}
      </form>
    </section>
  );
}
