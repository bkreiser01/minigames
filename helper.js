let width = 50

function br() {
    let retVal = "|"
    for (let i = 0; i < width; i++) {
        retVal = retVal.concat('=')
    }
    retVal = retVal.concat("|\n")

    return retVal
}

function sp() {
    let retVal = "|"
    for (let i = 0; i < width; i++) {
        retVal = retVal.concat(' ')
    }
    retVal = retVal.concat("|\n")

    return retVal
}

function print(str) {
    let retval = ""

    let left_padding = (width - str.length) / 2
    let right_padding = (width - str.length) / 2
    if (str.length % 2 != 0) {
        right_padding++
    }

    retval = retval.concat('|')
    retval = retval.padEnd(retval.length + left_padding)
    retval = retval.concat(str)
    retval = retval.padEnd(retval.length + right_padding)
    retval = retval.concat('|\n')

    return retval
}

function lst(arr, width) {
    for (const i in arr) {

    }
}

export function welcome(games) {
    let str1 = "Hello! What game would you like to play?"

    let out = ""

    out = out.concat(br())
    out = out.concat(print(str1))
    out = out.concat(br())
    out = out.concat(sp())
    out = out.concat(print(games[0]))
    out = out.concat(br())

    console.log(out)
}