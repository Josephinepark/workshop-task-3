##### workshop-task-3

# Workshop 3 : Images

[Website Link] https://josephinepark.github.io/workshop-task-3/

- Each time the ‘Add’ button is clicked, images randomly appears on the canvas, while the previously added images are blurred, gradually forming a collage.

## Task
[] collect a series of images. Make a p5.js sketch that generates a new collage each time the sketch is run.<br>
[] Include manipulations of the images so that they change over time, using filters and/or other kinds of computational interventions.<br>

## Notes from the workshop video
function draw(){
filter (GRAY, THRESHOLD, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE)
tint (R,G,B)
}

pixelDensity()
loadPixel()
<br>
pixels [R,G,B,A]
pixels [R,G,B,A,R,G,B,A,R,G,B,A]
example: 48pixels x 4 = 192 elements in the array

## Progress (Experimentation and problem solving)

Through this workshop, I learned about images and pixels. I experimented with various approaches and considered the best methods to utilize multiple images, create new collages, and apply filters to complete the given assignment.

<img width="296" alt="image" src="https://github.com/user-attachments/assets/31ecfee7-cbcd-467e-ba42-a758f1c23a32" />

<img width="327" alt="image" src="https://github.com/user-attachments/assets/e4fc7804-86a7-4879-b884-586236e7ea82" />
<img width="310" alt="image" src="https://github.com/user-attachments/assets/19860e0e-ddca-4ab2-b6fa-0e3c009494ed" /><br>
<br>
At first, my code was not working so I looked at it step by step and looked at where there was a problem. The problem was that I had the different names with the variables. (img -> imgs)<br>
<br>

<img width="785" alt="image" src="https://github.com/user-attachments/assets/3c763082-e503-44d8-8c8b-35d69fddec78" /><br>
Initially, I created ‘Go’ and ‘Stop’ buttons to make it function like a spin game. However, I realized that this approach would not allow me to continuously generate new collages. I concluded that having just one button would be sufficient and decided to use the random() function to create new collages instead of rotating images randomly in the same position. As a result, I replaced the two buttons with a single ‘Add’ button instead of using ‘Go’ and ‘Stop.’<br>

<img width="392" alt="image" src="https://github.com/user-attachments/assets/10de3ec4-6e6c-43dd-8791-3eb228a83191" /><br>
<br>
I successfully managed to display the images; however, I encountered an issue where the images were consistently generated randomly around the bottom-left area of the canvas. To solve this problem, I revisited the pixel section of the workshop and received direct explanations from one of my peer. Moreover, the videos from Youtube were very helpful. As a result, I learned how to ensure that images do not go beyond the canvas boundaries.<br>
<br>
![KakaoTalk_20250124_022450482](https://github.com/user-attachments/assets/7cfb0bf3-d750-420c-8260-d2929f82d075)
<br>
In the code I wrote, the image size w is randomly set between 10 and 300. The reason for using 400 - w is to ensure that the image stays within the canvas boundaries. If this adjustment is not made, part of the image may exceed the canvas limits. For instance, if w is 100, the values of x and y are randomly determined between 0 and 300 (i.e., 400 - 100). This approach guarantees that the images are placed entirely within the canvas.<br>
<br>
<img width="880" alt="image" src="https://github.com/user-attachments/assets/9677cb2d-db24-42b7-b944-e51134b9c95e" />
<br>
After modifying the code in this way, I was able to confirm that the images were now being generated randomly within the canvas. This ensured that the images no longer extended beyond the canvas boundaries.<br>
<br>
<img width="844" alt="image" src="https://github.com/user-attachments/assets/e891b3a1-c27a-4425-a308-24aefd9f6d40" /><br>
<br>
Additionally, I have used the filter() function into the code. The specific filter I used was the blur filter. By adding this effect, I observed that whenever new images were generated, the previously displayed images became blurred. This feature allowed for a visually smooth overlay of images, resulting in a more dynamic and creative collage effect.

## Codes
<img width="337" alt="image" src="https://github.com/user-attachments/assets/e1c75960-ee37-4c59-ace9-55cfd48bbd0d" />
<br>
<img width="352" alt="image" src="https://github.com/user-attachments/assets/ea1c1f6d-3feb-441d-9264-a337dfc9e42e" /><br>
<br>
<img width="619" alt="image" src="https://github.com/user-attachments/assets/e96fedc2-5e05-418b-89fd-f35938400dd6" /><br>
<br>
<img width="311" alt="image" src="https://github.com/user-attachments/assets/b82ca5a6-6fb2-4d5c-b8f7-d5fffd858f32" /><br>
<br>
<img width="473" alt="image" src="https://github.com/user-attachments/assets/90e82c71-9419-4ceb-b139-ee684907d9ab" /><br>
<br>
<img width="406" alt="image" src="https://github.com/user-attachments/assets/052931f2-2c41-4845-b112-5bf945d1577a" /><br>
<br>

## Future Development
In this workshop, I learned not only how to use images but also how pixels work within the codes. I explored various filters and experimented with their applications, which helped deepen my understanding of image processing.

For my future development, I believe that using a greater variety of images and experimenting with different filters will allow me to create more diverse and impactful collages. Although I did not use it in this project website link, I frequently experimented with the tint() function while working on the workshop assignment. Through this, I learned how to adjust the colour tones of images. I believe that by incorporating additional functions in the future, I can produce even better results.

## Reference / other sources that helped me

images from Adobestock
<br>
<br>
https://www.youtube.com/watch?v=WvpsFttvl3E

- understanding images in p5.js
<br>
<br>
https://www.youtube.com/watch?v=-f0WEitGmiw&list=PLEnUI-p39rnzECB8T4ZTryR2t-6MABoVK&index=1
- Intro to Images tutorial (starting from how to load images...)
<br>
<br>
https://www.youtube.com/watch?v=7BoJBYh16CQ&list=PLEnUI-p39rnzECB8T4ZTryR2t-6MABoVK&index=2
- Animate an Image tutorial
<br>
<br>
https://www.youtube.com/watch?v=DPFJROWdkQ8&list=PLEnUI-p39rnzECB8T4ZTryR2t-6MABoVK&index=3
- An array of Images tutorial
