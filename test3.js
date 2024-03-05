
const readlineSync = require('readline-sync');

function calculatePercentage(count, total) {
    return ((count / total) * 100).toFixed(2);
}

function displaySummary(totalHired, maleHired, femaleHired, totalPermanent, malePermanent, femalePermanent, totalResigned, maleResigned, femaleResigned) {
    console.log("===\nThank you for the Information\n===\nHere is the Summary !!!\n");

    console.log(`Number of hired employees = ${totalHired}`);
    console.log(`Male = ${calculatePercentage(maleHired, totalHired)}%`);
    console.log(`Female = ${calculatePercentage(femaleHired, totalHired)}%\n`);

    console.log(`Number of Permanent Employees = ${totalPermanent}`);
    console.log(`Male = ${calculatePercentage(malePermanent, totalPermanent)}%`);
    console.log(`Female = ${calculatePercentage(femalePermanent, totalPermanent)}%\n`);

    console.log(`Number of Resigned Employees = ${totalResigned}`);
    console.log(`Male = ${calculatePercentage(maleResigned, totalResigned)}%`);
    console.log(`Female = ${calculatePercentage(femaleResigned, totalResigned)}%`);
}

function main() {
    console.log("Enter the number of newly hired males:");
    const newlyHiredMales = parseInt(readlineSync.question());

    console.log("Enter the number of newly hired females:");
    const newlyHiredFemales = parseInt(readlineSync.question());

    console.log("Enter the number of permanent position males:");
    const permanentMales = parseInt(readlineSync.question());

    console.log("Enter the number of permanent position females:");
    const permanentFemales = parseInt(readlineSync.question());

    console.log("Enter the number of resigned males:");
    const resignedMales = parseInt(readlineSync.question());

    console.log("Enter the number of resigned females:");
    const resignedFemales = parseInt(readlineSync.question());

    const totalHired = newlyHiredMales + newlyHiredFemales;
    const totalPermanent = permanentMales + permanentFemales;
    const totalResigned = resignedMales + resignedFemales;

    displaySummary(totalHired, newlyHiredMales, newlyHiredFemales, totalPermanent, permanentMales, permanentFemales, totalResigned, resignedMales, resignedFemales);
}

// Run the program
main();
