fetch('https://zenquotes.io/api/random')
    .then(data=> data.json())
    .then(quotesData =>{
        const quotesText = quotesData.attachments[0].text;
        const quotesElement = document.getElementById('quotesElement');

        quotesElement.innerHTML = quoteText;
    })