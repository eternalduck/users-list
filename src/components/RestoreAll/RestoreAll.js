import {useContext, useEffect, useState} from "react"
import UserContext, {UserContextConsumer} from "../contexts/UserContext"
import Button from "@material-ui/core/Button"

const RestoreAll = props => {
	const {users, setUsers, usersBackup} = useContext(UserContext)
	// const [fullListCopy, setFullListCopy] = useState([...users])

	// Restore all users when the list gets empty:
	const restoreAllUsers = () => {
		setUsers(usersBackup)
	}

	useEffect(() => {
		// console.info("users:")
		// console.info(users)
		console.info("usersBackup:")
		console.info(usersBackup)
	}, [usersBackup])


	return (
		<UserContextConsumer>
		{value => (
			<Button variant="outlined"
				onClick={() => restoreAllUsers()}
			>

				Restore all (failed)
			</Button>
		)}
		</UserContextConsumer>
	)
}

export default RestoreAll
