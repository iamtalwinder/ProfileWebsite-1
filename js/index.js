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

  var $projects = $(".projects").isotope({
    itemSelector: ".project",
    layoutMode: "fitRows",
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $("#project-filter-1").change(function () {
    let value = $("#project-filter-1").val();
    $(`.project-filter-2 > div[value="${value}"]`).click();
  });

  $(".project-filter-2 > div").click(function () {
    let value = $(this).attr("value");
    $(".project-filter-2-active").removeClass("project-filter-2-active");
    $(this).addClass("project-filter-2-active");
    $("#project-filter-1").val(value);
    $projects.isotope({ filter: `.${value}` });
  });

  let link = null;
  let prevProject = "project1";

  $(".project button").click(function () {
    const currentProject = $(this).attr("data");
    const projectData = PROJECT_DATA[currentProject];
    link = projectData.link;
    $("#modal").css("display", "block");
    $("#project-name").text(projectData.name);
    $("#short-summary").text(projectData.shortSummary);
    $("#detailed-summary").text(projectData.detailedSummary);
    $(".owl-carousel .item").attr("src", function (i, ov) {
      return ov.replace(prevProject, currentProject);
    });
    prevProject = currentProject;
  });

  $("#view-site").click(function () {
    if (link) {
      window.open(link, "_blank");
    }
  });

  $("#close").click(function () {
    $("#modal").css("display", "none");
  });
});
