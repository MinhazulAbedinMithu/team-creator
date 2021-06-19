import { Container } from "react-bootstrap";
import "./App.css";
import SelectionStage from "./components/SelectionStage/SelectionStage";
function App() {
	return (
		<Container>
			<h1 className="title my-5 p-2">Team Creator</h1>
			<SelectionStage />
		</Container>
	);
}

export default App;
