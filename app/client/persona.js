(function() {
    var t   = document.createElement('script');
    t.type  = 'text/javascript';
    t.async = true;
    t.id    = 'persona-lib';
    t.src = '//login.persona.org/include.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(t, s);
})();
