import "../styles/globals.css";
import Layout from "../component/layout";
import "../fonts/font-awesome/all.css";
import "../styles/animate.css";
// import 'animate.css';
import $ from "jquery";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    $(document).ready(function () {
      $(function () {
        $("#vidBox").VideoPopUp({
          backgroundColor: "#000",
          opener: "video-btn",
          maxweight: "640",
          idvideo: "v1",
        });
      });

      $("select").each(function () {
        var $this = $(this),
          numberOfOptions = $(this).children("option").length;

        $this.addClass("select-hidden");
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next("div.select-styled");
        $styledSelect.text($this.children("option").eq(0).text());

        var $list = $("<ul />", {
          class: "select-options",
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
          $("<li />", {
            text: $this.children("option").eq(i).text(),
            rel: $this.children("option").eq(i).val(),
          }).appendTo($list);
          //if ($this.children('option').eq(i).is(':selected')){
          //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
          //}
        }

        var $listItems = $list.children("li");

        $styledSelect.click(function (e) {
          e.stopPropagation();
          $("div.select-styled.active")
            .not(this)
            .each(function () {
              $(this).removeClass("active").next("ul.select-options").hide();
            });
          $(this).toggleClass("active").next("ul.select-options").toggle();
        });

        $listItems.click(function (e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass("active");
          $this.val($(this).attr("rel"));
          $list.hide();
          //console.log($this.val());
        });

        $(document).click(function () {
          $styledSelect.removeClass("active");
          $list.hide();
        });
      });

      // header
      $("#openNav").click(function () {
        $("#mySidenav").addClass("open");
        $("body").addClass("open-bg");
      });
      $("#closeNavbtn").click(function () {
        $("#mySidenav").removeClass("open");
        $("body").removeClass("open-bg");
      });
      $(".menu-bg-overlay").click(function () {
        $("#mySidenav").removeClass("open");
        $("body").removeClass("open-bg");
      });

      // header
      $(".mobile-menu").click(function () {
        $("#topnav").addClass("opennav");
      });
      $("#closeNav").click(function () {
        $("#topnav").removeClass("opennav");
      });

      /*
       * Author: Sławomir Netteria.NET https://netteria.net
       */
      (function ($) {
        $.fn.VideoPopUp = function (options) {
          var defaults = {
            backgroundColor: "#000",
            opener: "video",
            maxweight: "640",
            pausevideo: false,
            idvideo: "",
          };

          var patter = this.attr("id");

          var settings = $.extend({}, defaults, options);

          var video = document.getElementById(settings.idvideo);
          function stopVideo() {
            var tag = $("#" + patter + "").get(0).tagName;
            if (tag == "video") {
              video.pause();
              video.currentTime = 0;
            }
          }

          $("#" + patter + "").css("display", "none");
          $("#" + patter + "").append('<div id="opct"></div>');
          $("#opct").css("background", settings.backgroundColor);
          $("#" + patter + "").css("z-index", "100001");
          $("#" + patter + "").css("position", "fixed");
          $("#" + patter + "").css("top", "0");
          $("#" + patter + "").css("bottom", "0");
          $("#" + patter + "").css("right", "0");
          $("#" + patter + "").css("left", "0");
          $("#" + patter + "").css("padding", "auto");
          $("#" + patter + "").css("text-align", "center");
          $("#" + patter + "").css("background", "none");
          $("#" + patter + "").css("vertical-align", "vertical-align");
          $("#videCont").css("z-index", "100002");
          $("#" + patter + "").append(
            '<div id="closer_videopopup"><svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.197 2.837l.867.867-8.21 8.291 8.308 8.202-.866.867-8.292-8.21-8.23 8.311-.84-.84 8.213-8.32-8.312-8.231.84-.84 8.319 8.212 8.203-8.309zm-.009-2.837l-8.212 8.318-8.31-8.204-3.666 3.667 8.321 8.24-8.207 8.313 3.667 3.666 8.237-8.318 8.285 8.204 3.697-3.698-8.315-8.209 8.201-8.282-3.698-3.697z"/></svg></div>'
          );
          $("#" + settings.opener + "").on("click", function () {
            $("#" + patter + "").show();
            $("#" + settings.idvideo + "").trigger("play");
          });
          $("#closer_videopopup").on("click", function () {
            if (settings.pausevideo == true) {
              $("#" + settings.idvideo + "").trigger("pause");
            } else {
              stopVideo();
            }
            $("#" + patter + "").hide();
          });
          return this.css({});
        };
      })($);
    });
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
