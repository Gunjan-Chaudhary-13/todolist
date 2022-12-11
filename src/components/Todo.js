function Todo (props)
{
    function deletefunction()
    {

    }
    return (
        <div id="todo">
          <div id="todo_text">
          <h1 >{props.title}</h1>
          <h1>This is the todo content .... </h1>
          <br/>
          <button onClick={deletefunction}>Delete</button>
          </div> 
        </div>
    );
}

export default Todo ;
