import { useCounterDispatch } from "../CounterContext"

const Button = ({ type, label }) => {
  // どのコンポーネントからでも counter の state と dispatch関数を呼び出せる。
  const dispatch = useCounterDispatch()
  return (
    <button onClick={() => dispatch({ type })}>
      {label}
    </button>
  )
}

export default Button
