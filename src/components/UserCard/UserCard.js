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
	const [currentUser, setCurrentUser] = useState({})
	const {id, name, phone, email, country, age} = currentUser

	// Get current user by userID from slug - FAIL
	useEffect(() => {
		const getCurrentUser = () => {
			const found = users.find(u => u.id === 3)//userID FAILS here, wtf??
			setCurrentUser(c => c = found)
		}
		if (users) {
			getCurrentUser()
		} else {
			// context fails on page refresh..
			console.error("no users from context..")
		}
	}, [])

// Inputs processing:
	// Text inputs & select
	const handleChange = e => {
		setCurrentUser(f => ({...f, [e.target.name]: e.target.value}))
		console.info(currentUser)
	}

	// Number only age field
	const [ageError, setAgeError] = useState(false)
	const handleAgeChange = e => {
		const filter = /^[0-9\b]+$/
		const value = e.target.value
		if (value === "" || filter.test(value)) {
			setCurrentUser(f => ({...f, age: value}))
			setAgeError(false)
		} else {
			setAgeError(true)
		}
	}
	// end age field
// end inputs processing

	// Save and return to index:
	const saveProfileAndReturn = e => {
		console.info("==save & return function here==")
		window.location.href = "/"
	}

	// Save profile to context:
	const saveProfile = e => {
		console.info("==save function here==")
		setUsers(u => [...u, currentUser])//TODO
	}

	return (
			<UserContextConsumer>
			{value => (
				<Container>
					<form className={"user-card"}>
						<p style={{"color": "red"}}>Failed to get current user by userID from slug, so just using a static id :/<br/> And also data context fails on page refresh..</p>

						<div className={"user-card__row"}>
							<label className={"user-card__label"}>Name:</label>
							<TextInput name={"name"}
												value={currentUser.name || ""}
												handleChange={e => handleChange(e)}
							/>
						</div>

						<div className={"user-card__row"}>
							<label className={"user-card__label"}>Phone:</label>
							<TextInput name={"phone"}
												value={currentUser.phone || ""}
												handleChange={e => handleChange(e)}
							/>
						</div>

						<div className={"user-card__row"}>
							<label className={"user-card__label"}>Email:</label>
							<TextInput name={"email"}
												value={currentUser.email || ""}
												handleChange={e => handleChange(e)}
							/>
						</div>

						<div className={"user-card__row"}>
							<label className={"user-card__label"}>Country:</label>
							<Dropdown name={"country"}
												value={currentUser.country || "Australia"}
												handleChange={e => handleChange(e)}
							/>
						</div>

						<div className={"user-card__row"}>
							<label className={"user-card__label"}>Age:</label>
							<TextInput name={"age"}
												value={currentUser.age || ""}
												handleChange={e => handleAgeChange(e)}
							/>
							{ageError &&
								<p className={"user-card__error"}>
									please enter digits only
								</p>
							}
						</div>

						{/*TODO MORE INPUTS*/}
						<div className={"user-card__button-wrap"}>
							<Button
									variant="contained"
									color="primary"
									size="large"
									startIcon={<SaveIcon/>}
									onClick={() => saveProfile()}
							>
								Save
							</Button>
							<Button
									variant="contained"
									color="primary"
									size="large"
									startIcon={<ExitToAppIcon/>}
									onClick={() => saveProfileAndReturn()}
							>
								Save & return
							</Button>
						</div>
					</form>
				</Container>
			)}
			</UserContextConsumer>
	)
}

export default UserCard
