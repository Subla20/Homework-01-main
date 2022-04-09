// Place your DOM creation code here
const main = document.createElement('main');
const section1 = document.createElement('section');
const header = document.createElement('h1');
const para = document.createElement('p');
const para2 = document.createElement('p');
const code = document.createElement('code');
const text1 = document.createTextNode("To make it fun, and maybe a bit tricky, I've added several types of elements. Some elements are pretty simple like these ");
const text2 = document.createTextNode(" tags. Others are more going to require extra attributes or mixing text nodes with element nodes.");
const aside = document.createElement('aside');
const image = document.createElement('img');
const block = document.createElement('blockquote');
const audio = document.createElement('audio');

document.body.appendChild(main);
main.appendChild(section1);
section1.appendChild(header);
header.setAttribute('id', 'head');
document.getElementById('head').textContent = 'Homework 01';

section1.appendChild(para);
para.setAttribute('id', 'para');
document.getElementById('para').textContent = 'For this homework, I want you to recreate this HTML page using JavaScript and the DOM API. This means, the HTML should have a blank body and minimal head. Once the page loads, use JavaScript to recreate all the elements from the original page.';
code.innerHTML = '&lt;p&gt;';

section1.appendChild(para2);
para2.setAttribute('id', 'para2');
para2.appendChild(text1);
para2.appendChild(code);
para2.appendChild(text2);

document.body.appendChild(aside);
aside.appendChild(image);
image.setAttribute('src', 'assets/mario.png');

aside.appendChild(block);
block.setAttribute('id', 'block');
document.getElementById('block').textContent = 'Mario says "Wahoo!" to homework';

aside.appendChild(audio);
audio.setAttribute('controls', 'true');
audio.setAttribute('autoplay', 'false');
audio.setAttribute('src', 'assets/Super Mario Bros. medley.mp3');

