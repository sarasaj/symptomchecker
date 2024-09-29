
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
