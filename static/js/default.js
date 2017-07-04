function pullAnimation() {
    var pull = Snap("#pull-img");
    alert("Pull is " + pull); 
    var circ = pull.circle(20, 20, 20);
   var car_animation = Snap.load("/static/img/illustrating-pull.svg", 
        function (loadedSVG) {
            pull.append(loadedSVG); 
            var finished_car = pull.select("#finished-red-car");
            alert("Finished car is " + finished_car);
            finished_car.animate({ x: 10 }, 3000);
    });

}
