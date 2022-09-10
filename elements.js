let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper .heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('wrapper');


    box.style.backgroundColor = 'blue';
    btn[1].style.borderRadius = "100%";

    circle[0].style.backgroundColor = 'red';
    circle[1].style.backgroundColor = 'yellow';
    circle[2].style.backgroundColor = 'green';

    //heart.forEach(function(item, i, hearts)
    //{
      //  item.style.backgroundColor = 'blue';
    //}
    //)

    let div = document.createElement('div');
    let text = document.createTextNode('I am here');

    div.classList.add('black');

    console.log(div);

   // document.body.appendChild(div);

   //wrapper.appendChild(div);

   document.body.insertBefore(div, circle[0]);

   document.body.removeChild(circle[1]);

   wrapper.removeChild(heart[2]);

   document.body.replaceChild(btn[1], circle[1]);

  // div.innerHTML = '<h1>Hello world</h1>';
  div.textContent = 'Hello world!';

    

