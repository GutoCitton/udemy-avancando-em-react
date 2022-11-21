import { useState } from "react";

const ListRender = () => {
    const [list] = useState(['Augusto', 'Bruno', 'Daniel', 'Ana'])

    const [users, setUsers] = useState([
        { id: 1, name: 'Augusto', age: 24 },
        { id: 2, name: 'Bruno', age: 24 },
        { id: 3, name: 'Daniel', age: 24 }
    ])

    const deleteRandom = () => {
        const radnomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => radnomNumber !== user.id);
        })
    };

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    )
}

export default ListRender;