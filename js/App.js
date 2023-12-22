class Effect {
  constructor($eventNode, $target, effect) {
    this._$eventNode = $eventNode;
    this._$target = $target;
    this._effect = effect;
  }

  bindEventOnClick() {
    this._$eventNode.addEventListener("click", () => {
      this._$target.classList.add(this._effect);
    });
  }
}

const FadeInEffect = new Effect(
  document.querySelector(".btn"),
  document.querySelector(".box"),
  "fade-in"
);

FadeInEffect.bindEventOnClick();
