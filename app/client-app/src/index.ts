import axios from "axios";

const serverUrl = process.env.EXPRESS_SERVER_URL || "http://localhost:9222";

const axiosInstance = axios.create({
  baseURL: serverUrl,
});

async function main() {
  try {
    const response = await axiosInstance.get("/status");
    console.log(`Response status: ${response.status}`);
    console.log(`Response data: ${JSON.stringify(response.data)}`);

    if (response.status !== 200) {
      console.error(`Error: Failed to fetch status from ${serverUrl}`);
    } else {
      console.log(`Status connecting to ${serverUrl}: ${response.data.status}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ECONNABORTED") {
        console.error(
          `Error: Timeout error: failed to connect to ${serverUrl}`
        );
      } else if (error.code === "ECONNREFUSED") {
        console.error(
          `Error: Connection refused: failed to connect to ${serverUrl}`
        );
      } else if (error.code === "ENOTFOUND") {
        console.error(`Error: Not found: failed to connect to ${serverUrl}`);
      } else {
        console.error(
          `Error: Axios error: failed to fetch status from ${serverUrl}`
        );
      }
    } else {
      console.error(
        `Error: Unknown error: failed to fetch status from ${serverUrl}`
      );
    }
  }
}

// Call main function every 5 seconds
setInterval(main, 5000);

// Keep the process running indefinitely
process.stdin.resume();
