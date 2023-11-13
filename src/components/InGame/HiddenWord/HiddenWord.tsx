interface Props {
  hiddenWord: string
  guessedLetters: string[]
  lose: boolean
}

export default function HiddenWord({ hiddenWord, guessedLetters, lose }: Props) {
  return (
    <section className='container mt-12'>
      <div className='item-center flex justify-center gap-3 uppercase'>
        {hiddenWord.split("").map((letter: string, index: number) => {
          if (letter === " ")
            return (
              <span key={index} className='aspect-square h-[60px]'>
                {letter}
              </span>
            )
          return (
            <span
              key={index}
              className={`z-20 grid aspect-square h-[60px] select-none place-items-center border-[3px] border-gray-400 ${
                guessedLetters.includes(letter) ? "animate-spring" : ""
              }`}
            >
              {(guessedLetters.includes(letter) || lose) && (
                <p
                  className={`pointer-events-none text-3xl font-semibold uppercase text-green500 ${
                    !guessedLetters.includes(letter) && "text-red500"
                  }`}
                >
                  {letter}
                </p>
              )}
            </span>
          )
        })}
      </div>
    </section>
  )
}
