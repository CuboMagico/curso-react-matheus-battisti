import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/pages/Home/Home"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Projects from "./components/pages/Projects/Projects"
import NewProject from "./components/pages/NewProject/NewProject"

import Container from "./components/layout/Container/Container"
import Navbar from "./components/layout/Navbar/Navbar"
import Footer from "./components/layout/Footer/Footer"

function App() {
	return (
		<Router>
			<Navbar />

			<Container customClass="minHeight">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contato" element={<Contact />} />
					<Route path="/sobre" element={<About />} />
					<Route path="/projetos" element={<Projects />} />
					<Route path="/novoprojeto" element={<NewProject />} />
				</Routes>
			</Container>

			<Footer />
		</Router>
	);
}

export default App;
