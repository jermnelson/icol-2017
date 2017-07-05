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
    var title = push.text(75, 35, "Illustrating Push").attr({
            "font-size": "36px"
        });
    push.append(title);
    var car_frame = push.image("/static/img/car-shell.png").attr({
        x: 580,
        y: 50 });
    var car_grp = push.g(car_frame).attr({ visibility: "hidden" });
    var tires_grp = push.g().attr({ visibility: "hidden" });
    var tires = tires_grp.image("/static/img/tires.png").attr({
        x: 400,
        y: 300});
    var finished_grp = push.g().attr({ visibility: "hidden" });
    var finished_car = finished_grp.image("/static/img/finished-car.png").attr({
        x: 125,
        y: 150
    });
    var customers_grp = push.g().attr({ visibility: "hidden" });
    var customers = customers_grp.image("/static/img/people.png").attr({
        y: 150
    });

    var step_title;

    var pushStep1 = function() {
        step_title = push.text(40, 65, "Step 1: Assemble Car\n\nCar is assembled from raw materials").attr({
            "font-size": "24px"
        });
        car_grp.attr({ visibility: "" });
        var car_clone = car_frame.clone();
        car_grp.add(car_clone);
        car_clone.animate({ transform: "T440,T150" }, 3000, pushStep2);
    }

    var pushStep2 = function() {
        step_title.attr({ text: "Step 2: Attach Wheels"});
        tires_grp.attr({ visibility: "" });
        tires_grp.animate( { transform: "T400, T300, T400, T150" }, 2000, pushStep3); 
    }

    var pushStep3 = function() { 
        step_title.attr({ text: "Step 3: Paint frame" });
        finished_grp.attr({ visibility: "" });
        finished_grp.animate({ transform: "t110, t150" }, 2000);
    }
    pushStep1();
//    tires.animate({ transform: 't300,t200'}, 1000);

}
