var tryCount = 0;
var minimalUserResponseInMiliseconds = 200;
function check() {
    before = new Date().getTime();
    debugger;
    after = new Date().getTime();
    if (after - before > minimalUserResponseInMiliseconds) {
        document.write(" Alert!! Close Developer Tools Now... ");
        self.location.replace(window.location.protocol + window.location.href.substring(window.location.protocol.length));
    } else {
        before = null;
        after = null;
        delete before;
        delete after;
    }
    setTimeout(check, 100);
}
check();

function darkMode() {
    localStorage.setItem("mode", "darkmode" === localStorage.getItem("mode") ? "light" : "darkmode");
    if ("darkmode" === localStorage.getItem("mode")) {
        document.querySelector("#mainCont").classList.add("drK");
    } else {
        document.querySelector("#mainCont").classList.remove("drK");
    }
};

function headScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const shrinkOn = 40;
    const commentEl = document.getElementById('header');
    if (distanceY > shrinkOn) {
        commentEl.classList.add("stick");
    } else {
        commentEl.classList.remove("stick");
    }
}

window.addEventListener('scroll', headScroll);
(function () {
    var youtube = document.querySelectorAll(".lazyYt");
    for (var i = 0; i < youtube.length; i++) {
        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
        var image = new Image();
        image.setAttribute("class", "lazy");
        image.setAttribute("data-src", source);
        image.setAttribute("src", "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");
        image.setAttribute("alt", "Youtube video");
        image.addEventListener("load", function () {
            youtube[i].appendChild(image);
        });
        youtube[i].addEventListener("click", function () {
            var iframe = document.createElement("iframe");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
            this.innerHTML = "";
            this.appendChild(iframe);
        });
    };
})();
for (var imageslazy = document.querySelectorAll('.pS .separator img, .pS .tr-caption-container img, .pS .psImg >img, .pS .btImg >img'), i = 0; i < imageslazy.length; i++) {
    imageslazy[i].setAttribute('onclick', 'return false');
}

function wrap(o, t, e) {
    for (var i = document.querySelectorAll(t), c = 0; c < i.length; c++) {
        var a = o + i[c].outerHTML + e;
        i[c].outerHTML = a;
    }
}

wrap('<div class="zmImg">', '.pS .separator >a', '</div>');
wrap('<div class="zmImg">', '.pS .tr-caption-container td >a', '</div>');
wrap('<div class="zmImg">', '.pS .separator >img', '</div>');
wrap('<div class="zmImg">', '.pS .tr-caption-container td >img', '</div>');
wrap('<div class="zmImg">', '.pS .psImg >img', '</div>');
wrap('<div class="zmImg">', '.pS .btImg >img', '</div>
