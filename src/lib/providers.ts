export const providers: Providers = {
    ddg: {
        name: "DuckDuckGo",
        url: "https://duckduckgo.com/?q="
    },
    pplx: {
        name: "Perplexity",
        url: "https://perplexity.ai/?q="
    },
    google: {
        name: "Google",
        url: "https://google.com/search?q="
    },
    "google-noai": {
        name: "Google (Web Results)",
        url: "https://google.com/search?udm=14&q="
    },
    bing: {
        name: "Bing",
        url: "https://www.bing.com/?showconv=0&q="
    },
    copilot: {
        name: "Copilot (via Bing)",
        url: "https://www.bing.com/?showconv=1&q="
    },
    yahoo: {
        name: "Yahoo",
        url: "https://search.yahoo.com/search?p="
    },
    baidu: {
        name: "Baidu",
        url: "https://www.baidu.com/s?wd="
    },
    yandex: {
        name: "Yandex",
        url: "https://yandex.com/search/?text="
    },
    chatgpt: {
        name: "ChatGPT",
        url: "https://chatgpt.com/?q="
    },
    blank: {
        name: "about:blank (for testing)",
        url: "about:blank/"
    }
};


type Providers = {
    [key: string]: {
        name: string,
        url: string
    }
}

type Provider = {
    id: string
    name: string
    url: string
}