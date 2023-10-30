import React from "react";

type Props = {
  params: {
    searchTerm: string;
  };
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${searchTerm}&format=json`
  );

  // error page test
  throw new Error("Nooooooo! Error happened!");

  if (!res) return null;
  const data: SearchDataType[] = await res.json();
  return data;
};

async function SearchResult({ params: { searchTerm } }: Props) {
  const searchResults = await search(searchTerm);
  // console.log(searchResults);

  return (
    <div className="ml-4 border-2 border-yellow-400">
      you entered :<span className="ml-4">{searchTerm}</span>
      <ol className="space-y-5 p-5">
        {searchResults?.map((result) => (
          <li key={result.place_id} className="border border-cyan-400">
            <p>{result.display_name}</p>
            <p>
              lat: {result.lat} / lon: {result.lon}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResult;
