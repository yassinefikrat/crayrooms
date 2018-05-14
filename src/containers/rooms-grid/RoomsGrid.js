import React, { Component } from "react"

import StackGrid from "react-stack-grid"

import NewRoom from "../new-room/NewRoom"
import RoomThumbnail from "../room-thumbnail/RoomThumbnail"

class RoomsGrid extends Component {
	constructor(props) {
		super(props)
		this.state = {
			rooms: props.rooms || []
		}
	}
	render() {
		return (
			<StackGrid columnWidth={300} gutterWidth={20} gutterHeight={20}>
				{this.state.rooms.map(room => (
					<p key={room.name}>{room.name}</p>
				))}
				<RoomThumbnail
					name="Ma petite room perso !"
					maxPlayers={4}
					players={[{ name: "guyone" }, { name: "dudetwo" }]}
					game="Fortnite"
				/>
				<RoomThumbnail
					name="Ma petite room perso !"
					maxPlayers={4}
					players={[{ name: "guyone" }, { name: "dudetwo" }]}
					game="Fortnite"
				/>
				<RoomThumbnail
					name="Ma petite room perso !"
					maxPlayers={4}
					players={[{ name: "guyone" }, { name: "dudetwo" }]}
					game="Fortnite"
				/>
				<RoomThumbnail
					name="Ma petite room perso !"
					maxPlayers={4}
					players={[{ name: "guyone" }, { name: "dudetwo" }]}
					game="Fortnite"
				/>
				<NewRoom />
			</StackGrid>
		)
	}
}

export default RoomsGrid
