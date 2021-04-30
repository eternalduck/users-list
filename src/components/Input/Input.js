import {useState} from "react"
import Input from "@material-ui/core/Input"

const TextInput = props => {
	const {value, name, handleChange} = props

	return (
		<Input type={"text"}
						name={name}
						value={value}
						onChange={handleChange}
		/>
	)
}

export default TextInput
