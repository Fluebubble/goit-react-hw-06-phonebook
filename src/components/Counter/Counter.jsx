import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'redux/store';

export const Counter = () => {
  const value = useSelector(state => state.myValue);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <>
      <p>Counter: {value}</p>
      <button type="button" onClick={() => dispatch(increment(100))}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch(decrement(100))}>
        Decrement
      </button>
    </>
  );
};
