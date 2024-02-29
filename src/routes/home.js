import React, { useContext } from "react";
import { FalconApiContext} from "../contexts/falcon-api-context";

function Home() {
  const { falcon } = useContext(FalconApiContext);

  return (
    <div className="mt-4 space-y-8">
       <p class="text-neutral"> 👋 Hi {falcon.data.user.username}</p>
    </div>
  );
}

export { Home };