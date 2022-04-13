$(document).ready(function () {
  $(".btn-jq").click(function () {
    $(".cssh1").css("background-color", "red");
    $(".cssh1").css("font-size", "10px");
  });

  $(".reset").click(function () {
    $(".cssh1").css("background-color", "");
    $(".cssh1").css("font-size", "");
  });

  $(".hide").click(function () {
    $(".h1").hide();
    $("#imgHideShow").hide();
  });

  $(".show").click(function () {
    $(".h1").show();
    $("#imgHideShow").show();
  });

  $(".addClass").click(function () {
    $("h3").addClass("activeClass");
  });

  $(".removeClass").click(function () {
    $("h3").removeClass("activeClass");
  });

  $(".append").click(function () {
    $("#paragraph").append("<strong>append() function</strong>");
  });
  $(".appendto").click(function () {
    $("#span1").appendTo("#foo");
  });
  $(".prepend").click(function () {
    $("#paragraph1").prepend("<strong>append() function</strong>");
  });
  $(".prependto").click(function () {
    $("#span2").prependTo("#foo1");
  });

  $(".before").click(function () {
    $("#box1").before("<strong>before after test</strong>");
    $("strong").css("display", "block").addClass("activeClass");
  });

  $(".after").click(function () {
    $("#box1").after("<strong>before after test</strong>");

    $("strong").css("display", "block").addClass("activeClass");
  });
  $(".reset").click(function () {
    $("strong").remove();
  });

  $(".green").click(function () {
    $(".greenbox").slideUp(3000).slideDown(3000);
  });
  $(".red").click(function () {
    $(".redbox").slideUp(3000).slideDown(3000);
  });
  $(".blue").click(function () {
    $(".bluebox").slideUp(3000).slideDown(3000);
  });
  $(".All").click(function () {
    $(".bluebox").slideUp(3000).slideDown(3000);
    $(".redbox").slideUp(3000).slideDown(3000);
    $(".greenbox").slideUp(3000).slideDown(3000);
  });

  $(".FadeIn").click(function () {
    $("#box2").fadeIn(2000);
  });
  $(".FadeOut").click(function () {
    $("#box2").fadeOut(2000);
  });
  $(".FadeToggle").click(function () {
    $("#box2").fadeToggle(4000);
  });
  $(".FadeTo").click(function () {
    $("#box2").fadeTo(4000, 0.2);
  });

  $("#stop").click(function () {
    $("#book").stop();
  });
  $("#clickme").click(function () {
    $("#book").animate(
      {
        opacity: 0.25,

        height: "toggle",
      },
      5000,
      function () {
        // Animation complete.
      }
    );
  });
  $(".attrCheck").click(function () {
    var variable = $(".image").attr("src");
    $(".information").text(variable);
  });
  $(".attrCheck1").click(function () {
    $(".image1").attr("width", "200px");
    $(".image1").attr({
      alt: "NiproWorker",
      title: "Nipro",
    });
    var variable1 = $(".image1").attr("title");
    $(".information1").text(variable1);
  });

  $("#target").blur(function () {
    alert("Handler for .blur() called.");
  });

  $("li").hover(
    function () {
      $(this).append($("<span> ***</span>"));
    },
    function () {
      $(this).find("span").last().remove();
    }
  );
});
