import React from 'react';
import { useState } from 'react';
import UserDetail from './UserDetail';

const UserList = () => {
    console.log('유저리스트 리랜더링');
    const [users, setUsers] = useState([
        {
            id:0,
            name:'철수',
            age:30
        },
        {
            id:1,
            name:'영희',
            age:20
        }
    ])
    const addUser = () => {
        setUsers([
            ...users,
            {
                id:2,
                name:'정희',
                age:22
            }
        ])
    }
    return (

        <div>
            <button disabled={users.length>=3} onClick={addUser}>
                유저만들기
            </button>
            {
                users.map(item => {
                    return <UserDetail key={item.id} userItem={item} />
                })
            }
        </div>
    );
};

export default UserList;