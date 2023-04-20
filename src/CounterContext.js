// ReactContextAPI: https://react.dev/learn/passing-data-deeply-with-context
// React のコンテキストは、アプリケーションの一種のグローバルな state であり、任意のコンポーネントから直接アクセスできる

import { createContext, useReducer, useContext } from 'react'

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

const CounterContext = createContext()

// index.js で <App /> の親として定義することで、
// すべてのコンポーネントで CounterContext が使用できるようになる。(useContext()で呼び出したり、ヘルパー関数使ったり)
// Context = コンテキスト = グローバルなstate という認識でOK。
export const CounterContextProvider = (props) => {
  const [counter, counterDispatch] = useReducer(counterReducer, 0)

  return (
    <CounterContext.Provider value={[counter, counterDispatch]}>
      {props.children}
    </CounterContext.Provider>
  )
}

// ヘルパー関数
// 各コンポーネントでuseContextってやると必ず state と dispatch どっちも定義する必要があるので、
// これらの関数で片方だけ値を取れるようにする。
// また、この関数はカスタムフック(useで始まる関数)として定義しており、
// reactフック関数(useContext等)は、コンポーネント内かカスタムフック内でしか使用できないことに注意。
export const useCounterValue = () => {
  const counterAndDispatch = useContext(CounterContext)
  return counterAndDispatch[0]
}

export const useCounterDispatch = () => {
  const counterAndDispatch = useContext(CounterContext)
  return counterAndDispatch[1]
}

export default CounterContext
