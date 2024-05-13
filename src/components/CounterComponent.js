import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/slices/counterSlice";
import "./CounterComponent.css";
function CounterComponent() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div class="contain">
      <h2>Counter</h2>
      <div>
        <button class="button1" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span class="angka">{count}</span>
        <button class="button2" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <div>
        <input type="number" onChange={(e) => dispatch(incrementByAmount(parseInt(e.target.value) || 0))} placeholder="Enter value" />
        <button class="button3" onClick={() => dispatch(incrementByAmount(5))}>
          Add 5
        </button>
      </div>
    </div>
  );
}
export default CounterComponent;
