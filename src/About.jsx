import React from 'react';

export default function About() {
  return (
    <>
      <h1 className='my-5' style={{ color: "red" }}>About Textify</h1>
      <div className="accordion" id="accordionExample" style={{ backgroundColor: "#f5f5f5", border: "3px solid red" }}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ color: "red" }}>
              What is Textify?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ color: "red" }}>
              <strong>Textify</strong> is a powerful text utility app that helps users easily transform, format, and analyze text. Whether you're cleaning up documents, converting case, counting words, or copying text with ease — Textify simplifies your workflow.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ color: "red" }}>
              Features of Textify
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ color: "red" }}>
              <ul>
                <li>Convert text to UPPERCASE or lowercase</li>
                <li>Remove extra spaces & clean formatting</li>
                <li>Copy formatted text instantly</li>
                <li>Count words and characters accurately</li>
                <li>Toggle light/dark mode for better readability</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ color: "red" }}>
              Why Choose Textify?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ color: "red" }}>
              <strong>Simple, fast, and user-friendly.</strong> Whether you're a student, writer, developer, or just working with content — TextMate offers a clean interface, responsive design, and intuitive tools that boost productivity without distractions.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
