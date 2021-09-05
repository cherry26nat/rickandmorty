let nameCharacter = document.querySelector(".title");

let wrapperCard = document.querySelector(".wrapper-card");

const params = new URLSearchParams(location.search);
const idCharacter = params.get("id");
console.log(idCharacter);

const apiUrl = "https://rickandmortyapi.com/api";

const fetchEpisodes = async (url) => {
	const response = await fetch(url);
	const episodes = await response.json();

	console.log(episodes);
	mapEpisodes(episodes.episode);
};

const mapEpisodes = (episodes) => {
	episodes.map((episode, index) => {
		console.log(episode);
		wrapperCard.innerHTML += `<section>
			<div class="card">
				<div class="content">
					<div class="name">
						<h1>${index + 1}</h1>
					</div>
					<div class="status">
						<span><a href="${episode}" target="_blank">${episode}</a></span>
					</div>
				</div>
			</div>
		</section>
		`;
	});
};

fetchEpisodes(`${apiUrl}/character/${idCharacter}`);
