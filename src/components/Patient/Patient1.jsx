import React, { Component } from "react";
import "./Patient.css";

const Patient = ({ age, ageChange, male, female, gender }) => {
  // props > age, gender, male, female

  return (
    <React.Fragment>
      <div id="Home" className="tablet:grid-col padding-x-2">
        <form class="usa-form">
          <label class="usa-label" for="range-slider">
            What is your age? | العمر 
            <h2>{age}</h2>
          </label>
          <input id="range-slider" class="usa-range outline-0" type="range" min="0" max="100" value={age} onChange={ageChange} />
        </form>
      </div>
      <div id="Home" className="tablet:grid-col padding-x-2">
        <p>What is your sex? | الجنس</p>
        <form class="usa-form">
          <div class="usa-radio">
            <input class="usa-radio__input outline-0" id="stanton" type="radio" checked={male} onChange={gender} name="historical-figures-2" value="male" />
            <label class="usa-radio__label" for="stanton">
              Male | ذكر
            </label>
          </div>
          <div class="usa-radio">
            <input class="usa-radio__input outline-0" id="anthony" type="radio" checked={female} onChange={gender} name="historical-figures-2" value="female" />
            <label class="usa-radio__label female-label" for="anthony">
              Female | أنثى
            </label>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Patient;
