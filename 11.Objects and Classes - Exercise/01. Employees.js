function employees(arr) {
    for (let employeeName of arr) {
        employeeName = {
            name: employeeName,
            personalNumber: employeeName.length
        }
        console.log(`Name: ${Object.values(employeeName)[0]} -- Personal Number: ${Object.values(employeeName)[1]} `)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)