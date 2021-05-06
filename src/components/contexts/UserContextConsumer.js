// import {useContext, useEffect, useState} from "react"
import UserContext, {UserContextConsumer} from "./UserContext"

const WithContext = (Component) => {
	return(props) => (
		<UserContextConsumer>
			{value =>
				<Component {...props} value={value}/>
			}
		</UserContextConsumer>
	)
}

export default WithContext
