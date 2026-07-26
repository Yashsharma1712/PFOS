function Market() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        📈 Market Center
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-lg">
            📊 NIFTY 50
          </h2>

          <p className="text-3xl font-bold mt-3">
            Loading...
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-lg">
            📈 SENSEX
          </h2>

          <p className="text-3xl font-bold mt-3">
            Loading...
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-lg">
            ₿ Bitcoin
          </h2>

          <p className="text-3xl font-bold mt-3">
            Loading...
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-lg">
            🥇 Gold
          </h2>

          <p className="text-3xl font-bold mt-3">
            Loading...
          </p>
        </div>

      </div>

    </div>
  );
}

export default Market;