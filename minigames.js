import * as _rps from './games/rps.js'
import * as _trivia from './games/trivia.js'

export function rps(query) {
    return _rps.play(query)
}
export async function trivia(query) {
    return await _trivia.play(query);
}