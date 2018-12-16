TweenMax.set(".image", { scale: 0, opacity: 0 });
TweenMax.set(".title", {
  perspective: 400,
  textShadow: "2px 2px 15px rgba(0,0,0,.6"
});
TweenMax.set(".instruction", {
  perspective: 400,
  textShadow: "2px 2px 15px rgba(0,0,0,.6"
});

let titleText = SplitText(".title"),
  tl = new TimeLineLite({ onComplete: loadGameBoard }),
  numWords = titleText.chars.length,
  gameContainer = $(".gameBoard"),
  dropTargets = $(".target"),
  totalTargets = 6,
  totalHit = 0;

initTitle = () => {
  for (let i = 0; i < numWords; i++) {
    tl.from(
      titleText.chars[i],
      0.5,
      {
        force3D: true,
        opacity: 0,
        x: -500,
        transformOrigin: "0 50%",
        ease: Back.easeOut
      },
      Math.random()
    );
  }
};

function loadGameBoard() {
  TweenMax.staggerTo(
    ".image",
    0.2,
    { opacity: 1, scale: 1, ease: Back.easeOut, force3D: true },
    0.1
  );
}

function initDraggableItem() {
  initDraggableItem.create(".dragItem", {
    bounds: gameContainer,
    edgeResistance: .65,
    onPress: function () {
      console.log("pressed");
    }
    onDragEnd: function() {
      console.log("end drag");
      
    }
  })
}

initTitle();
