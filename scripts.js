document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audioPlayer');
    var playButton = document.getElementById('playButton');

    // 音楽を再生する
    audio.play();
    // ボタンのテキストを「Ohhhh Yuki Tsunoda」に変更
    playButton.textContent = 'Ohhhh Yuki Tsunoda';

    // 音楽が再生終了したときにボタンのテキストを「声で応援」に戻す
    audio.addEventListener('ended', function() {
        playButton.textContent = '声で応援';
    });
});
