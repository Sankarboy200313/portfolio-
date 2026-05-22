const projects = [
  {
    icon: "AI",
    title: "Student Stress Monitoring AI Assistant",
    summary:
      "A multi-service AI platform that supports students with guided conversations, daily check-ins, emotion-aware chat, and AI insights.",
    stack: ["React", "Spring Boot", "FastAPI", "MySQL", "Gemini", "Hugging Face"],
    metrics: ["4 services", "6 API groups", "Daily check-ins"],
    github: "https://github.com/Sankarboy200313/student-stress-monitoring-ai-assistant",
  },
  {
    icon: "MW",
    title: "Mental Wellbeing AI System",
    summary:
      "An AI-based recommendation system designed to support mental wellbeing using Python and data-driven logic.",
    stack: ["Python", "AI", "ML", "Data Analysis"],
    metrics: ["AI guidance", "Python workflow", "Student-focused"],
    github: "https://github.com/Sankarboy200313",
  },
  {
    icon: "ML",
    title: "AI Prediction Model",
    summary:
      "A machine learning classification project using Python and scikit-learn for predictive analytics, pattern recognition, and performance evaluation.",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy"],
    metrics: ["Classification pipeline", "Predictive analytics", "Model evaluation"],
    github: "https://github.com/Sankarboy200313",
  },
  {
    icon: "CL",
    title: "Clinic Appointment Management App",
    summary:
      "A mobile and backend solution for appointment booking, rescheduling, patient management, and medical records.",
    stack: ["React Native", "Node.js", "Express", "MongoDB"],
    metrics: ["Mobile workflow", "Backend APIs", "Double-booking prevention"],
    github: "https://github.com/Sankarboy200313/clinic-appointment-management-app",
  },
  {
    icon: "BK",
    title: "Online Bakery Product Platform",
    summary:
      "An ordering and custom cake booking platform focused on user experience and business workflow.",
    stack: ["HTML", "CSS", "Java", "E-Commerce"],
    metrics: ["Order flow", "Custom bookings", "Customer-focused"],
    github: "https://github.com/Sankarboy200313/OnlineBakeryStore",
  },
  {
    icon: "GH",
    title: "Arduino UNO Smart Greenhouse",
    summary:
      "An IoT project that automates greenhouse monitoring with sensors and smart control logic.",
    stack: ["Arduino", "IoT", "Sensors", "Automation"],
    metrics: ["Sensor automation", "Hardware + logic", "Smart monitoring"],
    github: "https://github.com/Sankarboy200313",
  },
  {
    icon: "DC",
    title: "DCN Network Architecture Proposal",
    summary:
      "Designed a secure multi-tier campus network architecture for a 3-building environment using Cisco Packet Tracer.",
    stack: ["Cisco Packet Tracer", "VLANs", "CIDR", "Inter-VLAN Routing", "ACLs", "DMZ"],
    metrics: ["4 departments segmented", "Secure multi-tier design", "Lateral movement reduced"],
    github: "https://github.com/Sankarboy200313",
  },
];

const projectGrid = document.getElementById("project-grid");

projectGrid.innerHTML = projects
  .map(
    (project) => `
      <article class="card project-card reveal">
        <div class="project-header">
          <div>
            <span class="project-icon" aria-hidden="true">${project.icon}</span>
            <h3 style="margin-top: 16px;">${project.title}</h3>
          </div>
        </div>
        <p>${project.summary}</p>
        <div class="project-metrics">
          ${project.metrics.map((item) => `<span>${item}</span>`).join("")}
        </div>
        <div class="project-meta">
          ${project.stack.map((item) => `<span>${item}</span>`).join("")}
        </div>
        <div class="project-actions">
          <a class="button button-secondary" href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </article>
    `
  )
  .join("");

document.getElementById("year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${Math.min(entry.target.dataset.index || 0, 8) * 80}ms`;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((el, index) => {
    el.dataset.index = index;
    observer.observe(el);
  });
}
