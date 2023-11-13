import Button from "components/Button"

interface Props {
  win: boolean
  lose: boolean
  outOfWord: boolean
  handleContinue: () => void
  handleChangeTopic: () => void
}

export default (function Modal({ win, lose, outOfWord, handleContinue, handleChangeTopic }: Props) {
  return (
    <div className='absolute inset-0 z-20 origin-center animate-opacity-bg backdrop-blur-[2px]'>
      <div className='absolute left-1/2 top-[10%] z-10 grid h-72 w-[600px] -translate-x-1/2 place-items-center'>
        <h1 className='glowing select-none uppercase text-white/70'>
          {(win && "you are alive") || (lose && "you died")}
        </h1>
        {outOfWord && (
          <p className='text-center text-white'>
            You have went through all the word from this topic, we&apos;ll update new words soon, please change to other
            topic. <br />
            THANK YOU!!
          </p>
        )}
        <div className='item-center mt-2 flex gap-14 font-semibold text-white'>
          {!outOfWord && (
            <Button
              name={"continue"}
              className='hover:glowing border-4 border-white px-4 py-2 shadow-inner hover:shadow-current uppercase'
              onClick={handleContinue}
            />
          )}
          <Button
            name={"change topic"}
            className='hover:glowing border-4 border-white px-4 py-2 shadow-inner hover:shadow-current uppercase'
            onClick={handleChangeTopic}
          />
        </div>
      </div>
    </div>
  )
})
