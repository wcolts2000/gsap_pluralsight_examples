initProject = () => {
  let gridContainer = $(".gridContainer");

  Draggable.create(".moveAble", {
    bounce: gridContainer,
    edgeResistance: 0.65,
    // dragResistance: 0.75,
    cursor: "pointer",
    type: "x"
  });
};

$(document).ready(function() {
  initProject();
});
