import {React,useState} from 'react';
import '../CSS/home.css';
import data from '../data.js';
import { Elements } from './Elements';
export const Home = () => {
    const [Id, setId] = useState(0);
    const TestMe = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`/home/${Id}`,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    },
                }
            );
            const data=await res.json()
            alert(JSON.stringify(data))

        } catch (err) {
            alert(err)
        }
    }
    return (
        <>
            <input className='search' type='number' placeholder='Enter User Id(less than 944)' value={Id} onChange={(e)=>setId(e.target.value)}></input>
            <button onClick={TestMe}>Search</button>
            <div className="outcontain2">
                {data.map((ele) => {
                    return (<Elements link={ele.link} title={ele.title} source={ele.source} go={ele.go} />);
                })}
            </div>
        </>
    )
}
