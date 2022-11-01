// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;
let x = 3; //selected image in the array
let img = []; // A variable to hold the image we want to classify

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img[1] = loadImage('images/185A0279.jpg');
  img[2] = loadImage('images/185A2391-2.jpg');
  img[3] = loadImage('images/185A2867.jpg');
  img[4] = loadImage('images/185A5651.jpg');
  img[5] = loadImage('images/185A5799.jpg');
  img[6] = loadImage('images/185A5877-2.jpg');

}

// function selectImg(){
//     // for (let i = 0; i < img.length; i++) {
//     //     image(img[i], 0, 0, 50, 50, 0, 0, img[i].width, img[i].height, CONTAIN);
//     // }
//     fill(230);
//     let elix = 50;
//     for (let j = 1; j < img.length; j++) {  
//         ellipse(elix, height-50, 50, 50);
        
//         elix += 100;
//     }
// }

function keyPressed() {
    if (keyCode === LEFT_ARROW && x > 0) {
      x --;
      setup();
      console.log(x);
    } else if (keyCode === LEFT_ARROW && x == 0) {
        x = 6;
        setup();
    } else if (keyCode === RIGHT_ARROW && x < 7) {
        x ++;
        setup();
        console.log(x);
    } else if (keyCode === RIGHT_ARROW && x == 7) {
        x = 1;
        setup();
    }    
}


function setup() {
  createCanvas(800, 600);
  //selectImg();
  classifier.classify(img[x], gotResult);
  image(img[x], 0, 0, width, height, 0, 0, img[x].width, img[x].height, CONTAIN, LEFT);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results);
  createDiv(`Label: ${results[0].label}`);
  createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
}