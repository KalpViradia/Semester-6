"use client"
import React, { useState } from 'react';
import { DeleteUserAction } from '../actions/DeleteUserAction';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface DeleteButtonProps {
    id: number;
}

function DeleteButton(params: DeleteButtonProps) {
    const { id } = params;
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        // Show confirmation dialog
        const confirmed = window.confirm(
            "Are you sure you want to delete this user? This action cannot be undone."
        );

        if (!confirmed) {
            return;
        }

        setIsDeleting(true);

        try {
            const result = await DeleteUserAction(id);

            if (result.success) {
                toast.success("User deleted successfully!");
                // Redirect to users list page after successful deletion
                router.push('/users');
                router.refresh();
            } else {
                toast.error(result.message || "Failed to delete user");
            }
        } catch (error) {
            toast.error("An unexpected error occurred");
            console.error("Delete error:", error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={`px-4 py-2 rounded text-white font-medium transition-all ${isDeleting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-red-500 hover:bg-red-600 active:scale-95'
                }`}
        >
            {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
    );
}

export default DeleteButton;
