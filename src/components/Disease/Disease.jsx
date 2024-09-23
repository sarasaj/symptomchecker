import React, { Component } from "react";
import Modal from "react-modal";
import Patient2 from "../Patient/Patient2";
import "./Disease.css";
import perImage from "./per.jpg";  // Ensure the image is in the same directory
import memImage from "./mem.jpg";
import lanImage from "./lan.png";

Modal.setAppElement("#root"); // Set the root element for accessibility

class Disease extends Component {
  state = {
    patientInfo: this.props.patientInfo,
    disease_with_possibility: this.props.disease_with_possibility,
    modalIsOpen: false,
    diagnosisVisible: false, // Add this line
    globalDiagnosisVisible: false,
    selectedImage: null,
    shapExplanationVisible: false
  };

  openModal = (imageSrc) => {
    this.setState({ modalIsOpen: true, selectedImage: imageSrc });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };



toggleDiagnosis = () => {
  this.setState((prevState) => ({
    diagnosisVisible: !prevState.diagnosisVisible
  }));
};
toggleGlobalDiagnosis = () => {
  this.setState((prevState) => ({
    globalDiagnosisVisible: !prevState.globalDiagnosisVisible
  }));
};
toggleShapExplanation = () => {
  this.setState((prevState) => ({
    shapExplanationVisible: !prevState.shapExplanationVisible
  }));
};


