"use client"
import Iframe from "react-iframe";
import { useState } from "react";

const SystemMetricsPage = () => {
  const [url, setUrl] = useState<string>("http://miniserver.local:3000/public-dashboards/1fc3ac8b8f894bbab4c2e03aa44b4cbf");
  return (
    <Iframe
      url={url}
      frameBorder={0}
      className="container lg:h-[130vh]"
    />
  )
}

export default SystemMetricsPage;
