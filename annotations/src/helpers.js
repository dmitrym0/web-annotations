EpubAnnotations.Helpers = {
    getMatrix: function ($obj) {
        var matrix = $obj.css("-webkit-transform") ||
            $obj.css("-moz-transform") ||
            $obj.css("-ms-transform") ||
            $obj.css("-o-transform") ||
            $obj.css("transform");
        return matrix;
    },
    getScaleFromMatrix: function (matrix) {
        var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
            matches = matrix.match(matrixRegex);
        return matches;
    }
};