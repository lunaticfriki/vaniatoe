export type Player = 'X' | 'O' | null | 'BOTH'

interface SquareProps {
  winner: Player
  value: Player
  onClick: () => void
}

const Square = ({ value, onClick, winner }: SquareProps) => {
  if (!value)
    return (
      <button className="square" onClick={onClick} disabled={Boolean(winner)} />
    )

  return (
    <button className={`square square_${value.toLowerCase()}`} disabled>
      {value}
    </button>
  )
}

export default Square
