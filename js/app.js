$(document).ready(function () {
  // Waypoints
  //////////////////////////////////////////
  var logo_src = $(".logo__img img").attr("data-sticky");

  $(".js__navigation").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".js__navigation").addClass("navigation__sticky");
      } else {
        $(".js__navigation").removeClass("navigation__sticky");
      }
    },
    {
      offset: "-100px",
    }
  );

  // owl-carousel
  // //////////////////////////////////////

  $(".fleet-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 2,
      },
    },
  });

  // isotop
  //////////////////////////////
  let $btns = $(".projects__contant__button__group li");

  $btns.click(function (e) {
    $(".projects__contant__button__group li").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".grid").isotope({
      filter: selector,
    });

    return false;
  });

  $(".projects__contant__button__group #btn1").trigger("click");
});
