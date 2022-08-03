import React from "react";
import { Link } from "react-router-dom";
const Services = [
  {
    id: 1,
    subtitle: "Plan",
    title: "Pre Event planning",
    img: "pre-event.jpg",
  },
  {
    id: 2,
    subtitle: "Management",
    title: "Event management design & marketing",
    img: "event-management.jpg",
  },
  {
    id: 3,
    subtitle: "Post Event",
    title: "Onsite management & post event.",
    img: "post-event.jpg",
  },
];
const AboutCreative = () => {
  return (
    <>
      <section className="cases">
        <div className="container-fluid">
          <div className="row">
            {Services.map((Elm) => (
              <div className="case" key={Elm.id}>
                <Link to="/ourservices">
                  <div className="case-details">
                    <span style={{ fontFamily: "Dancing Script,cursive" }}>
                      {Elm.subtitle}
                    </span>
                    <h2 style={{ fontFamily: "Dancing Script,cursive" }}>
                      {Elm.title}
                    </h2>
                  </div>
                  <div className="case-img">
                    <img src={`/assets/images/${Elm.img}`} alt={Elm.title} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCreative;
