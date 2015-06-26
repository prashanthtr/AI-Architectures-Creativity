define(
	[],
	function () {

      // For rhythm, the argument to this factory function is an image
      return function (i_arg){

          var pitchVal = i_arg;
          var rhythmEvent={
            type: "rhythmEvent",
            d: null,
            s: null,

            color: "FFFFFF",
            //legalValues: k_pitches,
            pitchVal: i_arg,

            // args:
            //  ctx - 2D canvas drawing context
            //  time2Px = function for translating the time samples on these objects to pixel for drawing
            draw: function(ctx, time2Px){
                var dispPx=time2Px(this.d[0][0]);
               // Display the element
                ctx.fillStyle =  this.color;

                // Display the element
                ctx.fillText(this.s, dispPx, this.d[0][1]);

                //ctx.fillText(this.s + this.pitchVal, dispPx, this.d[0][1]);
                //ctx.drawImage(i_arg, Math.round(dispPx), Math.round(this.d[0][1]));//, 41, 20);
                //ctx.drawImage(i_arg, dispPx, this.d[0][1], 74, 32);

                ctx.beginPath();
                ctx.arc(dispPx,this.d[0][1],1,0,2*Math.PI);
                ctx.closePath();
                ctx.fill();

                // DRAW ONE BIG POLYGON
                // One line all the way to the end
                ctx.beginPath();
                ctx.strokeStyle = this.color;
                ctx.moveTo(dispPx,this.d[0][1]);
                ctx.lineWidth = 1;
                //console.log("drawing - datalenght = " + this.d.length+ ", color = " + ctx.strokeStyle + ", px = "+ dispPx + ", " + this.d[0][1]);

                var col_arr = ["#9fee0d", "#9eeaf3", "#494157", "#f4f0a7", "#735cf1"];

                console.log("rhythm event is" + this.d);
                for(var n=0;n<this.d.length;n++){
                    ctx.strokeStyle = col_arr[n % col_arr.length];
                    ctx.lineTo(time2Px(this.d[n][0]), this.d[n][1]);
                    ctx.stroke();
                    // assigns the randomly generates a color to signify each link in the gesture

                }

                ctx.closePath();
                ctx.stroke();
                ctx.globalAlpha = 0.25;
                ctx.fill();
                ctx.globalAlpha = 1;

            }
         };

   	  return rhythmEvent;
      }
});
