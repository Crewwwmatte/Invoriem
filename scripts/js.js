$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        dots: false,
        margin: 48
    });
});

const videoBtn = document.querySelector('#video-btn')
const vidPic = document.querySelector('.video-pic')
const videoWrapper = document.querySelector('.video-video')
const video = document.querySelector('#video-file')

videoBtn.addEventListener('click', function () {
    vidPic.classList.add('none')
    videoWrapper.classList.remove('video-overlay')

    if (video.paused) {
        function ply() {
            videoBtn.classList.add('none')
            video.play()
        }
        ply()
    }
})

video.addEventListener('click', function () {
    videoBtn.classList.remove('none')
    videoWrapper.classList.add('video-overlay')
    video.pause()
})
