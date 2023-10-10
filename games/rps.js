import * as helper from './helper.js'

export function play(player) {
    let moves = ['Rock', 'Paper', 'Scissors']
    let response = {}

    helper.validateObject(player)

    if (moves.indexOf(player.choice) == -1) {
        response.error = `${player.choice} is not a valid move`;
        return response
    }

    response.player_choice = player.choice
    response.computer_choice = moves[Math.floor(Math.random() * 3)]

    let playerMove = moves.indexOf(player.choice)
    let compMove = moves.indexOf(response.computer_choice)

    if (playerMove == compMove) {
        response.outcome = "Tie"
    } else if (
            playerMove == 0 && compMove == 2 ||
            playerMove == 1 && compMove == 0 ||
            playerMove == 2 && compMove == 1
        ) {
        response.outcome = "Win"
    } else {
        response.outcome = "Loss"
    }
    return response
}