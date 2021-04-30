import {useState} from "react"
// import Select from "@material-ui/core/Select"

const Dropdown = props => {
	const {value, name, handleChange} = props
	const predefinedCountries = ["Australia", "USA", "Russia"]

	return (
		<select name={name}
						value={value}
						onChange={handleChange}
		>
			{predefinedCountries.map(country =>
				<option key={country} value={country}>
					{country}
				</option>
			)}
		</select>
	)
}

export default Dropdown
