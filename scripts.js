document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audioPlayer');
    var playButton = document.getElementById('playButton');

    // 音楽を再生する
    audio.play();
    // ボタンのテキストを「Traffic Paradise !」に変更
    playButton.textContent = 'Traffic Paradise !';

    // 音楽が再生終了したときにボタンのテキストを「再生」に戻す
    audio.addEventListener('ended', function() {
        playButton.textContent = '再生';
    });
});

