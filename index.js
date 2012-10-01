var proxy = require("proxy-stream")

module.exports = concatMap

function concatMap(stream, iterator) {
    var proxied = proxy(stream, transformation)

    return proxied

    function transformation(chunk, next, end) {
        if (iterator.length === 2) {
            iterator(chunk, callback)
        } else {
            var list = iterator(chunk)
            list.forEach(next)
            end()
        }

        function callback(err, result) {
            if (err) {
                return proxied.emit("error", err)
            }

            result.forEach(next)
            end()
        }
    }
}
