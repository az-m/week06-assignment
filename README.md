# Requirements

~Implement the useState hook to manage gallery state (e.g. selected image).
~Use useEffect for initial fetching of images from an external API.
~Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).
~Use the .map() function to render an array of images dynamically
~Implement functionality to display a larger version of an image when its thumbnail is clicked.
~Ensure all images have meaningful alt text.
~Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).

# Reflection

I really wanted to use the same set of images as week 2 so that I could properly compare what I'd done, and I can't remember where I downloaded them all from because it was all different sites. So I took the opportunity to practise serving static assets from the backend.

I set up my API first and made sure my front end was getting the information I wanted before I started to build the ui.

In ordering my components, I first constructed an array of numbered buttons, where the number of the button was output to a seperate component. That allowed me to make sure all the functionality and props hung together before putting in images.

Overall, the JavaScript (or jsx) was the easy bit, and the CSS was the time-consuming head-banging-on-wall bit! As usual.

I'd hoped I'd at least have learned how to spell 'component' by now, but I still try to put an 'a' in it ...

ETA: I couldn't decide if I wanted to see the whole image, or to have the images fill the screen, which looked better. I've got quite a mix of aspect ratios, which meant neither approach was entirely satisfactory. So I've added a toggle for the user to decide the view for themselves.

I feel the interface is getting a bit cluttered now, but I'm sure someone actually talented in design could clean it up and make it look decent!
