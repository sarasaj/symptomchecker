import React, { Component } from "react";
import "./Patient.css";

class Patient2 extends Component {
  state = {
    questions: [
      {
        text: "Patient is overweight or obese | هل تعاني من السمنه",
        answer: "Patient doesn't know",
        key: "question_1",
      },
      {
        text: "Patient smokes cigarettes | هل تدخن",
        answer: "Patient doesn't know",
        key: "question_2",
      },
      {
        text: "Patient has been recently injured | هل أصبت بإصابة مؤخراً",
        answer: "Patient doesn't know",
        key: "question_3",
      },
      {
        text: "Patient has high cholesterol | هل تعاني من ارتفاع الكوليسترول",
        answer: "Patient doesn't know",
        key: "question_4",
      },
      {
        text: "Patient has hypertension | هل لديك ارتفاع في الضغط",
        answer: "Patient doesn't know",
        key: "question_5",
      },
      {
        text: "Patient has diabetes | هل انت مصاب بالسكري",
        answer: "Patient doesn't know",
        key: "question_6",
      },
    ],
    next_button_available: "Not available",
  };

  handleOnChange = (e, questionKey) => {
    const updatedQuestions = this.state.questions.map((question) => {
      if (question.key === questionKey) {
        return { ...question, answer: e.target.value };
      }
      return question;
    });

    const allAnswered = updatedQuestions.every(
      (question) => question.answer !== ""
    );

    this.setState(
      {
        questions: updatedQuestions,
        next_button_available: allAnswered ? "Available" : "Not available",
      },
      () => {
        this.props.callback(updatedQuestions);
      }
    );
  };

  //   return this.state.questions.map((question) => (
  //     <div className="radioButtonDiv" key={question.key}>
  //       <h3>{question.text}</h3>
  //       <form className="usa-form FormElement">
  //         <div className="usa-radio margin-x-1">
  //           <input
  //             className={`usa-radio__input ${question.text}`}
  //             onChange={(e) => this.handleOnChange(e, question.key)}
  //             id={`${question.key}_Yes`}
  //             type="radio"
  //             checked={question.answer === "Yes"}
  //             value="Yes"
  //             name={question.key}
  //           />
  //           <label className="usa-radio__label" htmlFor={`${question.key}_Yes`}>
  //             Yes
  //           </label>
  //         </div>
  //         <div className="usa-radio margin-x-1">
  //           <input
  //             className={`usa-radio__input ${question.text}`}
  //             onChange={(e) => this.handleOnChange(e, question.key)}
  //             id={`${question.key}_No`}
  //             type="radio"
  //             checked={question.answer === "No"}
  //             value="No"
  //             name={question.key}
  //           />
  //           <label className="usa-radio__label" htmlFor={`${question.key}_No`}>
  //             No
  //           </label>
  //         </div>
  //         <div className="usa-radio margin-x-1">
  //           <input
  //             className={`usa-radio__input ${question.text}`}
  //             onChange={(e) => this.handleOnChange(e, question.key)}
  //             id={`${question.key}_DontKnow`}
  //             type="radio"
  //             checked={question.answer === "Patient doesn't know"}
  //             value="Patient doesn't know"
  //             name={question.key}
  //           />
  //           <label className="usa-radio__label" htmlFor={`${question.key}_DontKnow`}>
  //             I don't know
  //           </label>
  //         </div>
  //       </form>
  //     </div>
  //   ));
  // };
  renderQuestions = () => {
    return this.state.questions.map((question) => (
      <div className="radioButtonDiv" key={question.key}>
        <h3 className={question.text === "Patient has been recently injured" ? "custom-font" : ""}>
          {question.text}
        </h3>
        <form className="usa-form FormElement">
          <div className="usa-radio margin-x-1">
            <input
              className={`usa-radio__input ${question.text}`}
              onChange={(e) => this.handleOnChange(e, question.key)}
              id={`${question.key}_Yes`}
              type="radio"
              checked={question.answer === "Yes"}
              value="Yes"
              name={question.key}
            />
            <label className="usa-radio__label" htmlFor={`${question.key}_Yes`}>
              Yes
            </label>
          </div>
          <div className="usa-radio margin-x-1">
            <input
              className={`usa-radio__input ${question.text}`}
              onChange={(e) => this.handleOnChange(e, question.key)}
              id={`${question.key}_No`}
              type="radio"
              checked={question.answer === "No"}
              value="No"
              name={question.key}
            />
            <label className="usa-radio__label" htmlFor={`${question.key}_No`}>
              No
            </label>
          </div>
          <div className="usa-radio margin-x-1">
            <input
              className={`usa-radio__input ${question.text}`}
              onChange={(e) => this.handleOnChange(e, question.key)}
              id={`${question.key}_DontKnow`}
              type="radio"
              checked={question.answer === "Patient doesn't know"}
              value="Patient doesn't know"
              name={question.key}
            />
            <label className="usa-radio__label" htmlFor={`${question.key}_DontKnow`}>
              I don't know
            </label>
          </div>
        </form>
      </div>
    ));
  };
  
  render() {
    return (
      <div id="Patient2" className="tablet:grid-col padding-x-2">
        <div className="width-full flex-column flex-align-center">
          <h2 style={{ marginBottom: "15px" }}>
            Please check all the statements below that apply to you | من فضلك اختر الاجابات التي تنطبق عليك
          </h2>
          <p>Select one answer in each row | اختر اجابه واحدة لكل سطر</p>
        </div>
        {this.renderQuestions()}
      </div>
    );
  }
}

export default Patient2;
