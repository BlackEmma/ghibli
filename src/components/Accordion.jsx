import { useState } from 'react';

const Accordion = ({
  title,
  description,
  originalTitle,
  director,
  producer,
  releaseDate,
  runningTime,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">
        <img className="poster" src={`${process.env.PUBLIC_URL}/img/${title}.jpg`} alt='...'/>
        <br/><br/>Original title: {originalTitle}<br/><br/>
        Description:<p>{description}</p>
        Release date: {releaseDate} year<br/><br/>
        Running time: {runningTime} min<br/><br/>
        Director: {director}<br/>
        Producer: {producer}<br/>
      </div>}
    </div>
  );
};

export default Accordion;
