import device;
import ui.view;

exports.randFloat = function(low, high){
  if(high == null){
    high  = low;
    low     = 0;
  }
  return low + (high - low) * Math.random();
}

exports.randInt = function (low, high) {
  return exports.randFloat(low, high) | 0;
}

exports.choice = function (arr) {
  return arr[arr.length * Math.random() | 0];
}

exports.scaleRootView = function (app, W, H) {
  var view = app.view;
  var scale = Math.min(view.style.width / W, view.style.height / H);
  var width = view.style.width * scale;
  var height = view.style.height * scale;

  app.view = new ui.View({
    superview: view,
    scale: scale,
    width: W,
    height: H,
    x: (device.screen.width - W * scale) / 2,
    y: (device.screen.height - H * scale) / 2,
    clip: true,
  });
}