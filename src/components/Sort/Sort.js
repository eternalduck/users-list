import {useContext, useState} from "react"
import UserContext from "../contexts/UserContext"
import Button from "@material-ui/core/Button"
import "./Sort.scss"

const Sort = props => {
	const {users, setUsers} = useContext(UserContext)

	// User list sorting
	const [isUsersSorted, setIsUsersSorted] = useState(false)

	const sortUsers = (() => {
		return {
			sortList: function () {
				const sortedList = users.sort((a, b) => (a.name > b.name ? 1 : -1))
				setUsers([...sortedList])
				setIsUsersSorted(true)
			},
			unsortList: function () {
				const unsortedList = users.sort((a, b) => (a.id > b.id ? 1 : -1))
				setUsers([...unsortedList])
				setIsUsersSorted(false)
			}
		}
	})()//end sorting


	return (
		<div className={"sort"}>
			<Button variant="outlined"
				onClick={() =>
						isUsersSorted ? sortUsers.unsortList() : sortUsers.sortList()
				}
			>
				{isUsersSorted ? "Sort by ID" : "Sort by name"}
			</Button>
		</div>
	)
}

export default Sort