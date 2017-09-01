function parseJson(val) {
    var i = 0
    return parse(val)

    function parse(val) {
        for (i; i < val.length; i++) {
            if (val[i] === '{') {
                return parseObject(val)
            } else if (val[i] === '[') {
                return parseArray(val)
            } else if (val[i] === 'n' || val[i] === 't' || val[i] === 'f' || val[i] === 'u') {
                return Nullortrueorfalse(val)
            } else if (val[i] === '"') {
                return parseString(val)
            } else {
                return parseNumber(val)
            }
        }
    }

    function parseString(val) {
        let re = '';
        for (++i;; i++) {
            if (val[i] !== '"') {
                re += val[i]
            } else break
        }
        return re
    }

    function parseObject(val) {
        let re = {}
        let temp = ""
        while (val[++i] != "}") {
            temp = ""
            while (val[i] != ":") {
                if (val[i] === '"' || val[i] === ',') {
                    i++
                } else {
                    temp += val[i]
                    i++;
                }
            }
            if (val[i] === ":") {
                i++;
                re[temp] = parse(val)
            }
        }
        return re
    }

    function parseArray(val) {
        let re = []
        for (++i;; i++) {
            if (val[i] === ']') return re;
            else if (val[i] === ',') continue;
            else {
                re.push(parse(val))
            }
        }
    }

    function Nullortrueorfalse(val) {
        if (val[i] === 'n') {
            i = i + 3;
            return null
        }
        if (val[i] === 't') {
            i = i + 3
            return true
        }
        if (val[i] === 'f') {
            i = i + 4
            return false
        }
        if (val[i] === 'u') {
            i = i + 8
            return undefined
        }
    }

    function parseNumber(val) {
        let re = '';
        for (i;; i++) {
            if (!isNaN(val[i])) {
                re += val[i]
            } else break;
        }
        i--
        return +re
    }
}