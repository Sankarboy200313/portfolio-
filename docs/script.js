const projects = [
  {
    icon: "🧠",
    title: "Student Stress Monitoring AI Assistant",
    summary:
      "A multi-service AI platform that supports students with guided conversations, daily check-ins, emotion-aware chat, and AI insights.",
    stack: ["React", "Spring Boot", "FastAPI", "MySQL", "Gemini", "Hugging Face"],
  },
  {
    icon: "💬",
    title: "Mental Wellbeing AI System",
    summary:
      "An AI-based recommendation system designed to support mental wellbeing using Python and data-driven logic.",
    stack: ["Python", "AI", "ML", "Data Analysis"],
  },
  {
    icon: "🏥",
    title: "Clinic Appointment Management App",
    summary:
      "A mobile and backend solution for appointment booking, rescheduling, patient management, and medical records.",
    stack: ["React Native", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: "🍰",
    title: "Online Bakery Product Platform",
    summary:
      "An ordering and custom cake booking platform focused on user experience and business workflow.",
    stack: ["HTML", "CSS", "Java", "E-Commerce"],
  },
  {
    icon: "🌱",
    title: "Arduino UNO Smart Greenhouse",
    summary:
      "An IoT project that automates greenhouse monitoring with sensors and smart control logic.",
    stack: ["Arduino", "IoT", "Sensors", "Automation"],
  },
  {
    icon: "📊",
    title: "AI Prediction Model",
    summary:
      "A machine learning project focused on prediction, pattern recognition, and practical data exploration.",
    stack: ["Python", "Machine Learning", "Prediction", "Analytics"],
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
        <div class="project-meta">
          ${project.stack.map((item) => `<span>${item}</span>`).join("")}
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
          entry.target.classList.add("is-visible");
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
