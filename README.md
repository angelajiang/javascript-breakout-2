Breakout
========

To run:
1. Start server
    >> python server.py 5000
2. Reach file in browser
    http://localhost:5000/index.html

Persistent qTable:
    Numpy table object written to a file
    To create a table and write to filename: 
        create_table/<filename>
    Filename of q-table set in server.py, variable "tableFile"
    If "tableFile" not created when server.py is started, it will create one
    using create_table
    Changes written to qTable when server.py gets ctrl-c. 

get_move():
    In server.py
    Determines each move
    Called by learner.js

Game parameters still needed:
    ball velocity vector - ball.getVelocity(): returns integers 0 to 5 representing the 6 direction.
    max values for state parameters
    ball and paddleY's for when ball hits the paddle


Another HTML5 experiment to implement BREAKOUT in a `<canvas>`

 * You can find the [game here](http://codeincomplete.com/posts/2011/6/11/javascript_breakout/demo.html)
 * You can find out [how it works](http://codeincomplete.com/posts/2011/6/11/javascript_breakout/index.html)
   * [Managing Game State](http://codeincomplete.com/posts/2011/6/12/game_state_in_breakout/)
   * [Rendering Performance](http://codeincomplete.com/posts/2011/6/12/rendering_breakout/)
   * [Collision Detection](http://codeincomplete.com/posts/2011/6/12/collision_detection_in_breakout/)
   * [Gameplay Balance](http://codeincomplete.com/posts/2011/6/13/gameplay_in_breakout/)
   * [Adding Sound](http://codeincomplete.com/posts/2011/6/16/adding_sound_to_breakout/)
   * [Touch Events](http://codeincomplete.com/posts/2011/6/24/adding_touch_to_breakout/)
