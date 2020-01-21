import React from "react"
import Box from "./box"
import TopBar from './topBar'

class ChoseItemIndex extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return(
            <div>
                <TopBar />
                <Box/>
            </div>
        )
    }
}

export default ChoseItemIndex