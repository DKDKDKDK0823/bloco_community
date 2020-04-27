// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery 
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .


// $(function() {
//   $('.main-text').textillate({
//     selector: '.texts',	// 要素を指定
//     loop: false,	// ループ繰り返し
//     minDisplayTime: 3000,	// アニメーションの間隔時間
//     initialDelay: 1000,	// アニメーション開始までの遅延時間
//     autoStart: true,	// アニメーションの自動スタート
//     inEffects: [],	// エフェクト開始時のアニメーション設定
//     outEffects: [ 'hinge' ],	// エフェクト終了時のアニメーション設定

//     in: {
//         effect: 'fadeInLeftBig',	// エフェクトの指定
//         delayScale: 1.5,	// 遅延時間の指数
//         delay: 50,	// 文字ごとの遅延時間
//         sync: false,	// アニメーションをすべての文字に同時に適用
//         shuffle: false, // 文字のランダム表示
//         reverse: false,	// エフェクトを逆に再生（「sync:true」のときは不可）
//         callback: function () {}	// コールバック関数
//     },

//     out: {
//         effect: 'hinge',  
//         delayScale: 1.5,  
//         delay: 50,  
//         sync: false,  
//         shuffle: false,
//         reverse: false,
//         callback: function () {}
//     }
// });

$(function() {  
    $('.btn-6')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
    $('[href=#]').click(function(){return false});
    $('.main-text').textillate({
        selector: '.texts',	// 要素を指定
        loop: false,	// ループ繰り返し
        minDisplayTime: 3000,	// アニメーションの間隔時間
        initialDelay: 1000,	// アニメーション開始までの遅延時間
        autoStart: true,	// アニメーションの自動スタート
        inEffects: [],	// エフェクト開始時のアニメーション設定
        outEffects: [ 'hinge' ],	// エフェクト終了時のアニメーション設定
    
        in: {
            effect: 'fadeInLeftBig',	// エフェクトの指定
            delayScale: 1.5,	// 遅延時間の指数
            delay: 50,	// 文字ごとの遅延時間
            sync: false,	// アニメーションをすべての文字に同時に適用
            shuffle: false, // 文字のランダム表示
            reverse: false,	// エフェクトを逆に再生（「sync:true」のときは不可）
            callback: function () {}	// コールバック関数
        },
    
        out: {
            effect: 'hinge',  
            delayScale: 1.5,  
            delay: 50,  
            sync: false,  
            shuffle: false,
            reverse: false,
            callback: function () {}
        }
    });
  });
