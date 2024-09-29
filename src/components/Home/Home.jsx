import React, { Component } from "react";
import "./Home.css";


const Home = (props) => {
  //   console.log("is checked", props, props.isChecked, props.checked);
  return (
    <React.Fragment>
      <div id="Home" className="tablet:grid-col padding-x-2">
      

        <p>Before using this symptom checker, please read carefully and accept our Terms and Services:
        <br/>
          قبل استخدامك للأداة قم بقراءة الشروط والأحكام 
        </p>
        <ul>
          <li >This checkup is not a diagnosis.<br/>
          هذا التشخيص لا يعد تشخيص طبي معتمد وهو لأغراض بحثيه فقط
          </li>
          <li>This checkup is for informational purposes and is not a qualified medical opinion.
          <br/>
          هذا الفحص لأغراض معلوماتية فقط وليس رأيًا طبيًا معتمدًا.
          </li>
          <li>Information that you provide is anonymous and not shared with anyone. We also do not store any information on our server.
          <br/>
            كل المعلومات المقدمة من قبلك سرية ولا يتم تخزيها على خوادمنا
          </li>
        </ul>
        <form class="usa-form TermsCheckbox">
          <div class="usa-checkbox">
            <input checked={props.isChecked} onChange={props.checked} class="usa-checkbox__input" id="truth" type="checkbox" name="historical-figures-1" value="truth" />
            <label class="usa-checkbox__label" for="truth">
              I agree to the terms and conditions | أوافق على الشروط والأحكام
            </label>
          </div>
        </form>
      </div>

      <div className="tablet:grid-col">{/* <img src="/images/TOS.png" /> */}</div>
    </React.Fragment>
  );
};

const updateTextSize = (size) => {
  document.documentElement.style.setProperty('--base-font-size', size + 'px');
};

export default Home;
