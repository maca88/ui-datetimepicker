angular.module("template/datetimepicker/datetimepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datetimepicker/datetimepicker.html",
    "<div ng-switch=\"datetimepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" +
    "    <dt-timepicker ng-switch-when=\"time\" tabindex=\"0\"></dt-timepicker>\n" +
    "    <dt-daypicker ng-switch-when=\"day\" tabindex=\"0\"></dt-daypicker>\n" +
    "    <dt-monthpicker ng-switch-when=\"month\" tabindex=\"0\"></dt-monthpicker>\n" +
    "    <dt-yearpicker ng-switch-when=\"year\" tabindex=\"0\"></dt-yearpicker>\n" +
    "</div>");
}]);
