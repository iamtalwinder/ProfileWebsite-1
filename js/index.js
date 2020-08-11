$(function () {
  $("nav .fa-bars").click(() => {
    $("nav .link-wrap").toggleClass("visible");
  });

  $(".page-link").click(function (event) {
    let dest = $(event.target).attr("dest");
    $("nav .link-wrap").removeClass("visible");

    changeActiveNav(dest);

    $("html, body").animate(
      {
        scrollTop: $("#" + dest).offset().top - 53,
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

  //animation
  $(".hide-to-left").waypoint(
    function () {
      $(this.element).removeClass("hide-to-left");
      $(this.element).next().removeClass("hide-to-right");
    },
    {
      offset: "70%",
    }
  );
});
