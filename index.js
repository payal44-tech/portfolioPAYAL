function showTemplate(type) {
    const templateBox = document.getElementById("template-box");
  
    const templates = {
      frontend: `
        <h2>Frontend Development</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Responsive & Mobile UI</li>
          <li>API Integration</li>
          <li>Basic UI/UX Understanding</li>
        </ul>
      `,
  
      management: `
        <h2>Management</h2>
        <ul>
          <li>Team Coordination</li>
          <li>Task Delegation</li>
          <li>Leadership Skills</li>
          <li>Project Planning</li>
        </ul>
      `,
  
      data: `
        <h2>Data & Visualization</h2>
        <ul>
          <li>Excel / Google Sheets</li>
          <li>Power BI / Tableau</li>
          <li>Data Cleaning</li>
          <li>Charts & Dashboards</li>
          <li>python , SQL </li>
        </ul>
      `,
  
      marketing: `
        <h2>Marketing</h2>
        <ul>
          <li>Social Media Strategy</li>
          <li>Content Writing</li>
          <li>Basic SEO</li>
          <li>Brand Awareness</li>
        </ul>
      `,
  
      event: `
        <h2>Event Management</h2>
        <ul>
          <li>Coordination & Logistics</li>
          <li>Budget Handling</li>
          <li>Sponsorship Outreach</li>
          <li>On-ground Management</li>
        </ul>
      `,
  
      research: `
        <h2>Market Research</h2>
        <ul>
          <li>Survey Designing</li>
          <li>Competitor Analysis</li>
          <li>Data Collection</li>
          <li>Trend Insights</li>
        </ul>
      `
    };
  
    templateBox.innerHTML = templates[type];
    templateBox.classList.remove("hidden");
  }
  
