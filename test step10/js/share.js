function kakaoShare() {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "오늘의 명언",
      description: "내게 현재 어울릴 것 같은 명언을 추천해주는 테스트입니다.",
      imageUrl: "https://space-safari.netlify.app/img/black.png",
      link: {
        mobileWebUrl: "https://space-safari.netlify.app",
        webUrl: "https://space-safari.netlify.app"
      }
    },

    buttons: [
      {
        title: "테스트 해보기",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://space-safari.netlify.app"
        }
      }
    ]
  });
}

function fn_sendFB(sns) {
  var thisUrl = document.URL;
  var snsTitle = "오늘의 명언";
  if (sns == "kakaotalk") {
    kakaoShare();
  } else if (sns == "facebook") {
    var url =
      "http://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(thisUrl);
    window.open(url, "", "width=486, height=286");
  } else if (sns == "twitter") {
    var url =
      "http://twitter.com/share?url=" +
      encodeURIComponent(thisUrl) +
      "&text=" +
      encodeURIComponent(snsTitle);
    window.open(url, "tweetPop", "width=486, height=286,scrollbars=yes");
  } else if (sns == "band") {
    var url =
      "http://www.band.us/plugin/share?body=" +
      encodeURIComponent(snsTitle) +
      "&route=" +
      encodeURIComponent(thisUrl);
    window.open(url, "shareBand", "width=400, height=500, resizable=yes");
  }
}
