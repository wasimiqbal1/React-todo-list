import React, {Component} from "react";
import './App.css';

  
class App extends Component { 
 
    constructor(){
        super()
        this.state = {
            todos: [{title: "Office" , edit: false }, {title:"Lunch", edit: false}],
            value:'',
            edit_value:''
            }

        }
        add_todo = () => {
            let obj = {title:this.state.value}
            this.setState({
                todos: [...this.state.todos,obj],
                value:''
            })
        }
        
        delete_todo = (index) => {
            this.state.todos.splice(index,1)
            this.setState({
                todos: this.state.todos
            })
        }

        edit_todo = (index, val) =>{
            // var updated_value = prompt("Enter Value");
            this.state.todos.[index].edit = true;
            this.setState({
                todos: this.state.todos
            })
        }

        handlechange = (e,index) => {
            this.state.todos[index].title =  e.target.value;
            this.setState({
                todos: this.state.todos
        })
    }

    update(index){
        this.state.todos[index].edit = false;
        this.setState({
            todos: this.state.todos
    })
}
    render() {
        let {todos, value} = this.state;
        return (
            <div className="todolist">
                          <div className="heading">
              <h1 className="title">To-Do List</h1>
            </div>
                <input value={value} onChange={(e) => this.setState({value: e.target.value})} type="text" placeholder="Entre Value"/>
                <button onClick={this.add_todo} type="submit">Add Item</button>

            <div className="items">
              <ul>
                  {todos.map((v,i)=>{
                      return <li key = {i} >
                    {v.edit ? <input value={v.title} type="text" onChange={(e)=>this.handlechange(e,i)}/> : v.title}
                          {v.edit ? 
                      <button onClick={()=>this.update(i)}>Update</button>:
                      <button onClick={()=>this.edit_todo(i,v.title)}>Edit</button>}
                      <button onClick={()=>this.delete_todo(i)}>Delete</button>
                      </li>
                  })}
              </ul>
              </div>
            </div>

        )
    }
}

    
export default App;
