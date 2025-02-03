const API_KEY = "fHEJKR0ES6C52ZQAS0rbQ7EqPeB3U6tjuhBdNk9G"
const fetchButton = document.getElementById('fetchButton');
const dateInput = document.getElementById('dateInput');
const apodContainer = document.getElementById('apodContainer');
const apodTitle = document.getElementById('apodTitle');
const apodDate = document.getElementById('apodDate');
const apodMedia = document.getElementById('apodMedia');
const apodExplanation = document.getElementById('apodExplanation');
const skeletonLoader = document.getElementById('skeletonLoader');

// Fetch the Astronomy Picture of the Day (APOD)
async function fetchApod(selectedDate) {

  skeletonLoader.classList.remove('hidden');
  apodContainer.classList.add('hidden');

  const url = selectedDate ? `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${selectedDate}`
    : `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data) {
      apodTitle.textContent = data.title;
      apodDate.textContent = data.date;
      apodExplanation.textContent = data.explanation;

      if (data.media_type === "image") {
        apodMedia.innerHTML = `<img src="${data.url}" alt="${data.title}" class="rounded-lg w-full">`;
      } else {
        apodMedia.innerHTML = `<iframe src="${data.url}" alt="${data.title}" class="w-full rounded-lg" allowfullscreen></iframe>`;
      }

      skeletonLoader.classList.add('hidden');
      apodContainer.classList.remove('hidden');
    }
  } catch (error) {
    console.error("Error fetching APOD data: ", error);
    skeletonLoader.classList.add('hidden');
  }
}

fetchButton.addEventListener('click', () => {
  const selectedDate = dateInput.value;
  fetchApod(selectedDate);
});

// Fetch today's APOD on page load
fetchApod();
