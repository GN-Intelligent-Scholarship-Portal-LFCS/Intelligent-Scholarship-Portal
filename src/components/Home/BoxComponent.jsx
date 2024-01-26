import React from "react";
import cardData from "./BoxComponentData";
import "./Home.css";

function BoxComponentCard({ title, accordions }) {
  return (
    <div className="card" style={{borderRadius: "0px"}}>
      <div className="card-header bg-primary text-white text-center font-weight-bold" style={{borderRadius: "0px", padding: "5px"}}>
        {title}
      </div>
      <div className="card-body" style={{height: "200px"}}>
        <div className="accordion" id={`accordion-${title}`}>
          {accordions.map((accordion, index) => (
            <AccordionItem key={index} parentId={title} {...accordion} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AccordionItem({ id, heading, content }) {
  const [isAccordionOpen, setIsAccordionOpen] = React.useState(true);

  const handleButtonClick = () => {
    setIsAccordionOpen((prevState) => !prevState);
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className="accordion-button"
          style={{padding: "5px", borderRadius: "0px"}}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded={isAccordionOpen}
          aria-controls={`collapse-${id}`}
          onClick={handleButtonClick}
        >
          {heading}
        </button>
      </h2>
      <div
        id={`collapse-${id}`}
        className={`accordion-collapse collapse ${isAccordionOpen ? 'show' : ''}`}
        aria-labelledBy={`heading-${id}`}
      >
        <div className="accordion-body" style={{padding: "5px", textDecoration: "none", borderRadius: "none"}}>
        {content}
        </div>
      </div>
    </div>
  );
}

function BoxComponent() {
  return (
    <div className="box-component-container" style={{ backgroundColor: "#1f657c", padding: "20px 0px" }}>
      <div className="container-fluid">
        <div className="row">
          {cardData.map((card, index) => (
            <div key={index} className="col-xl col-lg-3 col-md-6 col-sm-6 mb-3">
              <BoxComponentCard title={card.title} accordions={card.accordions} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BoxComponent;
