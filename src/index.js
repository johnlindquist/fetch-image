;(async function() {
  const response = await fetch(`http://placekitten.com/320/240`)
  const blob = await response.blob()

  const url = URL.createObjectURL(blob.slice(0, 4000))

  const image = new Image()
  image.src = url

  document.getElementById("app").appendChild(image)
})()
