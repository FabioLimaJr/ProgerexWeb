unit Template.Litam;

interface

  Const PathTheme = 'app/';


  Function GetHead: String;
  Function GetFooter: String;

  Function GetHeadLogin: String;
  Function GetFooterLogin: String;

implementation


Function GetHead: String;
begin
//  Result := ' <link rel="icon" href="' + PathTheme + 'img/core-img/favicon.png"> '+
//            ' <link rel="stylesheet" href="' + PathTheme + 'style.css">          ';


    Result := ' <link rel="icon" href="' + PathTheme + 'img/core-img/favicon.png">                                       '+
              ' <link rel="stylesheet" href="' + PathTheme + 'js/default-assets/vector-map/jquery-jvectormap-2.0.2.css"> '+
              ' <link rel="stylesheet" href="' + PathTheme + 'style.css">                                                ';

end;

Function GetFooter: String;
begin
//  Result := ' <script src="' + PathTheme + 'js/jquery.min.js"></script>             '+
//            ' <script src="' + PathTheme + 'js/popper.min.js"></script>             '+
//            ' <script src="' + PathTheme + 'js/bootstrap.min.js"></script>          '+
//            ' <script src="' + PathTheme + 'js/bundle.js"></script>                 '+
//            ' <script src="' + PathTheme + 'js/vivus.min.js"></script>              '+
//            ' <script src="' + PathTheme + 'js/svg.animation.js"></script>          '+
//            ' <script src="' + PathTheme + 'js/canvas.js"></script>                 '+
//            ' <script src="' + PathTheme + 'js/collapse.js"></script>               '+
//            ' <script src="' + PathTheme + 'js/settings.js"></script>               '+
//            ' <script src="' + PathTheme + 'js/template.js"></script>               '+
//            ' <script src="' + PathTheme + 'js/default-assets/active.js"></script>  ';



  Result := ' <script src="' + PathTheme + 'js/jquery.min.js"></script>                               '+
   ' <script src="' + PathTheme + 'js/popper.min.js"></script>                               '+
   ' <script src="' + PathTheme + 'js/bootstrap.min.js"></script>                            '+
   ' <script src="' + PathTheme + 'js/bundle.js"></script>                                   '+
   ' <script src="' + PathTheme + 'js/vivus.min.js"></script>                                '+
   ' <script src="' + PathTheme + 'js/svg.animation.js"></script>                            '+
   ' <script src="' + PathTheme + 'js/canvas.js"></script>                                   '+
   ' <script src="' + PathTheme + 'js/collapse.js"></script>                                 '+
   ' <script src="' + PathTheme + 'js/settings.js"></script>                                 '+
   ' <script src="' + PathTheme + 'js/template.js"></script>                                 '+
   ' <script src="' + PathTheme + 'js/default-assets/active.js"></script>                    '+
   ' <script src="' + PathTheme + 'js/default-assets/apexcharts.min.js"></script>            '+
   ' <script src="' + PathTheme + 'js/default-assets/stock-price.js"></script>               '+
   ' <script src="' + PathTheme + 'js/default-assets/irregular-date-series.js"></script>     '+
   ' <script src="' + PathTheme + 'js/default-assets/demo.apex-line.js"></script>            '+
   ' <script src="' + PathTheme + 'js/default-assets/demo.home-project.js"></script>         '+
   ' <script src="' + PathTheme + 'js/default-assets/jquery.knob.js"></script>               '+
   ' <script src="' + PathTheme + 'js/default-assets/jquery.appear.js"></script>             '+
   ' <script src="' + PathTheme + 'js/default-assets/knob-active.js"></script>               '+
   ' <script src="' + PathTheme + 'js/default-assets/home.js"></script>                      '+
   ' <script src="' + PathTheme + 'js/default-assets/am-chart.js"></script>                  '+
   ' <script src="' + PathTheme + 'js/default-assets/gauge.js"></script>                     '+
   ' <script src="' + PathTheme + 'js/default-assets/serial.js"></script>                    '+
   ' <script src="' + PathTheme + 'js/default-assets/light.js"></script>                     '+
   ' <script src="' + PathTheme + 'js/default-assets/ammap.min.js"></script>                 '+
   ' <script src="' + PathTheme + 'js/default-assets/worldlow.js"></script>                  '+
   ' <script src="' + PathTheme + 'js/default-assets/radar.js"></script>                     '+
   ' <script src="' + PathTheme + 'js/default-assets/widget-page-chart-active.js"></script>  ';

end;

Function GetHeadLogin: String;
begin
  Result := ' <link rel="icon" href="' + PathTheme + 'img/core-img/favicon.png"> '+
            ' <link rel="stylesheet" href="' + PathTheme + 'style.css">          ';
end;

Function GetFooterLogin: String;
begin
  Result := ' <script src="' + PathTheme + 'js/jquery.min.js"></script>            '+
            ' <script src="' + PathTheme + 'js/popper.min.js"></script>            '+
            ' <script src="' + PathTheme + 'js/bootstrap.min.js"></script>         '+
            ' <script src="' + PathTheme + 'js/bundle.js"></script>                '+
            ' <script src="' + PathTheme + 'js/default-assets/active.js"></script> ';
end;






end.
