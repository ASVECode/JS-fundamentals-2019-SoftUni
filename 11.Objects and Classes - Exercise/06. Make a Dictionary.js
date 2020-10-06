function dictionary(input) {
    let dictionary = [];
    input.forEach(line => {
        let obj = JSON.parse(line);
        let word = {};
        word.term = Object.keys(obj).join();
        word.definition = Object.values(obj).join();
        dictionary.push(word);
    });
    dictionary.sort((a, b) => (a.term).localeCompare(b.term));
    //console.log(dictionary)
    for (let i = 0; i < dictionary.length; i++) {
        let word = dictionary[i];
        if (word == dictionary[dictionary.length - 1]) {
            console.log(`Term: ${word.term} => Definition: ${word.definition}`);
            break;
        }
        let nextWord = dictionary[i + 1];
        //console.log(word.term,nextWord.term)
        if (word.term == nextWord.term) {
            console.log(`Term: ${word.term} => Definition: ${nextWord.definition}`);
            i++;
        } else {
            console.log(`Term: ${word.term} => Definition: ${word.definition}`);
        }
    }
}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)