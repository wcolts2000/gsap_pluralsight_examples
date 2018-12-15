// document.addEventListener("DOMContentLoaded", function() {
//   alert("PureJS Ready");
// });

$(document).ready(function() {
  startTween();
});

// function startTween() {
//   TweenLite.to($("#toolBox"), 1, {
//     x: 270,
//     y: 350,
//     rotationY: 180,
// alpha: .2,
//     height: 200
//   });
// }

function startTween() {
  let d = 1;
  TweenLite.to($("#toolBox"), 1, {
    delay: d,
    x: 270,
    y: 350,
    scale: 1.5,
    onComplete: returnToNormal,
    onCompleteParams: [$("#toolBox")]
  });

  TweenLite.to(".asapReg", 1, {
    delay: d + 0.5,
    color: "#ff0000",
    fontSize: "+=75",
    onComplete: returnTextToNormal,
    onCompleteParams: [d]
  });
}

function returnToNormal(obj) {
  TweenLite.to($(obj), 1, {
    x: 0,
    y: 0,
    scale: 1
  });
}

returnTextToNormal = delay => {
  TweenLite.to(".asapReg", 1, {
    delay: delay,
    color: "#fff",
    fontSize: "-=75"
  });
};
