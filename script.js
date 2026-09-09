// =========================================
// GIFT BOX
// =========================================

const giftBox = document.getElementById("giftBox");
const sparkles = document.getElementById("sparkles");

// =========================================
// GIFT CLICK → PAGE 2
// =========================================

if (giftBox) {
    giftBox.addEventListener("click", function () {
        // Gift animation
        giftBox.classList.add("open");

        // =====================================
        // SPARKLES
        // =====================================

        if (sparkles) {
            sparkles.innerHTML = "";

            for (let i = 0; i < 12; i++) {
                const sparkle = document.createElement("span");
                sparkle.classList.add("sparkle");
                sparkle.innerHTML = "✨";

                const x = (Math.random() - 0.5) * 300;
                const y = (Math.random() - 0.5) * 250;

                sparkle.style.setProperty("--x", `${x}px`);
                sparkle.style.setProperty("--y", `${y}px`);

                sparkles.appendChild(sparkle);
            }
        }

        // =====================================
        // GET PAGES
        // =====================================

        const welcomePage = document.getElementById("welcomePage");
        const friendshipPage = document.getElementById("friendshipPage");
        const birthdayPage = document.getElementById("birthdayPage");
        const photoPage = document.getElementById("photoPage");

        // =====================================
        // HIDE PAGE 1
        // =====================================

        if (welcomePage) {
            welcomePage.style.setProperty("display", "none", "important");
        }

        // =====================================
        // SHOW PAGE 2
        // =====================================

        if (friendshipPage) {
            friendshipPage.style.setProperty("display", "block", "important");
        }

        // =====================================
        // HIDE PAGE 3
        // =====================================

        if (birthdayPage) {
            birthdayPage.style.setProperty("display", "none", "important");
        }

        // =====================================
        // HIDE PHOTO PAGE
        // =====================================

        if (photoPage) {
            photoPage.style.setProperty("display", "none", "important");
        }

        // Go to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// =========================================
// OUR MEMORIES BUTTON → PHOTO PAGE
// =========================================

const birthdayButton = document.getElementById("birthdayButton");

if (birthdayButton) {
    birthdayButton.addEventListener("click", function () {
        const welcomePage = document.getElementById("welcomePage");
        const friendshipPage = document.getElementById("friendshipPage");
        const birthdayPage = document.getElementById("birthdayPage");
        const photoPage = document.getElementById("photoPage");

        // =================================
        // HIDE PAGE 1
        // =================================

        if (welcomePage) {
            welcomePage.style.setProperty("display", "none", "important");
        }

        // =================================
        // HIDE PAGE 2
        // =================================

        if (friendshipPage) {
            friendshipPage.style.setProperty("display", "none", "important");
        }

        // =================================
        // HIDE BIRTHDAY PAGE
        // =================================

        if (birthdayPage) {
            birthdayPage.style.setProperty("display", "none", "important");
        }

        // =================================
        // SHOW PHOTO PAGE
        // =================================

        if (photoPage) {
            photoPage.style.setProperty("display", "block", "important");
        }

        // =================================
        // START PHOTO MUSIC
        // =================================

        const photoMusic = document.getElementById("photoMusic");

        if (photoMusic) {
            photoMusic.currentTime = 0;
            photoMusic.volume = 0.8;

            photoMusic.play().catch(function (error) {
                console.log("Music could not start:", error);
            });
        }

        // =================================
        // START PHOTO SLIDESHOW
        // =================================

        startPhotoSlideshow();

        // Go to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// =========================================
// PHOTO SLIDESHOW
// =========================================

function startPhotoSlideshow() {
    const photos = document.querySelectorAll(".memory-photo");

    if (photos.length === 0) {
        return;
    }

    let currentPhoto = 0;

    // Show first photo
    photos.forEach(function (photo) {
        photo.classList.remove("active-photo");
    });

    photos[0].classList.add("active-photo");

    // Change photo every 5 seconds
    setInterval(function () {
        photos[currentPhoto].classList.remove("active-photo");

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

        photos[currentPhoto].classList.add("active-photo");
    }, 5000);
}

// =========================================
// PHOTO PAGE → FINAL BIRTHDAY PAGE
// =========================================

const photoSurpriseButton = document.getElementById("photoSurpriseButton");

if (photoSurpriseButton) {
    photoSurpriseButton.addEventListener("click", function () {
        const welcomePage = document.getElementById("welcomePage");
        const friendshipPage = document.getElementById("friendshipPage");
        const photoPage = document.getElementById("photoPage");
        const birthdayPage = document.getElementById("birthdayPage");

        // =================================
        // HIDE PAGE 1
        // =================================

        if (welcomePage) {
            welcomePage.style.setProperty("display", "none", "important");
        }

        // =================================
        // HIDE PAGE 2
        // =================================

        if (friendshipPage) {
            friendshipPage.style.setProperty("display", "none", "important");
        }

        // =================================
        // HIDE PHOTO PAGE
        // =================================

        if (photoPage) {
            photoPage.style.setProperty("display", "none", "important");
        }

        // =================================
        // STOP PHOTO MUSIC
        // =================================

        const photoMusic = document.getElementById("photoMusic");

        if (photoMusic) {
            photoMusic.pause();
            photoMusic.currentTime = 0;
        }

        // =================================
        // SHOW FINAL BIRTHDAY PAGE
        // =================================

        if (birthdayPage) {
            birthdayPage.style.setProperty("display", "block", "important");
        }

        // =================================
        // GO TO TOP
        // =================================

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// =========================================
// CONFETTI
// =========================================

const confettiContainer = document.getElementById("confetti-container");

if (confettiContainer) {
    confettiContainer.innerHTML = "";

    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.animationDelay = Math.random() * 2 + "s";
        confettiContainer.appendChild(confetti);
    }
}

// =========================================
// FINAL BIRTHDAY PAGE MUSIC
// =========================================

const birthdayMusic = document.getElementById("birthdayMusic");

if (photoSurpriseButton && birthdayMusic) {
    photoSurpriseButton.addEventListener("click", function () {
        birthdayMusic.currentTime = 0;

        birthdayMusic.play().catch(function (error) {
            console.log("Birthday music could not play:", error);
        });
    });
}
// =========================================
// PAGE 5 - ONE LAST SURPRISE
// =========================================

const finalSurpriseButton =
    document.getElementById("finalSurpriseButton");

const lastSurprisePage =
    document.getElementById("lastSurprisePage");

const finalGift =
    document.getElementById("finalGift");

const secretMessage =
    document.getElementById("secretMessage");

const birthdayPage =
    document.getElementById("birthdayPage");


// FINAL BIRTHDAY PAGE → PAGE 5
if (finalSurpriseButton) {

    finalSurpriseButton.addEventListener("click", function () {

        if (birthdayPage) {
            birthdayPage.style.display = "none";
        }

        if (lastSurprisePage) {
            lastSurprisePage.classList.add("show");
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// OPEN THE LAST GIFT
if (finalGift) {

    finalGift.addEventListener("click", function () {

        if (secretMessage) {
            secretMessage.classList.add("show");
        }

        const openText =
            document.querySelector(".open-gift-text");

        if (openText) {
            openText.style.display = "none";
        }

    });

}