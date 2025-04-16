"use client";

import { useEffect, useState } from "react";
import { Camera, ChartArea, HandHeart, MessageSquareQuote, MonitorUp, Repeat2, Smile, SquarePen, Video } from "lucide-react";
const avatar = "https://cdn-icons-png.flaticon.com/512/6596/6596121.png";

export default function Feed() {
    const [tweets, setTweets] = useState<{ id: number; user: { username: string; usertag: string; imageUrl: string | null }; content: string; createdAt: string }[]>([]);

    useEffect(() => {
        async function fetchTweets() {
            try {
                const response = await fetch("/api/tweets");
                if (response.ok) {
                    const data = await response.json();
                    setTweets(data);
                    console.log("Fetched tweets:", data);
                } else {
                    console.error("Failed to fetch tweets");
                }
            } catch (error) {
                console.error("Error fetching tweets:", error);
            }
        }

        fetchTweets();
    }, []);

    return (
        <div className="flex-1 border-x border-gray-700">
            {/* Header */}
            <div className="sticky top-0 bg-black z-10 p-4 border-b border-gray-700">
                <h1 className="text-xl font-bold">Home</h1>
            </div>

            {/* Tweet Input */}
            <div className="p-4 border-b border-gray-700">
                <div className="flex space-x-4">
                    {/* User Avatar */}
                    <div className="h-12 w-12 bg-gray-600 rounded-full"></div>

                    {/* Input Area */}
                    <div className="flex-1">
                        <textarea
                            className="w-full bg-black text-white border-none outline-none resize-none"
                            placeholder="No que está pensando?"
                            rows={3}
                        ></textarea>

                        {/* Actions */}
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex space-x-2 text-blue-500">
                                <button className="hover:text-blue-400"><SquarePen /></button>
                                <button className="hover:text-blue-400"><Camera /></button>
                                <button className="hover:text-blue-400"><Smile /></button>
                                <button className="hover:text-blue-400"><Video /></button>
                                <button className="hover:text-blue-400"><ChartArea /></button>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                                Tweet
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tweets */}
            <div className="p-4 space-y-4">
                {tweets.map((tweet) => (
                    <Tweet
                        key={tweet.id}
                        username={tweet.user.username}
                        handle={`@${tweet.user.usertag}`}
                        content={tweet.content}
                        timestamp={new Date(tweet.createdAt).toLocaleString()}
                        imageUrl={tweet.user.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

function Tweet({
    username,
    handle,
    content,
    timestamp,
    imageUrl,
}: {
    username: string;
    handle: string;
    content: string;
    timestamp: string;
    imageUrl: string | null;
}) {
    return (
        <div className="p-4 bg-gray-800 rounded-lg space-y-2">
            {/* User Info */}
            <div className="flex items-center space-x-2">
                <img
                    src={imageUrl || avatar}
                    className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                    <p className="font-bold">{username}</p>
                    <p className="text-gray-400 text-sm">{handle}</p>
                </div>
            </div>

            {/* Tweet Content */}
            <p className="text-white">{content}</p>

            {/* Timestamp */}
            <p className="text-gray-400 text-sm">{timestamp}</p>

            {/* Actions */}
            <div className="flex justify-between text-gray-400 pt-2">
                <button className="hover:text-blue-500"> <MessageSquareQuote /></button>
                <button className="hover:text-green-500"> <Repeat2 /> </button>
                <button className="hover:text-red-500"> <HandHeart /> </button>
                <button className="hover:text-gray-300"> <MonitorUp /> </button>
            </div>
        </div>
    );
}