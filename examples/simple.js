var from = require("read-stream").fromArray
    , to = require("write-stream").toArray

    , concatMap = require("..")

concatMap(from([1,2,3,4,5]), function (item, cb) {
    cb(null, item % 2 ? [ item, item * 4] : [])
}).pipe(to(function (list) {
    console.log("list", list)
}))
