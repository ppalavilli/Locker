var _kmq = _kmq || [];
function _kms(u) {
    setTimeout(function(){
      var s = document.createElement('script'); var f = document.getElementsByTagName('script')[0]; s.type = 'text/javascript'; s.async = true;
      s.src = u; f.parentNode.insertBefore(s, f);
    }, 1);
}
_kms('//i.kissmetrics.com/i.js');
if (document.location.hostname === 'singly.com' || document.location.hostname === 'me.singly.com') {
  _kms('//doug1izaerwt3.cloudfront.net/de62fe44ea949f4bf216353f81377c37cfcc90dd.1.js');
} else {
  _kms('//doug1izaerwt3.cloudfront.net/09be6bff5c8937e342f601bae6ee004e1e7aab1e.1.js');
}

var _gaq = [['_setAccount', 'UA-22812443-1'], ['_trackPageview']];
(function(d, t) {
 var g = d.createElement(t),
     s = d.getElementsByTagName(t)[0];
 g.async = true;
 g.src = '//www.google-analytics.com/ga.js';
 s.parentNode.insertBefore(g, s);
})(document, 'script');