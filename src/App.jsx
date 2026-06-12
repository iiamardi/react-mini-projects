import "./App.css"

const App = () => {

  const projects = [
    {
      id: 1,
      name: "Counter App",
      description:
        "A simple counter application built with React to practice state management using useState.",
      image: "/images/counter.png",
      live: "https://counter-eight-beige.vercel.app/",
      github: "https://github.com/iiamardi/counter",
    },
    {
      id: 2,
      name: "Calculator App",
      description:
        "A responsive calculator application that performs basic arithmetic operations with React.",
      image: "/images/calculator.png",
      live: "https://calculator-eight-chi-70.vercel.app/",
      github: "https://github.com/iiamardi/calculator",
    },
    {
      id: 3,
      name: "Accordion App",
      description:
        "An interactive accordion component demonstrating conditional rendering and state management.",
      image: "/images/accordion.png",
      live: "https://accordion-wheat-kappa.vercel.app/",
      github: "https://github.com/iiamardi/accordion-",
    },
    {
      id: 4,
      name: "Form Validator App",
      description:
        "A React form with client-side validation and real-time user feedback.",
      image: "/images/form-validator.png",
      live: "https://form-validator-pearl-one.vercel.app/",
      github: "https://github.com/iiamardi/form-validator",
    },
    {
      id: 5,
      name: "Hidden Search Bar App",
      description:
        "A search bar component that expands and collapses with smooth user interaction.",
      image: "/images/hidden-searchbar.png",
      live: "https://hidden-searchbar-sigma.vercel.app/",
      github: "https://github.com/iiamardi/hidden-searchbar",
    },
    {
      id: 6,
      name: "Color Toggler App",
      description:
        "A React application that dynamically changes colors and themes using state.",
      image: "/images/color-toggler.png",
      live: "https://color-toggler-kg7g.vercel.app/",
      github: "https://github.com/iiamardi/color-toggler",
    },
    {
      id: 7,
      name: "Testimonials App",
      description:
        "A testimonials slider built with React featuring dynamic content navigation.",
      image: "/images/testimonials.png",
      live: "https://testimonials-livid.vercel.app/",
      github: "https://github.com/iiamardi/testimonials",
    },
    {
      id: 8,
      name: "Meals App",
      description:
        "A React application that fetches and displays meal data from a REST API.",
      image: "/images/meals.png",
      live: "https://meals-orpin.vercel.app/",
      github: "https://github.com/iiamardi/meals",
    },
    {
      id: 9,
      name: "Todo App",
      description:
        "A classic todo application with functionality to add, complete, and remove tasks.",
      image: "/images/todo.png",
      live: "https://todo-rosy-seven-64.vercel.app/",
      github: "https://github.com/iiamardi/todo",
    },
  ];

  return (
    <div className="container">
      <h1>React Mini Projects Collection</h1>
      <p className="desc">This collection showcases React applications that I built while learning and practicing modern frontend development. These projects cover core React concepts including state management, conditional rendering, form validation, API integration, event handling, and responsive UI development</p>
      <div className="projects">
        {
          projects.map(project => (
            <div className="project" key={project.id}>
              <div className="image">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="con">
                <div className="description">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="buttons">
                  <button><a href={project.github}>GitHub</a></button>
                  <button><a href={project.live}>Preview</a></button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="technologies">
        <h3>Technologies Used</h3>
        <ul>
        <li>React</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>REST APIs</li>
        <li>Vite</li>
      </ul>
      </div>
    </div>
  )
}

export default App