/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos = [];
  }
  add(todo){
    this.todos.push(todo);
  }
  remove(ind){
    if(ind>=0 && ind<this.todos.length)
      this.todos.splice(ind, 1);
  }
  update(ind, updatedTodo){
    if(ind>=0 && ind<this.todos.length)
      this.todos[ind] = updatedTodo;
  }
  getAll(){
    return this.todos;
  }
  get(ind){
    if(ind>=0 && ind<this.todos.length)
      return this.todos[ind];
    else  
      return null;
  }
  clear(){
    this.todos = [];
  }
}
//****** Test *****
// let mytodos = new Todo();
// mytodos.add("lunch");
// mytodos.add("burn");
// console.log(mytodos.getAll());
// mytodos.remove(1);
// console.log(mytodos.getAll());
// mytodos.update(0, "sleep")
// console.log(mytodos.getAll());
module.exports = Todo;
