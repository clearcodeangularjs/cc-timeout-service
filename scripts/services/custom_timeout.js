/*

    Copyright (C) 2012-2013 by Clearcode <http://clearcode.cc>
    and associates (see AUTHORS).

    This file is part of cc-timeout-service.

    cc-timeout-service is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    cc-timeout-service is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with cc-timeout-service.  If not, see <http://www.gnu.org/licenses/>.

*/
angular.module('cc.timeout.service').factory('customTimeout', ['$rootScope', function($rootScope) {
    return function(fn, delay, invokeApply) {
        if(angular.isUndefined(delay)) {
            delay = 0;
        }
        if(angular.isUndefined(invokeApply)) {
            invokeApply = true;
        }
        setTimeout(function() {
            if(invokeApply) {
                $rootScope.$apply(fn);
            }
            else {
                fn();
            }
        }, delay);
    };
}]);
