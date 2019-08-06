;(async function() {
  const response = await fetch(`https://placekitten.com/320/240`)
  const blob = await response.blob()

  const url = URL.createObjectURL(blob.slice(0, 4000))

  const image = new Image()
  image.src = url

  document.getElementById("app").appendChild(image)
})()
