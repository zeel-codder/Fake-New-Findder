import React from 'react';
import '../CSS/home.css';
import data from '../data.js';
import { Elements } from './Elements';
export const Home = () => {
    return (
        <>
        <div className="outcontain2">
        {data.map((ele)=>{
            return (<Elements link={ele.link} title={ele.title} source={ele.source} go={ele.go}/>);
        })}
        </div>
                    </>
    )
}
