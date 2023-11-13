import Button from "../Button"
import { hangman, hangman_left, hangman_right } from "../../assets/images"

type Props = {
  setGameStarted: (param: boolean) => void
}

export default function Home({ setGameStarted }: Props) {
  return (
    <section className='h-screen overflow-hidden bg-white pt-[10%]'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <img src={hangman_left} className='animate-opacity-bg' />
          <div className='h-[163px] w-[670px]'>
            <img src={hangman} alt='hangman' className='w-full animate-opacity-bg object-cover' />
          </div>
          <img src={hangman_right} className='animate-opacity-bg' />
        </div>
        <Button
          name={"Start"}
          className={"hover:glowing mx-auto mt-20 block text-6xl text-red-500"}
          onClick={() => setGameStarted(true)}
        />
      </div>
    </section>
  )
}
