import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreetingsThunk } from "../../redux/slices/greetingSlice";

const Greeting = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGreetingsThunk());
  }, [])

  const greetings = useSelector((state) => state.greetings.greetings);
  const { greeting } = greetings;

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  )
};

export default Greeting;
