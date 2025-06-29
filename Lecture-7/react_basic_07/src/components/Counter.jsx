import React from "react";

export default class Counter extends React.Component{

    componentDidUpdate(prevProp,PrevState){
        if(this.props.count !==  prevProp.count){
            console.log("Hi I am updating");
        }
    }

    render(){
        return(
            <div>
            <h1> Hello- {this.props.count} </h1>
            </div>
        )
    }
}