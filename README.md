TODO 

- [ ] core functionality

    - [x] complete core functionality (sound cards and ability to play sounds and control volume)
    - [x] allow slide to control volume rather than repeated clicks
    - [x] allow dynamic addition of sound cards - database of different sounds (include IDS, name, sound path, icon name) - loop through this to display cards 
    - [x] sound control only appears once sound is chosen, change colour when chosen 
    - [ ] make sounds fade between loops (or shorten them so that the volume is roughly consistent throughout)
    - [ ] start setting up state objects to capture what is currently being played - allow for user playlists
    - [ ] change water so it doesnt begin at an awkward position
    - [ ] retro styling 
        - [ ] style buttons (make them make noise)
        - [x] style audio cards 

- [ ] user accounts 
    - [ ] store user playlists (configs of volume levels for each sound that is playing)
        - [ ] CRUD operations for these playlists

- [ ] pomodoro timer (to do list)
    - [ ] allow for setting the timer at different levels (work timer and break timer)
    - [ ] task management (allow users to add and remove tasks) - could be like a todolist app - use mongodb to store tasks once they are added
    - [ ] maybe gamify it (leaderboard of people who've logged the most time?)