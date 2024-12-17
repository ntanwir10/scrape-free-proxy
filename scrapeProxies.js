import axios from "axios";
import fs from "fs";

const proxyApiUrl =
  "https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all";

const fetchProxies = async () => {
  try {
    console.log("Fetching proxy list from ProxyScrape API...");

    // Fetch the proxy list
    const response = await axios.get(proxyApiUrl);

    // Process the raw proxy list
    const proxies = response.data
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((proxy) => {
        const [host, port] = proxy.split(":");
        return { host, port: parseInt(port) };
      });

    // Save to JSON file
    fs.writeFileSync("proxyList.json", JSON.stringify(proxies, null, 2));
    console.log(
      `Successfully saved ${proxies.length} proxies to proxyList.json`
    );
  } catch (error) {
    console.error("Error fetching proxies:", error.message);
  }
};

fetchProxies();
