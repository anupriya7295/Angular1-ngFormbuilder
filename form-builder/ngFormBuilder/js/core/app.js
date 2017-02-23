angular
  .module("formBuilder", ["ui.bootstrap", "ui.select", "formio", "ngFormBuilder", "ngJsonExplorer"])
  .run([
    "$rootScope",
    'formioComponents',
    '$timeout',
    '$http',
    function(
      $rootScope,
      formioComponents,
      $timeout,
      $http
    ) {
      $rootScope.displays = [{
        name: 'form',
        title: 'Form'
      }, {
        name: 'wizard',
        title: 'Wizard'
      }];
      var urlParams = new URLSearchParams(window.location.search);
      jsonName = urlParams.get('form')
      $rootScope.cssName=jsonName;
      console.log($rootScope.jsonName);
      $http.get('json/custom/forms/'+jsonName+'.json')
        .then(function(result) {
          $rootScope.form = result.data;
          $rootScope.renderForm = true;
          $rootScope.$on('formUpdate', function(event, form) {
            angular.merge($rootScope.form, form);
            console.log(JSON.stringify($rootScope.form));
            console.log("**********************************************************8");
            $rootScope.renderForm = false;
            setTimeout(function() {
              $rootScope.renderForm = true;
            }, 10);
          });

          var originalComps = _.cloneDeep($rootScope.form.components);
          originalComps.push(angular.copy(formioComponents.components.button.settings));
          $rootScope.form.components = originalComps;
        });
    }
  ]);
  $(document).ready(function() {
       $("<input type='text' class='form-control' style='width:13%;display:inherit;border: 1px solid grey;'/>").appendTo('.test');
     });
