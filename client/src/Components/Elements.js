import React from 'react'
export const Elements = (props) => {
    return (
        <>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={props.link} alt="Poster" ></img>
                        </div>
                        <div className="flip-card-back">
                            <p className='desc'>{props.title}</p>
                            <p className='desc'>{props.source}</p>
                            <button > <a href={props.go} target='_blank'>Watch Now</a></button>
                        </div>
                    </div>
                </div>

        </>
    )
}
