// prac.html用のイベント送信テストスクリプト

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('eventBtn');
  const result = document.getElementById('result');
  if (btn) {
    btn.addEventListener('click', function() {
      // ここでGTM/GA4イベント送信のテスト（実際はconsole.logで代用）
      console.log('カスタムイベント送信: test_event');
      result.textContent = 'イベント「test_event」を送信しました（ダミー）';
      // 実際のGTM/GA4連携時はここにdataLayer.push等を記述
      // dataLayer.push({event: 'test_event'});
    });
  }
}); 