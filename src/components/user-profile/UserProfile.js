import React, { useEffect, useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/20/solid/'

function UserProfile({ offline, left, edit, opponent, userName, userId }) {
    const [newUserName, setNewUserName] = useState(userName);
    useEffect(() => {
        //service call
    }, [newUserName]);
    return (
        <div className={`absolute ${left ? 'left-4 md:left-32' : 'right-4 md:right-32'} md:top-10 top-12 text-end gap-0`}>
            <div className={`flex ${left ? 'float-left' : 'float-right'}  align-bottom`}>
                {!opponent && ((!edit || offline) && <p className='md:text-md text-sm font-bold m-2'>You</p>)}
                <UserCircleIcon className='md:h-12 h-10 text-white pb-2' />
                {opponent && ((!edit || offline) && <p className='md:text-md text-sm font-bold m-2'>Opponent</p>)}
            </div>
            <br />
            {edit ? (<input type='text' value={newUserName} onChange={(e) => setNewUserName(e.target.value)} maxLength={15}
                className={`md:text-lg text-sm font-medium text-slate-900 dark:text-slate-200 bg-inherit border rounded-md md:h-10 h-8 md:w-48 w-28 p-2 ${left ? 'text-left' : 'text-right'}`} />)
                : (<h3 className={`text-lg font-medium text-slate-900 dark:text-slate-200 bg-inherit p-2 ${left ? 'text-left' : 'text-right'}`}>{userName}</h3>)}
            {!offline && <h3 className={`${left ? 'text-left' : 'text-right'} md:text-sm text-xs`}>User ID: {userId}</h3>}
        </div >
    )
}

export default UserProfile