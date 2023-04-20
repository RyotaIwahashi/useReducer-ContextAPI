import { useCounterValue } from "../CounterContext"

const Display = () => {
  // どのコンポーネントからでも counter の state と dispatch関数を呼び出せる。
  const counter = useCounterValue()
  return <div>{counter}</div>
}

export default Display
