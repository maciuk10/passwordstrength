var calculateComplexity = function (password) {
    var complexity = 0;
    var regExps = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
        /.{8}/,
        /[!-//:-@[-`{-ÿ]/
    ];
    regExps.forEach(function (regexp) {
       if(regexp.test(password)){
           complexity++;
       }
    });

    return {
        value: complexity,
        max: regExps.length
    }
};

var checkPasswordStrength = function (password) {
    var progress = document.querySelector('#password-complexity');
    var complexity = calculateComplexity(this.value);

    progress.value = complexity.value;
    progress.max = complexity.max;
};

var input = document.querySelector('#password-input');
input.addEventListener('keyup', checkPasswordStrength);