$(function(){"use strict";$("#sparkline3").sparkline("html",{width:320,height:70,lineColor:"#450b5a",fillColor:"rgba(69, 11, 90, 0.50)"});var t=$("#barChart").get(0).getContext("2d"),a={scaleBeginAtZero:!0,scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:30,barDatasetSpacing:1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',responsive:!0,maintainAspectRatio:!0,datasetFill:!1};new Chart(t).Bar({labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Electronics",fillColor:"#450b5a",strokeColor:"rgba(38,198,218,0)",pointColor:"#4ac6ec",pointStrokeColor:"rgba(38,198,218,0)",pointHighlightFill:"#fff",pointHighlightStroke:"#450b5a;",data:[5,4,3,7,5,10,3]},{label:"Digital Goods",fillColor:"#462f3f",strokeColor:"rgba(30,136,229,0)",pointColor:"rgba(30,136,229,0)",pointStrokeColor:"#1e88e5",pointHighlightFill:"#fff",pointHighlightStroke:"#f9784a",data:[3,2,9,5,4,6,4]}]},a)}),function(t){"use strict";function a(){for(o.length>0&&(o=o.slice(1));o.length<e;){var t=(o.length>0?o[o.length-1]:50)+10*Math.random()-5;0>t?t=0:t>90&&(t=90),o.push(t)}for(var a=[],i=0;i<o.length;++i)a.push([i,o[i]]);return a}for(var o=[],e=100,i=[],l=0;10>=l;l+=1)i.push([l,parseInt(30*Math.random())]);var r=[];for(l=0;20>=l;l+=1)r.push([l,parseInt(30*Math.random())]);var s=[];for(l=0;10>=l;l+=1)s.push([l,parseInt(30*Math.random())]);var n={series:{shadowSize:0,lines:{show:!1,lineWidth:0}},grid:{borderWidth:0,labelMargin:10,hoverable:!0,clickable:!0,mouseActiveRadius:6},xaxis:{tickDecimals:0,ticks:!1},yaxis:{tickDecimals:0,ticks:!1},legend:{show:!1}};t("#line-chart")[0]&&t.plot(t("#line-chart"),[{data:i,lines:{show:!0,fill:.98},label:"Product 1",stack:!0,color:"#e3e3e3"},{data:s,lines:{show:!0,fill:.98},label:"Product 2",stack:!0,color:"#450b5a"}],n),t("#recent-items-chart")[0]&&t.plot(t("#recent-items-chart"),[{data:a(),lines:{show:!0,fill:.99},label:"Items",stack:!0,color:"#450b5a"}],n),t(".flot-chart")[0]&&(t(".flot-chart").bind("plothover",function(a,o,e){if(e){var i=e.datapoint[0].toFixed(2),l=e.datapoint[1].toFixed(2);t(".flot-tooltip").html(e.series.label+" of "+i+" = "+l).css({top:e.pageY+5,left:e.pageX+5}).show()}else t(".flot-tooltip").hide()}),t("<div class='flot-tooltip' class='chart-tooltip'></div>").appendTo("body"));for(i=[],l=0;10>=l;l+=1)i.push([l,parseInt(30*Math.random())]);for(r=[],l=0;20>=l;l+=1)r.push([l,parseInt(30*Math.random())]);for(s=[],l=0;10>=l;l+=1)s.push([l,parseInt(30*Math.random())]);var h,c,d,b;n={series:{shadowSize:0,curvedLines:{apply:!0,active:!0,monotonicFit:!0},lines:{show:!1,lineWidth:0,fill:1}},grid:{borderWidth:0,labelMargin:10,hoverable:!0,clickable:!0,mouseActiveRadius:6},xaxis:{tickDecimals:0,ticks:!1},yaxis:{tickDecimals:0,ticks:!1},legend:{show:!1}};function p(a,o,e,i,l,r){t("."+a).sparkline(o,{type:"bar",height:e,barWidth:i,barColor:l,barSpacing:r})}function f(a,o,e,i,l,r,s,n,h,c,d,b,p){t("."+a).sparkline(o,{type:"line",width:e,height:i,lineColor:l,fillColor:r,lineWidth:s,maxSpotColor:n,minSpotColor:h,spotColor:c,spotRadius:d,highlightSpotColor:b,highlightLineColor:p})}function g(a,o,e,i,l,r,s){t("."+a).easyPieChart({trackColor:o,scaleColor:e,barColor:i,lineWidth:l,lineCap:r,size:s})}t("#curved-line-chart")[0]&&t.plot(t("#curved-line-chart"),[{data:i,lines:{show:!0,fill:.98},label:"Product 1",stack:!0,color:"#e3e3e3"},{data:s,lines:{show:!0,fill:.98},label:"Product 2",stack:!0,color:"#450b5a"}],n),t(".flot-chart")[0]&&(t(".flot-chart").bind("plothover",function(a,o,e){if(e){var i=e.datapoint[0].toFixed(2),l=e.datapoint[1].toFixed(2);t(".flot-tooltip").html(e.series.label+" of "+i+" = "+l).css({top:e.pageY+5,left:e.pageX+5}).show()}else t(".flot-tooltip").hide()}),t("<div class='flot-tooltip' class='chart-tooltip'></div>").appendTo("body")),t(".stats-bar")[0]&&p("stats-bar",[6,4,8,6,5,6,7,8,3,5,9,5,8,4],"35px",3,"#450b5a",2),t(".stats-bar-2")[0]&&p("stats-bar-2",[4,7,6,2,5,3,8,6,6,4,8,6,5,8],"35px",3,"#01c0c8",2),t(".stats-line")[0]&&f("stats-line",[9,4,6,5,6,4,5,7,9,3,6,5],68,35,"#fb9678","#fb9678",1.25,"#fb9678","#fb9678","#fb9678",3,"#fb9678","#fb9678"),t(".stats-line-2")[0]&&f("stats-line-2",[5,6,3,9,7,5,4,6,5,6,4,9],68,35,"#450b5a","#450b5a",1.25,"#450b5a","#450b5a","#450b5a",3,"#450b5a","#450b5a"),t(".stats-pie")[0]&&(h=[20,35,30,5],c=45,d=45,b=["#fff","rgba(255,255,255,0.7)","rgba(255,255,255,0.4)","rgba(255,255,255,0.2)"],t("."+"stats-pie").sparkline(h,{type:"pie",width:c,height:d,sliceColors:b,offset:0,borderWidth:0})),t(".dash-widget-visits")[0]&&f("dash-widget-visits",[9,4,6,5,6,4,5,7,9,3,6,5],"100%","70px","#450b5a","#450b5a",2,"#450b5a","#450b5a","#450b5a",5,"#450b5a","#450b5a"),t(".main-pie")[0]&&g("main-pie","rgba(255,255,255,0.2)","rgba(255,255,255,0)","rgba(255,255,255,0.7)",2,"butt",148),t(".sub-pie-1")[0]&&g("sub-pie-1","rgba(255,255,255,0.2)","rgba(255,255,255,0)","rgba(255,255,255,0.7)",2,"butt",90),t(".sub-pie-2")[0]&&g("sub-pie-2","rgba(255,255,255,0.2)","rgba(255,255,255,0)","rgba(255,255,255,0.7)",2,"butt",90);var u=[{label:"Product",data:[[1,60],[2,30],[3,50],[4,100],[5,10],[6,90],[7,85]],color:"#450b5a"},{label:"Product",data:[[1,20],[2,90],[3,60],[4,40],[5,100],[6,25],[7,65]],color:"#fb9678"},{label:"Product",data:[[1,100],[2,20],[3,60],[4,90],[5,80],[6,10],[7,5]],color:"#01c0c8"}];function a(){for(o.length>0&&(o=o.slice(1));o.length<e;){var t=(o.length>0?o[o.length-1]:50)+10*Math.random()-5;0>t?t=0:t>90&&(t=90),o.push(t)}for(var a=[],i=0;i<o.length;++i)a.push([i,o[i]]);return a}t("#bar-chart")[0]&&t.plot(t("#bar-chart"),u,{series:{bars:{show:!0,barWidth:.05,order:1,fill:1}},grid:{borderWidth:1,borderColor:"#eee",show:!0,hoverable:!0,clickable:!0},yaxis:{tickColor:"#eee",tickDecimals:0,font:{lineHeight:14,style:"normal",color:"#450b5a"},shadowSize:0},xaxis:{tickColor:"#fff",tickDecimals:0,font:{lineHeight:14,style:"normal",color:"#450b5a"},shadowSize:0},legend:{container:".flc-bar",backgroundOpacity:.5,noColumns:0,backgroundColor:"white",lineWidth:0}}),t(".flot-chart")[0]&&(t(".flot-chart").bind("plothover",function(a,o,e){if(e){var i=e.datapoint[0].toFixed(2),l=e.datapoint[1].toFixed(2);t(".flot-tooltip").html(e.series.label+" of "+i+" = "+l).css({top:e.pageY+5,left:e.pageX+5}).show()}else t(".flot-tooltip").hide()}),t("<div class='flot-tooltip' class='chart-tooltip'></div>").appendTo("body"));o=[],e=300;var m=30;if(t("#dynamic-chart")[0]){var k=t.plot("#dynamic-chart",[a()],{series:{label:"Product",lines:{show:!0,lineWidth:.2,fill:.99},color:"#450b5a",shadowSize:0},yaxis:{min:0,max:100,tickColor:"#eee",font:{lineHeight:14,style:"normal",color:"#450b5a"},shadowSize:0},xaxis:{tickColor:"#eee",show:!0,font:{lineHeight:14,style:"normal",color:"#450b5a"},shadowSize:0,min:0,max:250},grid:{borderWidth:1,borderColor:"#eee",labelMargin:10,hoverable:!0,clickable:!0,mouseActiveRadius:6},legend:{show:!1}});!function t(){k.setData([a()]),k.draw(),setTimeout(t,m)}()}}(jQuery);