import {useContext, useEffect, useState} from "react"
import UserContext, {UserContextConsumer} from "../contexts/UserContext"
import Container from "@material-ui/core/Container"
import UserItem from "../UserItem/UserItem"
import Sort from "../Sort/Sort"
import "./UserList.scss"

const UserList = () => {
	const {users, setUsers} = useContext(UserContext)
	const {isLoading, setIsLoading} = useContext(UserContext)

	// Delete entry:
	const deleteUser = (thisid) => {
		console.info(`id ${thisid} deleted`)
		setUsers(users => users.filter(u => u.id !== thisid))
	}

	return (
		<UserContextConsumer>
			{value => (
				<Container className={"user-list"}>
					{!isLoading ?
						<>
							<Sort/>
							{value.users && value.users.map(u =>
									<UserItem key={u.id}
														user={u}
														del={() => deleteUser(u.id)}
									/>
							)
							}
						</>
						: "still loading"
					}
				</Container>
			)}
		</UserContextConsumer>
	)
}

export default UserList
