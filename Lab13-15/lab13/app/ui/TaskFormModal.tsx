"use client";
import React, { useState, useEffect } from "react";
import { AddTaskAction } from "../actions/AddTaskAction";
import { UpdateTaskAction } from "../actions/UpdateTaskAction";
import toast from "react-hot-toast";

interface Task {
    TaskID: number;
    TaskTitle: string | null;
    TaskDescription: string | null;
    IsCompleted: boolean | null;
    UserID: number | null;
}

interface TaskFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    userId: number;
    task?: Task | null; // If provided, we're in edit mode
    onSuccess?: () => void;
}

export default function TaskFormModal({
    isOpen,
    onClose,
    userId,
    task,
    onSuccess,
}: TaskFormModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        TaskTitle: "",
        TaskDescription: "",
        IsCompleted: false,
    });

    const isEditMode = !!task;

    // Update form data when task changes
    useEffect(() => {
        if (task) {
            setFormData({
                TaskTitle: task.TaskTitle || "",
                TaskDescription: task.TaskDescription || "",
                IsCompleted: task.IsCompleted || false,
            });
        } else {
            setFormData({
                TaskTitle: "",
                TaskDescription: "",
                IsCompleted: false,
            });
        }
    }, [task]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formDataObj = new FormData();
        formDataObj.append("TaskTitle", formData.TaskTitle);
        formDataObj.append("TaskDescription", formData.TaskDescription);
        formDataObj.append("IsCompleted", formData.IsCompleted.toString());
        formDataObj.append("UserID", userId.toString());

        try {
            let result;
            if (isEditMode && task) {
                result = await UpdateTaskAction(task.TaskID, formDataObj);
            } else {
                result = await AddTaskAction(formDataObj);
            }

            if (result.success) {
                toast.success(
                    isEditMode ? "Task updated successfully!" : "Task added successfully!"
                );
                onSuccess?.();
                onClose();
                // Reset form
                setFormData({
                    TaskTitle: "",
                    TaskDescription: "",
                    IsCompleted: false,
                });
            } else {
                toast.error(result.message || "Failed to save task");
            }
        } catch (error) {
            toast.error("An unexpected error occurred");
            console.error("Task form error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {isEditMode ? "Edit Task" : "Add New Task"}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                        disabled={isSubmitting}
                    >
                        &times;
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            User ID
                        </label>
                        <input
                            type="text"
                            value={userId}
                            readOnly
                            className="w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Task Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={formData.TaskTitle}
                            onChange={(e) =>
                                setFormData({ ...formData, TaskTitle: e.target.value })
                            }
                            placeholder="Enter task title"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            maxLength={100}
                            disabled={isSubmitting}
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            {formData.TaskTitle.length}/100 characters
                        </p>
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Task Description
                        </label>
                        <textarea
                            value={formData.TaskDescription}
                            onChange={(e) =>
                                setFormData({ ...formData, TaskDescription: e.target.value })
                            }
                            placeholder="Enter task description (optional)"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="isCompleted"
                            checked={formData.IsCompleted}
                            onChange={(e) =>
                                setFormData({ ...formData, IsCompleted: e.target.checked })
                            }
                            className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                            disabled={isSubmitting}
                        />
                        <label
                            htmlFor="isCompleted"
                            className="ml-2 text-sm font-medium text-gray-700"
                        >
                            Mark as completed
                        </label>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isSubmitting}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting
                                ? "Saving..."
                                : isEditMode
                                    ? "Update Task"
                                    : "Add Task"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
