import React from 'react'

const LazyLoadPost = ({title,img}) => {
  return (
    <div className='card'>
        <div className="card-header">
            {!title ? (
                <h2>Post title</h2>
            ):(
                <h2>{title}</h2>
            )}
        </div>

    </div>
  )
}

export default LazyLoadPost