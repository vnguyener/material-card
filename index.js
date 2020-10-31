const root = document.documentElement;
const cards = [...document.querySelectorAll('.material-card')];

const updateStyles = (event) => {
  const dimenions = event.target.getBoundingClientRect();

  root.style.setProperty('--mount-x', `{e.clientX - dimensions.x}px`);
  root.style.setProperty('--mount-x', `{e.clientY - dimensions.y}px`);
};

if (cards && cards.length > 0) {
  for (let card of cards) {
    card.addEventListener('mouseenter', updateStyles);
    card.addEventListener('mouseleave', updateStyles);
  }
}
