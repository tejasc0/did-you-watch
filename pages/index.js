import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { BsFillEmojiSmileFill, BsFillEmojiLaughingFill } from 'react-icons/bs'
import { useState } from 'react'

export default function Home() {
  const [vWatched, setVWatched] = useState(false)

  const handleEnd = () => {
    setVWatched(true)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {vWatched === false ? <div className="flex flex-1 w-max mx-auto my-12"><div className="text-sky-900 text-lg">Watch Stranger Things S4 trailer until the end</div><div className="my-auto text-sky-900 ml-2"><BsFillEmojiSmileFill size={30} /></div></div>
        :
        <div className="flex flex-1 w-max mx-auto my-12"><div className="text-sky-900 text-lg">Yay! you did it!</div><div className="my-auto text-sky-900 ml-2"><BsFillEmojiLaughingFill size={30} /></div></div>}
      <video className="mx-auto mb-14" src="/st4t.mp4" onEnded={handleEnd} poster="/sts4th.jpg" controls></video>
    </>
  )
}
