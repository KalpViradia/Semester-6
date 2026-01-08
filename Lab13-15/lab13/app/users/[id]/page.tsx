import { GetUserWithTasksAction } from "../../actions/GetUserWithTasksAction";
import DeleteButton from "../../ui/DeleteButton";
import { notFound } from "next/navigation";
import Link from "next/link";
import UserDetailsClient from "../../ui/UserDetailsClient";

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

            {/* Client component for interactive features */}
            <UserDetailsClient user={user} />
        </div>
    );
}
