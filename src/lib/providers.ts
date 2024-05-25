export const providers: Provider[] = [
    {
        id: "ddg",
        name: "DuckDuckGo",
        url: "https://duckduckgo.com/?q="
    },
    {
        id: "pplx",
        name: "Perplexity",
        url: "https://perplexity.ai/?q="
    },
    {
        id: "google",
        name: "Google",
        url: "https://google.com/search?q="
    },
    {
        id: "google-noai",
        name: "Google (Web Results)",
        url: "https://google.com/search?udm=14&q="
    },
    {
        id: "bing",
        name: "Bing",
        url: "https://www.bing.com/?showconv=0&q="
    },
    {
        id: "copilot",
        name: "Copilot (via Bing)",
        url: "https://www.bing.com/?showconv=1&q="
    }
]

type Provider = {
    id: string
    name: string
    url: string
}