import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import {
	getAllTransactions,
	getFirstTransactionDateDiff,
	getFirstBorrowDateDiff,
	getAllTokenTransactions,
	getAvgAssetBrought,
	getLiquidationCount,
} from "./Helper/DataPoints";
import CreditScore from "./components/CreditScore/CreditScore";
import Process from "./components/Process/Process";
function App() {
	const name = useRef();
	const [transactions, setTransactions] = useState([]);
	const [tokenTransactions, setTokenTransactions] = useState([]);
	const [process, setProcess] = useState(false);

	async function getAddress() {
		if (name.current.value) {
			console.log("Wallet address: ", name.current.value);
		}
		const trx = await getAllTransactions(name.current.value);
		setTransactions(trx);
		getFirstTransactionDateDiff(trx);
		getFirstBorrowDateDiff(trx);
		const tokenTrx = await getAllTokenTransactions(name.current.value);
		setTokenTransactions(tokenTrx);
		getAvgAssetBrought(trx, tokenTrx, name.current.value);
		getLiquidationCount(trx);
	}

	console.log(transactions);

	const handleProcess = () => {
		setProcess(false);
	};
	return (
		<div className="App">
			{process && <Process handleProcess={handleProcess} />}
			<CreditScore setProcess={setProcess} />

			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<input type="text" name="walletAddress" ref={name}></input>
				<button onClick={getAddress}>Click Me</button>
			</header> */}
		</div>
	);
}

export default App;
