const el = {
  l: document.getElementById("l"),
  o: document.getElementById("o"),
  v: document.getElementById("v"),
  e: document.getElementById("e"),
  u: document.getElementById("u"),
  y: document.getElementById("y"),
  ou: document.getElementById("ou"),
  you: document.getElementById("you")
};

function crtLoveTL() {
  const move = 1000;
  const delta = 150;

  return new mojs.Timeline().add([
    new mojs.Tween({
      duration: move,
      onUpdate: (progress) => {
        [el.l, el.o, el.v, el.e, el.u, el.y, el.ou, el.you].forEach((char, i) => {
          if (char) {
            if (progress >= (i * delta) / move) {
              char.style.opacity = 1;
            }
          }
        });
      }
    })
  ]);
}

window.onload = () => {
  crtLoveTL().play();
};
