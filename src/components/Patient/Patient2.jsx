import React, { Component } from "react";
import "./Patient.css";

class Patient2 extends Component {
  state = {
    questions: [
      {
        text: "Patient is overweight or obese",
        answer: "Patient doesn't know",
        key: "question_1",
      },
      {
        text: "Patient smokes cigarettes",
        answer: "Patient doesn't know",
        key: "question_2",
      },
      {
        text: "Patient has been recently injured",
        answer: "Patient doesn't know",
        key: "question_3",
      },
      {
        text: "Patient has high cholesterol",
        answer: "Patient doesn't know",
        key: "question_4",
      },
      {
        text: "Patient has hypertension",
        answer: "Patient doesn't know",
        key: "question_5",
      },
      {
        text: "Patient has diabetes",
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

  renderQuestions = () => {
    return this.state.questions.map((question) => (
      <div className="radioButtonDiv" key={question.key}>
        <h3>{question.text}</h3>
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
            Please check all the statements below that apply to you
          </h2>
          <p>Select one answer in each row</p>
        </div>
        {this.renderQuestions()}
      </div>
    );
  }
}

export default Patient2;
