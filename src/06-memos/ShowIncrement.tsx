export const ShowIncrement = ({increment}: {increment: (value: number) => void}) => {
  return (
    <button
        className="btn btn-primary"
        onClick={() => {
            increment(5)
        }}
    >Incrementar</button>
  )
}
