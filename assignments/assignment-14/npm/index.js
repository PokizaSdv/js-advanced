// Function 1: Count By Profession
// Write a function named countByProfession which takes in an array of objects (parsed from the CSV file) and returns an object that counts the number of people in each profession.

// For example, the function should return:

// {
//   Engineer: 5,
//   Teacher: 4,
//   Doctor: 3,
//   Artist: 2,
//   ...
// }

const fs = require("fs");
class Data {
    read(fileUrl) {
        return fs.readFileSync(fileUrl, "utf-8");
    }

    parse(content) {
        return content.split("\r\n");
    }

    parseRow(row) {
        return row.split(",");
    }

    format(fileUrl) {
        const content = this.read(fileUrl);
        const all = this.parse(content);
        const header = this.parseRow(all[0]);
        const rows = all.slice(1);

        const formattedData = rows.map((row) => {
            const personArr = this.parseRow(row);
            const personObj = {};

            for (let i = 0; i < header.length; i++) {
                const label = header[i];
                const value = personArr[i];
                personObj[label] = value;
            }
            return personObj;
        });
        return formattedData;
    }
    countByProfession(dataArr) {
        const professionsCount = {};
        dataArr.forEach((person) => {
            const profession = person.Profession;
            if (profession in professionsCount) {
                professionsCount[profession]++;
            } else {
                professionsCount[profession] = 1;
            }
        });
        return professionsCount;
    }

    countByAgeRange(dataArr) {
        const ageRangesCount = {
            "10-20": 0,
            "21-30": 0,
            "31-40": 0,
            "41-50": 0,
            "51-60": 0
        };
        dataArr.forEach((person) => {
            const age = person.Age;
            if (age >= 10 && age < 20) {
                ageRangesCount["10-20"]++;
            } else if (age >= 21 && age < 30) {
                ageRangesCount["21-30"]++;
            } else if (age >= 31 && age < 40) {
                ageRangesCount["31-40"]++;
            } else if (age >= 41 && age < 50) {
                ageRangesCount["41-50"]++;
            } else if (age >= 51 && age < 60) {
                ageRangesCount["51-60"]++;
            }
        });
        return ageRangesCount;
    }
}

const data = new Data();
const dataArr = data.format("data.csv");
const professionsCount = data.countByProfession(dataArr);
console.log("Professions count:", professionsCount);

const ageRangesCount = data.countByAgeRange(dataArr);
console.log("Age Ranges Count:", ageRangesCount);
