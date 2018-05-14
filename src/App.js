import React, { Component } from "react"

// import logo from "./logo.svg"
import "./App.css"

import Title from "./containers/title/Title"
import RoomsGrid from "./containers/rooms-grid/RoomsGrid"

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <Title text="Fortrooms" />
                </header>

                <br />

                <RoomsGrid rooms={[]} />
            </div>
        )
    }
}

export default App
