import { useReducer } from "react";

// reduxのreducerと同じ感じに定義する
// action.payload に任意のデータを含めることが可能
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1
    case "DEC":
      return state - 1
    case "ZERO":
      return 0
    default:
        return state
  }
}

const App = () => {
  // useReducerには、状態変更処理のreducerと、状態の初期値を定義する。
  // 現在の状態を参照できる変数とdispatch関数を返す。
  const [counter, counterDispatch] = useReducer(counterReducer, 0)

  return (
    <>
      <div>{counter}</div>
      <div>
        <button onClick={() => counterDispatch({ type: "INC" })}>+</button>
        <button onClick={() => counterDispatch({ type: "DEC" })}>-</button>
        <button onClick={() => counterDispatch({ type: "ZERO" })}>0</button>
      </div>
    </>
  )
}

export default App
