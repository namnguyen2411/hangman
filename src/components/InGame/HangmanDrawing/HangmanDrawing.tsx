import heartbeat from "/assets/audios/heartbeat.mp3"

interface Props {
  wrongLetters: number
  lose: boolean
}

export default function HangmanDrawing({ wrongLetters, lose }: Props) {
  return (
    <section className='container pt-16'>
      {wrongLetters > 4 && <audio src={heartbeat} autoPlay loop muted={lose ? true : false} />}

      <div
        className={`relative grid h-[400px] place-items-center transition-opacity duration-0 ${
          wrongLetters > 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* bottom bar */}
        <div
          className={`absolute bottom-0 h-[15px] origin-left bg-gray-500 transition-all delay-100 duration-500 ${
            wrongLetters >= 1 ? "w-[300px]" : "w-0"
          }`}
        />
        {/* middle bar */}
        <div
          className={`absolute bottom-0 w-[15px] origin-bottom bg-gray-500 transition-all duration-500 ${
            wrongLetters >= 2 ? "h-[400px]" : "h-0"
          }`}
        />
        {/* top bar */}
        <div
          className={`absolute left-1/2 top-0 h-[15px] bg-gray-500 transition-all duration-500 ${
            wrongLetters >= 3 ? "w-[160px]" : "w-0"
          }`}
        />

        {/* head */}
        <div
          className={`${
            wrongLetters >= 4 ? "opacity-100 delay-500" : "opacity-0"
          } absolute left-1/2 top-[100px] aspect-square w-14 ${
            lose ? "translate-x-[138px] translate-y-[14px]" : "translate-x-[119px]"
          } rounded-full bg-white transition-all duration-[1000ms]`}
        />

        {/* body */}
        <div
          className={`absolute left-1/2 top-[165px] z-10 h-[100px] w-[50px] translate-x-[120px] rounded-t-xl bg-white transition-all duration-500 ${
            wrongLetters >= 5 ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className={`float-right mr-2 mt-2 ${lose && "animation-paused"} animate-scale`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              style={{ fill: "#ef4444" }}
            >
              <path d='M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z'></path>
            </svg>
          </span>
        </div>

        {/* left arm */}
        <div
          className={`${
            wrongLetters >= 6 ? "opacity-100" : "opacity-0"
          } curve-reflex absolute left-1/2 top-[164px] origin-top-right translate-x-[75px] transition-all duration-500 ${
            lose ? "rotate-[-15deg]" : "rotate-0"
          }`}
        />

        {/* right arm */}
        <div
          className={`${
            wrongLetters >= 7 ? "opacity-100" : "opacity-0"
          } curve absolute left-1/2 top-[165px] origin-top-left translate-x-[150px] transition-all duration-500 ${
            lose ? "rotate-[15deg]" : "rotate-0"
          }`}
        />

        {/* left leg */}
        <div
          className={`${
            wrongLetters >= 8 ? "opacity-100" : "opacity-0"
          } absolute left-1/2 top-[260px] h-[90px] w-[20px] origin-top-right translate-x-[120px] ${
            lose ? "rotate-0" : "rotate-[30deg]"
          } rounded-b-xl bg-white transition-all duration-500`}
        />

        {/* right leg */}
        <div
          className={`${
            wrongLetters >= 9 ? "opacity-100" : "opacity-0"
          } absolute left-1/2 top-[260px] h-[90px] w-[20px] origin-top-left translate-x-[150px] ${
            lose ? "rotate-0" : "rotate-[-30deg]"
          } rounded-b-xl bg-white transition-all duration-500`}
        />

        {/* the rop */}
        <div
          className={`${
            wrongLetters >= 10 ? "h-[155px]" : "h-0"
          } absolute left-1/2 top-[15px] w-[10px] translate-x-[132px] bg-gray-500 transition-all duration-500`}
        >
          <div
            className={`${
              wrongLetters >= 10 ? "w-14" : "w-0"
            } absolute bottom-0 left-0 h-3 -translate-x-3 rounded-l-full rounded-r-full bg-gray-500 transition-all duration-500`}
          ></div>
        </div>
      </div>
    </section>
  )
}
