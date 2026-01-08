"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TaskFormModal from "./TaskFormModal";
import TaskActions from "./TaskActions";
import ChangePasswordModal from "./ChangePasswordModal";

interface Task {
    TaskID: number;
    TaskTitle: string | null;
    TaskDescription: string | null;
    IsCompleted: boolean | null;
    UserID: number | null;
}

interface User {
    UserID: number;
    UserName: string | null;
    Password: string | null;
    tasks: Task[];
}

interface UserDetailsClientProps {
    user: User;
}

export default function UserDetailsClient({ user }: UserDetailsClientProps) {
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const router = useRouter();

    const handleAddTask = () => {
        setEditingTask(null);
        setIsTaskModalOpen(true);
    };

    const handleEditTask = (task: Task) => {
        setEditingTask(task);
        setIsTaskModalOpen(true);
    };

    const handleModalSuccess = () => {
        // Refresh the page data
        router.refresh();
    };

    return (
        <>
            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
                <button
                    onClick={() => setIsPasswordModalOpen(true)}
                    className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors font-medium"
                >
                    Change Password
                </button>
            </div>

            {/* Tasks Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">
                        User Tasks ({user.tasks.length})
                    </h2>
                    <button
                        onClick={handleAddTask}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors font-medium"
                    >
                        + Add Task
                    </button>
                </div>

                {user.tasks.length === 0 ? (
                    <div className="text-gray-500 text-center py-6">
                        No tasks assigned 🚫
                    </div>
                ) : (
                    <ul className="space-y-4">
                        {user.tasks.map((task) => (
                            <li
                                key={task.TaskID}
                                className="border rounded-lg p-4 hover:shadow transition"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {task.TaskTitle}
                                        </h3>

                                        {task.TaskDescription && (
                                            <p className="text-gray-600 mt-1">
                                                {task.TaskDescription}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-3 ml-4">
                                        <span
                                            className={`text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap ${task.IsCompleted
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {task.IsCompleted ? "Completed" : "Pending"}
                                        </span>
                                        <TaskActions
                                            taskId={task.TaskID}
                                            userId={user.UserID}
                                            isCompleted={task.IsCompleted}
                                            onEdit={() => handleEditTask(task)}
                                        />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Modals */}
            <TaskFormModal
                isOpen={isTaskModalOpen}
                onClose={() => setIsTaskModalOpen(false)}
                userId={user.UserID}
                task={editingTask}
                onSuccess={handleModalSuccess}
            />

            <ChangePasswordModal
                isOpen={isPasswordModalOpen}
                onClose={() => setIsPasswordModalOpen(false)}
                userId={user.UserID}
            />
        </>
    );
}
