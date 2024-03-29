function opennav () {
    document.getElementById("sidenav").style.width = "15em";
}

function closenav () {
    document.getElementById("sidenav").style.width = "0";
}

function preferAll (preferAll) {
    const checkboxes = document.getElementsByTagName("input");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == "checkbox") {
            checkboxes[i].checked = preferAll.checked;
        }
    }
}

function checkAll () {
    const checkboxes = document.getElementsByTagName("input");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == "checkbox") {
            checkboxes[i].checked = true;
        }
    }

    var fromtime = new Date();
    if (9 <= fromtime.getHours() && fromtime.getHours() <= 21) {
        var fromhour = String(fromtime.getHours());
        var fromminute = String(fromtime.getMinutes());
        if (fromtime.getHours() < 10) {
            fromhour = "0" + fromhour;
        }
        if (fromtime.getMinutes() < 10) {
            fromminute = "0" + fromminute;
        }
        document.querySelector("input[name='from']").value = fromhour + ":" + fromminute;
    } else {
        document.querySelector("input[name='from']").value = "09:00";
    }
}

function selectAll (selectAll) {
    const checkboxes = document.getElementsByName("preference");
    
    if (selectAll.id == "selectall1")
    {
        for (var i = 0; i < 6; i++) {
            checkboxes[i].checked = selectAll.checked;
        }
    } if (selectAll.id == "selectall2")
    {
        for (var i = 6; i < 21; i++) {
            checkboxes[i].checked = selectAll.checked;
        }
    } if (selectAll.id == "selectall3")
    {
        for (var i = 21; i < 26; i++) {
            checkboxes[i].checked = selectAll.checked;
        }
    } if (selectAll.id == "selectall4")
    {
        for (var i = 26; i < 32; i++) {
            checkboxes[i].checked = selectAll.checked;
        }
    } if (selectAll.id == "selectall5")
    {
        for (var i = 32; i < 39; i++) {
            checkboxes[i].checked = selectAll.checked;
        }
    } if (selectAll.id == "selectall6")
    {
        for (var i = 39; i < checkboxes.length; i++) {
            checkboxes[i].checked = selectAll.checked;
        }
    }

    zerothCheck();
}

function display (button) {
    if (button.id == "zerothButton") {
        const content = document.getElementById("zerothLabel");
        if (content.style.display == "none") {
            content.style.display = "inline";
            button.innerHTML = "&utrif;";
        } else {
            content.style.display = "none";
            button.innerHTML = "&dtrif;";
        }
    }

    if (button.id == "button1") {
        const content = document.getElementById("checkbox1");
        if (content.style.display == "none") {
            content.style.display = "inline";
            button.innerHTML = "&utrif;";
        } else {
            content.style.display = "none";
            button.innerHTML = "&dtrif;";
        }
    } if (button.id == "button2") {
        const content = document.getElementById("checkbox2");
        if (content.style.display == "none") {
            content.style.display = "inline";
            button.innerHTML = "&utrif;";
        } else {
            content.style.display = "none";
            button.innerHTML = "&dtrif;";
        }
    } if (button.id == "button3") {
        const content = document.getElementById("checkbox3");
        if (content.style.display == "none") {
            content.style.display = "inline";
            button.innerHTML = "&utrif;";
        } else {
            content.style.display = "none";
            button.innerHTML = "&dtrif;";
        }
    } if (button.id == "button4") {
        const content = document.getElementById("checkbox4");
        if (content.style.display == "none") {
            content.style.display = "inline";
            button.innerHTML = "&utrif;";
        } else {
            content.style.display = "none";
            button.innerHTML = "&dtrif;";
        }
    } if (button.id == "button5") {
        const content = document.getElementById("checkbox5");
        if (content.style.display == "none") {
            content.style.display = "inline";
            button.innerHTML = "&utrif;";
        } else {
            content.style.display = "none";
            button.innerHTML = "&dtrif;";
        }
    } if (button.id == "button6") {
        const content = document.getElementById("checkbox6");
        if (content.style.display == "none") {
            content.style.display = "inline";
            button.innerHTML = "&utrif;";
        } else {
            content.style.display = "none";
            button.innerHTML = "&dtrif;";
        }
    }
}

function checkSelectAll (child) {
    const label = child.parentNode.parentNode;
    const checkboxes = label.querySelectorAll("input[name='preference']");
    const checked = label.querySelectorAll("input[name='preference']:checked");

    if (checkboxes.length == checked.length) {
        if (label.id == "checkbox1") {
            const selectall = document.getElementById("selectall1");
            selectall.checked = true;
        } if (label.id == "checkbox2") {
            const selectall = document.getElementById("selectall2");
            selectall.checked = true;
        } if (label.id == "checkbox3") {
            const selectall = document.getElementById("selectall3");
            selectall.checked = true;
        } if (label.id == "checkbox4") {
            const selectall = document.getElementById("selectall4");
            selectall.checked = true;
        } if (label.id == "checkbox5") {
            const selectall = document.getElementById("selectall5");
            selectall.checked = true;
        } if (label.id == "checkbox6") {
            const selectall = document.getElementById("selectall6");
            selectall.checked = true;
        }
    } else {
        if (label.id == "checkbox1") {
            const selectall = document.getElementById("selectall1");
            selectall.checked = false;
        } if (label.id == "checkbox2") {
            const selectall = document.getElementById("selectall2");
            selectall.checked = false;
        } if (label.id == "checkbox3") {
            const selectall = document.getElementById("selectall3");
            selectall.checked = false;
        } if (label.id == "checkbox4") {
            const selectall = document.getElementById("selectall4");
            selectall.checked = false;
        } if (label.id == "checkbox5") {
            const selectall = document.getElementById("selectall5");
            selectall.checked = false;
        } if (label.id == "checkbox6") {
            const selectall = document.getElementById("selectall6");
            selectall.checked = false;
        }
    }

    zerothCheck();
}

function zerothCheck () {
    const zerothInput = document.getElementById("zerothInput");
    const checkboxes = document.querySelectorAll("input[name='preference']");
    const checked = document.querySelectorAll("input[name='preference']:checked");

    if (checkboxes.length == checked.length) {
        zerothInput.checked = true;
    } else {
        zerothInput.checked = false;
    }
}

window.addEventListener("DOMContentLoaded", checkAll, false);

var store_data;

function data_display (data) {
    store_data = data;

    display_init();

    const footer = document.querySelector("footer");
    const data_display_div = document.getElementById("data_display_div");
    var div = [];

    for (var i = 0; i < data.length; i++) {
        if (i >= 20) break;
        div[i] = document.createElement("div");
        div[i].className = "data_div";
        div[i].innerHTML = "<strong>" + data[i].place_name + "</strong><br>" + data[i].address_name;
        div[i].id = "data_" + String(i);
        if (i == 19 || i == data.length - 1) div[i].style.margin = "0";
        div[i].addEventListener("click", function () {
            let count = this.id.slice(5);
            var movDataLatLon = new kakao.maps.LatLng(data[count].y, data[count].x);
            map.panTo(movDataLatLon);
        });
        data_display_div.appendChild(div[i]);
    }
}

function display_init () {
    const footer = document.querySelector("footer");
    footer.innerHTML = "";

    const data_display_div = document.createElement("div");
    data_display_div.id = "data_display_div";
    footer.appendChild(data_display_div);
}

function delete_nav () {
    nav = document.getElementById("map");
    while (nav.firstChild) {
        nav.removeChild(nav.firstChild);
    }

    display_map();
    data_marker(store_data);

    document.getElementById("result").style.display = "none";
    document.getElementById("back_to_map").style.display = "none";
}
