var btn = document.getElementsByClassName('btn');
var cnt = document.getElementsByClassName('content')[0];
btn[0].addEventListener('click', () => {
    cnt.style.display = "block";
    cnt.style.color = 'green';
})
var form = document.getElementsByClassName('my-form')[0];

var sbmt = document.getElementsByClassName('submit')[0];
var boy; var girl;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    document.getElementById('res').style.display = "block";



    boy = document.getElementById('boy').value
    girl = document.getElementById('girl').value
    document.getElementById('sb').style.display = "none";


    res(boy, girl);

})

var ans = "";

var final_ans = "";

var res = (boy, girl) => {
    boy = boy.split('');
    girl = girl.split('');
    let i = 0;
    while(i < boy.length){
        let flag = false;

        let j = 0

        while(j < girl.length){
            if (boy[i] === girl[j]) {
                flag = true;

                boy.splice(i, 1);
                girl.splice(j, 1);

                break;

            } else j++;

        }
        if(flag){
            i = Math.max(0, i - 1);
        }else{
            i++;
        }
    }

    ans = boy.join('')+girl.join('');
    judge(ans);

}
var result = ""

var judge = (ans)=> {
    let n = ans.length;
    st = "flames";
    var it = st.split('');
    let i = 0;

    const mp = new Map([
        ['f', 'Friends 👭'],
        ['l', 'Love 🧑🏻‍❤️‍🧑🏽'],
        ['a', 'Affection'],
        ['m', 'Marriage 👰‍♂️'],
        ['e', 'Enemy 😠'],
        ['s', 'Siblings 👩‍👦‍👦']
    ]);

    while(it.length > 1){
        i = (i + n - 1) % it.length;
        it.splice(i, 1);

    }
    result = mp.get(it[0]);

}


var val = document.getElementById('val')

val.addEventListener('click', () => {
    sp.innerHTML = result
})
