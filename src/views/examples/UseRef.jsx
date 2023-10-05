import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
	const [value1, setValue1] = useState("");
	const [value2, setValue2] = useState("");

	const count = useRef(0);
	const myInput1 = useRef(null);
	const myInput2 = useRef(null);
	
	useEffect(() => {

		count.current++;
		myInput2.current.focus();
		
	}, [value1]);

	useEffect(() => {

		count.current++;
		myInput1.current.focus();
		
	}, [value2]);

	const merge = (value1, value2) => {
		//Lógica simples [...value1] transforma value1 em um array de letras
		let merged = "";

		/*
		merged = [...value1].map((e, i) => {
			return `${e}${value2[i] || ""}`
		}).join("");
		*/

		const maxLength = Math.max(value1.length, value2.length);

		for (let i = 0; i < maxLength; i++) {
			if(i < value1.length)
				merged += value1[i];
			if(i < value2.length)
				merged += value2[i];

			
		}
		return merged;
	}

	return (
		<div className="UseRef">
			<PageTitle
				title="Hook UseRef"
				subtitle="Retorna um objeto mutável com a propriedade .current!"
			/>

			<SectionTitle title="Exercício #01" />
			<div className="center">
				<div>
					<span className="text">Digitado: </span>
					<span className="text">{value1 + value2}</span>
				</div>
				<div>
					<span className="text">Modificações: [ <span className="text red">{count.current}</span> ]</span>
				</div>
				<span className="text">{merge(value1, value2)}</span>

				<input type="text" className='input'
					ref={myInput1}
					value={value1}
					onChange={e => setValue1(e.target.value)} />
			</div>
			
			<SectionTitle title="Exercício #02" />
			<div className="center">
				<input type="text" className='input'
					ref={myInput2}
					value={value2} 
					onChange={e => setValue2(e.target.value)} />
			</div>
		</div>
	)
}

export default UseRef
