import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addTodo, removeTodo, toggleTodo } from "../redux/slices/todoSlice";

const Todo = () => {
  const [description, setDescription] = useState<string>("");

  console.log(description)

  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos)


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const id = Math.floor(Math.random() * 9999) + 1000
      dispatch(addTodo({
        id: id,
        description: description,
        completed: false

      }))
      setDescription("")
    } catch (error) {
      console.log(error);

    }


  }
  return (
    <div className="flex flex-col items-center gap-y-3">
      <form onSubmit={handleSubmit} >
        <input type="text" className='oultline-none border-2 border-red-400 h-10 p-2 rounded-lg w-96'
          placeholder='Enter your todo' value={description} onChange={(e) => setDescription(e.target.value)} />
        <button className='text-white mx-2 bg-green-500 rounded-md px-4 py-2'>Create</button>
      </form>

      <div className="mt-10 w-full">
        {todos?.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-2">
            <h1 className={`${item.completed ? "line-through text-red-400" : ""}`} >{item.description}</h1>
            <input type="checkbox" className="cursor-pointer" checked={item.completed}
              onChange={(event) => {
                console.log("The input check is ", event.currentTarget.checked)
                dispatch(toggleTodo({
                  id: item.id,
                  isCompleted:event.currentTarget.checked
                }))
              }

              }
            />
            <button onClick={()=>dispatch(removeTodo(item.id))} className="text-white mx-2 bg-red-500 rounded-md px-4 py-2">del</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todo