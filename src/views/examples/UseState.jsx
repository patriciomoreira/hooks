import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {

	const [value, setValue] = useState(0);
	const [name, setName] = useState("...Inicial");

	return (
		<div className="UseState">
			<PageTitle
				title="Hook UseState"
				subtitle="Estado em componentes funcionais!"
			/>
			<SectionTitle title="Desafio #01" />
			<div className="center">
				<span className="text">{value}</span>
				<div>
					<button onClick={() => setValue(value - 1)} className="btn"> - 1 </button>
					<button onClick={() => setValue(value + 1)} className="btn"> + 1 </button>
					<button onClick={() => setValue(value + 1000)} className="btn"> + 1000 </button>
				</div>
			</div>
			<SectionTitle title="Desafio #02" />
            <input onChange={e => setName(e.target.value)} type="text" className="input" value={name}/>
            <span className="text">{name}</span>
		</div>
	);
};

export default UseState;
