function insert(num) {
    document.form.textview.value =
        document.form.textview.value + num;
};

function clean() {
    document.form.textview.value = "";
};

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,
        exp.lenght - 1);
};

function equel() {
    let exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
};