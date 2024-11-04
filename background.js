const observer = new MutationObserver(() => {
  const head = document.getElementsByTagName("head")[0]
  const link = document.createElement("link")

  link.id = "darkstyle_css"
  link.rel = "stylesheet"
  link.type = "text/css"
  link.href = chrome.extension.getURL("css_dark.css")
  link.media = "all"

  head.appendChild(link)
})

observer.observe(document.documentElement, { childList: true })
