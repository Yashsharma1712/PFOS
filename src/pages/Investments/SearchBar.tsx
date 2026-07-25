type SearchBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="🔍 Search by Type, Name, Platform or Remarks..."
        className="w-full border rounded-xl p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;