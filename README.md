# bathtub-app

### Link
https://andrewj33.github.io/bathtub-app/

### Directions
<details>
   <summary>Click to expand!</summary>
   
The component (the whole App) is a bathtub div that fills with water when you press the increaseWaterLevel button. Starting with water level 0, once you press the button, every 2 seconds, a new blue-colored div is added inside the bathtub div (but is only 20 pixels high). After the level reaches the height of the div (100 pixels; or 5 levels), the water stops filling.

When you press the decreaseWaterLevel button, every 2 seconds, the water decreases by a div of the same height.  The water counter shows the height of the water in the div.
</details>

### Summary

This app was built in React as a technical challenge, and challenging it was! Here are my thoughts:

1. The only real easy and obvious part was the setup, building the components and buttons. I added some styling to aid in visually testing the app, and setup the bathtub container so that each div would be aligned downward via flex-end since water is in fact affected by gravity.
2. The other thing that was immediately clear to me was that since the div is just a 'water block' so to speak, I could use a map or something similar to generate the number of water blocks on each rerender.
3. I started with a waterLevel array that had five `false` values, and used an `onClick` for the buttons to turn one of the `false` values `true`, each one at a time. The map generated a water block if the value was `true` This was very naive but it helped get me started.
4. In the same vein, duplicating the same functionality for flipping a `true` back to false and effectively 'deleting' a water block was also very straight forward.
5. It was around this point that I realized I didn't have any idea how to implement the filling and draining functionality. The mention of 2 seconds between water blocks made me think of `setInterval()` and setTimeout()`, so I spent some time implementing those into my `onClick()` functions, which didn't work.
6. After some googling around, I realized that the reason it wasn't working was because I need to have my `setInterval()` inside of `useEffect()` with both waterToggle and waterLevel as dependencies so that it updates continuously with state.
7. And it worked! I am sure someone more experienced could clean this up a ton of different ways, but I am happy to have completed it.
