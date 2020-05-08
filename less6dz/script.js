const students = [{
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
];


groupAveregMarks(students);


function groupAveregMarks(array) {
    array.forEach(function(element, i) {
        console.log(`${students[i].name}` + '=' + `${(students[i].marks.reduce(function(sum, x) { return sum + x; })) /students[i].marks.length }`);
        });    
}

// ИЛИ ТАК

// function groupAveregMarks(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${students[i].name}` + '=' + `${(students[i].marks.reduce(function(sum, x) { return sum + x; })) /students[i].marks.length }`);
//     }
// }




const ollMarks = students[0].marks.concat(students[1].marks, students[2].marks, students[3].marks);

groupAverege(ollMarks);

function groupAverege(marks) {
    const resultSum = marks.reduce((sum, current) => sum + current);
    console.log('Средний бал группы' + '=' + `${resultSum  / ollMarks.length} `);
}

// ИЛИ ТАК

const ollMarcs = students.map(getMarks);
const concat = ollMarcs.reduce(function (result, current) {
    return result.concat(current);
}, []);

groupAvereg(concat);

function getMarks(item) {
    return item.marks;
}

function groupAvereg(marсs) {
    const resultSum = marсs.reduce((sum, current) => sum + current);
    console.log('Средний бал группы' + '=' + `${resultSum  / concat.length} `);
}