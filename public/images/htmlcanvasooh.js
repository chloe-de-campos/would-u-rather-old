(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"htmlcanvasooh_atlas_1", frames: [[0,0,553,1180]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17461,8003);


(lib.CachedBmp_1 = function() {
	this.initialize(ss["htmlcanvasooh_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApuQOMAAAggbITdAAMAAAAgbg");
	mask.setTransform(62.325,103.825);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6347").s().p("AANP+QhQgDhhAKQARiEALkKQAGiXAHkyQhEioiwl4QiUk+hrjaQDKgpCuhOQAjB9BYD4QBgEQA/CMQCmnwA2ktQBvAvBMAaQBVAeBfAWQhgDqiEFOQh/FEg4CWQAABNgUFaQgZGigDBDQhbgNg8gDg");
	this.shape.setTransform(62.325,103.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,124.7,207.7), null);


(lib.symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(6244.15,5290,8.9528,8.9528,0,0,0,62.3,103.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6347").s().p("EgDCCWAQqLlnoqidMAFHk0YQNhD1GnCHQMBD1GfDFMgCLDJ8UgAOAC3gAIAwwUgAJA2WgANAMKQo4pStLnLg");
	this.shape.setTransform(4018.275,1065.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6347").s().p("EATACmcQo4pStKnKIgDgCQmSjdltiRQjhhYjSg8MAFHk0YIAVAGQNRDwGiCGIAWAHQLxDxGZDCIAAAYMgCLDJkIgCA0UgAMAGKgAIAspIAAAqIgDQlUgAIAnLgALAKGIgBgBg");
	this.shape_1.setTransform(4018.275,1066.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6347").s().p("EATACmbQo4pRtKnLIgDgBQmSjdltiRQjhhYjSg8MAFHk0YIAVAGQNRDwGiCGIAWAHQLxDxGZDCIAAAXMgCLDJlIgCAzUgAMAGJgAIAsrIAAApIgDQmUgAIAnLgALAKFIgBgBg");
	this.shape_2.setTransform(4018.275,1103.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6347").s().p("EATACmcQo4pStJnLIgEgBQmSjeltiQQjhhYjSg8MAFHk0XIAUAFQNRDvGiCGIAWAHQLxDxGZDBIABAXMgCLDJkIgCAzUgAMAF8gAIAs3IAAArIgDQlUgAIAnNgALAKGIgBAAg");
	this.shape_3.setTransform(4018.275,1354.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6347").s().p("EATACmaQo4pRtJnLIgDgCQmSjdluiQQjghZjTg8MAFHk0SIAPgBQNQDvGkCHIAVAGQLwDxGaDBIAGAUMgCLDJgIgCAwUgAMAFQgAIAtmIAAAqIgDQqUgAIAnRgALAKGg");
	this.shape_4.setTransform(4018.275,2284.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6347").s().p("EgC/CWAIgEgCQmSjdluiRQjhhZjTg8MAFHk0IIAGgOQNODvGlCHIAVAGQLvDwGcDBIAPAOMgCLDJZIgBAqUgANADxgAIAvIIAAAsIgDQxUgAIAnZgALAKJIgBABQo3pRtInLg");
	this.shape_5.setTransform(4018.275,4238.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6347").s().p("EgC+CWCIgEgCQmSjeluiRQjihZjTg8MAFHk0FIACgTQNMDvGnCHIAVAHQLtDvGeDAIATALMgCLDJXIAAAnUgAOADEgAIAv2IAAAsIgDQ1UgAIAndgALAKJIAAADQo3pRtInKg");
	this.shape_6.setTransform(4018.275,5168.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6347").s().p("EgC+CWCIgEgCQmSjeluiRQjihZjTg8MAFHk0DIAAgVQNNDvGnCHIAUAGQLuDwGdDAIAVAKMgCLDJWIAAAmUgAOAC4gAIAwDIAAAsIgDQ2UgAIAnegALAKKIAAACQo3pRtInKg");
	this.shape_7.setTransform(4018.275,5419.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6347").s().p("EgC+CWCIgEgCQmSjeluiRQjihZjTg8MAFHk0DIAAgVQNNDvGnCHIAUAGQLuDvGdDBIAVAKMgCLDJWIAAAmUgAOAC2gAIAwEIAAAtIgDQ2UgAIAnegALAKKIAAACQo3pRtInKg");
	this.shape_8.setTransform(4018.275,5456.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6347").s().p("EgDCCWAQmSjeluiRQjihZjTg8MAFHk0YQNhD1GnCHQMBD1GfDFMgCLDJ8UgAOAC3gAIAwwIgDQ2UgAIAnhgALAKJQo4pStLnLg");
	this.shape_9.setTransform(4018.275,5457.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6347").s().p("EABNCY3QmGjpmgi8Qlpirk1hrMAFHk0YQNhD1GnCHQMBD1GfDFMgCLDJ8UgAOAC3gAIAwwQgEV6gELyQgGZkgIHQQnFnZqvmNg");
	this.shape_10.setTransform(4018.275,5349.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6347").s().p("EAEECayQl+jwnDjaQnEjhl2iLMAFHk0YQNhD2GmCGQMCD0GfDGMgCLDJ8UgAOAC3gAIAwxQgFejgHObQgFQNgFFUQl4mIpFljg");
	this.shape_11.setTransform(4018.275,5277.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6347").s().p("EAFzCb8Ql6j0nXjsQn8kCmdieMAFHk0YQNhD2GmCGQMCD0GfDGMgCLDJ8UgAOAC3gAIAwxUgAGAjzgAIAQCQgEKhgEEJQlJlXoFlKg");
	this.shape_12.setTransform(4018.275,5233.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6347").s().p("EAGrCciQl4j2ngj2QoYkTmyinMAFHk0YQNhD2GmCGQMCD0GfDGMgCLDJ8UgAOAC3gAIAwxUgAHAmfgAIAQ3QgDHmgEDjQkxk+nlk9g");
	this.shape_13.setTransform(4018.275,5210.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6347").s().p("EAHACcxQl3j4nkj5QojkZm5irMAFHk0YQNhD2GmCGQMCD0GfDGMgCLDJ8UgAOAC3gAIAwxUgAHAnfgAIARKQgEGhgDDVQkpk1nYk3g");
	this.shape_14.setTransform(4018.275,5202.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6347").s().p("EAHDCczQl3j4nlj5Qokkam6isMAFHk0YQNhD2GmCGQMCD0GfDGMgCLDJ8UgAOAC3gAIAwxUgAHAnogAIARNQgEGXgDDTQknkznXk3g");
	this.shape_15.setTransform(4018.275,5201.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6347").s().p("EAG5CcsQl3j3njj4QofkXm3iqMAFHk0YQNhD2GmCGQMCD0GfDGMgCLDJ8UgAOAC3gAIAwxUgAHAnKgAIARDQgEG4gDDaQksk4nck5g");
	this.shape_16.setTransform(4018.275,5205.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6347").s().p("EACzCZ7QmCjtmzjNQmcjIlZh9MAFHk0YQNhD1GmCHQMCD0GfDGMgCLDJ8UgAOAC3gAIAwxQgFatgFNQQgGUWgGGMQmamsp0l2g");
	this.shape_17.setTransform(4018.275,5309.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6347").s().p("EgDCCWAQmSjeluiRQjihZjTg8MAFHk0YQNhD1GnCHQMBD1GfDFMgCLDJ8UgAOAC3gAIAwwIgEV2UgAIAjMgAKAJeQo4pStLnLg");
	this.shape_18.setTransform(4018.275,5425.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6347").s().p("EgDCCWAQmSjeluiRQjihZjTg8MAFHk0YQNhD1GnCHQMBD1GfDFMgCLDJ8UgAOAC3gAIAwwIgFa2QgIe3gJIzQo4pStLnLg");
	this.shape_19.setTransform(4018.275,5393.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_9}]},1).wait(4));

	// Layer_3
	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(0,4392,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(3186.9,3577.5,0.5,0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFA500").s().p("EARQBXiQlzg5v5iMQAjnYAw/4UAA0gk4AAFgBcQAAnJgWuNQgjz4g1npQgVkpi8iiQjJivlnAAQtCAAthINQgRBmgNlyQgMleAAn2QAAogAQlMQASmIAiA2QJkkcMsjfQOskGJwAAQEkAAGkCDQGsCDFVDOQF8DfEPIMQFVKPAANqUAAAAGsgASAkVUgAWAqDgARAJSQgWGoAEMxQAJOIAjNmQraiduEiMg");
	this.shape_20.setTransform(6650.325,7744.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.instance_2},{t:this.instance_1}]}).wait(27));

	// Layer_7
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFA500").s().p("EgXaCYxQAsl4gS50QgV95AVqdUAAjgQ8AAbgmkQAV9WAAqzQgV/4gJ7LUgAWg0tAA0gcWQJkihMfAEQL8AELJCZUgAdApegAZAnmUgAyBOjAAQAOaUgA9Ae7gAEAoOUAAAA0XACQAO9Q72j9y2gwg");
	this.shape_21.setTransform(6223.975,14656.6439);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1).to({y:14649.2439},0).wait(1).to({x:6224.075,y:14597.0439},0).wait(1).to({x:6224.325,y:14455.4939},0).wait(1).to({x:6224.825,y:14179.6939},0).wait(1).to({x:6225.575,y:13725.0439},0).wait(1).to({x:6226.775,y:13046.8939},0).wait(1).to({x:6228.375,y:12100.3939},0).wait(1).to({x:6230.575,y:10840.8439},0).wait(1).to({x:6233.375,y:9223.5939},0).wait(1).to({x:6236.875,y:7203.7939},0).wait(1).to({y:7203.9939},0).wait(1).to({y:7207.3939},0).wait(1).to({y:7221.9439},0).wait(1).to({y:7261.1439},0).wait(1).to({y:7343.7939},0).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8730,15664.5);


// stage content:
(lib.htmlcanvasooh = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// symbol4
	this.instance = new lib.symbol4("synched",0);
	this.instance.setTransform(787.25,800.65,0.151,0.151,0,0,0,4365.3,7832.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(932,159.8,514.5,1823.8);
// library properties:
lib.properties = {
	id: '7307B6E9260C45CC8F14F2C50333982D',
	width: 1608,
	height: 1084,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_2.png", id:"CachedBmp_2"},
		{src:"images/htmlcanvasooh_atlas_1.png", id:"htmlcanvasooh_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7307B6E9260C45CC8F14F2C50333982D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;