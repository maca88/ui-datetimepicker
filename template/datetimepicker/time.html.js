angular.module("template/datetimepicker/time.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datetimepicker/time.html",
    "<table class=\"text-center\" style=\"margin: 20px;\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th colspan=\"5\">\n" +
    "                <div calss=\"text-center\" style=\"padding:10px 9px 2px\">\n" +
    "                    <a ng-click=\"toggleMode()\" class=\"btn\" style=\"width:100%\"><span class=\"glyphicon glyphicon-calendar\"></span></a>\n" +
    "                </div>\n" +
    "            </th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr>\n" +
    "            <td><a ng-click=\"time.incrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "            <td>&nbsp;</td>\n" +
    "            <td><a ng-click=\"time.incrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "            <td>&nbsp;</td>\n" +
    "            <td ng-show=\"time.showMeridian\"></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td style=\"width:50px;\"  class=\"form-group\" ng-class=\"{'has-error': time.invalidHours}\">\n" +
    "                <input style=\"width:50px;\" type=\"text\" ng-model=\"time.hours\" data-part=\"hour\" ng-change=\"time.updateHours()\" class=\"form-control text-center\" ng-mousewheel=\"time.incrementHours()\" ng-readonly=\"time.readonlyInput\" maxlength=\"2\">\n" +
    "            </td>\n" +
    "            <td style=\"width:50px;\">:</td>\n" +
    "            <td style=\"width:50px;\" class=\"form-group\" ng-class=\"{'has-error': time.invalidMinutes}\">\n" +
    "                <input style=\"width:50px;\" type=\"text\" ng-model=\"time.minutes\" data-part=\"minute\" ng-change=\"time.updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"time.readonlyInput\" maxlength=\"2\">\n" +
    "            </td>\n" +
    "            <td style=\"width:20px;\">&nbsp;</td>\n" +
    "            <td style=\"width:50px;\" ng-show=\"time.showMeridian\" ><button type=\"button\" class=\"btn btn-primary text-center\" ng-click=\"time.toggleMeridian()\">{{time.meridian}}</button></td>\n" +
    "        </tr>\n" +
    "        <tr class=\"text-center\">\n" +
    "            <td><a ng-click=\"time.decrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "            <td>&nbsp;</td>\n" +
    "            <td><a ng-click=\"time.decrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "            <td>&nbsp;</td>\n" +
    "            <td ng-show=\"time.showMeridian\"></td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>");
}]);
