import { SearchX } from "lucide-react";

function NotFound() {
  return (
    <div className="listContainer stylePageNotFound">
      <SearchX size="60" />
      <h3>
        Page not found. Click on the DoneZo logo or 'Home' button to return to
        the homepage.
      </h3>
    </div>
  );
}

export default NotFound;
