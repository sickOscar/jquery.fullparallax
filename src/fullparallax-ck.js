/**
 * 
 * FullParallax jquery plugin
 *
 * Author: Oscar Chinellato
 * Version: 0.3
 *
 * Date: 2013.05.31
 *
 * Released undem MIT Licence
 * 
 */(function(e,t,n,r){function o(t,n){this.element=t;this.$element=e(t);this.options=e.extend({},s,n);this._defaults=s;this._name=i;this.main_interval;this.update_rate=1e3/this.options.frame_per_second;this.x_cursor=0;this.y_cursor=0;this.docDim={height:e(r).height(),width:e(r).width()};this.layers=[];this.init()}var i="fullparallax",s={frame_per_second:20};o.prototype.init=function(){var t=this;this.$element.find("div").each(function(n,r){var i=e(this),s=i.data("size").split(";"),o=s[0]?s[0].split(":")[1]:"auto",u=s[1]?s[1].split(":")[1]:"auto",a,f;o.indexOf("%")>-1?a=t.$element.width()/100*o.split("%")[0]:a=o.split("px")[0];u.indexOf("%")>-1?f=t.$element.height()/100*u.split("%")[0]:f=u.split("px")[0];var l={HTMLobj:i,order:n,pxBgWidth:a,pxBgHeight:f,src:i.data("src"),xrange:i.data("x-range")||20,yrange:i.data("y-range")||20};t.layers.push(l);i.css({width:a,backgroundSize:a+l.xrange*2,backgroundRepeat:"no-repeat",position:"relative",marginTop:-t.$element.height()*l.order})});this.$element.append(e('<div class="fp-loading"></div>').css({marginTop:-this.$element.height()/2-20}));this.preloadImages();e(r).mousemove(function(e){t.x_cursor=e.pageX;t.y_cursor=e.pageY})};o.prototype.preloadImages=function(){var t=this,n=[];for(var r=0;r<this.layers.length;r++){var i=new Image;i.src=this.layers[r].src;i.i=r;i.onload=function(){t.layers[this.i].HTMLobj.css({backgroundImage:"url("+this.src+")"});t.layers[this.i].HTMLobj.fadeIn();n.push(this);if(n.length===t.layers.length){e(".fp-loading").fadeOut();t.main_interval=setInterval(function(){t.update()},t.update_rate)}}}};o.prototype.update=function(){var e=this.docDim.width/2-this.x_cursor,t=this.docDim.height/2-this.y_cursor;for(var n=0;n<this.layers.length;n++){var r=this.layers[n],i=this.docDim.width/2/r.xrange,s=this.docDim.height/2/r.yrange,o=-r.xrange+e/i,u=-r.yrange+t/s,a=o+"px "+u+"px";r.HTMLobj.css({backgroundPosition:a})}};e.fn[i]=function(t){return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new o(this,t))})}})(jQuery,undefined,window,document);