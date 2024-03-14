const countdownDate = new Date("March 21, 2024 00:00:40").getTime();
const countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const formatDoubleDigit = (number) => (number < 10 ? `0${number}` : `${number}`);
    document.getElementById("days").innerText = formatDoubleDigit(days);
    document.getElementById("hours").innerText = formatDoubleDigit(hours);
    document.getElementById("minutes").innerText = formatDoubleDigit(minutes);
    document.getElementById("seconds").innerText = formatDoubleDigit(seconds);
}, 1000);

function openNav() {
    const sidebar = document.getElementById("side-bar");
    const body = document.getElementById("body");
    const socials = document.getElementById("socials");
    const balance = document.getElementById("balance");
    const balanceText = document.getElementById("balance-text");
    const paragraphs = document.querySelectorAll('.icons-name');
    const iconCaps = document.querySelectorAll(".icons-caps");
    const themeToogle = document.getElementById("theme-toogle");

    if (sidebar.style.width === "8vw") {
        sidebar.style.width = "18vw";
        body.style.width = "calc(100% - 20.76vw)";
        body.style.marginLeft = "18vw";
        socials.style.width = "100%";
        socials.style.flexDirection = 'row';
        paragraphs.forEach(paragraph => paragraph.style.fontSize = '16px');
        balance.style.width = "100%";
        balanceText.style.fontSize = "14px";
        iconCaps.forEach(iconCap => iconCap.style.width = '100%');
        themeToogle.style.display = 'flex';
    }
    else if (sidebar.style.display !== 'none') {
        sidebar.style.width = "8vw";
        body.style.width = "calc(100% - 10.88vw)";
        body.style.marginLeft = "8vw";
        socials.style.width = "fit-content";
        socials.style.flexDirection = 'column';
        paragraphs.forEach(paragraph => paragraph.style.fontSize = '0px');
        balance.style.width = "fit-content";
        balanceText.style.fontSize = "0px";
        iconCaps.forEach(iconCap => iconCap.style.width = 'fit-content');
        themeToogle.style.display = 'none';
    }
}
function openHam() {
    const sidebar = document.getElementById("side-bar");
    const sidebtn = document.getElementById("side-btn");
    const socials = document.getElementById("socials");
    const balance = document.getElementById("balance");
    const balanceText = document.getElementById("balance-text");
    const paragraphs = document.querySelectorAll('.icons-name');
    const iconCaps = document.querySelectorAll(".icons-caps");
    const themeToogle = document.getElementById("theme-toogle");
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'flex';
        sidebar.style.zIndex = '10'
        sidebar.style.marginTop = '0vh'
        sidebar.style.width = "250px";
        sidebar.style.height = "100vh";
        socials.style.width = "100%";
        socials.style.flexDirection = 'row';
        paragraphs.forEach(paragraph => paragraph.style.fontSize = '16px');
        balance.style.width = "100%";
        balanceText.style.fontSize = "14px";
        iconCaps.forEach(iconCap => iconCap.style.width = '100%');
        themeToogle.style.display = 'flex';
    }
    else {
        sidebar.style.display = 'none';
    }
}
function active(index) {

    var buttons = document.querySelectorAll('.info2-btn');
    buttons.forEach(function (button) {
        button.classList.remove('info-active');
    });
    buttons[index].classList.add('info-active');
    if (index === 1) {
        document.getElementById('coin-img').src = 'Images/bnb.png';
        document.getElementById('coin-name').textContent = 'BNB';
        document.getElementById('wlt-img').src = 'Images/bnb.png';
        document.getElementById('wlt-name').textContent = 'BNB Balance:';
        var buttons = document.querySelectorAll('.info3-card1');
        buttons.forEach(function (button) {
            button.classList.remove('active3');
        });
        buttons[0].classList.add('active3');
    }
    else {
        document.getElementById('coin-img').src = 'Images/eth.png';
        document.getElementById('coin-name').textContent = 'ETH';
        document.getElementById('wlt-img').src = 'Images/eth.png';
        document.getElementById('wlt-name').textContent = 'ETH Balance:';
        var buttons = document.querySelectorAll('.info3-card1');
        buttons.forEach(function (button) {
            button.classList.remove('active3');
        });
        buttons[0].classList.add('active3');
    }
}
function active2(index) {

    var buttons = document.querySelectorAll('.info3-card1');
    buttons.forEach(function (button) {
        button.classList.remove('active3');
    });
    buttons[index].classList.add('active3');
    var wltBalance = document.getElementById('wlt-balance');
    var h4 = wltBalance.querySelector('h4');
    var imgElement = wltBalance.querySelector('img');
    var clickedCardContent = buttons[index].querySelector('p').textContent;
    h4.textContent = clickedCardContent + ' Balance:';
    imgElement.src = buttons[index].querySelector('img').src;
}


const switchToDark = () => {
    document.getElementById('theme-btn').style.justifyContent = 'flex-end';
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
    console.log('dark')
}

const switchToLight = () => {

    document.getElementById('theme-btn').style.justifyContent = 'flex-start';
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
    console.log('light')
}

function themetoogle() {
    if(document.getElementById('theme-btn').style.justifyContent === 'flex-end'){
        switchToLight()
    }
    else
    {
        switchToDark();
    }
}

window.addEventListener('load', (event) => {
    const getTheme = localStorage.getItem('theme');
    console.log(getTheme)
    if (getTheme === 'dark') {
        switchToDark();
    }
    else if (getTheme === 'light') {
        switchToLight();
    }
})
