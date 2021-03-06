angular.module("template/datetimepicker/day.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datetimepicker/day.html",
    "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></button></th>\n" +
    "            <th colspan=\"{{5 + showWeeks}}\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
    "            <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-right\"></span></button></th>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <th ng-show=\"showWeeks\" class=\"text-center\"></th>\n" +
    "            <th ng-repeat=\"label in labels track by $index\" class=\"text-center\"><small aria-label=\"{{label.full}}\">{{label.abbr}}</small></th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr ng-repeat=\"row in rows track by $index\">\n" +
    "            <td ng-show=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
    "            <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" +
    "                <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-muted': dt.secondary, 'text-info': dt.current}\">{{dt.label}}</span></button>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "    <tfoot ng-if=\"showTime\">\n" +
    "        <tr>\n" +
    "            <td colspan=\"{{7 + showWeeks}}\">\n" +
    "                <div calss=\"text-center\" style=\"padding:10px 9px 2px\">\n" +
    "                    <a ng-click=\"toggleMode(-1)\" class=\"btn btn-link\" style=\"width:100%\"><span class=\"glyphicon glyphicon-time\"></span></a>\n" +
    "                </div>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tfoot>\n" +
    "</table>");
}]);
