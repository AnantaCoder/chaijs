fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => {
        const quoteText = data.quote;
        document.querySelector('.blockquote h1').textContent = `"${quoteText}"`;
    })
    .catch((error) => {
        console.error("Error fetching quote:", error);
    });
