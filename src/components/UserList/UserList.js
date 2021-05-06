import {useContext, useEffect, useState} from "react"
import UserContext, {UserContextConsumer} from "../contexts/UserContext"
// import WithContext from "../contexts/UserContextConsumer"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import UserItem from "../UserItem/UserItem"
import Sort from "../Sort/Sort"
import RestoreAll from "../RestoreAll/RestoreAll"
import "./UserList.scss"

const UserList = () => {
	const {users, setUsers, usersBackup} = useContext(UserContext)
	const {isLoading, setIsLoading} = useContext(UserContext)
	// const [fullListCopy, setFullListCopy] = useState([...users])

	// Delete entry:
	const deleteUser = (thisid, thisname) => {
		let message = `${thisname} will be deleted, continue?`
		if(window.confirm(message)) {
			setUsers(users => users.filter(u => u.id !== thisid))
		}
	}

	return (
		<UserContextConsumer>
			{value => (
				<Container className={"user-list"}>
					{!isLoading ?
						<>
							{users && users.length > 0 ?
							<>
								<Sort/>
								<div className={"user-list__wrap"}>
									{users && users.map(u =>
										<UserItem key={u.id}
															user={u}
															del={() => deleteUser(u.id, u.name)}
										/>
									)}
								</div>
							</>
							: <>
									<p>No one left here..</p>
									{/*<RestoreAll/>*/}
								</>
							}
						</>
							: <p>...still loading...</p>
					}{/*isLoading*/}
				</Container>
			)}
		</UserContextConsumer>
	)
}

export default UserList
// export default WithContext(UserList)
