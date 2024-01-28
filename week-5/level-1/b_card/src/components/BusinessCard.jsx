import React from "react";

const BusinessCard = ({
  name,
  description,
  linkedInURL,
  twitterURL,
  interests,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{description}</h3>
      {interests.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <div>
        <button href={linkedInURL}>LinkedIn</button>
        <button href={twitterURL}>Twitter</button>
      </div>
    </div>
  );
};

export default BusinessCard;
