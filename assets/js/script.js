const getAverage = document.getElementById('getAverage')
getAverage.addEventListener('click', function (event) {

    event.preventDefault()
    const mark1 = prompt("Please enter the mark of your subject 1", "0");
    const mark2 = prompt("Please enter the mark of your subject 2", "0");
    const mark3 = prompt("Please enter the mark of your subject 3", "0");
    const mark4 = prompt("Please enter the mark of your subject 4", "0");
    const mark5 = prompt("Please enter the mark of your subject 5", "0");

    const totalMark = Number(mark1) + Number(mark2) + Number(mark3) + Number(mark4) + Number(mark5);
    const averageMark = Number(totalMark) / 5;

    let grade = "";
    if (averageMark >= 90) {
        grade = "A+";
    }
    else if (averageMark <= 89 && averageMark >= 80) {
        grade = "A";
    }
    else if (averageMark <= 79 && averageMark >= 70) {
        grade = "B";
    }
    else if (averageMark <= 69 && averageMark >= 60) {
        grade = "C";
    }
    else if (averageMark <= 59 && averageMark >= 50) {
        grade = "D";
    }
    else if (averageMark < 50) {
        grade = "E";
    }

    alert(`Your total mark is ${totalMark}\n\nYour average mark is ${averageMark}\n\nYour grade is ${grade}`);

})