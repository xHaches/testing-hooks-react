import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({author, quote}: {author: string, quote: string}) => {

  const pRef = useRef<HTMLParagraphElement>(null);
  const [boxSize, setBoxSize] = useState({width: 0, height: 0});

  useLayoutEffect(() => {
    const {width, height} = pRef.current?.getBoundingClientRect()!; 
    setBoxSize({ width, height })
  }, [])

  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{display: 'flex'}}
      >
          <p ref={pRef} className="mb-1">{ author }</p>
          <footer className="blockquote-footer">{quote}</footer>
      </blockquote>
      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}
