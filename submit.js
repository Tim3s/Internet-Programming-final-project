$("#submitButton").click(function () {
    const personnel_val = $("input[name=personnel]").val();
    const from_val = $("input[name=from]").val();
    const to_val = $("input[name=to]").val();
    const preference_val = $("input[name=preference]").serialize();

    window.location.href = "./loading.html";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            $.ajax ({
                url: "https://pacific-garden-17851.herokuapp.com/",
                type: "POST",
                data: {
                    personnel: personnel_val,
                    from: from_val,
                    to: to_val,
                    preference: preference_val,
                    latitude: latitude,
                    longitude: longitude
                },
                success: function(data) {
                    localStorage.clear();
                    localStorage.setItem('item', data);
                    window.alert("success!");
                    clearInterval(id1);
                    time1 = 0;
                    loading_article.innerHTML = "Loading";
                    clearInterval(id2);
                    time2 = 0;
                    loading_footer.innerHTMl = "소요 시간: &nbsp;초";
                    window.location.href = "./main.html";
                }
            })
        });
    } else {
        window.alert("오류: 사용자 위치 정보 액세스 권한을 허용해주세요");
    }
})
