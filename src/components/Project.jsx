const projectList = [
  {
    id: "proj-1",
    title: "Movie Search Engine",
    desc: "Website you can find your movies. TMDb API is used to create this porject.",
    tech: ["React", "TMDb-API"],
    live: "https://tharanga8888.github.io/react_Movie_Website/",
    code: "https://github.com/Tharanga8888/react_Movie_Website.git",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Weather App",
    desc: "Find your citie's wearther in real time. OpenWeather API is used to create this porject.",
    tech: ["React", "Tailwind", "OpenWeather-API"],
    live: "https://tharanga8888.github.io/Weather_reactApp/",
    code: "https://github.com/Tharanga8888/Weather_reactApp.git",
    featured: true,
  },
  {
    id: "proj-3",
    title: "WMEnhaCE",
    desc: "A platform for enhance your working memory. Used Django web framework, used HuggingFace API to get the AI services.",
    tech: ["FYP", "Django", "Python", "Boostrap", "HuggingFace"],
    code: "https://github.com/Tharanga8888/WMEnHaNCE.git",
    featured: true,
  },
  {
    id: "proj-4",
    title: "To-Do-List",
    desc: "List your tasks to be done, delete them after you did",
    tech: ["React"],
    live: "https://tharanga8888.github.io/to-do-list_react/",
    code: "https://github.com/Tharanga8888/to-do-list_react.git",
    featured: true,
  },
  {
    id: "proj-5",
    title: "Color Picker",
    desc: "Check and pick your color",
    tech: ["React"],
    live: "https://tharanga8888.github.io/ColorPicker/",
    code: "https://github.com/Tharanga8888/ColorPicker.git",
    featured: false,
  },
  {
    id: "proj-6",
    title: "Portfolio Website",
    desc: "",
    tech: ["React"],
    live: "https://tharanga8888.github.io/Portfolio_react_2025_intern/",
    code: "https://github.com/Tharanga8888/Portfolio_react_2025_intern.git",
    featured: false,
  },
  {
    id: "proj-7",
    title: "StopWatch",
    desc: "Created a digital stopwatch using react hooks, state management, and start/stop/reset event handling.",
    tech: ["React"],
    live: "https://tharanga8888.github.io/StopWatch_react/",
    code: "https://github.com/Tharanga8888/StopWatch_react.git",
    featured: false,
  },
  {
    id: "proj-8",
    title: "Dice Roller Game",
    desc: "Simulated dice rolls with random number generation, template literals, and dynamic image rendering.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Dice-Roller-Game-JS/",
    code: "https://github.com/Tharanga8888/Dice-Roller-Game-JS.git",
    featured: true,
  },
  {
    id: "proj-9",
    title: "Rock Paper Scissors",
    desc: "Developed a game using random number generation, if/else logic, and real-time DOM updates for results.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Rock-Papaer-Scissors-JS/",
    code: "https://github.com/Tharanga8888/Rock-Papaer-Scissors-JS.git",
    featured: true,
  },
  {
    id: "proj-10",
    title: "Pomodoro Timer",
    desc: "Built a focus timer using setInterval countdown logic, state toggling, and DOM updates for session tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Pomodoro-Timer-JS/",
    code: "https://github.com/Tharanga8888/Pomodoro-Timer-JS.git",
    featured: true,
  },
  {
    id: "proj-11",
    title: "Unit Converter",
    desc: "Implemented real-time unit conversions using event listeners, DOM manipulation, and dynamic calculation functions.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Unit-Converter-JS/",
    code: "https://github.com/Tharanga8888/Unit-Converter-JS.git",
    featured: false,
  },
  {
    id: "proj-12",
    title: "Text-to-Speech",
    desc: "Integrated Web Speech API, feature detection, and speech synthesis events for reading aloud typed text.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Text-to-Speech-JS/",
    code: "https://github.com/Tharanga8888/Text-to-Speech-JS.git",
    featured: true,
  },
  {
    id: "proj-13",
    title: "Tip Calculator",
    desc: "Built an interactive tip and bill-splitting tool with form input handling, percentage-based math operations, and live output updates.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Tip-Calculator-JS/",
    code: "https://github.com/Tharanga8888/Tip-Calculator-JS.git",
    featured: false,
  },
  {
    id: "proj-14",
    title: "Simple Calendar",
    desc: "Generated a monthly calendar dynamically with Date object methods, grid layouts, and JavaScript array iteration.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Simple-Calender-JS/",
    code: "https://github.com/Tharanga8888/Simple-Calender-JS.git",
    featured: false,
  },
  {
    id: "proj-15",
    title: "Receipt Generator",
    desc: "Managed dynamic item lists and totals with array manipulation, template literals, and loop-based DOM rendering.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Receipt-Generator-JS/",
    code: "https://github.com/Tharanga8888/Receipt-Generator-JS.git",
    featured: false,
  },
  {
    id: "proj-16",
    title: "Random Number Generator",
    desc: "Used Math.random(), range formulas, and event listeners to produce numbers within user-defined limits.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Random-Number-Generator-JS/",
    code: "https://github.com/Tharanga8888/Random-Number-Generator-JS.git",
    featured: false,
  },
  {
    id: "proj-17",
    title: "Quiz Game",
    desc: "Created a multi-question quiz with object arrays for data storage, score tracking, and conditional rendering of results.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Quiz-Game-JS/",
    code: "https://github.com/Tharanga8888/Quiz-Game-JS.git",
    featured: false,
  },
  {
    id: "proj-18",
    title: "Password Generator",
    desc: "Implemented random character selection, array shuffling, and string concatenation for secure password creation.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Password-Generator-JS/",
    code: "https://github.com/Tharanga8888/Password-Generator-JS.git",
    featured: true,
  },
  {
    id: "proj-19",
    title: "Number Guessing Game",
    desc: "Used while/if loops, input validation, and comparison operators to guide the player toward the correct number.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Number-Guessing-Game-JS/",
    code: "https://github.com/Tharanga8888/Number-Guessing-Game-JS.git",
    featured: false,
  },
  {
    id: "proj-20",
    title: "Light/Dark Mode Toggle",
    desc: "Added theme switching with class toggling, CSS variable manipulation, and localStorage persistence.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Light-Dark-Mode-Toggle-JS/",
    code: "https://github.com/Tharanga8888/Light-Dark-Mode-Toggle-JS.git",
    featured: false,
  },
  {
    id: "proj-21",
    title: "Image Slider",
    desc: "Created a sliding gallery with array indexing, automatic interval cycling, and manual navigation buttons.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Image-Slider-JS/",
    code: "https://github.com/Tharanga8888/Image-Slider-JS.git",
    featured: false,
  },
  {
    id: "proj-22",
    title: "Digital Clock",
    desc: "Displayed live time using setInterval updates, Date object methods, and string formatting for HH:MM:SS.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Digital-Clock-JS/",
    code: "https://github.com/Tharanga8888/Digital-Clock-JS.git",
    featured: false,
  },
  {
    id: "proj-23",
    title: "Counter Program",
    desc: "Built a counter with increment/decrement functions, DOM textContent updates, and reset handling.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Counter-Program-JS/",
    code: "https://github.com/Tharanga8888/Counter-Program-JS.git",
    featured: false,
  },
  {
    id: "proj-24",
    title: "Age Calculator",
    desc: "Calculated exact age using Date object arithmetic, form handling, and dynamic DOM display.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://tharanga8888.github.io/Age-Calculator-JS/",
    code: "https://github.com/Tharanga8888/Age-Calculator-JS.git",
    featured: false,
  },
];

function Project() {
  return (
    <section id="projects" className="section projects-section fade-section">
      <h2 className="sectionHead">PROJECTS</h2>

      <div className="projects-grid">
        {projectList.map((p) => (
          <article key={p.id} className="project-card" data-project-id={p.id}>
            <button
              className={`project-star ${p.featured ? "featured" : ""}`}
              aria-pressed={p.featured ? "true" : "false"}
              title="Mark as featured"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 
                         14.81 8.63 12 2 9.19 8.63 2 9.24 
                         7.46 13.97 5.82 21z" />
              </svg>
            </button>

            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <ul className="tech-list">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className="project-cta">
                <a className="btn small" href={p.live} target="_blank" rel="noopener">
                  Live
                </a>
                <a className="btn small ghost" href={p.code} target="_blank" rel="noopener">
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
