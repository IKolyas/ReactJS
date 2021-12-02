import React from 'react';
import Check from './Check';

interface ProfileProps {
}

export const Profile: React.FC<ProfileProps> = () => {
    return <>
        <h1>USER ACCOUNT</h1>
        <Check/>
    </>
}
