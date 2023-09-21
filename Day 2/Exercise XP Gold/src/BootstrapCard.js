import React from "react";

const celebrities = [
  {
    title: "Bob Dylan",
    imageUrl: "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
    description:
      "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  },
  {
    title: "McCartney",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
    description:
      "Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.",
  },
];

function BootstrapCard() {
  return (
    <div>
      <div className="card m-5" style={{ width: "30rem" }}>
        <img
          className="card-img-top"
          src={celebrities[0].imageUrl}
          alt="Loading .."
        />
        <div className="card-body">
          <h5 className="card-title">{celebrities[0].title}</h5>
          <p className="card-text">{celebrities[0].description}</p>
          <a href="#" className="btn btn-primary">
            {celebrities[0].buttonLabel}
          </a>
        </div>
      </div>
      <div className="card m-5" style={{ width: "30rem" }}>
        <img
          className="card-img-top"
          src={celebrities[1].imageUrl}
          alt="Loading .."
        />
        <div className="card-body">
          <h5 className="card-title">{celebrities[1].title}</h5>
          <p className="card-text">{celebrities[1].description}</p>
          <a href="#" className="btn btn-primary">
            {celebrities[1].buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

export default BootstrapCard;