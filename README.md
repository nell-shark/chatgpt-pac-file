# chatgpt-pac-file

This repository contains a JavaScript PAC (Proxy Auto-Config) file that is designed to route requests to OpenAI and its associated CDN (Content Delivery Network) through a specified proxy server.

```javascript
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
```

# What is a PAC file?
A PAC (Proxy Auto-Config) file is a JavaScript function that determines the appropriate proxy server to use for a given URL. It is used by web browsers and other applications to automatically configure proxy settings based on the contents of the PAC file.

# How to install (Windows 11)

1. Download the [file](https://github.com/nell-shark/chatgpt-pac-file/blob/main/proxy.pac)

2. Update the SOCKS5, host, and port values in the PAC file to match your proxy server settings.
```javascript
return "SOCKS5 host:port";
```

3. Upload the PAC file to any server (e.g., Discord, Google Drive, OneDrive). 
> **_NOTE:_**  You can't use local file, see [NOTE: File://-based Proxy Scripts Deprecated](https://learn.microsoft.com/en-gb/archive/blogs/ieinternals/understanding-web-proxy-configuration#note-file-based-proxy-scripts-deprecated)

4. Open Settings > Network & internet > Proxy > Use setup script > Edit. Turn on 'Use setup script' and set **YOUR_URL** in 'Script address'

5. Check the result: [chat.openai.com](https://chat.openai.com/)