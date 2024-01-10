function FindProxyForURL(url, host) {
  var proxySites = [".openai.com", "cdn.oaistatic.com"];

  var isProxySite = proxySites.some(function (site) {
    return dnsDomainIs(host, site);
  });

  if (isProxySite) {
    // Replace "host:port" with your server details
    // If you intended to use an HTTPS proxy, change "SOCKS5" to "HTTPS"
    return "SOCKS5 host:port";
  }

  return "DIRECT";
}
