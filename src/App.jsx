import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";

const projects = [
	{
		name: "Cookie Clicker",
		screenshot: "./images/cookie-clicker.png",
		github: "https://github.com/PseuDawncode/CookieClicker.git",
		tech: ["React", "CSS", "JavaScript", "tailwind"],
		writeup: {
			what: "A fun incremental game where you click to collect cookies.",
			learned:
				"Learned about state management in React and creating interactive UI components.",
			role: "Group project, responsible for responsive design and landing page.",
			challenges:
				"How to manage state across multiple components and Tailwind styling.",
		},
	},
	{
		name: "Genesis",
		screenshot: "./images/genesis.png",
		github: "https://github.com/lZ3R0l/genesis.git",
		tech: ["HTML", "SCSS"],
		writeup: {
			what: "A modern, responsive portfolio website inspired by award-winning design. Features a grid gallery, project highlights, and a contact form.",
			learned:
				"Advanced CSS grid and flexbox layouts, SCSS, and how to structure a multi-page portfolio.",
			role: "Solo project",
			challenges:
				"Implementing a fully responsive grid layout and ensuring cross-browser compatibility.",
		},
	},
	{
		name: "Travel Agency",
		screenshot: "./images/travel-agency.png",
		github: "https://github.com/lZ3R0l/test-skills.git",
		tech: ["HTML", "CSS"],
		writeup: {
			what: "A modern travel agency website with featured destinations, testimonials, and a responsive layout.",
			learned:
				"How to structure a multi-section landing page, use Flexbox for layout, and create visually appealing components with only HTML and CSS.",
			role: "Solo project",
			challenges:
				"Ensuring full responsiveness, aligning overlay content on images, and creating a consistent visual style throughout the site.",
		},
	},
	{
		name: "Number Game",
		screenshot: "./images/number-game.png",
		github: "https://github.com/lZ3R0l/number-game",
		tech: ["JavaScript"],
		writeup: {
			what: "A guessing game where the user tries to guess a randomly generated number.",
			learned: "Practiced loops, conditionals, and user input handling.",
			role: "Solo project",
			challenges: "Validating user input and providing replay functionality.",
		},
	},
	{
		name: "ATM Simulator",
		screenshot: "./images/atm.png",
		github: "https://github.com/lZ3R0l/atm",
		tech: ["JavaScript"],
		writeup: {
			what: "A simple ATM simulation that allows users to check balance, deposit, and withdraw.",
			learned: "Worked with objects, functions, and user prompts.",
			role: "Solo project",
			challenges: "Handling invalid input and ensuring correct balance updates.",
		},
	},
	{
		name: "Typing Game",
		screenshot: "./images/typing-game.png",
		github: "https://github.com/lZ3R0l/typping-game",
		tech: ["JavaScript", "HTML", "CSS"],
		writeup: {
			what: "A typing speed game that challenges users to type words as quickly and accurately as possible.",
			learned: "DOM manipulation, event handling, and timing functions.",
			role: "Solo project",
			challenges:
				"Accurately tracking user input and timing, and providing real-time feedback.",
		},
	},
];

function App() {
  return (
      <BrowserRouter>
        <div
          style={{
            maxWidth: 1100,
            margin: "40px auto",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/portfolio"
              element={<Portfolio projects={projects} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;