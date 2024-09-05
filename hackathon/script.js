// // Toggle navigation menu on mobile devices
// const burger = document.querySelector('.burger');
// const navLinks = document.querySelector('.nav-links');

// burger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
//   burger.classList.toggle('active');
// });

// // Add event listener to navigation links
// // navLinks.addEventListener('click', (e) => {
// //   if (e.target.classList.contains('nav-link')) {
// //     navLinks.classList.remove('active');
// //     burger.classList.remove('active');
// //   }
// // });

// // Add event listener to hero section search input
// const searchInput = document.querySelector('input[type="search"]');

// searchInput.addEventListener('keyup', (e) => {
//   if (e.target.value !== '') {
//     // TO DO: implement search functionality
//     console.log('Search query:', e.target.value);
//   }
// });

// // Add event listener to call-to-action button
// const ctaButton = document.querySelector('.cta button');

// ctaButton.addEventListener('click', () => {
//   // TO DO: implement registration functionality
//   console.log('Registration button clicked!');
// });
// async function getImages() {
//   let indx = 0; // Initialize indx outside the setInterval
//   setInterval(() => {
//       const imageArray = [
//           "tajMahal.jpg", "goldenTemple.jpg", "haridwar.jpg", "jantrMantr.jpg", 
//           "konark.jpg", "place.jpg", "qutubMinar.jpg", "rajasthan.jpg", 
//           "redFort.jpg", "combo.jpg"
//       ];

//       // Get the img element
//       const elem = document.getElementsByTagName("main")[0];

//       // Update the src attribute of the img element
//       elem.style.backgroundImage = `url('${imageArray[indx]}')`;
//       elem.alt = `Image ${indx + 1}`; // Optionally, update the alt text

//       // Increment the index
//       indx++;
//       if (indx === imageArray.length) {
//           indx = 0; // Reset index if it reaches the end of the array
//       }

//       console.log("Image loaded:", elem.src);
//   }, 5000);
// }

// getImages();
// const unsplashApiKey = 'YOUR_UNSPLASH_API_KEY';
// const unsplashApiUrl = 'https://api.unsplash.com/photos/random';
// const query = 'tourist places in India';

// // Hero section image element
// const heroImage = document.querySelector('.hero img');

// Function to generate a random image from Unsplash API
// async function generateImage() {
//   try {
//     const response = await fetch(`${unsplashApiUrl}?client_id=${unsplashApiKey}&query=${query}`);
//     const data = await response.json();
//     const imageUrl = data.urls.regular;
//     heroImage.src = imageUrl;
//   } catch (error) {
//     console.error('Error generating image:', error);
//   }
// }

// // Generate a new image every 10 seconds
// setInterval(generateImage, 2000);

// // Generate an initial image on page load
// generateImage();