import ui.TextView as TextView;
import ui.ImageView as ImageView;
import ui.SpriteView;
import ui.ImageScaleView;
import math.geom.Rect as Rect;
import math.geom.Point as Point;

import animate;
import AudioManager;

import ui.resource.loader as loader;

import src.ncct.util as util;

import resources.levelGrids as levelGrids;

exports = Class(GC.Application, function () {

  const items = ['resources/images/icon_block_01.png',
                  'resources/images/icon_block_02.png',
                  'resources/images/icon_block_03.png',
                  'resources/images/icon_block_04.png',
                  'resources/images/icon_block_05.png'];

  this.initUI = function () {
    this.view.style.backgroundColor = '#008a42';
    // util.scaleRootView(this, 1024, 576);

    loader.preload(["resources/images"], function () {
      console.log('Start');
      this.addLevelUI("level1", this.view);
    }.bind(this));
  };

  this.launchUI = function () {

  };

  this.shuffle = function(arrs){
    for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
  };

  this.addLevelUI = function(level, superview){
    var currentLevel = levelGrids[level];
    var tiles        = currentLevel['tiles'];
    tiles.forEach(function(cols, z){
      cols.forEach(function(col, i){
        var t = ''

        if(col == 1){
          t = items[Math.floor(Math.random()*items.length)];
        }
        var imageview = new ImageView({
          superview: superview,
          x: 20 +i * 80,
          y: 200+z*80,
          width: 70,
          height: 70,
          layout: "box",
          image: t
        });
      })
    })

  }


});
