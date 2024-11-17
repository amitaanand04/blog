import React, { useState ,useCallback} from 'react';
import {throttle} from 'lodash';

export default function ThrottlingExample() {
    const [data, setData] = useState([]);
    const [query,setQuery] = useState('');


    const fetchData = (searchTerm) => {
        console.log("hello")
        const dummyData= ['apple','banana','orange','peach','plum'];
        const filter = dummyData.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));
        setData(filter);
    }

    const handleSearch = useCallback(throttle((searchTerm)=> {
        fetchData(searchTerm)
    },1000),[])

    const handleChange = (e)=>{
        const value= e.target.value;
        setQuery(value);
        handleSearch(value);
    }

    

    return (
        <>
            <div>
                <input placeholder='Type anything....' value={query} type="text" onChange={handleChange}/>
            </div>
            <div>
                <ul>
                    {data?.map((el) => (<li>{el}</li>))}
                </ul>
            </div>
        </>

    )
}
