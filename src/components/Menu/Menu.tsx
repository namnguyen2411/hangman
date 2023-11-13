import { useState } from "react"
import topics from "src/data/topics.json"
import { Topic } from "src/types/topic.type"
import { randomWord } from "src/utils"
import TopicItem from "./TopicItem"
import InGame from "../InGame"
import Button from "../Button"

export default function Menu() {
  const [selectedTopic, setSelectedTopic] = useState<Topic>(topics[0])
  const [inGameScreen, setInGameScreen] = useState(false)
  const hiddenWord: string = randomWord(selectedTopic.words)

  if (inGameScreen) {
    return (
      <>
        <InGame hiddenWord={hiddenWord} selectedTopic={selectedTopic} setInGameScreen={setInGameScreen} />
      </>
    )
  }

  return (
    <div className='container mt-8'>
      <section className='mx-auto h-[155px] w-[75%] rounded-3xl border-4 border-green500 px-6 py-4 text-center'>
        <span className='mx-auto block text-3xl capitalize text-red500'>{selectedTopic.name}</span>
        <p className='mt-5 line-clamp-2 text-black'>
          {selectedTopic.words.map((word: string, index: number) => {
            if (index === selectedTopic.words.length - 1) return word
            return word + ", "
          })}
        </p>
      </section>

      <section className='grid grid-cols-4 gap-8 p-10'>
        {topics.map((topic: Topic) => (
          <TopicItem key={topic.name} topic={topic} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
        ))}
      </section>
      <Button
        name={"Play"}
        className={"mx-auto mb-5 block rounded-xl border-4 border-red500 px-4 py-2 text-3xl text-red500"}
        onClick={() => setInGameScreen(true)}
      />
    </div>
  )
}
