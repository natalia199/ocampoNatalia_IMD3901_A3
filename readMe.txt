A3 - Multi-User Interactions

Natalia Ocampo, 101107453
March 8th, 2022

1. 
a) Overview

For my project, I created a multiplayer game that allows players to enter a unique username and
compete within a tiny, cute, random chance game. There is a collaborative aspect where Players must
submit a username in order to start the game, if one player is missing the game will not begin.
Both must contribute so it can activate the start button. Throughout my project, Players will be 
able to view their username and their competitor's username displayed upon the game screen.
Players will take turns pressing the red button (petting btn) in front of them which will allow them
to pet the big, sleeping cat in front of them. A competitive aspect would be Whoever wakes up the cat 
with their petting will lose! They will have the option to not risk their chances and pass their turn to
the next player. Players must perform at least 1 pet when it's their turn and have a max of 5 pets.
Both players will be able to see who's turn it is, how many pets their competitors chose to do, and
when they pass their turn. The loser will get the losing screen, while the winner will get the
winning screen. Play with the kitty and do your best to not wake it up!

b) Challenges

I had a lot of challenges grasping the idea of networking and how to transfer information between 
the 2 players. The biggest challenge was their usernames. I wanted to be able to let my players take
turns, however, to do so, I need to identify which player already went and who needs to go next. It
was very difficult. On the 'enter username' scene, if a user wasn't connected yet, the other player
would save a name 'unidentified' and after when they join it would have 3 names saved, it just led
to a lot of disasters. In addition, when the players reload the page, even though the HTML console
is refreshed and they can enter new usernames, the javascript console is still holding onto the
previous usernames before they refreshed their pages, leading to a huge mix up of different names. 
Concerning the game portion, it wasn't as challenging as the usernames part, however, it was a lot of
confusing moments where I needed to take 10 steps back, re-examine what I did, and continue my plan.
A lot of brain malfunctions.

c) Successes

The process of executing my original game idea went well and is really complimented by the networking
aspect. I miraculously managed to solve all my challenges above. However, concerning the usernames part, 
players are able to refresh their pages and enter their usernames with no worries. However, there are a few
restrictions; a player cannot refresh their page when a player has ALREADY submitted a username, players
must not have the same name, and players cannot submit an empty username text box. These are 'to know' 
restrictions because I didn't code my game to detect those errors, so physically preventing those situations 
will allow my game to work. The connection between the functionalities and networking all worked out.
Players can successfully see the other player's pet-count, their chosen usernames, their final game result,
and the 3D pet-points incrementing. The game interchanges between both the players, so each gets a turn.
It also allows players to skip their turn when they have committed to 1+ pets. It detects which player's
turn it is, who did the last pet, and which player won/lost. I'm very proud of the results.

d) GitHub: https://github.com/natalia199/ocampoNatalia_IMD3901_A3