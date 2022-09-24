import React, { useEffect, useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/20/solid/'

function UserProfile({ offline, left, edit, opponent, userName, userId }) {
    const [newUserName, setNewUserName] = useState(userName);
    useEffect(() => {
        //service call
        console.log(newUserName);
    }, [newUserName]);
    return (
        <div className={`absolute ${left ? 'left-4 md:left-32' : 'right-4 md:right-32'} top-10 text-end gap-0`}>
            <div className={`flex ${left ? 'float-left' : 'float-right'}  align-bottom`}>
                {!opponent && ((!edit || offline) && <p className='text-xl font-bold m-2'>You</p>)}
                <UserCircleIcon className=' h-14 text-white pb-2' />
                {opponent && ((!edit || offline) && <p className='text-xl font-bold m-2'>Opponent</p>)}
            </div>

            <br />
            {edit ? (<input type='text' value={newUserName} onChange={(e) => setNewUserName(e.target.value)}
                className='text-lg font-medium text-slate-900 dark:text-slate-200 bg-inherit border rounded-md h-10 w-64 p-2' />)
                : (<h3 className={`text-lg font-medium text-slate-900 dark:text-slate-200 bg-inherit p-2 ${left ? 'text-left' : 'text-right'}`}>{userName}</h3>)}
            <h3 className={`${left ? 'text-left' : 'text-right'} `}>User ID: {userId}</h3>
        </div >
    )
}

export default UserProfile