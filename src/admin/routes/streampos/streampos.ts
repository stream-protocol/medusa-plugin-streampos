import { useParams } from "react-router-dom";
import { RouteConfig } from "@medusajs/admin";
import { StreamPosIcon } from "../../icons/streampos";

const StreamPosPage = () => {
  return (
    <div>
      StreamPOS
    </div>
  );
};

export const config: RouteConfig = {
  // Configuration for the page's link in your application.
  link: {
    label: "StreamPOS", // Label for the link.
    icon: StreamPosIcon, // Icon for the link (assuming it's imported).
  },
};

export default StreamPosPage; // Export the component for use in your application.
