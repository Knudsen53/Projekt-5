(function($) {
   // This function is responsible for the functionality of a single carousel every time it is called.
   // In other words, it will only generate one carousel, and the scope of this function can only be assigned to one carousel.
  // It is required to pass the root element of the current carousel when calling this function.
  // The parameter 'ele' here refers to the root element of a specific carousel.
    var slide = function(ele,options) {
        var $ele = $(ele);
        
        // Default settings options
        var setting = {
        	// Control the animation duration of the carousel
            speed: 1000,
            // Control the interval time (carousel speed)
            interval: 2000,
            
        };

        // Object merging
        $.extend(true, setting, options);
        
        // Define the position and state for each image
        var states = [
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.2 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.4 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 110, $opacity: 0.7 },
            { $zIndex: 4, width: 224, height: 288, top: 0, left: 263, $opacity: 1 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 470, $opacity: 0.7 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

      
        // Events
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        
        // Match each <li> element with the corresponding state from the above states array
        // Expand the <li> elements from the center position
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        // Switch to the next slide
        function next() {
           // Principle: Move the last element of the array to the first position
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    // Find the root element of the carousel to be slideshowed and call the slide() function.
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        // Return a value to support chaining of function calls
        return this;
    }
})(jQuery);
