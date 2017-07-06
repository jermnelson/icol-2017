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
        x: 500,
        y: 200
     });
    var car_grp = push.g(car_frame).attr({ visibility: "hidden" });

    var steel_panels = push.rect(540, 50, 100, 75).attr({
        fill: "grey",
        stroke: "#000",
        strokeWidth: 2
    });
    var panel_grp = push.g(steel_panels).attr({ visibility: "hidden" });
    
    var left_tire = push.circle(340, 350, 20);
    left_tire.attr({ fill: "white",
                     stroke: "black",
                     strokeWidth: 5});
    var right_tire = left_tire.clone();
    right_tire.transform("t158");

    var tires_grp = push.g(left_tire, right_tire).attr({ visibility: "hidden" });
    var finished_grp = push.g().attr({ visibility: "hidden" });
    var finished_car = finished_grp.image("/static/img/finished-car.png").attr({
        x: 125,
        y: 180
    });
    var customers_grp = push.g().attr({ visibility: "hidden" });
    var customers = customers_grp.image("/static/img/people.png").attr({
        y: 150
    });

    var blur = push.filter(Snap.filter.blur(5,10));
    var step_title;
    var step_desc;

    var pushStep1 = function() {
        var title_x = 450;
        step_title = push.text(20, 65, "Step 1: Create Car Frame").attr({
            "font-size": "24px"
        });
        step_desc = push.text(title_x, 125, "Raw steel panels transported to assembly line ");
        panel_grp.attr({ visibility: "" });
        var steel2 = steel_panels.clone();
        console.log(steel2.transform());
        steel2.animate({ transform: "t-30, 150,s0.5, t50"},  1000, function() {
            var steel3 = steel_panels.clone();
            steel_panels.attr({ visibility: "hidden"});
            steel3.animate({ transform: "M580,50 t100,150s0.5, t-50" }, 2000, function() {
                steel2.animate({ transform: "s0", filter: blur }, 2000);
                steel3.animate({ transform: "s0", filter: blur }, 2000);
                step_desc.attr({ text: "Steel Panels stamped into Car Frame" });
                car_grp.transform("s.0");
                car_grp.attr({ visibility: ""});
                car_grp.animate({ transform: "S1.5" }, 2500, pushStep2);
            });
        });
    }

    var pushStep2 = function() {
        var title_x = 325;
        step_title.attr({ text: "Step 2: Attach Wheels"});
        step_desc.attr({ text: "Car frame is pushed to next stage in the assembly line",
                            x:title_x });
        tires_grp.attr({ visibility: "" });
        car_grp.animate({ transform: "t-175,s1.25" }, 3000, function() {
            step_desc.attr({ text: "Tires are moved and attached to car", x: (title_x - 5) });  
            tires_grp.animate( { transform: "t0,-80" }, 4000, function() {
                pushStep3();   
            });
        });
    }

    var pushStep3 = function() { 
        var title_x = 175;
        //var car_grp2 = car_grp.clone();
        //var tires2_grp = tires_grp.clone();
        step_title.attr({ text: "Step 3: Paint frame" });
        step_desc.attr({  text: "Car is moved to final step",
                             x: title_x,
                             y: 180 });
        car_grp.animate({ transform: "t-350,0,s1.25"}, 2000);
        tires_grp.animate({ transform: "t-135,-80"  }, 2000, function() {
           tires_grp.attr({ visibility: "hidden" });
           car_grp.attr({ visibility: "hidden" });
           step_desc.attr({ text: "Car is painted" })
           finished_grp.attr({ visibility: "" });
           finished_grp.animate({ transform: "t-110,0" }, 4000, pushStep4);
        });
    }

    var pushStep4 = function() {
        step_title.attr({ text: "Step 4: Marketing and Sale to Customer" });
        step_desc.attr({ text: "Car is marketed with a predicted sale to customer",
                         x:20 });
    }
    pushStep1();
//    tires.animate({ transform: 't300,t200'}, 1000);

}
