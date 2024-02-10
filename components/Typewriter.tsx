"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export const TypeWriter = ({ words }: { words: string[] }) => {
  const [text, helper] = useTypewriter({
    words: words,
    loop: false,
    delaySpeed: 1500,
    typeSpeed: 70,
    deleteSpeed: 100,
  })
  const { isType, isDelete, isDelay, isDone } = helper
  return (
    <h1 className="lg:text-2xl dark:white typewriter-font ">
      {text}
      <Cursor cursorColor="white" />
    </h1>
  )
}
