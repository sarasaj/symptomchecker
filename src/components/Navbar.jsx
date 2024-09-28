// import React from "react";
// import DHIlab from "./DHIlab/DHIlab";

// const Navbar = () => {
//   let isArrayFunction = (inputArray) => {
//     if (Array.isArray(inputArray) && inputArray.length !== 0) {
//       return false;
//     } else {
//       return true;
//     }
//   };
//   return (
//     <div id="Navbar">
//       <div class="usa-overlay"></div>
//       <header class="usa-header usa-header--basic usa-header--megamenu padding-bottom-4 padding-top-6">
//         <div class="usa-nav-container">
//           <div class="usa-navbar">
//             <div class="usa-logo margin-0" id="basic-mega-logo">
//               <em class="usa-logo__text">
//                 <div className="display-flex flex-row align-items-center">
//                   <DHIlab />
//                   <h3 className="display-inline-block padding-left-1">Symptom Checker</h3>
                  
//                 </div>
//               </em>
//             </div>
//             <h4>(Experiment Version)</h4>
//             <div>
//                 <form>
//                   <div>
//                     <label htmlFor="fontSizeRange">Text Size :  </label>
//                     <input
//                       type="range"
//                       id="fontSizeRange"
//                       min="10"
//                       max="30"
//                       defaultValue="16"
//                       onInput={(e) => updateTextSize(e.target.value)}
//                     />
//                   </div>
//                 </form>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// const updateTextSize = (size) => {
//   document.documentElement.style.setProperty('--base-font-size', size + 'px');
// };
// export default Navbar;

import React from "react";
import DHIlab from "./DHIlab/DHIlab";
import './Navbar.css'; // Assuming the CSS is here

const Navbar = () => {
  return (
    <div id="Navbar" className="navbar-container">
      <div className="usa-overlay"></div>
      <header className="usa-header">
        <div className="usa-nav-container">
          <div className="usa-navbar flex-row space-between align-center">
            {/* Logo and Text placed side by side */}
            <div className="logo-section flex-row align-center">
              <DHIlab />
              <h3 className="logo-text">Symptom Checker</h3>
            </div>
            {/* Text size slider and version */}
            <div className="experiment-section flex-row align-center">
              <h4 className="experiment-version">(Experiment Version)</h4>
              <div className="text-size-control">
                <form>
                  <label htmlFor="fontSizeRange">Text Size: </label>
                  <input
                    type="range"
                    id="fontSizeRange"
                    min="10"
                    max="30"
                    defaultValue="16"
                    onInput={(e) => updateTextSize(e.target.value)}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

const updateTextSize = (size) => {
  document.documentElement.style.setProperty('--base-font-size', size + 'px');
};

export default Navbar;
