$(function () {
  $("nav .menu").click(function () {
    $("nav .link-wrap").toggleClass("visible");
  });

  $(".page-link").click(function () {
    let dest = $(this).attr("dest");
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
      let transition = $(this.element).attr("transition");
      $(this.element).css({ transition: transition });
      $(this.element).removeClass("hide-to-left");
    },
    {
      offset: "70%",
    }
  );

  $(".hide-to-right").waypoint(
    function () {
      let transition = $(this.element).attr("transition");
      $(this.element).css({ transition: transition });
      $(this.element).removeClass("hide-to-right");
    },
    {
      offset: "70%",
    }
  );

  $(".fadein").waypoint(
    function () {
      let animationSpeed = $(this.element).attr("animation-speed");
      $(this.element).css({ transition: animationSpeed, opacity: "1" });
      $(this.element).removeClass("fadein");
    },
    {
      offset: "70%",
    }
  );

  //portfolio
  $("#project-filter-1").change(function () {
    let value = $("#project-filter-1").val();
    console.log(value);
  });

  $(".project-filter-2 > div").click(function () {
    let value = $(this).attr("value");
    $(".project-filter-2-active").removeClass("project-filter-2-active");
    $(this).addClass("project-filter-2-active");
    console.log(value);
  });
});
