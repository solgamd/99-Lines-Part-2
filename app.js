let friends = ['Niko', 'Emilie', 'Marj', 'Anna', 'Maria'];

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    for (let n = 99; n >= 1; n--) {
        if (n === 1) {
            console.log(n + " line of code in the file, " + n + " line of code, " + friends[i] + " strikes one out, clears it all out, " + "no more lines of code in the file");
        } else {
            console.log(n + " lines of code in the file, " + n + " lines of code, " + friends[i] + " strikes one out, clears it all out, " + [n - 1] + " lines of code in the file");
        }
    }
}