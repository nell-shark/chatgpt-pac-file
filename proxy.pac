function FindProxyForURL(url, host) {
    var proxySites = [
        "openai.com",
        "cdn.oaistatic.com"
    ];

    if (proxySites.some(function(site) {
        return dnsDomainIs(host, site);
    }))
        return "SOCKS5 host:port"; // UPDATE 'host' and 'port'
        // return "HTTPS host:port"
        // return "PROXY host:port"


    return "DIRECT";
}
