import {useState} from "react"
import Input from "@material-ui/core/Input"


const TextInput = props => {
	const {value, name, handleChange} = props
	const [val, setVal] = useState("")//TODO
	// const handleChange = event => {
	// 	setVal(event.target.value)
	// 	console.info(val)
	// }
	return (
			<Input type={"text"}
						 name={name}
					value={value}//TODO
						 // value={val}//TMP
						 onChange={handleChange}
			/>
	)
}

export default TextInput
