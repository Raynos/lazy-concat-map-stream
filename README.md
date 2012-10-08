# lazy-concat-map-stream

Wrap a stream with concat mapdashery

## Example

```
var from = require("read-stream").fromArray
    , to = require("write-stream").toArray
    , concatMap = require("lazy-concat-map-stream")

concatMap(from([1,2,3,4,5]), function (item, cb) {
    cb(null, item % 2 ? [ item, item * 4] : [])
}).pipe(to(function (list) {
    console.log("list", list)
    // [ 1, 4, 3, 12, 5, 20 ]
}))
```

## Installation

`npm install lazy-concat-map-stream`

## Contributors

 - Raynos

## MIT Licenced