"use client"
import React from 'react';
import { DeleteUserAction } from '../actions/DeleteUserAction';

interface DeleteButtonProps {
    id: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
    const handleDelete = async () => {
        try {
            await DeleteUserAction(id);
            alert("User deleted successfully!");
            window.location.href = "/users";
        } catch (error) {
            console.error(error);
            alert("Failed to delete user.");
        }
    };

    return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
