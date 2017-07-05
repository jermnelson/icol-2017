function pullAnimation() {
    var pull = Snap("#animate-pull");
    var circ = pull.circle(20, 20, 20);
    var car_animation = Snap.load("/static/img/illustrating-pull.svg", 
        function (loadedSVG) {
            pull.append(loadedSVG); 
            var finished_car = pull.select("#finished-red-car");
            var car_frame = pull.select("#car-frame");
            var tires = pull.select("#tires");
            finished_car.animate({ transform: 's0,1' }, 1000);
            car_frame.animate({ path: "m 469, 201"}, 2000);
            tires.animate({ transform: "s0,1"}, 1000);
    });

}

function pushAnimation() {
    var push = Snap("#animate-push");
    var car_grp = push.g();
    var car_frame = car_grp.image("/static/img/car-shell.png");
    //car_grp.animate(500, 500);
    var tires_grp = push.g();
    var tires = tires_grp.image("/static/img/tires.png");

}
