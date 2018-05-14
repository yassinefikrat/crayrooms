import React, { PureComponent } from "react"

import {
	Navbar,
	NavbarGroup,
	NavbarHeading,
	NavbarDivider,
	Alignment,
	Button
} from "@blueprintjs/core"

class Title extends PureComponent {
	render() {
		return (
			<Navbar className="pt-dark">
				<NavbarGroup align={Alignment.LEFT}>
					<NavbarHeading>
						<b>{this.props.text}</b>
					</NavbarHeading>
				</NavbarGroup>
				<NavbarGroup align={Alignment.RIGHT}>
					<NavbarDivider />
					<Button icon="settings" text="Settings" />
				</NavbarGroup>
			</Navbar>
		)
	}
}

export default Title
