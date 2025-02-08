async function sendPrompt() {
    const question = document.getElementById("question").value;
    if (!question) {
        alert("Please enter a question!");
        return;
    }

    const responseWrapper = document.getElementById("response-wrapper");
    const responseContainer = document.getElementById("response-container");
    const responseMessage = document.getElementById("response-message");

    responseWrapper.style.display = "flex";
    responseMessage.innerText = "Generating...";
    responseContainer.style.display = "none";
    responseContainer.innerText = "";

    try {
        const response = await fetch("/api/ai/prompt?question=" + encodeURIComponent(question));
        const result = await response.text();

        responseMessage.innerText = "";
        responseContainer.style.display = "block";
        responseContainer.innerText = result;
    } catch (error) {
        responseMessage.innerText = "Error fetching the response!";
    }
}

function toggleResponse() {
    const responseContainer = document.getElementById("response-container");
    responseContainer.style.display = responseContainer.style.display === "none" ? "block" : "none";
}
