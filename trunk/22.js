if(!e_h){var e_h="500px"}
if(e_h.indexOf('%')>-1){e_h=e_h.replace('%','px');}
else if(e_h.indexOf('px')>-1){}
else{e_h=e_h+"px";}
if(!e_w){var e_w="100%"}
if(!e_s){var e_s="no"}
else if(e_s.toLowerCase().indexOf('no')>-1){e_s="no"}
else if(e_s.toLowerCase().indexOf('yes')>-1){e_s="yes"}
else{var e_s="no"}
if(!e_tv){var e_tv="no"}
else if(e_tv.toLowerCase().indexOf('no')>-1){e_tv="no"}
else if(e_tv.toLowerCase().indexOf('yes')>-1){e_tv="yes"}
else{var e_tv="no"}
if(!e_u){var e_u="coolkora.com"}
document.write("<style>#ch_container {text-align:center;margin: 0 auto;padding: 3px 12px;background-color: #000000;color: #FFFFFF;-webkit-border-radius: 7px;-moz-border-radius: 7px;border-radius: 7px;border: 1px solid #C2C2C2;box-shadow: 3px 3px 3px #414141;}</style><div id='ch_container'><iframe frameborder='0' height='"+e_h+"' src='//cast."+e_u+"/?"+e_i+"' allowtransparency='true' width='"+e_w+"' name='PR' title='PR' scrolling='"+e_s+"' style='-webkit-border-radius: 7px;-moz-border-radius: 7px;border-radius: 7px;'></iframe></div>");if(e_tv==="yes"){document.write("<div id='tv_container' style='background: url(//2.bp.blogspot.com/-68Bhu7f0oIc/UsT-ClPMjII/AAAAAAAAH68/xIa0LEfi8dQ/s1600/lg-tv.png);height: 60px;width: "+e_w+";margin: 0 auto;background-repeat: no-repeat;background-position: 50% 0;background-size: contain;'></div>");}
if(e_w.indexOf('%')>-1){document.getElementById("ch_container").style.width="auto";}
else if(e_w.indexOf('px')>-1){document.getElementById("ch_container").style.width=e_w;}
else{e_w=e_w+"px";document.getElementById("ch_container").style.width=e_w;document.getElementById("tv_container").style.width=e_w;}