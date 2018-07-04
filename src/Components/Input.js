import React, { Component } from 'react';
import '../App.css';
import FlipMove from 'react-flip-move';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Input extends Component{
  state = {
    todos: [],
  };
  /* Add a todo when enter is pressed*/
  addItem = (e) =>{
    if(e.which === 13){
      let value  = document.getElementById('inputtodo').value;
      // make a temp array of available todos
      let array = this.state.todos;
      // array.unshift(value);  //unshift() pushes an element to top of array unlike push() which pushes at the end
      array.push(value);
      this.setState({
        todos: array,
      });
      document.getElementById('inputtodo').value = "";
    }
  }

  /* To delete todo*/
  deleteItem = (e) =>{
    e.stopPropagation();
    // e.target.parentElement => span
    // (e.target.parentElement).parentElement => div
    // (e.target.parentElement).parentElement.textContent => textcontent inside the div
    let text = (e.target.parentElement).parentElement.textContent;
    // make a temp array of available todos
    let array = this.state.todos;
    // find the index of todo to delete
    let index = array.indexOf(text);
    if (index > -1) {
      array.splice(index, 1);
    }
    // reset the state with new array
    this.setState({
      todos: array
    });
  }

  /* To have strikeThrough effect: currently not active due to some issues*/
  handleList = (id, e) => {
    // e.stopPropagation();
    // let ele = document.getElementById(id);
    // ele.classList.toggle('strike');

    console.log(id);
  }

  render(){
    console.log("To-Do List: " + this.state.todos);
    return(
      <div className="inputDiv">
        <input type="text" id="inputtodo"  placeholder="new todos..." onKeyPress={this.addItem} />

        <FlipMove duration={450} easing="ease-out" style={{ color: 'red' }}>
          {this.state.todos.map((todo,key) =>{
            return (<div
                    key = {key}
                    id = {key}
                    className="lists"
                    onClick={this.handleList.bind(this, key)}
                    >
                      <span onClick={this.deleteItem}>
                        <i className="fa fa-times"></i>
                      </span>
                      {todo}
                    </div>
                  );
          })}
        </FlipMove>
      </div>
    );
  }
}

export default Input

/*
render method is called each time state is updated using setState method
*/
