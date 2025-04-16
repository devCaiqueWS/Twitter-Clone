export default function Widgets() {
  return (
    <div className="hidden lg:block w-80 p-4 space-y-4">
      {/* Search Bar */}
      <div className="sticky top-0 bg-black z-10 p-4">
        <input
          type="text"
          placeholder="Search Twitter"
          className="w-full bg-gray-800 text-white placeholder-gray-500 p-2 rounded-full outline-none"
        />
      </div>

      {/* Trends */}
      <div className="bg-gray-800 p-4 rounded-lg space-y-4">
        <h2 className="text-xl font-bold">For you</h2>
        <Trend topic="Technology" tweets="120K Tweets" />
        <Trend topic="ReactJS" tweets="80K Tweets" />
        <Trend topic="Next.js" tweets="50K Tweets" />
      </div>

      {/* Who to Follow */}
      <div className="bg-gray-800 p-4 rounded-lg space-y-4">
        <h2 className="text-xl font-bold">Que tal seguir</h2>
        <FollowSuggestion username="cDabliu" handle="@cDabliu" />
        <FollowSuggestion username="Jane Smith" handle="@janesmith" />
      </div>
    </div>
  );
}

function Trend({ topic, tweets }: { topic: string; tweets: string }) {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-white font-bold">{topic}</p>
        <p className="text-gray-400 text-sm">{tweets}</p>
      </div>
      <button className="text-blue-500 hover:underline">More</button>
    </div>
  );
}

function FollowSuggestion({
  username,
  handle,
}: {
  username: string;
  handle: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      <div className="h-10 w-10 bg-gray-600 rounded-full"></div>
      <div>
        <p className="text-white font-bold">{username}</p>
        <p className="text-gray-400 text-sm">{handle}</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600">
        Follow
      </button>
    </div>
  );
}