var express = require('express')
var router = express.Router()
var ProductService = require('../service/ProductService')
var fs = require('fs')

// router.post('/imgUpload', function (req, res) {
//   var sampleFile

//   if (!req.files) {
//     res.send('No files were uploaded.')
//     return
//   }

//   sampleFile = req.files.sampleFile
//   sampleFile.mv(basePath + '/public/uploads/' + req.files.sampleFile.name , function (err) {
//     if (err) {
//       res.status(500).send(err)
//     }else {
//       res.send(basePath + '/public/uploads/' + req.files.sampleFile.name)
//     }
//   })

// upload(req, res, function (err) {
//   console.log({error_code: 0,err_desc: null})
// })
// return res.send(req.files)
// })

var multer = require('multer')

var storage = multer.diskStorage({ // multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, basePath + '/public/uploads/temps/')
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now()
    req.fileName = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
  }
})

var upload = multer({ // multer settings
  storage: storage
}).single('file')

var moveFiletoUploadDir = function (imgName, callback) {
  var source = basePath + '/public/uploads/temps/' + imgName
  var dest = basePath + '/public/uploads/' + imgName
  var readStream = fs.createReadStream(source)
  var writeStream = fs.createWriteStream(dest)

  readStream.on('error', callback)
  writeStream.on('error', callback)

  readStream.on('close', function () {
    fs.unlink(source, callback)
  })

  readStream.pipe(writeStream)
}

/** API path that will upload the files */
router.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      res.json({error_code: 1,err_desc: err})
      return
    }
    res.json({error_code: 0,err_desc: null, fileName: res.req.fileName})
  })
})

router.post('/save', function (req, res, next) {
  ProductService.saveProduct(req.body, function (err, response) {
    if (err) {
      return res.send('ERROR : ' + err)
    }
    moveFiletoUploadDir(res.req.body.imgName, function (err, data) {
      res.send(response)
    })
  })
})

router.post('/getProducts', function (req, res, next) {
  ProductService.getProducts(req.body, function (err, products) {
    if (err) {
      return res.send('ERROR : ' + err)
    }
    res.send(products)
  })
})

router.post('/deleteProduct', function (req, res, next) {
  ProductService.deleteProduct(req.body, function (err, products) {
    if (err) {
      return res.send('ERROR : ' + err)
    }
    res.send('Product Deleted Successfully!')
  })
})

module.exports = router
