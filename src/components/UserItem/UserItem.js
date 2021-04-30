import {Link} from "react-router-dom"
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import "./UserItem.scss"

const UserItem = props => {
	const {id, name, phone, email, country, age} = props.user

	return (
		<section className={"user-item"}>

			<div className={"user-item__info"}>
				<p className={"user-item__name"}>{name}</p>
				{phone && <p>{phone}</p>}
				{email && <p>{email}</p>}
				<p>{country}</p>
				<p>Age: {age ? age : "unknown"}</p>
			</div>

			<div className={"user-item__buttons"}>
				<Button variant="outlined"
								color="secondary"
								size="small"
								startIcon={<DeleteIcon/>}
								onClick={() => props.del(id)}
				>
					Delete
				</Button>
				<Link to={`/${id}`}>
					<Button variant="contained"
									color="primary"
									startIcon={<EditIcon/>}
					>
						Update
					</Button>
				</Link>
			</div>

		</section>
	)
}

export default UserItem
