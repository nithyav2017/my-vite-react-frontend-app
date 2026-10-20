 
// import { regexFindAll } from 'firebase/firestore/pipelines';
import React from 'react'
import { useState,useEffect, useCallback,useMemo } from 'react'
import { openDB } from 'idb';

const AutoCompleting = () => {

    const[query, setQuery]=useState('');
    const[suggestion, setSuggesstion]= useState([]);
    const[loading, setLoading]= useState(false);
    const [todos, setTodos]= useState([]);

    const apiUrl= useMemo(() =>
        query.length > 0 ? `https://dummyjson.com/users/search?q=${query}` : null, [query]
    );

    const fetchSuggestions = useCallback(async() =>{
        if(!apiUrl) return ;
        setLoading(true);
        try
        {
            const db= openDB("usersDB", 1, {upgrade(db){
                db.createObjectStore("users", {keyPath:"id"});}})
            

            const cached = await db.getAll("users");
            if(cached.length) setSuggesstion(cached);
            else
            {
                        const response = await fetch(apiUrl);
                        if(!response)
                            throw new Error('failed to fetch suggestions');
                        const data = await response.json();
                        setSuggesstion(data.user || []);
            }

        }
        catch(error)
        {
            console.log(error.message);
        }
        finally
        {
            setLoading(false);
        }

    },[apiUrl]);

    useEffect(() => {
        if(query.trim.length > 0)
        {
        const debounce= setTimeout(() => {
            fetchSuggestions()
        }, 500);

        return () => clearTimeout(debounce);
    }
    else
    {
        setSuggesstion([]);
    }
    },[fetchSuggestions, query])
   
  return (
    <>
    <div style={{textAlign:"center", padding:"20px"}}>
         
        <h1>AutoCompleting</h1>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder='Search Employee' style={{padding: "10px", width:"100px"}}/>

        {loading && <p>Loading SUggestion...</p>}
        {suggestion.length > 0 && (
            <ul style ={{listStyle: "none",
                           marginTop:"10px" ,
                           padding : "0",
                           width: "250px",
                           margin: "auto",
                           border : "1px solid #ccc",
                           borderRadius: "5px",
                           background: "#fff"
            }}>
                {suggestion.map((user) => (
                    <li key ={user.id}  style={{padding:"10px", borderBottom:"10px", cursor: "pointer"}}
                    onClick={()=> setQuery(user.firstName+ " "+user.lastName)}>
                        {user.firstName} {user.lastName} ({user.email})
                    </li>
                ))}

            </ul>
        )}
    </div>
    </>
  )
}

export default AutoCompleting