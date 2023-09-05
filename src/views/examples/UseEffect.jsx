import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
	const n = +num;

	if (n < 0) return -1;
	if (n === 0) return 1;

	return calcFatorial(n - 1) * n;
}

function isPar(num) {

	if(num < 0 ) return "Valor Inválido";
	else if (num === 0) return "Zero";
	else if (num % 2 === 0) return "Par";
	else if (num % 2 === 1) return "Impar";
	else return "Valor Inválido";
	
}

const UseEffect = (props) => {
	const [number, setNubmer] = useState(1);
	const [fatorial, setFatorial] = useState(1);
	const [statusNum, setStatusNum] = useState("");

	useEffect(() => {
		setFatorial(calcFatorial(number));
	}, [number]);

	useEffect(() => {
		if (fatorial > 1000000) document.title = "Eita";
	}, [fatorial]);

	useEffect(() => {
		setStatusNum(isPar(number));
	}, [number]);

	return (
		<div className="UseEffect">
			<PageTitle
				title="Hook UseEffect"
				subtitle="Permite executar efeitos colaterais em componentes funcionais!"
			/>

			{/* Fatorial */}
			<SectionTitle title="Desafio #01" />
			<div className="center">
				<div>
					<span className="text">Fatorial: </span>
					<span className="text red">
						{fatorial === -1 ? "Não existe" : fatorial}
					</span>
				</div>
				<input
					type="number"
					className="input"
					value={number}
					onChange={(e) => setNubmer(e.target.value)}
				/>
			</div>

			{/* Par ou Impar */}
			<SectionTitle title="Desafio #02" />
			<div className="center">
				<div>
					<span className="text">Par ou Impar? </span>
					<span className="text red">{statusNum}</span>
				</div>
			</div>
		</div>
	);
};

export default UseEffect;
