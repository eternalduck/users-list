import {createContext, useEffect, useState} from "react"

const UserContext = createContext([])

export const UserContextProvider = ({children}) => {
	const [users, setUsers] = useState(undefined)
	const [isLoading, setIsLoading] = useState(false)

	// Fetch users
	useEffect(() => {
		const fetchUsers = async () => {
			setIsLoading(true)
			try {
				await fetch("/data/people.json")
					.then(res => res.json())
					.then(data => setUsers(data))
					.then(() => setIsLoading(false))
			} catch (e) {
				console.error("aaa fetch failed!")
			}
		}
		// Call fetch or get users from localStorage (in case of page refresh, failed to implement as appropriate..)
		// let storage = localStorage.getItem("usersList")
		// if (storage === null || storage === "undefined") {
			fetchUsers()
		// } else {
		// 	let parsed = JSON.parse(storage)
		// 	setUsers(parsed)
		// }
	}, [])

	// Update storage on users change
	// useEffect(() => {
	// 	localStorage.setItem("usersList", JSON.stringify(users))
	// }, [users])

	return (
		<UserContext.Provider value={{users, setUsers, isLoading, setIsLoading}}>
			{{...children}}
		</UserContext.Provider>
	)
}

export const UserContextConsumer = UserContext.Consumer

export default UserContext
