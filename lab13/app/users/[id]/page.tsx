import { GetUserWithTasksAction } from "../../actions/GetUserWithTasksAction";
import DeleteButton from "../../ui/DeleteButton";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function UserDetailsPage({ params }: PageProps) {
    const { id } = await params;
    const userId = Number(id);

    if (isNaN(userId)) {
        notFound();
    }

    const user = await GetUserWithTasksAction(userId);

    if (!user) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Back Button */}
            <Link
                href="/users"
                className="inline-flex items-center mb-4 text-sm font-medium text-blue-600 hover:underline"
            >
                ← Back to Users
            </Link>

            {/* User Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    {user.UserName}
                </h1>

                <DeleteButton id={user.UserID} />
            </div>

            {/* Tasks Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    User Tasks
                </h2>

                {user.tasks.length === 0 ? (
                    <div className="text-gray-500 text-center py-6">
                        No tasks assigned 🚫
                    </div>
                ) : (
                    <ul className="space-y-4">
                        {user.tasks.map(task => (
                            <li
                                key={task.TaskID}
                                className="border rounded-lg p-4 hover:shadow transition"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {task.TaskTitle}
                                        </h3>

                                        {task.TaskDescription && (
                                            <p className="text-gray-600 mt-1">
                                                {task.TaskDescription}
                                            </p>
                                        )}
                                    </div>

                                    <span
                                        className={`text-sm font-medium px-3 py-1 rounded-full ${
                                            task.IsCompleted
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                        }`}
                                    >
                                        {task.IsCompleted ? "Completed" : "Pending"}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
