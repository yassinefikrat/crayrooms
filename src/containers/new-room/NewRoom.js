import React, { Component } from "react"

import {
	Button,
	Card,
	Elevation,
	Alignment,
	FormGroup,
	Label
} from "@blueprintjs/core"

const createRoomColorScheme = [
	"#B1ECB5",
	"#8DCD8F",
	"#6AAE6A",
	"#469047",
	"#1D7324"
]

const createRoomStyle = {
	background: createRoomColorScheme[1]
}

class NewRoom extends Component {
	constructor() {
		super()
		this.state = {
			loading: false
		}
	}

	handleSubmit() {
		this.setState({
			loading: true
		})
		// call api
		this.setState({
			loading: false
		})
	}

	render() {
		return (
			<Card
				elevation={Elevation.FOUR}
				align={Alignment.CENTER}
				style={createRoomStyle}
			>
				<FormGroup>
					<Label
						helperText="(max: 50 characters)"
						text="Room name"
						align={Alignment.LEFT}
					>
						<div>
							<input
								style={{ background: createRoomColorScheme[0] }}
								id="text-input"
								placeholder=""
								className="pt-input pt-fill"
							/>
						</div>
					</Label>
				</FormGroup>
				<FormGroup>
					<Label helperText="" text="Game" align={Alignment.LEFT}>
						<div className="pt-select">
							<select
								defaultValue="Fortnite"
								style={{ background: createRoomColorScheme[0] }}
							>
								<option value="Fortnite">Fortnite</option>
								<option value="Other">
									Other (please specify in room name)
								</option>
							</select>
						</div>
					</Label>
				</FormGroup>
				<FormGroup>
					<Label
						helperText=""
						text="Room size"
						align={Alignment.LEFT}
					>
						<div className="pt-select">
							<select
								defaultValue="4"
								style={{ background: createRoomColorScheme[0] }}
							>
								<option value="2">2 players</option>
								<option value="3">3 players</option>
								<option value="4">4 players</option>
							</select>
						</div>
					</Label>
				</FormGroup>

				<Button
					loading={this.state.loading}
					onClick={this.handleSubmit.bind(this)}
					intent="SUCCESS"
				>
					Create
				</Button>
			</Card>
		)
	}
}

export default NewRoom
