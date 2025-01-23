import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Praveen Kumar Prabhakaran</h1>
        <p>DevOps Engineer | Nottingham</p>
        <p>Email: <a href="mailto:praveenkumarp893@gmail.com">praveenkumarp893@gmail.com</a> | Phone: 07721879528</p>
      </header>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="container">
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>DevOps engineer with 6.6 years of experience in continuous integration and continuous deployment. Looking to secure a new role to make the best use of my existing skills and further my personal and professional development.</p>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <ul>
            <li>Cloud: Azure, AWS</li>
            <li>Scripting: Bash, Windows Batch, Azure CLI</li>
            <li>DevOps Tools: Kubernetes, Docker, Helm, ELK, Jenkins, Jira, Confluence, Bitbucket, Crowd, Artifactory, Dynatrace, Prisma Cloud, Git, Elasticsearch</li>
            <li>Other Tools: Active Directory, Nginx, Istio, Apigee, Ansible, Packer, Sonarqube</li>
            <li>Delivery: Environment build and management</li>
            <li>Operational: System monitoring, disaster recovery planning, capacity management</li>
            <li>Service: Automation, incident reduction</li>
            <li>Interpersonal: Client-facing experience, stakeholder management, training, mentoring</li>
          </ul>
        </section>

        <section id="experience" className="section">
          <h2>Professional Experience</h2>
          <h3>Senior DevOps Engineer - UST, Nottingham (2019 - Current)</h3>
          <ul>
            <li>Implementing and supporting DevOps platform for Boots UK</li>
            <li>Deploying microservices in Azure Kubernetes Service</li>
            <li>Creating and configuring Helm charts for deployment</li>
            <li>Deploying and configuring ELK for managing logs and visualization</li>
            <li>Configuring Prisma Cloud for security and image scanning</li>
          </ul>

          <h3>DevOps Engineer - UST, Trivandrum (2014 - 2019)</h3>
          <ul>
            <li>Environment build including setup of Jira, Confluence, Bitbucket, and other tools</li>
            <li>Dockerization of applications</li>
            <li>Automation of builds and deployment</li>
            <li>Setting up proxy servers with Azure Load Balancers</li>
          </ul>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <p><strong>Master of Science in Computer Applications</strong><br />Indira Gandhi National Open University, Trivandrum (2018)</p>
          <p><strong>Bachelor of Science in Electronics</strong><br />University of Kerala, Trivandrum (2014)</p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Feel free to reach out to discuss opportunities or collaborations!</p>
          <p>Email: <a href="mailto:praveenkumarp893@gmail.com">praveenkumarp893@gmail.com</a></p>
          <p>Phone: 07721879528</p>
        </section>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Praveen Kumar Prabhakaran</p>
      </footer>
    </div>
  );
};

export default App;
