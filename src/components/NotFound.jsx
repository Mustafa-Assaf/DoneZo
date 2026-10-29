import { SearchX } from 'lucide-react';

function NotFound() {

    const styleWarning = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
        border: "rgb(159, 159, 185) solid 5px",
        borderRadius: "30px",
        padding: "20px"
    }

  return (
    <div style={styleWarning}>
       <SearchX size="40"/>
      <h3>Page not found. Click on the DoneZo logo or 'Home' button to return to the homepage.</h3>
    </div>
  );
}

export default NotFound;


