export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">Trivia Drill</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Master general knowledge using scientifically-proven learning techniques
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              title="Spaced Repetition"
              description="Learn at optimal intervals for maximum retention"
              icon="🧠"
            />
            <FeatureCard
              title="Active Recall"
              description="Strengthen memory through active retrieval practice"
              icon="💡"
            />
            <FeatureCard
              title="Visual Learning"
              description="Interactive maps and visual associations"
              icon="🗺️"
            />
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-blue-600">
              Learn More
            </button>
          </div>

          {/* Status Badge */}
          <div className="mt-12 inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            🚧 MVP in Development
          </div>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
