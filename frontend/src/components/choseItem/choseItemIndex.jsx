import React from "react"
import Box from "./box"
import TopBarContainer from './topBar_container'
import BoxContainer from './box_container'

class ChoseItemIndex extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return(
            <div>
                <TopBarContainer />
                <BoxContainer/>
            </div>
        )
    }
}

export default ChoseItemIndex