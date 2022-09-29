var proxy = "SOCKS5 127.0.0.1:10809;";
function FindProxyForURL(url, host) {
  return proxy;
}
