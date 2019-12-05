(function () {
    'use strict';

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml9 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i+1)
    }).add({
        targets: '.ml9',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });


    // JS playbutton
    var videoPlayButton,
    videoWrapper = document.getElementsByClassName('animation')[0],
    video = document.getElementsByTagName('video')[0],
    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
    			this.formatVideoPlayButton();
                video.classList.add('has-media-controls-hidden');
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0];
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton);
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper.insertAdjacentHTML('beforeend', '\
            <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
            </svg>\
        ');
        },

        hideVideoPlayButton: function() {
            video.play();
            videoPlayButton.classList.add('is-hidden');
            video.classList.remove('has-media-controls-hidden');
            video.setAttribute('controls', 'controls');
        }
    };

    videoMethods.renderVideoPlayButton();

}());
