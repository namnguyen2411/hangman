import speaker from "/assets/images/speaker.png"

type Props = {
  topicName: string
  wonCounter: number
  hiddenWordList: string[]
  playAudio: () => void
  showHint: boolean
  win: boolean
}

export default function Toolbar({ topicName, wonCounter, hiddenWordList, playAudio, showHint, win }: Props) {
  return (
    <section className='absolute left-[10%] right-[10%] top-[5%] flex items-start justify-between text-white z-20'>
      <div>
        <p>
          Topic:
          <span className='text-green500'> {topicName}</span>
        </p>
        <p className='min-w-[146px] mt-4'>
          Correct:{" "}
          <span className='text-green500'>
            {wonCounter}/{hiddenWordList.length}
          </span>
        </p>
      </div>
      <div className='-mr-2'>
        <div className='flex items-center gap-4'>
          <p>Hint:</p>
          <img
            src={speaker}
            className={`aspect-square w-10 cursor-pointer ${showHint ? "animate-fast-pulse" : ""}`}
            style={{
              opacity: showHint || win ? 1 : 0.4,
              pointerEvents: showHint || win ? "auto" : "none"
            }}
            onClick={playAudio}
          />
        </div>
      </div>
    </section>
  )
}
