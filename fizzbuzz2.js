function fizzbuzz() { 
    for (let i = 1; i <= 255; i++){
        let output = [];

        if (i % 3 == 0) {
            output.push("Fizz");
        }
        if (i % 13 ==0) {
            output.push("Fezz");
        }
        if (i % 5 == 0) {
            output.push("Buzz");
        }
        if (i % 7 == 0) {
            output.push("Bang");
        }
        if (i % 11 == 0){
            if (i % 13 == 0) {
                output = ["Fezz", "Bong"];
            }
            else {
                output = ["Bong"];
            }
        }
        if (i % 17 == 0){
            output.reverse()
        }

        if (output.length == 0) {
            console.log(i)
        } else {
            console.log(output.join(""))
        }
    }
}

fizzbuzz();

