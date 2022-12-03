import React, { useState } from "react";
import "./creditScore.css";
const CreditScore = ({ setProcess }) => {
	const [isBtnActive1, setIsBtnActive1] = useState(true);
	const [isBtnActive2, setIsBtnActive2] = useState(false);
	return (
		<div className="main-box">
			<h1>Credit Score</h1>
			<div className="chain">
				<p>Off-chain Credit Score</p>
				{false ? (
					<div className="box">
						<div className="btn-box">
							<button
								className={isBtnActive1 ? "btn-active" : "btn-deactive"}
								disabled={!isBtnActive1}
								onClick={() => {
									setProcess(true);
								}}
							>
								Fetch my credit bureau score
							</button>
						</div>
						<div className={isBtnActive1 ? "agree-p" : "agree-p-deactive"}>
							<input type="checkbox" />
							<p>
								I agree to submit my KYC Details to fetch my credit bureau score
							</p>
						</div>
					</div>
				) : (
					<div className="score">
						<div className="dataBox">
							<h3>Score = 750</h3>
						</div>
						<div className="dataBox">
							<h3>Summary of Credit History</h3>
							<div className="data">
								<div>
									<p>Active Loan Accounts</p>
									<p>Total Credit Outstanding </p>
									<p>Overdue Payments</p>
									<p>Average Days Past Due </p>
									<p>Enquiries in last 6 months</p>
								</div>
								<div>
									<p>2</p>
									<p>10K</p>
									<p>0</p>
									<p>0</p>
									<p>2</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="chain">
				<p>On-chain Credit Score</p>
				{false ? (
					<div className="box">
						<div className="btn-box">
							<button
								className={isBtnActive1 ? "btn-active" : "btn-deactive"}
								disabled={!isBtnActive1}
								onClick={() => {
									setProcess(true);
								}}
							>
								Fetch my credit bureau score
							</button>
						</div>
						<div className={isBtnActive1 ? "agree-p" : "agree-p-deactive"}>
							<input type="checkbox" />
							<p>
								I agree to submit my KYC Details to fetch my credit bureau score
							</p>
						</div>
					</div>
				) : (
					<div className="score">
						<div className="dataBox">
							<h3>Score = 750</h3>
						</div>
						<div className="dataBox">
							<h3>Summary of Wallet History </h3>
							<div className="data">
								<div>
									<p>Average age of Wallet</p>
									<p>Length of Credit History </p>
									<p>Average Size of Assets </p>
									<p>History of Liquidation </p>
								</div>
								<div>
									<p>920 Days</p>
									<p>450 Days</p>
									<p>$2000</p>
									<p>2 times </p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>

			<div className="chain">
				<p>Overall Credit Score </p>
				<div className="overall">
					<div className="overallData">
						<div className="scoremeter">
							<h3>70%</h3>
							<p>Weightage</p>
						</div>
						+
						<div className="scoremeter">
							<h3>30%</h3>
							<p>Weightage</p>
						</div>
						=
						<div className="scoremeter">
							<h3>700</h3>
							<p>Overall Score </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreditScore;
