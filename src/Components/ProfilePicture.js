import React from 'react'
import picture from '../images/profile-picture.png'

export default function ProfilePicture() {
    return (
        <img src={picture} className='app-profile-picture' />
    )
}