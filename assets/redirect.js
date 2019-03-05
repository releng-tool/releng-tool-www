var url = new URL(window.location);
var forcelang = url.searchParams.get('forcelang');
if (!forcelang)
{
    var base = '';
    var ln = window.navigator.language || navigator.browserLanguage;
    ln = ln.substring(0,2);
    switch(ln)
    {
    case 'de': base = '/de'; break;
    case 'es': base = '/es'; break;
    case 'pl': base = '/pl'; break;
    default:
    }

    if (base)
    {
        new_url = base + window.location.pathname + window.location.search +
            window.location.hash;
        window.location.href = new_url;
    }
}
