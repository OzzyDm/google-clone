import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";

async function WebSearchPage({ searchParams }) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try search something else or go back to {""}
          <Link href="/" className="text-blue-500">
            homepage.
          </Link>
        </p>
      </div>
    );
  }

  return <>{results && <WebSearchResults results={data} />}</>;
}

export default WebSearchPage;
