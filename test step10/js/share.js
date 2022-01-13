function kakaoShare() {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "듣고싶은 명언 심리 테스트",
      description:
        "<2022 명언 심리 테스트> 심리테스트 결과를 통해 현재 내 심리와 어울리는 유명 명언을 추천해주는 테스트 입니다. 직장인, 사회초년생, 학생들에게 힘이 되었으면 하는 의미에서 제작했습니다.",
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
  var snsTitle = "듣고싶은 명언 심리 테스트";
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
