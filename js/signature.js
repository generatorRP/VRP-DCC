const canvas = document.querySelector('.canvas');
const image = document.querySelector('.canvas-image');
const ctx = canvas.getContext('2d');
const inputs = document.querySelector('.inputs');
const ranks = document.querySelector('.ranks');

//images preloaded
let rank = null;
ranks.addEventListener('click', (e) => {
  if (e.target.tagName === 'INPUT') {
    // Setting class, image
    Array.from(ranks.children).forEach((each) =>
      each.classList.remove('btn-active')
    );
    e.target.classList.add('btn-active');
    rank = e.target;
    render();
  }
});

const render = () => {
  // Reset
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.shadowOffsetY = 0;
  // Draw Image
  ctx.drawImage(image, 0, 0);
  // Set text properties
  ctx.shadowOffsetY = 5;
  ctx.shadowBlur = 5;
  // ctx.shadowOffsetx = 4;
  ctx.shadowColor = '#000';

  ctx.font = '68px Source Sans Pro';
  ctx.fillText(inputs.fullname.value.toUpperCase().trim(), 500, 130);
  ctx.font = '46px Source Sans Pro';
  ctx.fillText(inputs.badge.value.toUpperCase().trim(), 500, 190);
  ctx.shadowOffsetY = 3;
  ctx.shadowOffsetx = 3;
  ctx.shadowBlur = 1;
  ctx.font = '34px Source Sans Pro';
  ctx.fontWeight = 'bold';

  if (rank !== null) {
    ctx.fillText(rank.value.toUpperCase().trim(), 500, 255);
  }
  ctx.fillText(inputs.line1.value.toUpperCase().trim(), 500, 305);
  ctx.fillText(inputs.line2.value.toUpperCase().trim(), 500, 350);
};

inputs.fullname.addEventListener('keyup', () => {
  render();
});

inputs.badge.addEventListener('keyup', () => {
  render();
});

inputs.line1.addEventListener('keyup', () => {
  render();
});

inputs.line2.addEventListener('keyup', () => {
  render();
});

onload = () => {
  // inputs.reset();

  // Set canvas properties
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  ctx.drawImage(image, 0, 0);
  ctx.textAlign = 'left';
  ctx.fillStyle = 'white';
  render();
};
