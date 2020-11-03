const root = document.documentElement;
const cards = [...document.querySelectorAll('.material-card')];

const updateStyles = (event) => {
  const dimensions = event.target.getBoundingClientRect();
  console.log('dimensions', dimensions)
  console.log('root', root)
  root.style.setProperty('--mouse-x', `${event.clientX - dimensions.x}px`);
  root.style.setProperty('--mouse-y', `${event.clientY - dimensions.y}px`);
};

if (cards && cards.length > 0) {
  for (let card of cards) {
    console.log(card)
    card.addEventListener('mouseenter', updateStyles);
    card.addEventListener('mouseleave', updateStyles);
  }
}

console.log('cards', cards)
