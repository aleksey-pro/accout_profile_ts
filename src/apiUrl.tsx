let url = window.location.href;
url = url.slice(url.indexOf('//') + 2);
if (url.indexOf(':') !== -1) {
    url = url.substring(0, url.indexOf(':'));
} else if (url.indexOf('/') !== -1) {
    url = url.substring(0, url.indexOf('/'));
}
export default 'https://' + url;