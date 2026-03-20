document.querySelector("#btn").addEventListener("click", () => {
  let query = document.querySelector("#search").value
  let para = document.querySelector("#harry")

  fetch(`https://potterapi-fedeperin.vercel.app/es/characters?search=${query}`)
    .then(response => response.json())
    .then(fact => {
      if (fact.length === 0) {
        para.innerHTML = `<p>No results found</p>`
        return
      }

      // Display multiple results
      para.innerHTML = fact.map(c => `
        <div>
          <p><strong>Full Name:</strong> ${c.fullName}</p>
          <p><strong>Birthdate:</strong> ${c.birthdate || "Unknown"}</p>
          <p><strong>Children:</strong> ${c.children || "None"}</p>
          <p><strong>House:</strong> ${c.hogwartsHouse || "Unknown"}</p>
          <p><strong>Actor:</strong> ${c.interpretedBy}</p>
          <p><strong>nickname:</strong> ${c.nickname}</p>
        </div>
      `).join("")
    })
    .catch(error => {
      console.error("Error fetching data:", error)
      para.innerHTML = `<p>Failed to load data</p>`
    })
})

