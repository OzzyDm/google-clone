import "./../globals.css";
import SearchHeader from "@/components/SearchHeader";

function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}

export default SearchLayout;
