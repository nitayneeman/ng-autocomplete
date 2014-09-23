angular.module('ng-autocomplete', []).
    directive('autocomplete', function () {
        return {
            restrict: 'E',
            scope: {
                hints: '=',
                onSubmit: '&',
                onBlur: '&'
            },
            controller: function ($scope, $element, $attrs) {
                if ($attrs['showbutton'] === 'false') {
                    $scope.showButton = false;
                }
                else {
                    $scope.showButton = true;
                }
            },
            link: function (scope, element, attrs) {
                element.autocomplete({
                    hints: scope.hints,
                    placeholder: attrs['placeholder'],
                    width: Number(attrs['width']),
                    height: Number(attrs['height']),
                    showButton: scope.showButton,
                    buttonText: attrs['buttontext'],
                    onSubmit: scope.onSubmit,
                    onBlur: scope.onBlur
                });
            }
        };
    }
);