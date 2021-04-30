import {useState} from "react"
// import Select from "@material-ui/core/Select"


const Dropdown = props => {
	const {value, name, handleChange} = props
	const countries = ["Australia", "USA", "Russia"]

	return (
			<select name={name}
					value={value}
					onChange={handleChange}
			>{countries.map(c =>
				<option key={c} value={c}>
					{c}
				</option>
			)}

			</select>
	)
}

export default Dropdown
