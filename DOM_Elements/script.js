const h3Elements = document.querySelectorAll('h3');
h3Elements.forEach(h3 => {
    h3.textContent = '!!!';
    h3.style.color = 'green';
});

const myList = document.getElementById('myList');
for (let i = 1; i <= 30; i++) {
    const li = document.createElement('li');
    li.textContent = `${i} - овечка`;
    myList.appendChild(li);
}

const allSpans = document.getElementsByTagName('span');
for (const span of allSpans) {
    span.classList.add('active');
}

const allStrongTags = document.querySelectorAll('strong');
allStrongTags.forEach(strong => {
    strong.style.color = 'green';
});

const allEmTags = document.querySelectorAll('em');
allEmTags.forEach(em => {
    em.classList.add('selected');
});

const allMarkTagsInRow = document.querySelectorAll('.row mark');
allMarkTagsInRow.forEach(mark => {
    mark.classList.add('selected');
});

const allLinks = document.querySelectorAll('a');
allLinks.forEach(link => {
    link.style.textDecoration = 'none';
});

const someStrongTags = document.querySelectorAll('.some');
someStrongTags.forEach(strong => {
    strong.classList.toggle('some');
});

const rowElements = document.querySelectorAll('.row');
if (rowElements.length >= 2) {
    rowElements[1].classList.remove('row');
}

const secondLink = allLinks[1];
const computedColor = window.getComputedStyle(secondLink).color;
console.log('Color of the second link:', computedColor);

if (rowElements.length >= 3) {
    rowElements[2].classList.add('third');
}

const rowInnerElement = document.querySelector('.row-inner');
rowInnerElement.style.color = 'pink';

const rowInputElement = document.querySelector('.row-input');
const inputElement = document.createElement('input');
inputElement.type = 'text';
inputElement.classList.add('input');
rowInputElement.appendChild(inputElement);
inputElement.style.backgroundColor = 'yellow';
inputElement.placeholder = 'Enter text here...';

const rowOuterElement = document.querySelector('.row-outer');
rowOuterElement.style.fontSize = '20px';

const lastElement = document.querySelector('.last');
lastElement.textContent = 'Last but not least';
