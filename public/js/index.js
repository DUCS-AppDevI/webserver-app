window.onload = (event) => {
  let quoteBtn =  document.getElementById('getQuoteBtn')
  quoteBtn.addEventListener("click", async (btnEvent) => {
    // generate a random integer between 0 and 4
    let rndIndex = Math.floor(Math.random()*5)

    // Make an API call to the getQuote route
    let url = `http://localhost:3000/getQuote?quote_num=${rndIndex}`
    console.log(`Route: ${url}`)
    const response = await fetch(url)
    console.log(`Response Status: ${response.status}`)
    const newQuote = await response.json()

    // format the html response
    let html = document.getElementById('quoteList').innerHTML
    html += `<li>Quote: ${newQuote.quote} --${newQuote.author}</li>`

    // add the quote to the list
    document.getElementById('quoteList').innerHTML=html
  })
}