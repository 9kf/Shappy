import React from 'react'

interface RatingProps {
  value: number
  text: string
  color?: string
}

const Rating: React.FC<RatingProps> = ({
  value,
  text,
  color = '#f8e825',
}: RatingProps) => {
  const starValue: any = (starNum: number) => {
    return value >= starNum
      ? 'fas fa-star'
      : value >= starNum - 0.5
      ? 'fas fa-star-half-alt'
      : 'far fa-star'
  }

  return (
    <div className='rating'>
      <span>
        <i style={{ color }} className={starValue(1)}></i>
      </span>
      <span>
        <i style={{ color }} className={starValue(2)}></i>
      </span>
      <span>
        <i style={{ color }} className={starValue(3)}></i>
      </span>
      <span>
        <i style={{ color }} className={starValue(4)}></i>
      </span>
      <span>
        <i style={{ color }} className={starValue(5)}></i>
      </span>

      <div>{text && text}</div>
    </div>
  )
}

export default Rating
