import { useState, useEffect } from "react"
import { Topic } from "src/types/topic.type"
import { randomWord, removeSpace } from "src/utils"
import Toolbar from "./Toolbar"
import HangmanDrawing from "./HangmanDrawing"
import HiddenWord from "./HiddenWord"
import Keyboard from "./Keyboard"
import Popup from "./Popup"
import { correct_sound, heartbeat_flatline } from "src/assets/audios"

type Props = {
  hiddenWord: string
  selectedTopic: Topic
  setInGameScreen: (param: boolean) => void
}

export default function InGame({ hiddenWord, selectedTopic, setInGameScreen }: Props) {
  const [wonCounter, setWonCounter] = useState(0)
  const [hiddenWordList, setHiddenWordList] = useState<string[]>([hiddenWord])

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const wrongLetters: string[] = guessedLetters.filter((letter) => !hiddenWordRemovedSpace.includes(letter))

  // get the latest word from hiddenWordList array
  const theLatestWord = hiddenWordList[hiddenWordList.length - 1].toLowerCase()
  const hiddenWordRemovedSpace = removeSpace(theLatestWord)

  const lose: boolean = wrongLetters.length === 10
  const win: boolean = hiddenWordRemovedSpace.split("").every((letter) => guessedLetters.includes(letter))
  const outOfWord: boolean = hiddenWordList.length >= selectedTopic.words.length

  const showHint: boolean = wrongLetters.length >= 7
  // hint - click the hint button to pronounce the hidden word
  const handlePlayAudio = (): void => {
    const audio = new SpeechSynthesisUtterance()
    audio.text = theLatestWord
    window.speechSynthesis.speak(audio)
  }

  // click the key
  const handleClick = (key: string): void => {
    if (guessedLetters.includes(key)) return
    if (theLatestWord.includes(key)) {
      const audio = new Audio(correct_sound)
      audio.play()
    }
    setGuessedLetters((pre) => [...pre, key])
  }

  // click continue button
  const handleContinue = () => {
    const newWordList: string[] = selectedTopic.words.filter((word) => !hiddenWordList.includes(word))
    const newHiddenWord = randomWord(newWordList)
    setHiddenWordList((pre) => [...pre, newHiddenWord])
    setGuessedLetters([])
  }

  // click change topic button
  const handleChangeTopic = () => {
    setInGameScreen(false)
  }

  useEffect(() => {
    if (win) setWonCounter((pre) => pre + 1)
    // play the sound when user lost
    if (lose) {
      const heartbearFlatline = new Audio(heartbeat_flatline)
      heartbearFlatline.volume = 0.02
      heartbearFlatline.play()
    }
  }, [win, lose])

  return (
    <div className='relative animate-bg-white-to-black min-h-screen'>
      {(win || lose) && (
        <Popup
          win={win}
          lose={lose}
          outOfWord={outOfWord}
          handleContinue={handleContinue}
          handleChangeTopic={handleChangeTopic}
        />
      )}

      <Toolbar
        topicName={selectedTopic.name}
        hiddenWordList={hiddenWordList}
        wonCounter={wonCounter}
        playAudio={handlePlayAudio}
        showHint={showHint}
        win={win}
      />
      <HangmanDrawing wrongLetters={wrongLetters.length} lose={lose} />
      <HiddenWord hiddenWord={theLatestWord} guessedLetters={guessedLetters} lose={lose} />
      <Keyboard handleClick={handleClick} guessedLetters={guessedLetters} lose={lose} win={win} />
    </div>
  )
}
