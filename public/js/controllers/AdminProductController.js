app.controller('AdminProductController', [
  '$scope',
  'AdminService',
  'toastr',
  'DataService',
  'Upload',
  function (
    $scope,
    AdminService,
    toastr,
    DataService,
    Upload) {

    document.getElementById('file').onchange = function () {
       $scope.upload(document.getElementById('file').files[0])
    }

    $scope.submit = function () { // function to call on form submit
      if ($scope.fileForm.file.$valid && $scope.file) { // check if from is valid
        $scope.upload($scope.file) // call upload function
      }
    }

    $scope.upload = function (file) {
      Upload.upload({
        url: 'http://localhost:3000/product/upload', // webAPI exposed to upload the file
        data: {file: file} // pass file as data, should be user ng-model
      }).then(function (resp) { // upload function returns a promise
        if (resp.data.error_code === 0) { // validate success
          $scope.product.imgName = resp.data.fileName
        // alert('Success ' + resp.data.file.name + ' uploaded. Response: ')
        } else {
          alert('an error occured')
        }
      }, function (resp) { // catch error
        console.log('Error status: ' + resp.status)
        alert('Error status: ' + resp.status)
      }, function (evt) {
        console.log(evt)
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total)
        console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name)
        $scope.progress = 'progress: ' + progressPercentage + '% ' // capture upload progress
      })
    }

    if (DataService.getProduct()) {
      $scope.isEdit = true
      $scope.product = DataService.getProduct()
    } else {
      $scope.product = {}
    }

    $scope.saveProduct = function () {
      if ($scope.isEdit)
        $scope.product.isEdit = true
      AdminService.saveProduct($scope.product).then(function (response) {
        toastr.success('Product Added Successfully!')
        $scope.product = {}
      })
    }

  // $scope.upload = function (file) {
  //   Upload.upload({
  //     url: 'upload/url',
  //     data: {file: file, 'username': $scope.username}
  //   }).then(function (resp) {
  //     console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data)
  //   }, function (resp) {
  //     console.log('Error status: ' + resp.status)
  //   }, function (evt) {
  //     var progressPercentage = parseInt(100.0 * evt.loaded / evt.total)
  //     console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name)
  //   })
  // }
  }])
