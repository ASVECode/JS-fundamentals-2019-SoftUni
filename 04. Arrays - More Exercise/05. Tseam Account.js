function solve(input) {
    let games = input[0].split(' ');
 
    for (let i = 1; i < input.length; i++) {
        let currentEl = input[i].split(' ');
        let command = currentEl[0];
        let newGame = currentEl[1];
 
        if (command === 'Play!') {
            break;
        } else if (command === "Install" && games.includes(newGame) === false) {
            games.push(newGame);
        } else if (command === 'Uninstall' && games.includes(newGame)) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);
        } else if (command === 'Update' && games.includes(newGame)) {
            let index = games.indexOf(newGame);
            games.splice(index, 1);
            games.push(newGame);
        } else if (command === 'Expansion') {
            let expansion = newGame.split('-');
            let game = expansion[0];
 
            if (games.includes(game)) {
                let expandedGame = expansion.join(':');
                let index = games.indexOf(game);
                games.splice(index + 1, 0, expandedGame);
            }
        }
    }
 
    console.log(games.join(' '));
}

// function solve(arr) {
//     let playCommand = arr.pop();
//     let acountInfo = arr.shift().split(' ');


//     for (let i = 0; i < arr.length; i++) {
//         let line = arr[i];
//         line = line.split(' ');
//         let command = line[0];
//         let gameLine = line[1];
//         for (let game of acountInfo) {
//             if (command == 'Install') {
//                 if (game != gameLine) {
//                     acountInfo.push(gameLine);
//                     continue;
//                 } 
//             }
//             if (command == 'Uninstall') {
//                 if (game == gameLine) {
//                     game = 1;
//                 }
//             }
//             if (command == 'Update') {
//                 if (game == gameLine) {
//                     acountInfo.splice(acountInfo.length - 1, 0, game);
//                 }
//             }
//             if (command == 'Expansion') {
//                 let check = gameLine;
//                 check = check.split('-');
//                 if (check[0] == game) {
//                     game = gameLine;
//                 }
//             }

//         }
//     }
//     console.log(acountInfo);
// }
solve(['CS WoW Diablo', 'Install LoL', 'Install LLLLL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);