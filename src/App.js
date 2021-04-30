import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {UserContextProvider} from "./components/contexts/UserContext"
import UserList from "./components/UserList/UserList"
import UserCard from "./components/UserCard/UserCard"

const App = () => {
	return (
		<UserContextProvider>
			<Router>
				<Switch>
					<Route exact path="/">
						<UserList/>
					</Route>
					<Route path="/:userID">
						<UserCard/>
					</Route>
				</Switch>
			</Router>
		</UserContextProvider>
	)
}

export default App
