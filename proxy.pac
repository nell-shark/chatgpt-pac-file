function FindProxyForURL(url, host) {
  var proxySites = [".openai.com", "cdn.oaistatic.com"];

  var shouldUseProxy = proxySites.some(function (site) {
    return dnsDomainIs(host, site);
  });

  // Replace "host:port" with your server details
  // If you intended to use an HTTPS proxy, change "SOCKS5" to "HTTPS"
  return shouldUseProxy ? "SOCKS5 host:port" : "DIRECT";
}
