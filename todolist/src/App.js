import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import About from './components/pages/About';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import {v4 as uuid} from 'uuid';
import axios from 'axios';


import './App.css';

class App extends Component {
  state = {
      todos : []
  }

  componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => this.setState({todos:res.data}))

  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  delTodo = (id) =>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo =>todo.id !== id)]}))
  }

  addTodo = (title) =>{
    // const newTodo = {
    //   id: uuid() ,
    //   title: title,
    //   completed: false
    // }
    axios.post("https://jsonplaceholder.typicode.com/todos", {title,completed:false})
      .then(res => this.setState({todos: [...this.state.todos, res.data]}))
  }

  render() { 
    return (
      <Router>
        <div className="App">
            <div className = "container">
            <Header />
            <Route exact path = "/" render={props => (
              <React.Fragment>
                <AddTodo addTodo = {this.addTodo} />
                <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
              </React.Fragment>

            )}/>

            <Route exact path="/about" component={About}/>
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
