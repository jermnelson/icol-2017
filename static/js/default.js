function pullAnimation() {
    var pull = Snap("#animate-pull");
    var title = pull.text(75, 35, "Illustrating Pull").attr({
            "font-size": "36px"
        });
    pull.append(title);

    var car_frame = pull.image("/icol-2017/static/img/car-shell.png").attr({
        x: 500,
        y: 200
     });
    var car_grp = pull.g(car_frame).attr({ visibility: "hidden" });


    var customers_grp = pull.g().attr({ visibility: "hidden" });
    var customers = customers_grp.image("/icol-2017/static/img/people.png").attr({
        y: 100
    });

    var left_tire = pull.circle(340, 350, 20);
    left_tire.attr({ fill: "white",
                     stroke: "black",
                     strokeWidth: 5});
    var right_tire = left_tire.clone();

    right_tire.transform("t158");

    var tires_grp = pull.g(left_tire, right_tire).attr({ visibility: "hidden" });

    var pull_flow, step_desc, step_title ;
    var arrow_attrs = { stroke: 'green',
                        fill: 'green',
                        strokeWidth: 5 };

    var finished_grp = pull.g().attr({ visibility: "hidden" });
    var finished_car = finished_grp.image("/icol-2017/static/img/finished-car.png").attr({
         x: 145,
         y: 180
    });

    var order_grp = pull.g().attr({ visibility: "hidden" });
    var order_img = order_grp.image("/icol-2017/static/img/car-order.png").attr(
            { x: 50, y: 110 });
    


    var getKanbanLabel = function(start_x) {
        var title = pull.text(start_x, 240, "Kanban Card");
        title.attr({ "font-size": "12px", 
            "font-weight": 'bold' });
        title.transform("r-65");
        return title
    }
 
    var pullArrow = function(start_x) {
        var y_pos = 380;
        var top_line = pull.line(start_x, y_pos, start_x + 75, y_pos);
        top_line.attr(arrow_attrs);
        var arrow = pull.polyline([start_x+75, y_pos-5, start_x+100, y_pos+25, start_x+75, y_pos+55]);
        arrow.attr(arrow_attrs);
        var text = pull.text(start_x+40, y_pos+30, "Pull");
        text.attr( { "font-size": "18px",
                     "font-weight": "bold",
                     stroke: 'green' });
        var bottom_line = pull.line(start_x, y_pos+50, start_x + 75, y_pos+50);
        bottom_line.attr(arrow_attrs);



    }

    var steel_panels = pull.rect(540, 50, 100, 75).attr({
        fill: "grey",
        stroke: "#000",
        strokeWidth: 2
    });
    var pullTiresTitle, title2, title3;
    var step_desc2;
    var panel_grp = pull.g(steel_panels).attr({ visibility: "hidden" });

    
    var pullKanban = pull.rect(100, 200, 50, 75).attr(
        { fill: "red",
          stroke: "black",
          strokeWidth: 2,
          visibility: "hidden" });

    var kanbanTitle = getKanbanLabel(90);
    kanbanTitle.attr({ visibility: "hidden" });

    var pullStep1 = function() {
        step_title = pull.text(10, 65, "Step 1: Customer orders a red car").attr({
            "font-size": "24px"
        });
        step_desc = pull.text(110, 160, "Customer orders and purchases car");
        customers_grp.attr({ visibility: "" });
        order_grp.attr( { visibility: "" }).animate({ transform: "t10,75" }, 5000, function() {
            step_desc2 = step_desc.clone();
            step_desc2.attr({ text: "Step 4 Paint and Finish Station",
                                y: 185 });
            pullKanban.attr({ visibility: "" });
            kanbanTitle.attr({ visibility: "" });
            pullKanban.animate({ transform: "t1" }, 5000, function() {
                pullKanbanTires = pullKanban.clone();
                pullKanbanTires.attr({ x: 220 });
                pullTiresTitle = getKanbanLabel(210); 
                step_desc3 = step_desc.clone();
                step_desc3.attr( { text: "Step 3 Tire Station", 
                                   x: 190,
                                   y: 290 } );
                
                pull_flow = pullArrow(150);
                pullKanbanTires.animate({ transform: "t1" }, 5000, function() {
                    
                    step_desc4 = step_desc.clone();
                    step_desc4.attr( { text: "Step 2 Car Panels Station",
                                          x: 425 });
                    pullKanbanPanels = pullKanban.clone();
                    pullKanbanPanels.attr({ x: 450 });
                    pullPanelsTitle = getKanbanLabel(445);
                    pull_flow = pullArrow(275);
                    pullKanbanPanels.animate({ transform: "t1" }, 6000, function() {
                        step_desc4.attr({ visibility: "hidden" });
                        pull_flow = pullArrow(425);
                        pullStep2();
                    });
                });
            });            
        });
    }

    var pullStep2 = function() {
        var title_x = 430;
        step_title.attr( {
            text: "Step 2: Panels Delivered and Car Frame Created"
        });
        step_desc.attr( { text: "Raw steel panels transported to assembly line",
                             x: title_x,
                             y: 150 }); 
        panel_grp.attr({ visibility: "" });
        steel2 = panel_grp.clone();
        steel2.animate({ transform: "t-30, 150,s0.5, t50"},  1000, function() {
            var steel3 = panel_grp.clone();
            steel3.animate({ transform: "M580,50 t100,150s0.5, t50" }, 2000, function() {
                panel_grp.attr({ visibility: "hidden" });
                
                steel2.animate({ transform: "s0", filter: blur }, 2000);
                steel3.animate({ transform: "s0", filter: blur }, 2000);
                step_desc.attr({ text: "Steel Panels stamped into Car Frame" });
                car_grp.transform("s.0");
                car_grp.attr({ visibility: ""});
                car_grp.animate({ transform: "S1.5" }, 2500, function() {
                    pullKanbanPanels.attr( { fill: "green" });
                    step_desc.attr({ text: "Kanban Card switched to geen" });
                    pullPanelsTitle.remove();
                    pullKanbanPanels.animate({ transform: "r90s.1t0,-25" }, 5000, pullStep3);
                });
            });

        });
    }

    var pullStep3 = function() {
        var title_x = 325;
        pullKanbanPanels.remove();
        step_title.attr({ text: "Step 3: Attach Wheels"});
        step_desc.attr({ text: "Car frame moved to next station",
                            x:title_x,
                            y: 180 });
        tires_grp.attr({ visibility: "" });
        
        car_grp.animate({ transform: "t-175,s1.25" }, 3000, function() {
            step_desc.attr({ text: "Tires are moved and attached to car", 
                             x: (title_x - 5),
                             y: 180 });  
            tires_grp.animate( { transform: "t0,-80" }, 4000, function() {
                pullKanbanTires.attr({ fill: "green" });
                step_desc3.attr({ text: "Kanban Card switched to green" });
                pullTiresTitle.remove();
                pullKanbanTires.animate( {transform: "r90s.1t0,-520" }, 2000, pullStep4);   
            });
        });

    }

    var pullStep4 = function() {
        var title_x = 175;
        //var car_grp2 = car_grp.clone();
        //var tires2_grp = tires_grp.clone();
        step_title.attr({ text: "Step 4: Paint frame and Finish" });
        step_desc.attr({  text: "Car is moved to final step",
                             x: title_x,
                             y: 210 });
        pullKanbanTires.remove();
        step_desc3.remove();
        car_grp.animate({ transform: "t-350,0,s1.25"}, 2000);
        tires_grp.animate({ transform: "t-135,-80"  }, 2000, function() {
            tires_grp.attr({ visibility: "hidden" });
            car_grp.attr({ visibility: "hidden" });
            step_desc.attr({ text: "Car is painted", y: 150 });
            finished_grp.attr({ visibility: "" }); 
            finished_grp.animate({ transform: "t40,0" }, 1500, function() {
                pullKanban.attr( { fill: "green" });
                pullKanban.animate({ transform: "r90s.1" })
                step_desc.attr(
                    { text: "Car is ready for customers",
                      "font-size": "18px" }).animate(
                        { transform: "t-20,-50" }, 3000, function() {
                            pullKanban.remove();                                                
                            kanbanTitle.remove();
                            step_desc2.remove();
                            order_img.remove();
                    });
            });
        }); 
    }

    pullStep1(); 
}


