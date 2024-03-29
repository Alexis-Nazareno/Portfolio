import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, form_action, phone, mail, location } = frontmatter;

  return (
    <section className="section lg:mt-16">
      <div className="container">
        <div className="row relative pb-16">
          <ImageFallback
            className="-z-[1] object-cover object-top"
            src={"/images/map.svg"}
            fill="true"
            alt="map bg"
            priority={true}
          />
          <div className="lg:col-6">
            <img className="w-[35em] lg:h-[24em]" src={"/images/dev.svg"} />
            <p className=" my-1 mb-10 mr-0 text-left text-center text-[16px]  lg:my-11 lg:pt-8 lg:text-left lg:text-[24px]">
              Thank you for taking the time to review my portfolio!
              <br /> <br /> If you have any inquiries, collaboration
              opportunities, or just want to say hello, feel free to reach out
              to me using the contact information provided below.
              <br /> <br /> I'm always excited to collaborate to anyone
              interested in discussing innovative ideas.
            </p>
          </div>
          <div className="contact-form-wrapper rounded border border-border p-6  lg:col-6 dark:border-darkmode-border">
            <h2 className="text-[20px] md:text-[30px]">
              Send Me A
              <span className="ml-1.5 inline-flex items-center text-[20px] text-primary md:md:text-[30px]">
                Feedback
                <BsArrowRightShort />
              </span>
            </h2>
            <form
              className="contact-form mt-12"
              method="POST"
              action={form_action}
            >
              <div className="mb-6 ">
                <label className="mb-2 block font-secondary" htmlFor="name">
                  Full name
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="name"
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="email">
                  Email Address
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                  type="email"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="subject">
                  Subject
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="subject"
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="message">
                  Your Message Here
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <textarea
                  className="form-textarea w-full"
                  placeholder="Your Message"
                  name="message"
                  rows="7"
                />
              </div>
              <div className="mb-6">
                <input
                  className="form-input w-full"
                  type="hidden"
                  name="_captcha"
                  value="false"
                />
              </div>

              <div className="mb-6">
                <input
                  className="form-input w-full"
                  type="hidden"
                  name="_next"
                  value="https://yourdomain.co/thanks.html"
                />
              </div>

              <div className="mb-6">
                <input
                  className="form-input w-full"
                  type="hidden"
                  name="_template"
                  value="table"
                />
              </div>
              <input className="btn btn-primary" type="submit" value="Send" />
            </form>
          </div>
        </div>
        <div className="row">
          {phone && (
            <div className="md:col-6 lg:col-4">
              <Link
                href={`tel:${phone}`}
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-primary dark:border-darkmode-border"
              >
                <FaUserAlt />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  {phone}
                </p>
              </Link>
            </div>
          )}
          {mail && (
            <div className="md:col-6 lg:col-4  ">
              <Link
                href={`mailto:${mail}`}
                className="my-4 flex h-[100px] items-center justify-center rounded
             border border-border p-4  text-primary dark:border-darkmode-border"
              >
                <FaEnvelope />
                <p className="ml-1.5 text-[0.8em] font-bold text-dark dark:text-darkmode-light md:text-[0.9em] xl:text-[1.1em]">
                  {mail}
                </p>
              </Link>
            </div>
          )}
          {location && (
            <div className="md:col-6 lg:col-4">
              <span
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-primary dark:border-darkmode-border"
              >
                <FaMapMarkerAlt />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  {location}
                </p>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
