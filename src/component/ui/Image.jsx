import React from 'react'

function Image({imgUrl ,alt , className}) {
  return (
 <img src={imgUrl} alt={alt} className={className} />
  )
}

export default Image