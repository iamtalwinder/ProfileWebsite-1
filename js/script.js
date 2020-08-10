$(() => {
  $("nav .fa-bars").click(() => {
    $("nav .link-wrap").toggleClass("visible");
  });

  $("nav .link-wrap .page-link").click((event) => {
    let dest = $(event.target).attr("dest");
    $("nav .link-wrap").removeClass("visible");

    changeActiveNav(dest);

    $("html, body").animate(
      {
        scrollTop: $("#" + dest).offset().top - 63,
      },
      400
    );
  });

  $("#home").waypoint(() => {
    changeActiveNav("home");
  });

  $("#about").waypoint(
    (direction) => {
      if (direction === "down") changeActiveNav("about");
    },
    { offset: "60%" }
  );

  $("#about").waypoint((direction) => {
    if (direction === "up") changeActiveNav("about");
  });

  $("#portfolio").waypoint(
    (direction) => {
      if (direction === "down") changeActiveNav("portfolio");
    },
    { offset: "60%" }
  );

  $("#portfolio").waypoint((direction) => {
    if (direction === "up") changeActiveNav("portfolio");
  });

  $("#contact").waypoint(
    (direction) => {
      if (direction === "down") changeActiveNav("contact");
    },
    { offset: "60%" }
  );

  $("#contact").waypoint((direction) => {
    if (direction === "up") changeActiveNav("contact");
  });

  function changeActiveNav(dest) {
    $("nav .link-wrap .active").removeClass("active");
    $("nav").find(`[dest="${dest}"]`).addClass("active");
  }
});
