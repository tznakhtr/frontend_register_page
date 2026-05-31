import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getUsers')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Registered Users</h1>
            
                {users.map((user) => (
                   <p key={user._id} > {user.name}</p>   
                ))}
        
        </div>
    );
}

export default Home;