  get_current_html = () => {
    const filtered_list = this.state.disease_with_possibility.filter(e => e.possibility > 0);
    filtered_list.sort((a, b) => 
      -a.possibility.localeCompare(b.possibility, undefined, { numeric: true }) || 
      a.name.localeCompare(b.name)
    );

    // Only display the first 4 items in the filtered list
    const displayed_list = filtered_list.slice(0, 4);

    return displayed_list.length !== 0 ? (
      <div className="grid-row width-full DiseaseComponent">
        <div className="col-12 tablet:grid-col-12 patientInfo">
          <h3>Patient gender: {this.props.gender}</h3>
          <h3>Patient age: {this.props.age}</h3>
        </div>
        <div class="button-container">
        <button onClick={this.toggleDiagnosis}>Show/Hide Diagnosis Report</button>
        <button onClick={this.toggleGlobalDiagnosis}>Show/Hide Global Diagnosis Report</button>
        <button onClick={this.toggleShapExplanation}>Show/Hide SHAP Explanation</button>
        </div>



        {this.state.diagnosisVisible && (
          // <div id="diagnosisReport">
          //   <h2 className="col-12 tablet:grid-col-12 patientInfo">Diagnosis Report</h2>
          //   <p className="col-12 tablet:grid-col-12 patientInfo">
          //       Based on the symptoms you have reported, including <strong>Loss of Taste or Smell, Fever, Dry Cough, Fatigue, Sore Throat</strong>, our system has evaluated the likelihood of a COVID-19 diagnosis. Given the presence of these specific symptoms, we have classified your condition with a high degree of confidence.
          //   </p>
          //   <p className="col-12 tablet:grid-col-12 patientInfo">
          //       The combination of these symptoms strongly suggests a COVID-19 infection, with an estimated confidence level of <strong>80%</strong>. We recommend following the appropriate health guidelines, seeking medical attention, and getting tested for COVID-19 as soon as possible. If additional symptoms develop or your condition worsens, please contact your healthcare provider immediately.
          //   </p>
          //   <div className="image-container">
          //     <img src={perImage} alt="Symptom Diagnosis" className="diagnosis-image" onClick={() => this.openModal(perImage)} />
          //   </div>
          // </div>
          <div class="container1">
            <h1><span class="icon icon-heart"></span> الإصدار الأول: الإدراك</h1>
            <p><strong>المقدمة:</strong> بناءً على الأعراض التي تعاني منها، حدد النظام تشخيصاً محتملاً والخطوات التي يمكنك اتخاذها.</p>

            <h2><span class="icon icon-heart"></span> التشخيص والتفسير: تصلب الشرايين التاجية</h2>
            <p>هذه الحالة تشمل تضيق الشرايين التي تزود القلب بالدم، مما يؤدي إلى تقليل تدفق الدم وظهور أعراض مثل ألم الصدر، الضيق، وضيق التنفس. هذه الحالة شائعة ولكن يمكن التحكم فيها بالرعاية المناسبة.</p>

            <h2><span></span> الخطوات التالية:</h2>
            <ul class="list">
                <li>زيارة طبيب قلب (أخصائي القلب) لإجراء تقييم دقيق، والذي قد يشمل اختبارات مثل اختبار الإجهاد أو تصوير الأوعية الدموية.</li>
                <li>النظر في تغييرات نمط الحياة، تناول الأدوية، وربما إجراء بعض الإجراءات الطبية لتحسين تدفق الدم.</li>
            </ul>

            <h2><span></span> التشخيصات البديلة:</h2>
            <ul class="list">
                <li>الذبحة الصدرية: أعراض مشابهة مثل ألم الصدر، لكنها عادةً ما تكون ناتجة عن انخفاض مؤقت في تدفق الدم إلى القلب، وليس تضيق الشرايين المزمن.</li>
                <li>مشاكل صمامات القلب: يمكن أن تسبب أيضًا انزعاجاً في الصدر وضيقاً في التنفس، ولكنها عادةً تشمل أعراضاً أخرى مثل الخفقان أو النفخة القلبية.</li>
            </ul>

            <h2>لماذا تم اختيار هذا التشخيص:</h2>
            <p>اختار النظام تصلب الشرايين التاجية لأن الأعراض تتماشى بشكل أكبر مع تضيق الشرايين على المدى الطويل، وليس مع المشاكل المؤقتة أو المتعلقة بصمامات القلب.</p>

            <div class="confidence">
                <h2>مستوى الثقة: 70%</h2>
                <p>على الرغم من أن النظام واثق بدرجة كبيرة، إلا أن طبيب القلب سيكون قادرًا على تقديم تشخيص أكثر دقة.</p>
            </div>

            <div class="advanced-info">
                <h2>معلومات متقدمة:</h2>
                <p>تم استخدام نموذج شجرة القرارات، والذي قام بتقييم الأعراض خطوة بخطوة لتحديد الحالة الأكثر احتمالاً.</p>
            </div>

            <div class="footer">
                <p>حقوق الطبع والنشر © 2024 - النظام الذكي للتشخيص</p>
            </div>
        </div>
        )}
      
        {this.state.globalDiagnosisVisible && (
          // <div id="globalDiagnosisReport">
          //   <h2>Global Diagnosis Report</h2>
          //   <p>
          //     Our system has analyzed your symptoms, including fever, cough, fatigue, and loss of taste or smell. Based on a large dataset of patients with similar symptoms, we've determined that your condition is most likely related to COVID-19.
          //   </p>
          //   <p>
          //     The diagnosis process used advanced methods to compare your symptoms with known cases and identified patterns that strongly suggest a COVID-19 infection. The result is categorized with a high level of confidence. If you experience additional symptoms or if your condition worsens, please consult a healthcare provider immediately.
          //   </p>
          //   <div className="image-container">
          //     <img src={memImage} alt="Symptom Diagnosis" className="diagnosis-image" onClick={() => this.openModal(memImage)} />
          //   </div>
          // </div>
          <div class="container2" id="globalDiagnosisReport">
            <h1>الإصدار الثاني: الذاكرة</h1>

            <p class="highlight">قام النظام بتحليل الأعراض التي تعاني منها وحدد حالة محتملة تتطابق مع تجربتك.</p>

            <h2>التشخيص: اضطرابات الشقيقة</h2>
            <p>الصداع النصفي هو صداع شديد يمكن أن يشمل الغثيان، الدوخة، وحساسية للضوء والصوت. يمكن أن تختلف مدة وشدة الصداع النصفي وغالباً ما تعطل الأنشطة اليومية.</p>

            {/* <!-- Dual Coding Theory - Use of Icons with Text --> */}
            <h2>الخطوات التالية:</h2>
            <ul class="step-list">
                <li>
                    <div class="icons">1</div>
                    <span>الاستراحة في غرفة هادئة ومظلمة، الحفاظ على الترطيب، وتجنب المثيرات المعروفة مثل الأضواء الساطعة، بعض الأطعمة، أو الروائح القوية.</span>
                </li>
                <li>
                    <div class="icons">2</div>
                    <span>يمكن لمسكنات الألم المتاحة دون وصفة طبية أن تساعد، ولكن إذا كانت نوبات الصداع النصفي متكررة أو شديدة، يجب زيارة طبيب أعصاب للحصول على علاج مخصص.</span>
                </li>
            </ul>

            <h2>التشخيصات البديلة:</h2>
            <ul class="step-list">
                <li>
                    <div class="icons">1</div>
                    <span>العدوى الفيروسية: يمكن أن تسبب الحمى، الصداع، والغثيان ولكن عادةً ما تكون مصحوبة بأعراض أخرى مثل السعال أو التهاب الحلق.</span>
                </li>
                <li>
                    <div class="icons">2</div>
                    <span>اضطرابات الأذن الداخلية (مثل التهاب العصب الدهليزي): يمكن أن تسبب الدوخة والغثيان، ولكن غالباً ما تتضمن فقدان السمع أو طنين في الأذنين.</span>
                </li>
            </ul>

            {/* <!-- Working Memory Model - Simple chunking of next steps --> */}
            <div class="next-steps">
                إذا تكررت الأعراض، استشر طبيب أعصاب لتقييم العلاج المخصص.
            </div>

            {/* <!-- Confidence Section --> */}
            <div class="confidence">
                <h2>مستوى الثقة: 65%</h2>
                <p>هناك احتمال لوجود حالات أخرى، لذا يوصى بمراقبة الأعراض والتشاور مع أخصائي.</p>
            </div>

            {/* <!-- Advanced Information Section --> */}
            <div class="advanced-info">
                <h2>معلومات متقدمة:</h2>
                <p>تم الوصول إلى هذا التشخيص من خلال تحليل شامل لأنماط من مجموعة بيانات كبيرة، بمقارنة أعراضك مع حالات مشابهة معروفة.</p>
            </div>

            {/* <!-- Dual Coding Theory - Use of visual imagery --> */}
            <div class="image-box">
                <img src="https://www.scientificanimations.com/wp-content/uploads/2018/08/Migraine-Triggers.jpeg" alt="Brain diagram showing migraine areas"/>
                <p>المناطق التي قد تتأثر بالصداع النصفي</p>
            </div>
        </div>
        )}
        {this.state.shapExplanationVisible && (
          // <div id="shapExplanation">
          //   <h2>SHAP Explanation Report</h2>
          //   <p>
          //     The system used SHAP (SHapley Additive exPlanations) to explain how each symptom influenced the diagnosis. For example, "Loss of taste or smell is a significant indicator of Coronavirus in 90% of cases."
          //   </p>
          //   <p>
          //     Each symptom's contribution to the diagnosis is presented in simplified terms, and you can click on the options provided for more detailed explanations if needed.
          //   </p>
          //   <div className="image-container">
          //     <img src={lanImage} alt="SHAP Explanation" className="shap-image" onClick={() => this.openModal(lanImage)} />
          //   </div>
          // </div>

          <div class="container3" id="shapExplanation">
              <h1>الإصدار الثالث: القدرات اللغوية</h1>

              <p class="highlight">بناءً على الأعراض التي تعاني منها، إليك ما يقترحه النظام بشأن حالتك.</p>

              <h2>التشخيص: التهاب المعدة والأمعاء</h2>
              <p>التهاب المعدة والأمعاء، المعروف غالباً باسم إنفلونزا المعدة، يسبب التهاباً في المعدة والأمعاء، وغالباً ما يكون بسبب التهابات مثل الفيروسات أو البكتيريا. يمكن أن يؤدي إلى الحمى، الغثيان، آلام البطن، وفقدان الوزن.</p>

              {/* <!-- Dual Coding Theory - Use of Icons with Text --> */}
              <h2>الخطوات التالية:</h2>
              <ul class="step-list">
                  <li>
                      <div class="icons">1</div>
                      <span>الحفاظ على الترطيب بشرب الماء أو محاليل إعادة الترطيب. ابدأ بتناول أطعمة خفيفة مثل الخبز المحمص أو البسكويت مع تحسن الأعراض.</span>
                  </li>
                  <li>
                      <div class="icons">2</div>
                      <span>إذا استمرت الأعراض لأكثر من بضعة أيام أو ساءت، يُنصح باستشارة طبيب متخصص في الجهاز الهضمي أو طبيبك المعتاد.</span>
                  </li>
              </ul>

              <h2>التشخيصات البديلة:</h2>
              <ul class="step-list">
                  <li>
                      <div class="icons">1</div>
                      <span>التسمم الغذائي: يسبب أعراضاً مشابهة ولكن يبدأ عادةً فجأة بعد تناول طعام ملوث ويزول بشكل أسرع مع الترطيب والراحة.</span>
                  </li>
                  <li>
                      <div class="icons">2</div>
                      <span>متلازمة القولون العصبي قد تسبب آلاماً في البطن وتغيرات في عادات الأمعاء، ولكنها عادةً لا تشمل الحمى.</span>
                  </li>
              </ul>

              {/* <!-- Accessibility - Large, high contrast button --> */}
              <button onclick="showFeedback()">التشخيص النهائي</button>

              {/* <!-- Feedback after user interaction --> */}
              <div class="feedback" id="feedback">
                  تم إرسال تشخيصك بنجاح!
              </div>

              {/* <!-- Sapir-Whorf Hypothesis: Clear language and terminology adapted to Arabic culture --> */}
              <div class="advanced-info">
                  <h2>معلومات متقدمة:</h2>
                  <p>تم دعم التشخيص باستخدام SHAP (تفسيرات شابلي الإضافية)، حيث أوضح كيفية مساهمة كل عرض في التشخيص العام.</p>
              </div>
          </div>
        )}

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Enlarged Image"
          className="Modal"
          overlayClassName="Overlay"
        >
          <button onClick={this.closeModal} className="close-button">Close</button>
          {this.state.selectedImage && (
            <img src={this.state.selectedImage} alt="Enlarged Symptom Diagnosis" className="enlarged-image" />
          )}
        </Modal>
        <div className="col-12 tablet:grid-col-12 DiagnosisReport">
          <h3>Diagnosis Report (conditions you might have based on your answers)</h3>
          {displayed_list.map((key, id) => (
            <div className="reportDiv" key={id}>
              <div className="display-flex flex-row flex-justify flex-wrap">
                <div className="display-flex flex-align-center titleReport">
                  <h5>{key.name}</h5>
                  <a href={`https://en.wikipedia.org/wiki/${key.name}`} title="wikipedia" rel="noopener noreferrer" target="_blank">
                    i
                  </a>
                </div>
                <div className="display-flex flex-align-center Possibility">
                  <p>
                    Possibility <span>{key.possibility}%</span>
                  </p>
                  <div className="possibilityProgressBar">
                    <div style={{ width: `${key.possibility}%` }}></div>
                  </div>
                </div>
              </div>
              <div className="diseaseSymptoms">
                <h4>Disease Symptoms</h4>
                <ul>
                  {key.disease_symptom.sort().map((item, index) => (
                    key.symptom_user_has.includes(item) ? (
                      <li key={index} className="active">{item}</li>
                    ) : (
                      <li key={index}>{item}</li>
                    )
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div>Always visit a doctor if you have any symptoms of a disease or call your local hospital</div>
        
      </div>
    ) : (
      <React.Fragment>
        <div className="grid-row width-full DiseaseComponent">
          <div className="col-12 tablet:grid-col-12 patientInfo">
            <h3>Patient gender: Male</h3>
            <h3>Patient age: 71</h3>
          </div>
          <p>Cannot determine possible diseases due to lack of symptoms. Please retry the analysis with actual symptoms or call your local hospital if it is an emergency.</p>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return <React.Fragment>{this.get_current_html()}</React.Fragment>;
  }
}

export default Disease;
