document.addEventListener('DOMContentLoaded', function() {
    const inputForm = document.getElementById('inputForm');
    const generateBtn = document.getElementById('generateBtn');
    const resumeContainer = document.getElementById('resumeContainer');
  
    generateBtn.addEventListener('click', function() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const experience = document.getElementById('experience').value;
      const education = document.getElementById('education').value;
  
      // Generate the resume template based on user input
      const templateHTML = generateResumeTemplate(name, email, experience, education);
      resumeContainer.innerHTML = templateHTML;
    });
  
    function generateResumeTemplate(name, email, experience, education) {
      // You can customize the HTML structure here based on user input
      return `
        <div class="resume template1">
          <h2>Template 1</h2>
          <div class="personal-info">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div class="experience">
            <h3>Experience</h3>
            <p>${experience}</p>
          </div>
          <div class="education">
            <h3>Education</h3>
            <p>${education}</p>
          </div>
        </div>
      `;
    }
  });
  