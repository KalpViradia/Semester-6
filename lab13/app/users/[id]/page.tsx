"use client"
import React from 'react';
import { DeleteUserAction } from '../../actions/DeleteUserAction';

interface DeleteButtonProps {
    id: number;
}

function DeleteButton({ id }: DeleteButtonProps) {
    const handleDelete = async () => {
        try {
            await DeleteUserAction(id);
            alert("User deleted!");
            // Optionally, redirect after delete
            window.location.href = "/users";
        } catch (err) {
            console.error(err);
            alert("Failed to delete user");
        }
    };

    return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteButton;
