var diaozhatian_shiwo = {
    /**
     * 这个函数是干嘛的
     * @param {参数类型} [参数名字] [参数描述]
     * @param {参数类型} [参数名字] [参数描述]
     * @param {参数类型} [参数名字] [参数描述]
     * @param {参数类型} [参数名字] [参数描述]
     * @return {[type]} [description]
     */

    //   _.chunk(['a', 'b', 'c', 'd'], 2);
    // => [['a', 'b'], ['c', 'd']]

    // _.chunk(['a', 'b', 'c', 'd'], 3);
    //  => [['a', 'b', 'c'], ['d']]
    chunk: function(ar, size = 1) {
        var result = []
        for (var i = 0; i <= ar.length - 1; i += size) {
            result.push(ar.slice(i, i + size))
        }
        return result
    },
    /**
     * @return {[type]}
     * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey
     * _.compact([0, 1, false, 2, '', 3]); => [1, 2, 3]
     */
    compact: function(n) {
        var s = []
        for (i = 0; i < n.length; i++) {
            if (n[i]) {
                s.push(n[i])
            }
        }
        return s
    },
    /**
     difference([2, 1], [2, 3]); => [1]
     */
    difference: function(a1, a2) {
        for (i = 0; i < a1.length; i++) {
            for (j = 0; j < a2.length; j++) {
                if (a1[i] == a2[j]) {
                    a1.splice(i, 1)
                }
            }
        }
        return a1
    },
    // array(Array): The array to inspect.
    //     [values](...Array): The values to exclude.
    //     [iteratee = _.identity](Function): The iteratee invoked per element.
    differenceBy: function(array, values, iteratee) {
        if (typeof iteratee === 'function') {
            var ar = array.map(it => iteratee(it))
            var va = values.map(it => iteratee(it))
        } else {
            var ar = array.map(it => it[iteratee])
            var va = values.map(it => it[iteratee])
        }
        var temp = Array(ar.length).fill(true)
        var re = []
        for (let i = 0; i < ar.length; i++) {
            for (let j = 0; j < va.length; j++) {
                if (ar[i] == va[j]) {
                    temp[i] = false
                }
            }
        }
        for (let i = 0; i < ar.length; i++) {
            if (temp[i]) {
                re.push(array[i])
            }
        }
        return re
    },

    // array(Array): The array to inspect.
    //     [values](...Array): The values to exclude.
    //     [comparator](Function): The comparator invoked per element.
    //     The comparator is invoked with two arguments: (arrVal, othVal).
    differenceWith: function(array, values, comparator) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < values.length; j++) {
                if (comparator(array[i], values[j])) {
                    array.splice(i, 1)
                }
            }
        }
        return array
    },

    //     var array = [1, 2, 3];  _.fill(array, 'a');
    // console.log(array); => ['a', 'a', 'a']
    // _.fill(Array(3), 2); => [2, 2, 2] 
    // _.fill([4, 6, 8, 10], '*', 1, 3); => [4, '*', '*', 10]
    fill: function(ar, value, start = 0, end = ar.length) {
        var re = []
        for (i = 0; i < ar.length; i++) {
            if (i < start) { re.push(ar[i]) }
            if (i >= start && i < end) { re.push(value) }
            if (i >= end) { re.push(ar[i]) }
        }
        return re
    },
    // var fill2=function(ar, value, start = 0, end = ar.length) {
    //  for(i=start;i<end;i++){
    //    ar[i]=value
    //  }return ar
    // }
    //   Arguments  array (Array): The array to query.
    //              [n=1] (number): The number of elements to drop.
    // Returns (Array): Returns the slice of array.
    drop: function(ar, n = 1) {
        var re = []
        if (n >= ar.length) return re
        for (i = n; i < ar.length; i++) {
            re[i - n] = ar[i]
        }
        return re
    },
    // 与上面的相反,从右边开始
    dropRight: function(ar, n = 1) {
        var re = []
        if (n >= ar.length) return re
        for (i = 0; i < ar.length - n; i++) {
            re[i] = ar[i]
        }
        return re
    },

    dropRightWhile: function(ary, pre) {
        var f = this.modifypara(pre)
        for (let i = ary.length - 1; i >= 0; i--) {
            if (!f(ary[i])) {
                return ary.slice(0, i + 1)
            }
        }
    },

    dropWhile: function(ary, pre) {
        var f = this.modifypara(pre)
        for (let i = 0; i < ary.length; i++) {
            if (!f(ary[i])) {
                return ary.slice(i)
            }
        }
    },

    findIndex: function(ary, pre, fromindex = 0) {
        var f = this.modifypara(pre)
        for (let i = fromindex; i < ary.length; i++) {
            if (f(ary[i], i, ary)) {
                return i
            }
        }
        return -1
    },

    findLastIndex: function(ary, pre, fromindex = ary.length - 1) {
        var f = this.modifypara(pre)
        for (let i = fromindex; i >= 0; i--) {
            if (f(ary[i], i, ary)) {
                return i
            }
        }
        return -1
    },



    // 去掉数组里的第一层数组花括号
    flatten: function(ar) {
        var re = []
        for (i = 0; i < ar.length; i++) {
            if (Array.isArray(ar[i])) {
                for (j = 0; j < ar[i].length; j++) {
                    re.push(ar[i][j])
                }
            } else {
                re.push(ar[i])
            }
        }
        return re
    },
    // 去掉数组里的所有数组花括号,统一为一维数组
    flattenDeep: function(ar) {
        var re = []
        for (var i = 0; i < ar.length; i++) {
            if (Array.isArray(ar[i])) {
                re = re.concat(this.flattenDeep(ar[i]))
            } else {
                re.push(ar[i])
            }
        }
        return re
    },
    // depth决定删除几层数组花括号,1的就相当与flatten
    flattenDepth: function(ar, depth = 1) {
        var count = 1
        while (depth >= count) {
            var re = []
            count++
            for (i = 0; i < ar.length; i++) {
                if (Array.isArray(ar[i])) {
                    for (j = 0; j < ar[i].length; j++) {
                        re.push(ar[i][j])
                    }
                } else {
                    re.push(ar[i])
                }
            }
            ar = re
        }
        return ar
    },
    //The inverse of _.toPairs; this method returns an object composed from key-value pairs.
    //pairs (Array): The key-value pairs.
    //Returns(Object): Returns the new object.
    fromPairs: function(pairs) {
        var re = {}
        for (let i = 0; i < pairs.length; i++) {
            re[pairs[i][0]] = pairs[i][1]
        }
        return re
    },
    // 返回数组的第一个值
    head: function(ar) {
        return ar[0]
    },
    //从 fromIndex检索位置起开始找 value值,找到return Index
    indexOf: function(ar, value, fromIndex = 0) {
        for (var i = fromIndex; i <= ar.length; i++) {
            if (ar[i] == value) {
                return i
            }
        }
    },
    // 除了最后一项其他都保留
    initial: function(ar) {
        ar.pop()
        return ar
    },
    //输入一堆数组,将所有数组共有部分提取出来形成新的一个数组,顺序按在第一个数组的顺序排位.
    intersection: function(...ars) {
        var le0 = ars[0].length
        var len = ars.length
        var count
        var re = []
        for (var i = 0; i < le0; i++) {
            count = 0
            for (var j = 1; j < len; j++) {
                for (var k = 0; k < ars[j].length; k++) {
                    if (ars[0][i] == ars[j][k]) {
                        count++
                        ars[j][k] = {}
                        break;
                    }
                }
            }
            if (count == len - 1) {
                re.push(ars[0][i])
            }
        }
        return re
        // intersection2([4,2,2,1, 2, 3], [2,2,3,4,1], [1,4, 5,2,2, 6, 7,3], [4,3,2,1, 2])
    },
    //方法二 如果数组很多的话,这个方法的性能更好
    //  var intersection2 = function(...ars) {
    //     // debugger
    //     var le = ars.length
    //     var count1
    //     var count2
    //     var re = []
    //     var temp = ars[0].join("")
    //     var result = []
    //     for (i = 0; i < le; i++) {
    //         count1 = 0
    //         for (var k = 0; k < le; k++) {
    //             if (i == k) continue
    //             if (ars[i].length <= ars[k].length) count1++;
    //         }
    //         if (count1 == le - 1) break;
    //     }
    //     var min = ars[i].length
    //     for (var m = 0; m < min; m++) {
    //         count2 = 0
    //         for (var j = 0; j < le; j++) {
    //             if (j == i) continue;
    //             for (var k = 0; k < ars[j].length; k++) {
    //                 if (ars[i][m] == ars[j][k]) {
    //                     count2++;
    //                     ars[j][k] = Math.random()
    //                     break;
    //                 }
    //             }
    //         }
    //         if (count2 == le - 1) re.push(ars[i][m])
    //     }
    //     for (var m = 0; m < temp.length; m++) {
    //         for (var n = 0; n < re.length; n++) {
    //             if (temp[m] == re[n]) {
    //                 result.push(re[n])
    //                 re[n] = Math.random()
    //                 break;
    //             }
    //         }
    //     }
    //     return result
    // }
    // intersection2([2, 2, 1, 2, 3], [2, 2, 1], [1, 4, 5, 2, 2, 6, 7], [2, 1, 2])

    // Converts all elements in array into a string separated by separator.
    // _.join(['a', 'b', 'c'], '~');  => 'a~b~c'


    intersectionBy: function(...ars) {
        var ite = ars.pop()
        var f = (typeof ite === 'string' ? this.property(ite) : ite)

        var le0 = ars[0].length
        var len = ars.length
        var count
        var re = []
        for (var i = 0; i < le0; i++) {
            count = 0
            for (var j = 1; j < len; j++) {
                for (var k = 0; k < ars[j].length; k++) {
                    if (f(ars[0][i]) == f(ars[j][k])) {
                        count++
                        ars[j][k] = {}
                        break;
                    }
                }
            }
            if (count == len - 1) {
                re.push(ars[0][i])
            }
        }
        return re

    },

    intersectionWith: function(...ars) {
        var f = ars.pop()
        var le0 = ars[0].length
        var len = ars.length
        var count
        var re = []
        for (var i = 0; i < le0; i++) {
            count = 0
            for (var j = 1; j < len; j++) {
                for (var k = 0; k < ars[j].length; k++) {
                    if (f(ars[0][i], ars[j][k])) {
                        count++
                        ars[j][k] = {}
                        break;
                    }
                }
            }
            if (count == len - 1) {
                re.push(ars[0][i])
            }
        }
        return re
    },

    join: function(array, sep = ',') {
        var len = array.length
        var re = ''
        for (var i = 0; i < len - 1; i++) {
            re = re + array[i] + sep
        }
        return re + array[len - 1]
    },

    // Gets the last element of array.
    last: function(array) {
        var len = array.length
        var re = array[len - 1]
        return re
    },
    // This method is like _.indexOf except that it iterates over elements of array from right to left.
    //     array (Array): The array to inspect.
    // value (*): The value to search for.
    // [fromIndex=array.length-1] (number): The index to search from.
    lastIndexOf: function(array, value, fromIndex = array.length - 1) {
        var len = array.length
        for (var i = fromIndex; i >= 0; i--) {
            if (array[i] == value) {
                return i
            }
        }
        return -1
    },
    // Gets the element at index n of array. If n is negative, the nth element from the end is returned. 如果是负数就从尾部为-1开始数,超过长度返回undefine
    nth: function(array, n = 0) {
        var len = array.length
        if (n >= 0) {
            return array[n]
        } else {
            return array[len + n]
        }
    },
    // array (Array): The array to modify.
    // [values] (...*): The values to remove.
    //把values从array里删除
    pull: function(array, ...values) {
        for (var i = 0; i < values.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (values[i] == array[j]) array.splice(j, 1)
            }
        }
        return array
    },

    pullAll: function(array, values) {
        return this.pull(array, ...values)
    },

    pullAllBy: function(array, values, ite) {
        var f = (typeof ite === 'string' ? this.property(ite) : ite)
        for (var i = 0; i < values.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (f(values[i]) == f(array[j])) array.splice(j, 1)
            }
        }
        return array
    },

    pullAllWith: function(array, values, comparator) {
        for (var i = 0; i < values.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (comparator(values[i], array[j]))
                    array.splice(j, 1)
            }
        }
        return array
    },


    // Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on
    reverse: function(array) {
        var len = array.length
        var re = []
        for (var i = 0; i < len; i++) {
            re[i] = array[len - i - 1]
        }
        array = re
        return array
    },

    //Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order.
    //Arguments :array (Array): The sorted array to inspect.
    //           value()The value to evaluate
    //Returns: (number)Returns the index at which value should be inserted into array
    //eg _.sortedIndex([30, 50], 40); => 1
    sortedIndex: function(array, value) { //要求要二分查找即递归,array默认是升序数组
        let start = 0
        let end = array.length
        if (value <= array[0]) return 0
        if (value > array[end - 1]) return end
        return sort(array, start, end)

        function sort(array, start, end) {
            var half = ((start + end) / 2) | 0
            if (start + 1 === end) return end
            if (array[half] < value) {
                return sort(array, half, end)
            } else if (array[half] === value) {
                for (half;; half--) {
                    if (array[half] !== value) {
                        return (half + 1)
                    }
                }
            } else {
                return sort(array, start, half)
            }
        }
    },
    /**
     * [sortedIndexBy description]
     * @param  {[type]} array    [The sorted array to inspect.]
     * @param  {[type]} value    [ The value to evaluate.
]
     * @param  {[type]} iteratee [: The iteratee invoked per element.]
     * @return {[type]}          [ Returns the index at which value should be inserted into array.]
     */
    sortedIndexBy: function(array, value, iteratee) {
        var temp = array.slice(0)
        var f = this.modifypara(iteratee)
        temp.map(it => f(it))
        return this.sortedIndex(temp, value)
    },

    /**
     * [sortedIndexOf This method is like _.indexOf except that it performs a binary search on a sorted array.]
     * @param  {[type]} array [ The array to inspect.]
     * @param  {[type]} value [The value to search for]
     * @return {[type]}       [The value to search for]
     */
    sortedIndexOf: function(array, value) {
        let start = 0
        let end = array.length
        if (value == array[0]) return 0
        return sort(array, start, end)

        function sort(array, start, end) {
            var half = ((start + end) / 2) | 0
            if (start + 1 === end) return -1
            if (array[half] < value) {
                return sort(array, half, end)
            } else if (array[half] === value) {
                for (half;; half--) {
                    if (array[half] !== value) {
                        return (half + 1)
                    }
                }
            } else {
                return sort(array, start, half)
            }
        }
    },

    /**
     * [sortedLastIndex This method is like _.sortedLastIndex except that it accepts iteratee which is invoked for value and each element of array to compute their sort ranking. The iteratee is invoked with one argument: (value).]
     * @param  {[type]} array [description]
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
    sortedLastIndex: function(array, value) {
        let start = 0
        let end = array.length
        if (value < array[0]) return 0
        if (value > array[end - 1]) return end
        return sort(array, start, end)

        function sort(array, start, end) {
            var half = ((start + end) / 2) | 0
            if (start + 1 === end) return end
            if (array[half] < value) {
                return sort(array, half, end)
            } else if (array[half] === value) {
                for (half;; half++) {
                    if (array[half] !== value) {
                        return half
                    }
                }
            } else {
                return sort(array, start, half)
            }
        }
    },

    sortedLastIndexBy: function(array, value, iteratee) {
        var temp = array.slice(0)
        var f = this.modifypara(iteratee)
        temp.map(it => f(it))
        return this.sortedLastIndex(temp, value)
    },

    /**
     * [sortedLastIndexOf This method is like _.lastIndexOf except that it performs a binary search on a sorted array.]
     * @param  {[type]} array [The array to inspect]
     * @param  {[type]} value [The value to search for.]
     * @return {[type]}       [Returns the index of the matched value, else -1.]
     */
    sortedLastIndexOf: function(array, value) {
        let start = 0
        let end = array.length
        return sort(array, start, end)

        function sort(array, start, end) {
            var half = ((start + end) / 2) | 0
            if (start + 1 === end) return -1
            if (array[half] < value) {
                return sort(array, half, end)
            } else if (array[half] === value) {
                for (half;; half++) {
                    if (array[half] !== value) {
                        return half - 1
                    }
                }
            } else {
                return sort(array, start, half)
            }
        }
    },

    /**
     * [sortedUniq This method is like _.uniq except that it's designed and optimized for sorted arrays.]
     * @param  {[type]} array [The array to inspect.]
     * @return {[type]}       [Returns the new duplicate free array.]
     */
    //连续重复的数会变成一个[1,1,1,2,2,2,1,1,2,2,2]=>[1,2,1,2]因为它是设计好给sort好的数组用的。
    sortedUniq: function(array) {
        var t = []
        while (array.length !== 0) {
            if (array[0] == array[1]) {
                array.shift()
            } else {
                t.push(array.shift())
            }
        }
        return t
    },

    sortedUniqBy: function(array, iteratee) {
        var f = this.modifypara(iteratee)
        var t = []
        var temp = Math.random()
        while (array.length !== 0) {
            if (f(array[0]) === temp) {
                array.shift()
            } else if (f(array[0]) == f(array[1])) {
                temp = f(array[0])
                t.push(array.shift())
            }
        }
        return t
    },

    /**
     * [tail Gets all but the first element of array.]
     * @param  {[type]} array [The array to query]
     * @return {[type]}       [Returns the slice of array]
     */
    tail: function(array) {
        array.shift()
        return array
    },

    /**
     * [take Creates a slice of array with n elements taken from the beginning.]
     * @param  {[type]} array [The array to query.]
     * @param  {Number} n     [The number of elements to take.]
     * @return {[type]}       [ Returns the slice of array]
     */
    take: function(array, n = 1) {
        var ary = []
        var l = array.length
        if (n > l) n = l
        for (let i = 0; i < n; i++) {
            ary[i] = array[i]
        }
        return ary
    },

    takeRightWhile: function(array, predicate) {
        var f = this.modifypara(predicate)
        var t = []
        var l = array.length
        for (let i = l - 1; i >= 0; i--) {
            if (!f(array[i])) {
                return t
            } else {
                t.unshift(array[i])
            }
        }
    },

    takeWhile: function(array, predicate) {
        var f = this.modifypara(predicate)
        var t = []
        var l = array.length
        for (let i = 0; i < l; i++) {
            if (!f(array[i])) {
                return t
            } else {
                t.push(array[i])
            }
        }
    },

    /**
     * [takeRigth Creates a slice of array with n elements taken from the end]
     * @param  {[type]} array [The array to query.]
     * @param  {Number} n     [The number of elements to take.]
     * @return {[type]}       [(Array): Returns the slice of array]
     */
    takeRight: function(array, n = 1) {
        var ary = []
        var l = array.length
        if (n > l) n = l
        for (let i = array.length - 1, j = 0; j < n; j++, i--) {
            ary.unshift(array[i])
        }
        return ary
    },
    //将数组中不一样的值,整合到一个数组中(不重复)
    // union([4,1,1,2,2], [1,2,2,2,1],[1,2,3,4,2,2,2,4,5,6]) 得到[4,1,2,3,5,6]
    union: function(...arrays) {
        var arys = this.flattenDeep(arguments)
        //注意因为会动态删除，所以下面不能用l=arys.length,然后用l替代
        for (var i = 0; i < arys.length; i++) {
            for (var j = i + 1; j < arys.length; j++) {
                if (arys[i] == arys[j]) {
                    arys.splice(j, 1)
                    j--
                }
            }
        }
        return arys
    },

    /**
     * [unionBy description]
     * @return {[type]} [description]
     */
    unionBy: function(...arys) {
        var ite = arys.pop()
        var f = this.modifypara(ite)
        var ary = this.flattenDeep(arys)
        //注意因为会动态删除，所以下面不能用l=arys.length,然后用l替代
        for (var i = 0; i < ary.length; i++) {
            for (var j = i + 1; j < ary.length; j++) {
                if (f(ary[i]) == f(ary[j])) {
                    ary.splice(j, 1)
                    j--
                }
            }
        }
        return ary

    },

    /**
     * [unionWith This method is like _.uniq except that it accepts comparator which is invoked to compare elements of array. The order of result values is determined by the order they occur in the array.The comparator is invoked with two arguments: (arrVal, othVal).]
     * @param  {[type]} array      [The array to inspect.]
     * @param  {[type]} comparator [The comparator invoked per element.]
     * @return {[type]}            [Returns the new duplicate free array.]
     */
    unionWith: function(...arys) {
        var ite = arys.pop()
        var f = this.modifypara(ite)
        var ary = this.flattenDeep(arys)
        //注意因为会动态删除，所以下面不能用l=arys.length,然后用l替代
        for (var i = 0; i < ary.length; i++) {
            for (var j = i + 1; j < ary.length; j++) {
                if (f(ary[i], ary[j])) {
                    ary.splice(j, 1)
                    j--
                }
            }
        }
        return ary

    },

    // uniq(array)  in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array

    uniq: function(ary) {
        return ary.reduce((a, b) => a.indexOf(b) == -1 ? a.concat(b) : a, [])
    },

    uniqBy: function(array, iteratee) {
        var f = this.modifypara(iteratee)
        var ary = []
        return array.reduce((a, b) => {
            if (ary.indexOf(f(b)) == -1) {
                ary.push(f(b))
                return a.concat(b)
            } else return a
        }, [])
    },

    uniqWith: function(...args) {
        return this.unionWith(...args)
    },

    //Argumentsarray(Array): The array of grouped elements to process.
    //Returns(Array): Returns the new array of regrouped elements.
    //var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
    // => [['a', 1, true], ['b', 2, false]]
    //_.unzip(zipped);
    // => [['a', 'b'], [1, 2], [true, false]]
    unzip: function(array) {
        let re = []
        let temp
        //确定数组里要分成几个数组
        for (let i = 0; i < array[0].length; i++) {
            temp = []
            for (let j = 0; j < array.length; j++) {
                temp.push(array[j][i])
            }
            re.push(temp)
        }
        return re
    },

    unzipWith: function(array, iteratee) {
        var f = this.modifypara(iteratee)
        var ary = this.unzip(array)
        return ary.map(it => it.reduce((a, b) => f(a, b)))
    },

    // without Creates an array excluding all given values 
    //without([2, 1, 2, 3], 1, 2)  => [3]
    without: function(array, values) {
        var lv = arguments.length
        var la = array.length
        var re = []
        for (var i = 0; i < la; i++) {
            var count = 0
            for (var j = 1; j < lv; j++) {
                if (array[i] != arguments[j]) {
                    count++
                }
            }
            if (count == lv - 1) {
                re.push(array[i])
            }
        }
        return re
    },

    //把数组之间不同的值放到一个数组
    xor: function(...arys) {
        var array = this.flattenDeep(arys)
        var set = new Set()
        var t = []
        for (key of array) {
            if (set.has(key)) {
                t.push(key)
            } else {
                set.add(key)
            }
        }
        for (key of t) {
            set.delete(key)
        }
        return [...set]
    },

    //同上，只不过要调用方法处理数组里的数据
    xorBy: function(...arys) {
        var ite = arys.pop()
        var f = this.modifypara(ite)
        var array = this.flattenDeep(arys)
        var t = []
        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (f(array[i]) == f(array[j])) {
                    t.push(f(array[i]))
                    array.splice(j, 1)
                    j--
                }
            }
        }
        return array.filter(function(it) {
            return t.indexOf(f(it)) == -1
        })

    },

    //和unionWith 类似，只不过前者是会保留第一个与后面匹配项，而xorWith是都删除，所以用一个变量存储与后面能匹配的值，后面统一删除。
    xorWith: function(...arys) {
        var ite = arys.pop()
        var f = this.modifypara(ite)
        var ary = this.flattenDeep(arys)
        var t = []
        var re = []
        //注意因为会动态删除，所以下面不能用l=arys.length,然后用l替代
        for (var i = 0; i < ary.length; i++) {
            for (var j = i + 1; j < ary.length; j++) {
                if (f(ary[i], ary[j])) {
                    t.push(i)
                    ary.splice(j, 1)
                    j--
                }
            }
        }
        for (let j = 0; j < ary.length; j++) {
            if (t.indexOf(j) === -1) {
                re.push(ary[j])
            }
        }
        return re
    },

    // work:Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
    // Arguments :[arrays] (...Array): The arrays to process.
    // Return: (Array): Returns the new array of grouped elements.
    // eg:_.zip(['a', 'b'], [1, 2], [true, false]); => [['a', 1, true], ['b', 2, false]]

    zip: function(...arrays) {
        let len = arguments.length
        let re = []
        let lensum = []
        let temp
        for (let i = 0; i < len; i++) {
            lensum.push(arguments[i].length)
        }
        let maxlen = Math.max(...lensum)
        for (let i = 0; i < maxlen; i++) {
            temp = []
            for (let j = 0; j < len; j++) {
                temp.push(arguments[j][i])
            }
            re.push(temp)
        }
        return re
    },

    /**
     * [zipObject This method is like _.fromPairs except that it accepts two arrays, one of property identifiers and one of corresponding values.]
     * @param  {Array}  props  [The property identifiers.]
     * @param  {Array}  values [The property values.]
     * @return {[type]}        [ Returns the new object.]
     */
    zipObject: function(props = [], values = []) {
        var obj = {}
        for (let i = 0; i < props.length; i++) {
            obj[props[i]] = values[i]
        }
        return obj
    },

    //先做set,和zipobject 一个意思，不过要发哦调用set
    zipObjectDeep: function(props = [], values = []) {
        var obj = {}
        for (let i = 0; i < props.length; i++) {
            this.set(obj, props[i], values[i])
        }
        return obj
    },

    zipWith: function(...args) {
        var f = args.pop()
        //调用zip将 各个数组相同项放到一个数组里便于f操作
        var ary = this.zip(...args)
        var re = []
        for (let i = 0; i < ary.length; i++) {
            re.push(f(...ary[i]))
        }
        return re
    },

    //调用函数对对象或数组里每一个值遍历，将值作为属性，值出现的次数作为值保存在一个对象里，并返回对象
    //Arguments:collection (Array|Object): The collection to iterate over;[iteratee=_.identity] (Function): The iteratee to transform keys.
    //Return :(Object): Returns the composed aggregate object.
    countBy: function(col, ite) {
        let re = {}
        let temp
        for (let key in col) {
            if (typeof ite === "function") {
                temp = ite(col[key])
            } else {
                temp = col[key][ite]
            }
            if (!(temp in re)) {
                re[temp] = 1
            } else {
                re[temp] = re[temp] + 1
            }
        }
        return re
    },

    /**
     * [every Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).]
     * @param  {[type]} col [The collection to iterate over.]
     * @param  {[type]} pre [The function invoked per iteration.]
     * @return {[type]}     [Returns true if all elements pass the predicate check, else false.]
     */
    every: function(col, iter) {
        let fn = this.modifypara(iter);
        for (n in col) {
            if (!fn(col[n], n, col)) {
                return false;
            }
        }
        return true;
    },

    modifypara: function(obj) {
        let temp = Object.prototype.toString.call(obj);
        if (temp === "[object String]") {
            return this.property(obj);
        } else if (temp === "[object Array]") {
            return _.matchesProperty(obj[0], obj[1]);
        } else if (temp === "[object Object]") {
            return this.matches(obj)
        } else if (temp === "[object Function]") {
            return obj;
        } else {
            return function() {
                return true;
            }
        }
    },

    matches: function(source) {
        return function(obj) {
            for (let key in source) {
                if (obj[key] !== source[key]) {
                    return false
                }
            }
            return true
        }
    },

    property: function(path) {
        var aryiter = path.split('.')
        return function(obj) {
            for (let i = 0; i < aryiter.length; i++) {
                obj = obj[aryiter[i]]
            }
            return obj
        }
    },

    filter: function(col, pre) {
        let f = this.modifypara(pre);
        let re = []
        for (let key in col) {
            if (f(col[key], key, col)) {
                re.push(col[key])
            }
        }
        return re
    },

    find: function(col, pre) {
        let f = this.modifypara(pre)
        for (let key in col) {
            if (f(col[key], key, col)) {
                return col[key]
            }
        }
    },

    findLast: function(col, pre) {
        let f = this.modifypara(pre)
        for (let key = col.length - 1; key >= 0; key--) {
            if (f(col[key], key, col)) {
                return col[key]
            }
        }
    },

    flatMap: function(col, pre) {
        let f = this.modifypara(pre)
        return this.flatten(col.map(f))
    },

    flatMapDeep: function(col, pre) {
        let f = this.modifypara(pre)
        return this.flattenDeep(col.map(f))
    },

    flatMapDepth: function(col, pre, depth = 1) {
        let f = this.modifypara(pre)
        return this.flattenDepth(col.map(f), depth)
    },



    //用ite迭代每一个值，返回原对象
    //Arguments：collection (Array|Object): The collection to iterate over.
    //          [iteratee=_.identity] (Function): The function invoked per iteration.
    //Returns: returns collection
    forEach: function(col, ite) {
        for (let key in col) {
            ite(col[key], key, col)
        }
        return col
    },

    forEachRight: function(col, ite) {
        col = col.reverse()
        for (let key in col) {
            ite(col[key], key, col)
        }
        return col.reverse()
    },

    //用ite迭代每一个值,将得到的值作为新对象的属性，新对象的值为数组形式且里面的元素为原对象的值
    //Arguments：collection (Array|Object);[iteratee=_.identity] (Function)
    //Returns:(Object): Returns the composed aggregate object.
    groupBy: function(col, ite) {
        let re = {}
        for (key in col) {
            if (typeof ite === 'function') {
                if (ite(col[key]) in re) {
                    re[ite(col[key])].push(col[key])
                } else {
                    re[ite(col[key])] = [col[key]]
                }
            } else {
                if (col[key][ite] in re) {
                    re[col[key][ite]].push(col[key])
                } else {
                    re[col[key][ite]] = [col[key]]
                }
            }
        }
        return re
    },
    //work:Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collection.
    //Arguments
    //1 collection (Array|Object|string): The collection to inspect.
    //2 value (*): The value to search for.
    //3 [fromIndex=0] (number): The index to search from.
    //Return :true/false
    includes: function(col, val, fromindex = 0) {
        if (typeof col === 'string') {
            let value = col.slice(fromindex)
            let cs = new RegExp(val)
            return cs.test(col)
        } else if (Array.isArray(col)) {
            let value = col.slice(fromindex)
            for (let key in value) {
                if (value[key] === val) {
                    return true
                }
            }
        } else {
            for (let key in col) {
                if (col[key] === val) {
                    return true
                }
            }
        }
        return false
    },

    invokeMap: function(collection, path, ...args) {
        if (typeof path == 'string') {
            return collection.map(it => it[path]())
        } else {
            return collection.map(it => path.call(it, ...args))
        }
    },

    //为对象命名的函数，ite为命名的方式
    keyBy: function(col, ite) {
        var re = {}
        for (let key of col) {
            if (typeof ite == 'string') {
                re[key[ite]] = key
            } else { //ite为函数
                re[ite(key)] = key
            }
        }
        return re
    },

    map: function(col, iteratee) {
        let ary = []
        let f = this.modifypara(iteratee)
        for (let key in col) {
            ary.push(f(col[key], +key, col))
        }
        return ary
        // function helper(obj, iter) {
        //     let aryiter = iter.split('.')
        //     for (let i = 0; i < aryiter.length; i++) {
        //         obj = obj[aryiter[i]]
        //     }
        //     return obj
        // }
    },

    orderBy: function(col, iter, orders) {
        if (orders == undefined) return this.sortBy(col, iter)
        else {
            for (let i = iter.length - 1; i >= 0; i--) {
                let f = this.modifypara(iter[i])
                var count = 1
                //冒泡排序是稳定的
                if (orders[i] == "asc") {
                    while (count !== 0) {
                        count = 0
                        for (let j = 0; j < col.length - 1; j++) {

                            if (f(col[j]) > f(col[j + 1])) {
                                count++;
                                [col[j], col[j + 1]] = [col[j + 1], col[j]]
                            }

                        }
                    }
                } else {
                    while (count !== 0) {
                        count = 0
                        for (let j = 0; j < col.length - 1; j++) {

                            if (f(col[j]) < f(col[j + 1])) {
                                count++;
                                [col[j], col[j + 1]] = [col[j + 1], col[j]]
                            }

                        }
                    }
                }

            }
        }
        return col
    },


    /**
     * [partition Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).]
     * @param  {[type]} collection [The collection to iterate over.]
     * @param  {[type]} predicate  [The function invoked per iteration.]
     * @return {[type]}            [Returns the array of grouped elements.]
     */
    partition: function(col, pre) {
        var f = this.modifypara(pre)
        var re = []
        var re1 = []
        var re2 = []
        for (let key in col) {
            if (f(col[key])) {
                re1.push(col[key])
            } else {
                re2.push(col[key])
            }
        }
        re.push(re1);
        re.push(re2);
        return re

    },

    //大名鼎鼎的reduce
    reduce: function(col, ite, acc) {
        //没给初始值
        if (!acc) {
            var ary = Object.keys(col)
            var t = ary.shift()
            var acc = col[t]
            for (let key in col) {
                if (key == t) { continue; }
                acc = ite(acc, col[key], key, col)
            }
        }
        //给了初始值
        else {
            for (let key in col) {
                acc = ite(acc, col[key], key, col)
            }
        }
        return acc
    },

    //This method is like _.reduce except that it iterates over elements of collection from right to left.
    //只有col是数组时reverse一下，对象本来就不能保证顺序
    reduceRight: function(col, iter, acc) {
        if (Array.isArray(col)) {
            col.reverse()
        }
        return this.reduce(col, iter, acc)
    },

    /**
     * [reject The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for.]
     * @param  {[type]} col [ The collection to iterate over.]
     * @param  {[type]} pre [The function invoked per iteration.]
     * @return {[type]}     [Returns the new filtered array.]
     * filter的相反函数，只把false的留下来;直接用filter的在判断位置加个！；
     */
    reject: function(col, pre) {
        let f = this.modifypara(pre);
        let re = []
        for (let key in col) {
            if (!f(col[key], key, col)) {
                re.push(col[key])
            }
        }
        return re
    },

    /**
     * [sample Gets a random element from collection.]
     * @param  {[type]} col [The collection to sample.]
     * @return {[type]}     [Returns the random element.]
     */
    //采样，取一个随机val
    sample: function(col) {
        var ary = Object.keys(col)
        var l = ary.length
        var t = Math.floor(l * Math.random())
        return col[ary[t]]
    },

    /**
     * [sampleSize Gets n random elements at unique keys from collection up to the size of collection.]
     * @param  {[type]} col [The collection to sample.]
     * @param  {Number} n   [The number of elements to sample.]
     * @return {[type]}     [ Returns the random elements.]
     */
    //采n个样
    sampleSize: function(col, n = 1) {
        var ary = Object.keys(col)
        var l = ary.length
        var re = []
        var stack = []
        if (n >= l) {
            return Object.values(col)
        } else {
            while (re.length !== n) {
                var t = Math.floor(l * Math.random())
                if (!stack.includes(t)) {
                    stack.push(t)
                    re.push(col[ary[t]])
                }
            }
            return re
        }
    },

    /**
     * [shuffle Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.]
     * @param  {[type]} col [v]
     * @return {[type]}     [ Returns the new shuffled array.]
     */
    //把数组打乱，对象本来就没有顺序
    shuffle: function(col) {
        if (Array.isArray(col)) {
            var re = []
            while (col.length !== 0) {
                var t = Math.floor(col.length * Math.random())
                re.push(col.splice(t, 1))
            }
            return this.flatten(re)
        }
        return col
    },

    /**
     * [size Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.]
     * @param  {[type]} col [The collection to inspect.]
     * @return {[type]}     [Returns the collection size.]
     */
    //返回数组或对象的长度
    size: function(col) {
        return Object.keys(col).length
    },

    /**
     * [some Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).]
     * @param  {[type]} col [The collection to iterate over.]
     * @param  {[type]} pre [The function invoked per iteration]
     * @return {[type]}     [Returns true if any element passes the predicate check, else false.]
     */
    //一个对就返回true 与all，every等有区别
    some: function(col, pre) {
        var f = this.modifypara(pre)
        for (let key in col) {
            if (f(col[key], key, col)) {
                return true
            }
        }
        return false
    },

    sortBy: function(col, iter) {
        for (let i = iter.length - 1; i >= 0; i--) {
            let f = this.modifypara(iter[i])
            var count = 1
            //冒泡排序是稳定的
            while (count !== 0) {
                count = 0
                for (let j = 0; j < col.length - 1; j++) {
                    if (f(col[j]) > f(col[j + 1])) {
                        count++;
                        [col[j], col[j + 1]] = [col[j + 1], col[j]]
                    }
                }
            }
        }
        return col
    },

    defer: function(f, ...args) {
        return setTimeout(f.apply(null, args)) - 1
    },

    delay: function(f, wait, ...args) {
        return setTimeout(f.apply(null, args), wait) - 1
    },

    /**
     * [conformsTo Checks if object conforms to source by invoking the predicate properties of source with the corresponding property values of object.]
     * @param  {[type]} object [ The object to inspect.]
     * @param  {[type]} source [The object of property predicates to conform to.]
     * @return {[type]}        [ Returns true if object conforms, else false.]
     */
    conformsTo: function(object, source) {
        var t = Object.keys(source)
        var f = source[t]
        return f(object[t])
    },

    /**
     * [castArray Casts value as an array if it's not one.]
     * @param  {[type]} value [description]
     * @return {[type]}       [Returns the cast array]
     */
    castArray: function(value) {
        return Array.isArray(value) ? value : (value === undefined ? [] : [value])
    },

    eq: function(value, other) {
        if (value !== value && other !== other) return true
        else return value === other
    },

    //checks if value is greater than other
    gt: function(value, other) {
        return value > other
    },

    //Checks if value is greater than or equal to other
    gte: function(value, other) {
        return value >= other
    },

    //arguments 是一个类似数组的对象, 对应于传递给函数的参数
    isArguments: function(value) {
        var toString = Object.prototype.toString
        if (toString.call(value) == "[object Arguments]") return true
        else return false

    },

    //Checks if value is classified as an Array object. 
    isArray: function(value) {
        return Array.isArray(value)
    },

    isArrayBuffer: function(value) {
        var toString = Object.prototype.toString
        if (toString.call(value) == "[object ArrayBuffer]") return true
        else return false
    },

    /**
     * [isArrayLike Checks if value is array-like. A value is considered array-like if it's not a function and has a value.length that's an integer greater than or equal to 0 and less than or equal to Number.MAX_SAFE_INTEGER.]
     * @param  {[type]}  value [The value to check]
     * @return {Boolean}       [Returns true if value is array-like, else false.]
     */
    isArrayLike: function(value) {
        if (0 <= value.length && value.length <= Number.MAX_SAFE_INTEGER) {
            return true
        }
        return false
    },

    /**
     * [isArrayLikeObject This method is like _.isArrayLike except that it also checks if value is an object.]
     * @param  {[type]}  value [The value to check]
     * @return {Boolean}       [ Returns true if value is an array-like object, else false.]
     */
    isArrayLikeObject: function(value) {
        if (value === null) return false
        if (typeof value === 'object') return true
        return false
    },

    isBoolean: function(value) {
        if (value === false || value === true) return true
        return false
    },

    isDate: function(value) {
        if (value instanceof Date) return true
        return false
    },

    isElement: function(value) {

    },

    isEmpty: function(value) {
        if (value === null || value === '{}' || value.length === 0 || value.size === 0) return true
        else if (typeof value === 'number' || typeof value === 'boolean') return true
        else return false
    },

    isEqual: function(o1, o2) {
        //如果类型都不一样返回false
        if (typeof o1 !== typeof o2) {
            return false
        }
        //类型一样如果全等返回true
        else if (o1 === o2) return true
        //如果都为NaN返回 true 但是不要用isNaN函数，因为isNaN其实时number.isNaN(Number(value))
        //如果o1 o2为随便两个对象，都会为true 然后返回了true
        else if (o1 !== o1 && o2 !== o2) return true
        //如果是对象的话，判断里面的参数是否相等再一个个继续isequal递归调用
        else if (typeof o1 === 'object' && typeof o2 === 'object') {
            var size1 = 0,
                size2 = 0
            for (p in o1) {
                size1++;
            }
            for (p in o2) {
                size2++;
            }
            if (size1 !== size2) return false
            //注意 当{}里为空时是特例 要返回true
            else if (size1 === 0) return true
            else {
                for (p in o1) {
                    v1 = o1[p]
                    v2 = o2[p]
                }
                if (!this.isEqual(v1, v2)) {
                    return false
                }
            }
            return true
        } //最后返回false是因为前面把能相等的情况都包含了，但是o1=1,o2=2这类值没有判断到
        return false
    },

    add: function(a, b) {
        return a + b
    },

    /**
     * [ceil Computes number rounded up to precision.]
     * @param  {[type]} number    [The number to round up.]
     * @param  {Number} precision [ The precision to round up to.
     * @return {[type]}           [Returns the rounded up number.]
     */
    ceil: function(number, precision = 0) {
        //其实有三种情况，第一是number是整数这样precision>0直接返回
        //第二是 number 乘以 10**precision后 为整数没有余数，这样也是返回 number自己
        //第三是正常情况，虽然 ceil一般就是适用于第三种能向上取整，但第一第二这种逻辑也不能出错。
        let n = 10 ** precision
        if ((number % 1 === 0 && precision > 0) || (number * n) % 1 === 0) return number
        return ((number * n | 0) + 1) / n
    },

    divide: function(a, b) {
        return a / b
    },

    floor: function(number, precision = 0) {
        return ((number * 10 ** precision) | 0) / (10 ** precision)
    },

    // Computes the maximum value of array. If array is empty or falsey, undefined is returned.
    max: function(array) {
        var re = -Infinity
        var len = array.length
        if (len == 0) return undefined
        for (var i = 0; i < len; i++) {
            re = (re > array[i] ? re : array[i])
        }
        return re
    },

    /**
     * [maxBy This method is like _.max except that it accepts iteratee which is invoked for each element in array to generate the criterion by which the value is ranked. The iteratee is invoked with one argument: (value).]
     * @param  {[type]} array    [ The array to iterate over.]
     * @param  {[type]} iteratee [description]
     * @return {[type]}          [[iteratee=_.identity] (Function): The iteratee invoked per element.]
     */
    //iteratee 是属性或函数
    maxBy: function(array, iteratee) {
        if (typeof iteratee === 'string') {
            iteratee = function(obj) {
                return obj[iteratee]
            }
        }
        return array.length > 0 ? array.reduce((a, b) => iteratee(a) > iteratee(b) ? a : b) : undefined
    },

    /**
     * [mean Computes the mean of the values in array.]
     * @param  {[type]} array [ The array to iterate over.]
     * @return {[type]}       [Returns the mean.]
     */
    //求平均数
    mean: function(array) {
        return array.reduce((a, b) => a + b) / array.length
    },

    //和mean类似 不过array里面是对象，iterate是属性或函数
    meanBy: function(array, iteratee) {
        if (typeof iteratee === 'string') {
            temp = iteratee
            iteratee = function(obj) {
                return obj[temp]
            }
        }
        return array.map(it => iteratee(it)).reduce((a, b) => a + b) / array.length
    },

    // Computes the minimum value of array. If array is empty or falsey, undefined is returned.
    min: function(array) {
        var re = Infinity
        var len = array.length
        if (len == 0) return undefined
        for (var i = 0; i < len; i++) {
            re = (re > array[i] ? array[i] : re)
        }
        return re
    },

    minBy: function(array, iteratee) {
        if (typeof iteratee === 'string') {
            temp = iteratee
            iteratee = function(obj) {
                return obj[temp]
            }
        }
        return array.length > 0 ? array.reduce((a, b) => iteratee(a) > iteratee(b) ? b : a) : undefined
    },

    multiply: function(a, b) {
        return a * b
    },

    //四舍五入，dig是精确小数点第几位
    round: function(num, dig = 0) {
        let n = num * 10 ** dig
        let x = n | 0
        let y = (n % 1) > 0.5 ? 1 : 0
        return (x + y) / (10 ** dig)
    },

    //减法
    subtract: function(a, b) {
        return a - b
    },

    sum: function(array) {
        return array.reduce((a, b) => a + b)
    },

    sumBy: function(array, iteratee) {
        if (typeof iteratee === 'string') {
            temp = iteratee
            iteratee = function(obj) {
                return obj[temp]
            }
        }
        return array.map(it => iteratee(it)).reduce((a, b) => a + b)
    },

    /**
     * [matches Creates a function that performs a partial deep comparison between a given object and source, returning true if the given object has equivalent property values, else false.]
     * @param  {[type]} source [The object of property values to match]
     * @return {[type]}        [ Returns the new spec function]
     */


    //一个参数输出自己
    //两个参数输出更小值
    //三个及以上输出前三个的不大不小值
    //无参数NaN
    clamp: function(...args) {
        let n = args.length
        if (n === 0) return NaN
        else if (n === 1) return args[0]
        else if (n === 2) return args[0] > args[1] ? args[1] : args[0]
        else {
            return args[0] + args[1] + args[2] - Math.max(args[0], args[1], args[2]) - Math.min(args[0], args[1], args[2])
        }
    },

    /**
     * [inRage Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.]
     * @param  {[type]} number [The number to check.]
     * @param  {Number} start  [The start of the range]
     * @param  {[type]} end    [The end of the range.]
     * @return {[type]}        [ Returns true if number is in the range, else false.]
     */
    inRange: function(...args) {
        if (args.length === 3)[number, start, end] = args
        else {
            [number, end] = args
            start = 0
        }
        if (start < end) {
            return number > start && number < end
        } else {
            return number < start && number > end
        }
    },

    //输入一个整数时随机返回这个整数（包含之间）和0（包含0）之间的整数，如果输入0，只返回0
    //如果参数里有浮点数（或者第三个参数为true），返回都为浮点数
    random: function(...args) {
        let n = Math.floor(Math.random() * (Math.abs(args[0]) + 1))
        if (args.length === 1) {
            if (args[0] % 1 === 0) {
                return args[0] > 0 ? n : -n
            } else {
                return Math.random() * args[0]
            }
        } else if (args.length === 2) {
            if (args[0] % 1 === 0) {
                if (typeof args[1] === 'boolean') {
                    if (args[1]) {
                        return args[0] * Math.random()
                    } else {
                        return args[0] > 0 ? n : -n
                    }
                } else {
                    if (args[1] % 1 === 0) {
                        return
                    } else {
                        return
                    }
                }
            } else {

            }
        }
    },

    /**
     * [set Sets the value at path of object. If a portion of path doesn't exist, it's created. Arrays are created for missing index properties while objects are created for all other missing properties. Use _.setWith to customize path creation.]
     * @param {[type]} obj   [The object to modify]
     * @param {[type]} path  [The path of the property to set]
     * @param {[type]} value [ The value to set.]
     * return:The value to set 
     */
    set: function(obj, path, value) {
        if (typeof path === 'string') {
            path = path.split(/\[|\]|\./g).filter(it => it != '')
        }
        help(obj, 0, value)

        function help(obj, index = 0, value) {
            if (index == path.length - 1) {
                obj[path[index]] = value
                return obj
            }
            if (path[index] in obj) {
                return help(obj[path[index]], ++index, value)
            } else if (!isNaN(path[index + 1])) {
                obj[path[index]] = []
                return help(obj[path[index]], ++index, value)
            } else {
                obj[path[index]] = {}
                return help(obj[path[index]], ++index, value)
            }
        }
        return obj
    },

    setWith: function(obj, path, value, customizer) {
        if (typeof path === 'string') {
            path = path.split(/\[|\]|\./g).filter(it => it != '')
        }
        help(obj, 0, value)

        function help(obj, index = 0, value) {
            if (index == path.length - 1) {
                obj[path[index]] = value
                return obj
            }
            if (path[index] in obj) {
                return help(obj[path[index]], ++index, value)
            } else {
                obj[path[index]] = new customizer;
                return help(obj[path[index]], ++index, value)
            }
        }
        return obj
    },

    parseJson: function(val) {
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
    },


    //将字符串中特殊字符转义返回构造函数reg
    str2reg: function(str) {
        var str = str.replace(/(\W)/g, '\\$&')
        var reg = new RegExp(str)
        return reg
    },
    /**
     * [camelCase Converts string to camel case]
     * @param  {[str]} string [The string to convert.]
     * @return {[type]} string [Returns the camel cased string.]
     */
    camelCase: function(string) {
        let re = ''
        let lowstr = string.toLowerCase()
        let ar = /[^a-z]*([a-z]+)[^a-z]+([a-z]+)[^a-z]*/.exec(lowstr)
        re = ar[1] + ar[2].replace(/(\w)/, x => x.toUpperCase())
        return re
    },
    /**
     * [capitalize Converts the first character of string to upper case and the remaining to lower ]
     * @param  {[type]} str [ The string to capitalize]
     * @return {[type]} str    [Returns the capitalized string]
     */
    capitalize: function(string) {
        let lowstr = string.toLowerCase()
        return lowstr.replace(/([\w\s])/, x => x.toUpperCase())
    },

    /**
     * [deburr description]
     * @return {[type]} [description]
     */
    deburr: function() {

    },

    /**
     * [endWith Checks if string ends with the given target string.]
     * @param  {[type]} string   [The string to inspect.]
     * @param  {[type]} target   [The string to search for.]
     * @param  {[type]} position [The position to search up to.]
     * @return {[type]} boolean  [true/false]
     */
    endsWith: function(string, target, position = string.length) {
        //第一步先将target中特殊字符转义构造正则
        let tar = this.str2reg(target)
        let pos = string.match(tar)
        if (pos.index + 1 === position) return true;
        return false
    },

    startsWith: function(string = '', target, position = 0) {
        let tar = this.str2reg(target)
        let pos = string.match(tar)
        if (pos.index === position) return true;
        return false
    },


    /**
     * [escape Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.]
     * @param  {[string]} [(string): The string to escape.]
     * @return {[string]} [ Returns the escaped string.]
     * mustknow:[<:&it;][>:&gt;][&:&amp][":&quot][':apos] 
     */

    escape: function(string) {
        return string.replace(/([\>\<\&\"\'])/, function(it) {
            if (it === '<') return '&it;'
            if (it === '>') return '&gt;'
            if (it === '&') return '&amp;'
            if (it === '"') return '&quot;'
            if (it === "'") return '&apos;'
        })
    },
    /**
     * [escapeRegExp Escapes the RegExp special characters "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in string.]
     * @param  {[type]} string [The string to escape.]
     * @return {[type]} string [Returns the escaped string.]
     */
    escapeRegExp: function(string) {
        return string.replace(/(?=[\^\$\.\+\?\[\]\{\}\|\*\(\)])/g, '\\$&')
    },
    /**
     * [kebabCase Converts string to kebab case.]
     * @param  {[type]} string [The string to convert.]
     * @return {[type]}        [Returns the kebab cased string.]
     * @case  kebabCase('Foo Bar')=> 'foo-bar'
     * _.kebabCase('fooBar')=> 'foo-bar'
     * mustknow: _ 能被\w匹配
     */
    // 注意有些是  fooBar 这种形式，所以第一步化大小写的时候要在B前留个非【a-z】符号
    kebabCase: function(string) {
        let strlow = string.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase()
        return strlow.replace(/.*?([a-z]+).*?([a-z]+).*/, '$1-$2')
    },

    /**
     * [Converts string, as space separated words, to lower case.]
     * @param  {[type]} string [The string to convert.]
     * @return {[type]}        [ Returns the lower cased string.]
     */
    //用replace要匹配到整个字符串，然后将两个字母组捕获到
    lowerCase: function(string) {
        return string.replace(/.*?([a-zA-Z]+).*?([A-Z][A-Za-z]+).*/, '$1 $2').toLowerCase()
    },

    lowerFirst: function(string) {
        return string.replace(/(\w)/, it => it.toLowerCase())
    },
    /**
     * [padEnd Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length..]
     * @param  {String} string [ The string to pad.]
     * @param  {Number} length [The padding length]
     * @param  {String} chars  [The string used as padding]
     * @return {[type]}        [Returns the padded string]
     * @detail 如果不能均分，优先右边
     */
    pad: function(string = '', length = 0, chars = ' ') {
        let needlen = length - string.length
        if (needlen <= 0) return string
        else {
            //先判断做左 右的填充长度是否相等,再分别和填充物的长度做对比把填充字符整理出来,
            if (needlen % 2 === 0) {
                let x = needlen / 2
                return chars.repeat(x).substr(0, x) + string + chars.repeat(x).substr(0, x)
            } else {
                let left = Math.floor(needlen / 2)
                let right = left + 1
                return chars.repeat(left).substr(0, left) + string + chars.repeat(right).substr(0, right)
            }
        }
    },
    /**
     * [padEnd Pads string on the right side if it's shorter than length. Padding characters are truncated（截短）if they exceed length.]
     * @param  {String} string [ The string to pad.]
     * @param  {Number} length [The padding length]
     * @param  {String} chars  [The string used as padding]
     * @return {[type]}        [Returns the padded string]
     */
    padEnd: function(string = '', length = 0, chars = ' ') {
        let needlen = length - string.length
        if (needlen <= 0) return string
        else { //判断能否整除整除部分为n 余数为m
            if (needlen % chars.length === 0) {
                let n = needlen / chars.length
                return string + chars.repeat(n)
            } else {
                let n = Math.floor(needlen / chars.length)
                let m = needlen % chars.length
                return string + chars.repeat(n) + chars.substr(0, m)
            }
        }
    },
    /**
     * [padStart Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.]
     * @param  {String} string [(string): The string to pad.]
     * @param  {Number} length [(number): The padding length.]
     * @param  {String} chars  [(string): The string used as padding]
     * @return {[type]}        [(string): Returns the padded string.]
     */
    padStart: function(string = '', length = 0, chars = ' ') {
        let needlen = length - string.length
        if (needlen <= 0) return string
        else { //判断能否整除整除部分为n 余数为m
            if (needlen % chars.length === 0) {
                let n = needlen / chars.length
                return chars.repeat(n) + string
            } else {
                let n = Math.floor(needlen / chars.length)
                let m = needlen % chars.length
                return chars.repeat(n) + chars.substr(0, m) + string
            }
        }
    },

    parseInt: function(string, radix = 10) {

    },

    /**
     * [repeat Repeats the given string n times.]
     * @param  {[type]} string [(string): The string to repeat.]
     * @param  {Number} n      [(string): The string to repeat.]
     * @return {[type]}        [ Returns the repeated string.]
     */
    repeat: function(string, n = 1) {
        if (n === 0) return ''
        else {
            let re = ''
            for (let i = 0; i < n; i++) {
                re = string + re
            }
            return re
        }
    },

    /**
     * [replace Replaces matches for pattern in string with replacement.]
     * @param  {String} string      [(string): The string to modify.]
     * @param  {[type]} patten      [(RegExp|string): The pattern to replace.]
     * @param  {[type]} replacement [(Function|string): The match replacement.]
     * @return {[type]}             [Returns the modified string]
     */
    replace: function(string = '', patten, replacement) {

    },

    //lowerCase 一样只是由空白变成了_
    snakeCase: function(string = "") {
        return string.replace(/.*?([a-zA-Z]+).*?([A-Z][A-Za-z]+).*/, '$1_$2').toLowerCase()
    },

    /**
     * [split Splits string by separator.]
     * @param  {String} string    [(string): The string to split.]
     * @param  {(RegExp|string)} separator [The separator pattern to split by.]
     * @param  {(number)} limit    [he length to truncate results to.]
     * @return {(Array)}           [Returns the string segments.n]
     */
    //当separator为字符串时，构造正则用排除法 加match做
    //当为正则时，只能通过exec lastIndex (不能忘了全局变量/g)
    split: function(string = '', separator, limit) {
        if (typeof separator === 'string') {
            let prereg = '[^' + separator + ']'
            let reg = new RegExp(prereg, 'g')
            return string.match(reg).slice(0, limit)
        } else { //这个是separator为正则的情况
            //思路是用exec 加lastIndex属性来匹配 注意要有/g才会自动更新lastIndex的位置
            let sep = new RegExp(separator, 'g')
            let ary = []
            let start = 0
            //用while是因为 当捕获不到的时候返回null
            while (match = sep.exec(string)) {
                let clip = string.slice(start, match.index)
                if (clip.length) {
                    ary.push(clip)
                }
                start = match.index + match[0].length
            }
            if (start !== string.length) {
                ary.push(string.slice(start))
            }
            return ary
        }
    },

    //首字母大写 其它保持不动
    startCase: function(string = '') {
        let str = string.replace(/([A-Z])/, ' $&')
        return str.replace(/.*?([a-zA-Z]+).*?([A-Za-z]+).*/, '$1 $2').replace(/\b(\w)/g, it => it.toUpperCase())
    },

    //只是单纯的将字母都变小写
    toLower: function(string) {
        return string.replace(/([a-zA-Z])/g, it => it.toLowerCase())
    },

    //只是单纯的将字母都变大写
    toUpper: function(string) {
        return string.replace(/([a-zA-Z])/g, it => it.toUpperCase())
    },

    /**
     * [trim Removes leading and trailing whitespace or specified characters from string.]
     * @param  {String} string [The string to trim.]
     * @param  {String} chars  [ The characters to trim.]
     * @return {[type]}        [Returns the trimmed string.on]
     */
    trim: function(string = '', chars = ' ') {
        var a = string
        var b = chars
        return this.trimStart(this.trimEnd(a, b), b)
    },

    //同trimStart，不过当chars非空字符串的时候我不用正则做，换一种思路
    trimEnd: function(string = '', chars = ' ') {
        if (chars === ' ') return string.replace(/\s+$/, '')
        else {
            for (let i = string.length - 1;; i--) {
                if (chars.indexOf(string[i]) === -1) {
                    return string.substr(0, i + 1)
                }
            }
        }
    },
    /**
     * [trimStart Removes leading whitespace or specified characters from string.]
     * @param  {String} string [The string to trim.]
     * @param  {String} chars  [The characters to trim.]
     * @return {[type]}        [ Returns the trimmed string.]
     * @ 其实就是看string的左边能匹配到chars里任意字符的连续最大长度，并把它从字符串中删除
     */
    trimStart: function(string = '', chars = ' ') {
        if (chars === ' ') {
            return string.replace(/\s+/, '')
        } else {
            //因为不知道给的chars是否由特殊符号，第一个replace所以构造正则前要加转义符，
            //第二个replace 是因为匹配任意字符所以要强行给字符串中加上[]+
            let char = chars.replace(/([^\w\s])/g, '\\$&').replace(/^(.+)$/, '[$&]+')
            let reg = new RegExp(char)
            return string.replace(reg, '')
        }
    },

    /**
     * [truncate Truncates string if it's longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to "...".]
     * @param  {[type]} string [ The string to truncate.]
     * @param  {Object} option [description]
     * @param  [options={}] (Object): The options object.
     * @param  [options.length=30] (number): The maximum string length.
     * @param  [options.omission='...'] (string): The string to indicate text is omitted.
     * @param  [options.separator] (RegExp|string): The separator pattern to truncate to.
     *  @return {[type]}        [description]
     */
    // 其实就是将字符串部分省略，先考虑长度length，然后再该长度内考虑separator(分隔符)
    truncate: function(string, {
        length = 30,
        omission = '...',
        separator = ''
    } = {}) {
        let strlen = string.length
        let omlen = omission.length
        if (strlen < length) {
            return string
        } else if (separator === '') {
            return string.substr(0, length - omlen) + omission
        } else {
            let reg = new RegExp(separator, 'g')
            let ary = string.match(reg)
            for (let i = ary.length - 1; i >= 0; i--) {
                let pos = string.lastIndexOf(ary[i])
                if (pos > 0 && pos < length - omlen) {
                    return string.substr(0, pos) + omission
                }
            }
        }
        return string.substr(0, length - omlen) + omission
    },

    /**
     * [unescape The inverse of _.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, and &#39; in string to their corresponding characters.
]
     * @param  {[type]} string [ The string to unescape.]
     * @return {[type]}        [Returns the unescaped string.]
     */
    unescape: function(string) {
        return string.replace(/(&amp;|&lt;|&gt;|&quot|&#39)/, function(it) {
            if (it === '&amp;') return '&'
            if (it === '&lt;') return '<'
            if (it === '&gt') return '>'
            if (it === '&quot') return '"'
            if (it === '&#39') return "'"
        })
    },

    /**
     * [upperCase Converts string, as space separated words, to upper case.

Since]
     * @param  {[type]} string [ The string to convert.]
     * @return {[type]} string [Returns the upper cased string.]
     */
    upperCase: function(string) {
        var str = string.replace(/([A-Z])/, ' $&')
        return str.replace(/.*?([a-zA-Z]+).*?([A-Z]*[A-Za-z]+).*/, '$1 $2').toUpperCase()
    },

    /**
     * [upperFirst Converts the first character of string to upper case.]
     * @param  {[type]} string [ (string): The string to conver]
     * @return {[type]}        [ Returns the converted string.]
     */
    upperFirst: function(string) {
        return string.replace(/(\w)/, i => i.toUpperCase())
    },

    /**
     * [words description]
     * @param  {[type]} string  [description]
     * @param  {RegExp} pattern [description]
     * @return {[type]}         [description]
     */
    //我测试一遍如果给的字符串就要把字符串变成正则，返回exec方法的结果；如果给的是正则就直接调用返回match方法的结果；如果pattren没有值就默认为/([A-Z][a-z]+|[a-z]+|[1-9]+|[A-Z]+)/g
    words: function(string, pattern = /([A-Z][a-z]+|[a-z]+|[1-9]+|[A-Z]+)/g) {
        if (typeof pattern === 'object') {
            return string.match(pattern)
        } else {
            let re = new RegExp(pattern)
            return re.exec(string)
        }
    },
}