function pushAnimation() {
    var push = Snap("#animate-push");
    var title = push.text(75, 35, "Illustrating Push").attr({
            "font-size": "36px"
        });
    push.append(title);
    var car_frame = push.image("/icol-2017/static/img/car-shell.png").attr({
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
    var finished_car = finished_grp.image("/icol-2017/static/img/finished-car.png").attr({
        x: 125,
        y: 180
    });
    var customers_grp = push.g().attr({ visibility: "hidden" });
    var customers = customers_grp.image("/icol-2017/static/img/people.png").attr({
        y: 125
    });

    var push_flow, step_title;
    var blur = push.filter(Snap.filter.blur(5,10));
    var step_desc;
    var arrow_attrs = { stroke: 'orange',
                        fill: 'orange',
                        strokeWidth: 5 };
 
    var pushArrow = function(start_x, start_y) {
       var top_line = push.line(start_x-50, start_y, start_x+75, start_y, ); 
        top_line.attr(arrow_attrs);
        var arrow = push.polyline([start_x-50, start_y, start_x-75, start_y+25, start_x-50, start_y+50]);
        arrow.attr(arrow_attrs);
        var bottom_line = push.line(start_x-50, start_y+50, start_x+75, start_y+50);
        bottom_line.attr(arrow_attrs);
        var text = push.text(start_x-45, start_y+30, "Push");
        text.attr( { "font-size": "18px",
                     "font-weight": "bold",
                     stroke: 'orange' });
        return  push.g(top_line, arrow, text, bottom_line);

    }

    var pushStep1 = function() {
        var title_x = 450;
        step_title = push.text(20, 65, "Step 1: Create Car Frame").attr({
            "font-size": "24px"
        });
        step_desc = push.text(title_x, 80, "Raw steel panels transported to assembly line ");
        panel_grp.attr({ visibility: "" });
        var steel2 = steel_panels.clone();
        steel2.animate({ transform: "t-30, 150,s0.5, t50"},  5000, function() {
            push_flow = pushArrow(title_x+150, 380);
            //top_line.animate({ transform: "t+150, 375" }, 5000);
            var steel3 = steel_panels.clone();
            steel_panels.attr({ visibility: "hidden"});
            steel3.animate({ transform: "M580,50 t100,150s0.5, t-50" }, 2000, function() {
                steel2.animate({ transform: "s0", filter: blur }, 2000);
                steel3.animate({ transform: "s0", filter: blur }, 2000);
                step_desc.attr({ text: "Steel Panels stamped into Car Frame" });
                car_grp.transform("s.0");
                car_grp.attr({ visibility: ""});
                car_grp.animate({ transform: "S1.5" }, 6000, pushStep2);
            });
        });
    }

    var pushStep2 = function() {
        var title_x = 325;
        step_title.attr({ text: "Step 2: Attach Wheels"});
        step_desc.attr({ text: "Car frame is pushed to next stage in the assembly line",
                            x:title_x,
                            y: 180 });
        tires_grp.attr({ visibility: "" });
        push_flow = pushArrow(title_x+150, 380);
        car_grp.animate({ transform: "t-175,s1.25" }, 3000, function() {
            step_desc.attr({ text: "Tires are moved and attached to car", 
                             x: (title_x - 5),
                             y: 180 });  
            tires_grp.animate( { transform: "t0,-80" }, 6000, function() {
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
        push_flow = pushArrow(title_x+175, 380);
        car_grp.animate({ transform: "t-350,0,s1.25"}, 2000);
        tires_grp.animate({ transform: "t-135,-80"  }, 2000, function() {
           tires_grp.attr({ visibility: "hidden" });
           car_grp.attr({ visibility: "hidden" });
           step_desc.attr({ text: "Car is painted" })
           finished_grp.attr({ visibility: "" });
           push_flow = pushArrow(title_x+50, 380);
           finished_grp.animate({ transform: "t-100,0" }, 5000, function() {
                pushStep4();
            });
        });
    }

    var pushStep4 = function() {
        var title_x = 20;
        customers_grp.attr({ visibility: "", y: 10 });
        step_title.attr({ text: "Step 4: Marketing and Sale to Customer" });
        step_desc.attr({ text: "Car is heavily marketed to customer",
                         x:title_x+100});
        var tv_grp = push.g();
        var tv_img = tv_grp.image("/static/img/tv-buy.png").attr({ x: 10, y: 120 });
        push_flow = pushArrow(title_x+80, 380)
        tv_grp.animate({ transform: "t0,80,s.4" }, 5000, function() {
            step_desc.attr({ text: "Customer purchases car" });
            tv_grp.attr({ visibility: "hidden" });
            var money_grp = push.g();
            var money_img = money_grp.image("/static/img/dollar.png").attr(
                { y: 80, x: 20 });
            money_grp.animate({ transform: "t50,120" }, 5000, function() {
                finished_grp.animate({ transform: "t-100,0" }, 1000); 
            });
        });
        
    }

    pushStep1();
}
