$.fn.extend({imageLoaded:function(n){var i=$(this).find("img"),t=i.length;i.each(function(i,a){var a=new Image;a.onload=function(){t--,0==t&&n()},a.onerror=function(){t--,0==t&&n()},a.src=$(a).attr("src")})},gridify:function(n){var i=$(this),n=n||{},t=function(){i.css("position","relative");var t=i.find(n.srcNode),a=i.innerWidth(),e=parseInt(n.margin||0),o=parseInt(n.max_width||n.width||220),r=Math.floor(a/(o+e)),s=(a%(o+e)-e)/2,d=[];n.max_width&&(o=(a-r*e-e)/r,s=e/2);for(var f=0;r>f;f++)d.push(0);t.each(function(i,t){var a=$(t),r=d.indexOf(Math.min.apply(Math,d));a.css({width:o,position:"absolute",margin:e/2,top:d[r]+e/2,left:(o+e)*r+s,transition:n.transition||"all 0.5s ease"}),d[r]+=a.innerHeight()+e})};if(i.imageLoaded(t),n.resizable){var a=$(window).on("resize",t);i.on("remove",a.unbind)}}});
