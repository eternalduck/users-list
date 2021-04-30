import {useContext, useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import UserContext, {UserContextConsumer} from "../contexts/UserContext"
import TextInput from "../Input/Input"
import Dropdown from "../Dropdown/Dropdown"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import "./UserCard.scss"

const UserCard = props => {
	const {userID} = useParams()
	const {users, setUsers} = useContext(UserContext)
	const {isLoading, setIsLoading} = useContext(UserContext)


	// useEffect(() => {
	// 	const searchAndSet = where => {
	// 		const current = where.find(u => u.id === userID)
	// 		setCurrentUser(c => c = current)
	// 		console.info("currentUser:")
	// 		console.info(currentUser)
	// 	}
	// 	const getCurrentUser = () => {
	// 		if (localStorage.getItem("usersList") !== null) {
	// 			let raw = localStorage.getItem("usersList")
	// 			let parsed = JSON.parse(raw)
	// 			searchAndSet(parsed)
	// 			console.info("stor exists")
	// 		} else {
	// 			searchAndSet(users)
	// 			console.info("NO stor")
	// 		}
	// 	}
	// 	getCurrentUser()
	// }, [])

	// useEffect(() => {
	// 	console.info(currentUser)
	// }, [currentUser])


	// Inputs processing
	const [currentUser, setCurrentUser] = useState({//TMP value
		"id": 1,
		"name": "Leanne",
		"phone": "1-770-736-8031 x56442",
		"email": "Sincere@april.biz",
		"country": "USA",
		"age": "20"
	})
	// const [currentUser, setCurrentUser] = useState(users[0])

	// const {id, name, phone, email, country, age} = currentUser

	const handleChange = e => {
		setCurrentUser(f => ({...f, [e.target.name]: e.target.value}))
		console.info(currentUser)
	}


	useEffect(() => {
		console.info(`userID: ${userID}`)
		console.info("users:")
		console.info(users)
		// console.info("currentUser:")
		// console.info(currentUser)
	}, [])
	// end inputs processing

	// Save and return to index
	const saveProfileAndReturn = e => {
		console.info("==save function here==")
		window.location.href = "/"
	}

	// Save profile to context
	const saveProfile = e => {
		console.info("currentUser to save:")
		console.info(currentUser)
		setUsers(u => [...u, currentUser])
		console.info("saved users:")
		console.info(users)
	}

// setTasks([...tasks, newTask])
	// number only field
	// const [error, setError] = useState(false)
	// const handleChange = event => {
	// 	const filter = /^[0-9\b]+$/
	// 	const value = event.target.value
	// 	if (value === "" || filter.test(value)) {
	// 		valueHandler(state => ({...state, sum: value}))
	// 		setError(false)
	// 	} else {
	// 		setError(true)
	// 	}
	// }
	// <input
	// 	className={"text-input"}
	// 	type={"text"}
	// 	name={name}
	// 	id={id}
	// 	value={value}
	// 	onChange={handleChange}
	// 	placeholder={placeholder}
	// />
	// {error &&
	// 	<p className={"text-input__error"}>
	// 		{text.numberInputError}
	// 	</p>
	// }
	// END number only field

	return (
			<UserContextConsumer>
			{value => (
				<Container>
						{/*: {`${id}, ${name}, ${phone}, ${email}, ${country}, ${age}`}*/}
					<p>{JSON.stringify(value.users[0])}
					</p>
					{/*<form className={"user-card"}>*/}
					{/*	<div className={"user-card__row"}>*/}
					{/*		<label className={"user-card__label"}>Name:</label>*/}
					{/*		<TextInput name={"name"}*/}
					{/*							value={currentUser.name || ""}*/}
					{/*							handleChange={e => handleChange(e)}*/}
					{/*		/>*/}
					{/*	</div>*/}
					{/*	<div className={"user-card__row"}>*/}
					{/*		<label className={"user-card__label"}>Phone:</label>*/}
					{/*		<TextInput name={"phone"}*/}
					{/*							value={currentUser.phone || ""}*/}
					{/*							handleChange={e => handleChange(e)}*/}
					{/*		/>*/}
					{/*	</div>*/}
					{/*	<div className={"user-card__row"}>*/}
					{/*		<label className={"user-card__label"}>Country:</label>*/}
					{/*		<Dropdown name={"country"}*/}
					{/*							value={currentUser.country || ""}*/}
					{/*							handleChange={e => handleChange(e)}*/}
					{/*		/>*/}
					{/*	</div>*/}
					{/*	/!*TODO MORE INPUTS*!/*/}
					{/*	<div className={"user-card__button-wrap"}>*/}
					{/*		<Button*/}
					{/*				variant="contained"*/}
					{/*				color="primary"*/}
					{/*				size="large"*/}
					{/*				startIcon={<SaveIcon/>}*/}
					{/*				onClick={() => saveProfile()}*/}
					{/*		>*/}
					{/*			Save*/}
					{/*		</Button>*/}
					{/*		<Button*/}
					{/*				variant="contained"*/}
					{/*				color="primary"*/}
					{/*				size="large"*/}
					{/*				startIcon={<ExitToAppIcon/>}*/}
					{/*				onClick={() => saveProfileAndReturn()}*/}
					{/*		>*/}
					{/*			Save & return*/}
					{/*		</Button>*/}
					{/*	</div>*/}
					{/*</form>*/}
				</Container>
			)}
			</UserContextConsumer>
	)
}

export default UserCard
