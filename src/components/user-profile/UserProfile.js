import React, { useEffect, useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/20/solid/'

function UserProfile({ edit, opponent, userName, userId }) {
    const [newUserName, setNewUserName] = useState(userName);
    useEffect(() => {
        //service call
        console.log(newUserName);
    }, [newUserName]);
    return (
        <div className='absolute right-4 md:right-32 top-10 text-end gap-0'>
            <div className='flex float-right align-bottom'>
                {!edit && <p className='text-xl font-bold m-2'>{opponent ? 'Opponent' : 'You'}</p>}
                <UserCircleIcon className=' h-14 text-white pb-2' />
            </div>

            <br />
            {edit ? (<input type='text' value={newUserName} onChange={(e) => setNewUserName(e.target.value)}
                className='text-lg font-medium text-slate-900 dark:text-slate-200 bg-inherit border rounded-md h-10 w-64 p-2' />)
                :( <h3 className='text-lg font-medium text-slate-900 dark:text-slate-200 bg-inherit p-2'>{userName}</h3>)}
                < h3 className=''>User ID: {userId}</h3>
        </div >
    )
}

export default UserProfile