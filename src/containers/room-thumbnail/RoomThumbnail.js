import React, { Component } from "react"

import { Card, Icon, Elevation } from "@blueprintjs/core"

const normalRoomColorScheme = [
	"#B3CFFF",
	"#91ACE5",
	"#6F8ACB",
	"#4B6AB2",
	"#1F4B99"
]

const normalRoomStyle = {
	background: normalRoomColorScheme[1],
	color: normalRoomColorScheme[0]
}

const spaceBetweenStyle = {
	display: "flex",
	justifyContent: "space-between"
}

const centerVerticallyStyle = {
	height: "40px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	padding: "10px 10px 10px 10px",
	background: normalRoomColorScheme[1]
}

const openSlotStyle = {
	...centerVerticallyStyle,
	background: normalRoomColorScheme[3]
}

class RoomThumbnail extends Component {
	handleJoin() {
		// join room
	}
	render() {
		return (
			<Card elevation={Elevation.FOUR} style={normalRoomStyle}>
				<h3 style={{ color: "antiquewhite" }}>{this.props.name}</h3>
				<h4 style={{ color: normalRoomColorScheme[0] }}>
					{this.props.game}
				</h4>
				{this.props.players.map(player => {
					return (
						<Card
							elevation={Elevation.TWO}
							key={player.name}
							style={centerVerticallyStyle}
						>
							<div style={spaceBetweenStyle}>
								<Icon icon="person" />
								<h6 style={{ color: normalRoomColorScheme[0] }}>
									{player.name}
								</h6>
							</div>
						</Card>
					)
				})}
				{[
					...Array(this.props.maxPlayers - this.props.players.length)
				].map((_, i) => {
					return (
						<Card
							elevation={Elevation.TWO}
							key={i}
							style={openSlotStyle}
							interactive
							onClick={this.handleJoin.bind(this)}
						>
							<div style={spaceBetweenStyle}>
								<Icon
									icon="new-person"
									style={{ color: "antiquewhite" }}
								/>
								<h6 style={{ color: "antiquewhite" }}>open</h6>
							</div>
						</Card>
					)
				})}
			</Card>
		)
	}
}

// https://stackoverflow.com/questions/30452263/is-there-a-mechanism-to-loop-x-times-in-es6-ecmascript-6-without-mutable-varia
const times = x => f => {
	if (x > 0) {
		f()
		times(x - 1)(f)
	}
}

export default RoomThumbnail
