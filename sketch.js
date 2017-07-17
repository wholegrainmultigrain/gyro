function setup() {
    createCanvas(750, 1334, WEBGL);

    print("setup function!");
}

var gn = new GyroNorm();

gn.init().then(function(){
  gn.start(function(data){
    // Process:
    // data.do.alpha	( deviceorientation event alpha value )
    // data.do.beta		( deviceorientation event beta value )
    // data.do.gamma	( deviceorientation event gamma value )
    // data.do.absolute	( deviceorientation event absolute value )

    // data.dm.x		( devicemotion event acceleration x value )
    // data.dm.y		( devicemotion event acceleration y value )
    // data.dm.z		( devicemotion event acceleration z value )

    // data.dm.gx		( devicemotion event accelerationIncludingGravity x value )
    // data.dm.gy		( devicemotion event accelerationIncludingGravity y value )
    // data.dm.gz		( devicemotion event accelerationIncludingGravity z value )

    // data.dm.alpha	( devicemotion event rotationRate alpha value )
    // data.dm.beta		( devicemotion event rotationRate beta value )
    // data.dm.gamma	( devicemotion event rotationRate gamma value )
  });
}).catch(function(e){
  // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
});


function draw() {
    background(0);
    rotateZ(frameCount * .1);
    rotateX(frameCount * .1);
    rotateY(frameCount * .1);
    ambientLight(10, 10, 10);
    //rotateZ(frameCount*0.01);
    //pointLight(0, 255, 255);
    //ambientLight(115, 20, 180); //even red light across our objects

    var dirY = (data.dm.y / height - 0.5) * 2;
    var dirX = (data.dm.x / width - 0.5) * 2;
    var dirZ = (data.dm.z / width - 0.5) * 2;
    directionalLight(115, 20, 180, dirX, -dirY, 0.25);
    ambientMaterial(250);

    box(100, 200, 10);
    torus(30, 7);
    torus(60, 7);
    torus(90, 7);
    torus(120, 7);
    //sphere(30);

    console.log("draw function");
}
