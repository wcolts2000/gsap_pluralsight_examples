$(document).ready(function() {
  init();
});

function init() {
  let toolTimeline = new TimelineLite({ paused: true });
  let duration = 1;

  toolTimeline.add(
    TweenLite.to("#toolBox", duration, { y: -100, ease: Linear.easeInOut })
  );
  toolTimeline.add(
    TweenLite.to("#weightLifter", duration, { y: -100, ease: Bounce.easeInOut })
  );
  toolTimeline.add(
    TweenLite.to("#crazy", duration, { y: -100, ease: Elastic.easeInOut })
  );
  toolTimeline.add(
    TweenLite.to("#leaf", duration, { y: -100, ease: Back.easeInOut })
  );

  $("#start").click(function() {
    toolTimeline.play();
  });

  $("#pause").click(function() {
    toolTimeline.pause();
  });

  $("#stop").click(function() {
    toolTimeline.stop();
  });

  $("#reverse").click(function() {
    toolTimeline.reverse();
  });
}
