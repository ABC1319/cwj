﻿function randomString(c){var d="abcdefghijklmnopqrstuvwxyz";var a="";for(var b=c;b>0;--b){a+=d[Math.floor(Math.random()*d.length)]}return a}var id=randomString(5);var roll=randomString(6);document.write("<style>#"+id+"{height:58px;overflow:hidden;width:322px;border:dashed 0.5px #07c160;margin: 4 auto 4 auto;}."+roll+" li{font-size:12px;text-indent:-30px;padding: 2 0 2 0;line-height:1;}.icon{width:24px;margin-right:2;vertical-align:middle}</style>");document.write("<div id="+id+'><ul class="'+roll+'" style="margin-block:0px;padding-inline-start:33px;"><li><img class="icon" src="https://p1.music.126.net/xdWqah0JXvPwDGXwWiv2rQ==/109951168114272525.png"><a href="https://pic.rmb.bdstatic.com/bjh/eb5d19dc207d8870e620e6f6a13d9c7f68.jpeg">同程旅行活动：QQ音乐会员仅需6元／月！</a></li><li><img class="icon" src="https://wework.qpic.cn/wwpic/654570_DIJtzL7fQx-GQFM_1669981454/0"><a href="https://docs.qq.com/doc/DZHdwQU9ocWRuTkx1">莆田珂珂鞋厂，自家工厂，全网最低价格，最高品质！</a></li><li><img class="icon" src="https://p1.music.126.net/OPyEiHMrcbhM4mlX7eg2mA==/109951168117974767.jpg"><a href="https://m.tb.cn/h.UiH9NrL">连花清蕴：《新型冠状病毒肺炎诊疗方案》明确推荐，新冠轻症必备！</a></li><li><img class="icon" src="https://p1.music.126.net/47zyIRL91m8zYUXLPtZpFg==/109951168117954268.jpg"><a href="https://u.jd.com/et8wLRz">布洛芬：止痛、退烧必备，劵后价3盒仅需¥29！</a></li><li><img class="icon" src="https://wework.qpic.cn/wwpic/116652_OUhwt15PRzm1bQb_1669981494/0"><a href="https://flowus.cn/share/1c2067a2-82eb-460b-afd5-77b7bf591b3b">尚德考研丨价值699元在职研考研资料，限额0元领取</a></li><li><img class="icon" src="https://wework.qpic.cn/wwpic/831157_ITNqee-RQembtLi_1669981516/0"><a href="https://flowus.cn/share/0ee85362-74eb-4167-9a1c-3622204ee815">国内顶尖AI配音神器魔音工坊，阿虚粉丝9折优惠！</a></li></ul></div>');$(function(){var c=$("#"+id);var b;c.hover(function(){clearInterval(b)},function(){b=setInterval(function(){a(c)},2000)}).trigger("mouseleave");function a(e){var f=e.find("ul");var d=f.find("li:first").height();f.animate({marginTop:-d+"px"},500,function(){f.css({marginTop:0}).find("li:first").appendTo(f)})}});