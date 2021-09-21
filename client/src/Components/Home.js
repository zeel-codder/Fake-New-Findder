import {React,useState} from 'react';
import data from '../data.js';
import { Elements } from './Elements';
export const Home = () => {
    const [Id, setId] = useState(0);
    const [data,setData]=useState([]);
    const TestMe = async (e) => {
        e.preventDefault();
        try {
            if(Id>=944 || Id<=-1){
                throw new Error("Please Enter Valid User Id:");
            }
            const res = await fetch(`/home/${Id}`,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    },
                }
            );
            const res1=await res.json();
            setData(res1)
            console.log(res1);
        } catch (err) {
            alert(err)
        }
    }
    return (
        <div className="home">
            <input className='search' type='number' placeholder='Enter User Id(less than 944)' value={Id} onChange={(e)=>setId(e.target.value)}></input>
            <button onClick={TestMe}>Search</button>
             <div className="outcontain2">
                 {data.map((ele) => {
                    return ele.result.map((ele1)=>{ return (<Elements link="https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg" title={ele1} source="Netflix" go="https://www.netflix.com/in/title/80192098" />);})
                })} 
                
            </div>
        </div>
    )
}
