import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
      <div>
        <Todo title='first'/>
        <Todo title='second'/>
        <Todo title='third'/>
        <Todo title='fourth'/>
        <Todo title='fifth'/>
        <Backdrop/>
        <Modal/>
      </div>
  );
 
}

export default App;
