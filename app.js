const videoContainer = document.querySelector(".video-Container");
const Api = "https://api.freeapi.app/api/v1/public/youtube/videos";

async function fetchVideos() {
  try {
    const response = await fetch(Api);
    const fetchedVideos = await response.json();
    const newVideo = fetchedVideos.data.data;
    displayVideos(newVideo);
  } catch (error) {
    console.log(error);
  }
}
fetchVideos();

function displayVideos(recievedVideos) {
  console.log(recievedVideos);
  videoContainer.innerHTML = "";
  recievedVideos.forEach((video) => {
    const videoCardHtml = `
            <div class="video-Template">
          <img src="${video.items.snippet.thumbnails.standard.url}" class="thumbnail"
           alt="">
          <div class="content" >
<img src="https://yt3.ggpht.com/ytc/AIdro_ke6u9y9ZKMrAkDj5u9bM9GlnPBTtx0ICVvVuiSU3XquVo=s68-c-k-c0x00ffffff-no-rj
"  class="photo"
 alt="">
<div class="details" >
  <p>
  ${video.items.snippet.title}</p>
<p class"details" > ${video.items.snippet.description}</p>
<p> ${video.items.snippet.channelId}</p>
</div>
<i class='bx bx-dots-vertical-rounded'></i>

          </div>
          <!-- <div class="btns" >
            <button class="btn1">Watch</button>
            <button class="btn2"> Seemore</button>
          </div> -->
        </div>
    `;
    videoContainer.insertAdjacentHTML("beforeend", videoCardHtml);
  });
}
