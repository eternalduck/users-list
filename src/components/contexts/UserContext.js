import {createContext, useEffect, useState} from "react"

const UserContext = createContext([])

export const UserContextProvider = ({children}) => {
	const [users, setUsers] = useState(undefined)
	const [usersBackup, setUsersBackup] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	// Fetch users:
	useEffect(() => {
		// Get initial users list:
		const fetchUsers = async () => {
			setIsLoading(true)
			await fetch("/data/people.json")
				.then(res => res.json())
				.then(data => setUsers(data))
				// .then(setUsersBackup([...users]))
				.then(() => setIsLoading(false))
				.catch((e) => console.error("aaa fetch failed!"))
		}


		// Call fetch or get users from localStorage (in case of page refresh)
		const getUsers = () => {
			let storage = localStorage.getItem("usersList")
			if (storage === null || storage === "undefined") {
				fetchUsers()
			} else {
				let parsed = JSON.parse(storage)
				setUsers(parsed)
			}
		}
		getUsers()

	}, [])

	useEffect(() => {
	// Update storage on users change:
		const saveToStorage = () => {
			localStorage.setItem("usersList", JSON.stringify(users))
		}
		saveToStorage()

		// Save users copy:
		// if(users){
		// 	setUsersBackup([...users])
		// }
// OR
		// const saveUsers = async () => {
		// 	await fetchUsers()
		// 	console.info(users)
		// 	setUsersBackup([...users])
		// }
		// saveUsers()
	}, [users])

	return (
		<UserContext.Provider value={{users, setUsers, usersBackup, isLoading, setIsLoading}}>
			{{...children}}
		</UserContext.Provider>
	)
}

export const UserContextConsumer = UserContext.Consumer

export default UserContext
