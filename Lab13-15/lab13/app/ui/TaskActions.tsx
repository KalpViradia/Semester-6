"use client";
import React, { useState } from "react";
import { DeleteTaskAction } from "../actions/DeleteTaskAction";
import { ToggleTaskAction } from "../actions/ToggleTaskAction";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface TaskActionsProps {
    taskId: number;
    userId: number;
    isCompleted: boolean | null;
    onEdit: () => void;
}

export default function TaskActions({ taskId, userId, isCompleted, onEdit }: TaskActionsProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isToggling, setIsToggling] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this task? This action cannot be undone."
        );

        if (!confirmed) return;

        setIsDeleting(true);

        try {
            const result = await DeleteTaskAction(taskId, userId);

            if (result.success) {
                toast.success("Task deleted successfully!");
                router.refresh();
            } else {
                toast.error(result.message || "Failed to delete task");
            }
        } catch (error) {
            toast.error("An unexpected error occurred");
            console.error("Delete task error:", error);
        } finally {
            setIsDeleting(false);
        }
    };

    const handleToggle = async () => {
        setIsToggling(true);

        try {
            const result = await ToggleTaskAction(taskId, userId);

            if (result.success) {
                toast.success("Task status updated!");
                router.refresh();
            } else {
                toast.error(result.message || "Failed to update task status");
            }
        } catch (error) {
            toast.error("An unexpected error occurred");
            console.error("Toggle task error:", error);
        } finally {
            setIsToggling(false);
        }
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={handleToggle}
                disabled={isToggling || isDeleting}
                className={`px-3 py-1 text-sm text-white rounded hover:opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${isCompleted ? 'bg-orange-500' : 'bg-green-500'
                    }`}
                title={isCompleted ? "Mark as pending" : "Mark as completed"}
            >
                {isToggling ? "..." : isCompleted ? "↺" : "✓"}
            </button>
            <button
                onClick={onEdit}
                disabled={isDeleting || isToggling}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50"
                title="Edit task"
            >
                Edit
            </button>
            <button
                onClick={handleDelete}
                disabled={isDeleting || isToggling}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Delete task"
            >
                {isDeleting ? "..." : "Delete"}
            </button>
        </div>
    );
}
