import React from 'react'

export const Elements = (props) => {
    return (
        <>
            <div className='container2'>
            <img src={props.link} alt="Poster"></img>
            <p className='desc'>{props.title}</p>
            <p className='desc'>{props.source}</p>
            <button > <a href={props.go} target='_blank'>Watch Now</a></button>
            </div>
        </>
    )
}
