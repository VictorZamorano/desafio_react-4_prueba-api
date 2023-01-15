import { useEffect, useState, useRef } from "react";

const MiApi = ({
	classNU,
	classNL,
	containerList,
	containerTittle,
	classNT,
	text,
	classNInput,
	placeholder,
	textA,
	containerMiapi,
}) => {
	const [pkmns, setPkmns] = useState([]);
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState("ASC");
	const icon = useRef(null);

	const apiConsume = async () => {
		const res = await fetch("https://pokeapi.co/api/v2/pokemon");
		const data = await res.json();
		setPkmns(data.results);
	};

	useEffect(() => {
		apiConsume();
	}, []);

	const handleChange = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	const handleClick = (e) => {
		if (sort === "ASC") {
			icon.current.classList.remove("bi", "bi-caret-down-fill");
			icon.current.classList.add("bi", "bi-caret-up-fill");
			const sorted = [...pkmns].sort((a, b) => (a[e] > b[e] ? 1 : -1));
			setPkmns(sorted);
			setSort("DSC");
		}
		if (sort === "DSC") {
			icon.current.classList.remove("bi", "bi-caret-up-fill");
			icon.current.classList.add("bi", "bi-caret-down-fill");
			const sorted = [...pkmns].sort((a, b) => (a[e] < b[e] ? 1 : -1));
			setPkmns(sorted);
			setSort("ASC");
		}
	};

	return (
		<div className={containerMiapi}>
			<div className={containerTittle}>
				<h2 className={classNT} onClick={handleClick}>
					{text}
					<i ref={icon} className="bi bi-caret-down-fill"></i>
				</h2>
				<input
					type="text"
					className={classNInput}
					placeholder={placeholder}
					onChange={handleChange}
					value={search}
				/>
			</div>
			<div className={containerList}>
				<ul className={classNU}>
					{pkmns
						.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
						.map((pkmn) => {
							return (
								<li key={pkmn.name} className={classNL}>
									<p>
										<b>
											{pkmn.name.charAt(0).toUpperCase() +
												pkmn.name.substring(1)}
										</b>
									</p>
									<a href={pkmn.url}>{textA}</a>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default MiApi;
