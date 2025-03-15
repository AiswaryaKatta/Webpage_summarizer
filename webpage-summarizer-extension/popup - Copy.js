document.getElementById("askButton").addEventListener("click", async () => {
  const apiKey = "AIzaSyD0EUUkCTkTcvW2sZbaMziHGCHGzYj0RSs"; // Replace with your actual API key
  const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=GEMINI_API_KEY";

  const inputText = document.getElementById("inputText").value.trim();
  if (!inputText) {
      alert("Please enter some text to summarize.");
      return;
  }

  try {
alert (apiKey);
      const response = await fetch(`${apiUrl}?key=${apiKey}`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              contents: [
                  {
                      role: "user",
                      parts: [{ text: inputText }],
                  },
              ],
          }),
      });

      if (response.ok) {
          const data = await response.json();
          const summary = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "No summary available.";
          document.getElementById("output").innerText = summary;
      } else {
          const errorData = await response.json();
          console.error("API Error:", errorData);
          document.getElementById("output").innerText = `Error: ${errorData.error.message}`;
      }
  } catch (error) {
      console.error("Request failed:", error);
      document.getElementById("output").innerText = "Failed to fetch the summary.";
  }
});

  