import React from "react";

class Child extends React.Component{
constructor(props){
    super(props);
    this.state={ parentdata :this.props.parenttochild}
}
 render()
 {

    return(
        <React.Fragment>
            <h4>Welcome to Child</h4>
            <p>Name: { this.state.parentdata.name}</p>
            <p>Email: {this.state.parentdata.email}</p>
        </React.Fragment>
    );
 }


}

export default Child;