let friends = ['Niko', 'Emilie', 'Marj', 'Anna', 'Maria'];

let btn = document.createElement('button');
document.body.appendChild(btn);
btn.innerText = 'Sing!'

btn.addEventListener('click', sing);

function sing() {

    for (let i = 0; i < friends.length; i++) {
        let container = document.createElement('container');
        container.class = 'friend';
        document.body.appendChild(container);

        let h3 = document.createElement('h3');
        let h3Text = document.createTextNode(friends[i]);
        h3.appendChild(h3Text);
        container.appendChild(h3);

        let div = document.createElement('div');
        container.appendChild(div);
        let p = document.createElement('paragraph');
        div.appendChild(p);

        for (let n = 99; n >= 1; n--) {
            if (n >= 2) {
                let pTextAll = document.createTextNode(n + " lines of code in the file, " + n + " lines of code, " + friends[i] + " strikes one out, clears it all out, " + [n - 1] + " lines of code in the file.");
                p.appendChild(pTextAll);

            } else {
                let pTextLast = document.createTextNode(n + " line of code in the file, " + n + " line of code, " + friends[i] + " strikes one out, clears it all out, " + "no more lines of code in the file.");
                p.appendChild(pTextLast);
            }
        }
    }
}
