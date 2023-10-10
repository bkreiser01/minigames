import * as helper from './helper.js'

const TRIVIA_DATABASE = "https://opentdb.com/api.php?amount=1"

export async function play(query) {
    if (typeof variable !== 'undefined') {
        helper.validateObject(query);
    } else {
        let response = await helper.getAPI(TRIVIA_DATABASE)
        return response.results[0]
    }
    
    return 0
}