
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/slices/counterSlice";
import { RootState } from "../redux/store";



const Counter = () => {
  
    const dispatch = useDispatch();

     const counter = useSelector((state:RootState)=> state.counter.value)
  return (
    <div className="flex flex-col items-center">
          <h1 className='text-red-500 text-2xl font-semibold'>I am counter App</h1>

<h1 className='text-3xl font-bold'>{counter}</h1>

<div className='flex items-center gap-x-2'>
    <button onClick={()=>dispatch(increment())} className='text-white bg-green-500 rounded-md px-4 py-2'>Increment</button>
    <button onClick={()=>dispatch(decrement())}  className='text-white bg-red-500 rounded-md px-4 py-2'>Decrement</button>
    <button onClick={()=>dispatch(incrementByAmount(4))}  className='text-white bg-sky-500 rounded-md px-4 py-2'>PayloadValue</button>
</div>

    </div>
  )
}

export default Counter