// function systemRegister(input) {
//     let systems=[];
//     for (let i = 0; i < input.length; i++) {
//         let parts = input[i].split(' | ');
//         if (i + 1 < input.length) {
//             let nextParts = input[i + 1].split(' | ');
//             let system = {};
//             let systemName = parts[0];
//             let component = parts[1];
//             let subcomponent = parts[2];
//             system.name = systemName;
//             system.component = [component];
//             system.subcomponent =[subcomponent];
//             if (systemName == nextParts[0] && component == nextParts[1]) {
//                 system.subcomponent.push(nextParts[2]);
//             } else if (systemName == nextParts[0] && component != nextParts[1]) {
//                 system.component.push(nextParts[1]);
//                 system.subcomponent.push(nextParts[2]);
//             } else if (systemName != nextParts[0]) {
//                 system.name = nextParts[0];
//                 system.component = nextParts[1];
//                 system.subcomponent = nextParts[2];
//             }
//             systems.push(system);


//         }

//     }
//     console.log(systems)



// }
function systemRegister(input) {
    let register = {};
    for (let line of input) {
        let [systemName, componentName, subcomponentName] = line.split(' | ');
        if (!register.hasOwnProperty(systemName)) {
            register[systemName] = {};
        }
        if (!register[systemName].hasOwnProperty(componentName)) {
            register[systemName][componentName] = [];
        }
        register[systemName][componentName].push(subcomponentName);
    }
    //console.log(register);

    let sortedKeys = Object.keys(register).sort((a, b) => Object.keys(register[b]).length - Object.keys(register[a]).length || a.localeCompare(b));
    //console.log(sortedKeys);
    sortedKeys.forEach((key) => {
        console.log(key);
        let sortedSubKeys = Object.keys(register[key]).sort((a, b) => Object.keys(register[key][b]).length - Object.keys(register[key][a]).length);
        sortedSubKeys.forEach((subKey) => {
            console.log(`|||${subKey}`);
            register[key][subKey].forEach((subComponent) => {
                console.log(`||||||${subComponent}`);
            });
        });
    });
}
systemRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])