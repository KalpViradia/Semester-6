"use client"
import React from 'react';
import { DeleteUserAction } from '../actions/DeleteUserAction';

interface DeleteButtonProps {
    id: number;
}

function DeleteButton(paramas: DeleteButtonProps) {
    const { id } = paramas;
    return (
        <button onClick={() => {
            DeleteUserAction(id)
        }}>Delete</button>
    )
}

export default DeleteButton;
