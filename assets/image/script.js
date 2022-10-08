window.onload = function() {
  let text = document.getElementById('installDialogContainer').innerHTML;
  document.getElementById('installDialogContainer').innerHTML = "<div class='SeihinName'> <h2>____のダウンロードとインストールを開始しますか？</h2> </div> <input class='InstallButton' type='button' value='Install' onclick='InstallStart();'/>";
}

//C#側にインストール可能のメッセージを送る
function InstallStart() {
    //C#の関数の実行
    document.title = 'https://onedrive.live.com/download?cid=A4B976D6D52E89DF&resid=A4B976D6D52E89DF%21466&authkey=AKBrXIR2zPAmOhU';
    $('.installDialog').removeClass("installDialogShow");
    $('.NotinstallDialog').addClass("installDialogShow");
    chrome.webview.hostObjects.class.MessageShow("InstallStart");
}

document.getElementById('CloseButton').addEventListener('click', function(){
  chrome.webview.hostObjects.class.MessageShow("CloseStart");
});

document.getElementById('FullScreenButton').addEventListener('click', function(){
  chrome.webview.hostObjects.class.MessageShow("FullScreenStart");
});

document.getElementById('MinimizeButton').addEventListener('click', function(){
  chrome.webview.hostObjects.class.MessageShow("MinimizeStart");
});

$(window).on('load', function(){
  let title = document.title;
  var result = title.replace("(PescadoGamesLauncher)", "");
  $('.SeihinName').html('<h2>' + (result) + 'のダウンロードとインストールを開始しますか？</h2>');
});
