let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper .heart'),
    oneHeart = document.querySelector('.heart');

    box.style.backgroundColor = 'blue';
    btn[1].style.borderRadius = "100%";

    circle[0].style.backgroundColor = 'red';
    circle[1].style.backgroundColor = 'yellow';
    circle[2].style.backgroundColor = 'green';

    heart.forEach(function(item, i, hearts)
    {
        item.style.backgroundColor = 'blue';
    }
    )


