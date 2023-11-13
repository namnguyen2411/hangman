import { useState } from "react"
import Home from "components/Home"
import Menu from "components/Menu"

export default function App() {
  const [gameStarted, setGameStarted] = useState(false)

  return <>{gameStarted ? <Menu /> : <Home setGameStarted={setGameStarted} />}</>
}
