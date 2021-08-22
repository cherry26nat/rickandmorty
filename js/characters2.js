let wrapperCard = document.querySelector(".wrapper-card");

const apiUrl = "https://rickandmortyapi.com/api";

const fetchCharacters = async (url) => {
	const response = await fetch(url);
	const characters = await response.json();

	mapCharacters(characters.results);
};

const mapCharacters = (characters) => {
	characters.map((character) => {
		console.log(character);
		wrapperCard.innerHTML += `<section>
			<div class="card">
				<div class="image">
					<img src=${character.image} alt="" />
				</div>
				<div class="content">
					<div class="name">
						<h1>${character.name}</h1>
					</div>
					<div class="status">
						<span>${character.status}</span>
					</div>
					<div class="last-location">
						<span>last known location:</span>
						<span>${character.location.name}</span>
					</div>
					<div class="first-seen">
						<span>first seen in:</span>
						<span>${character.species}</span>
					</div>
					<div class="first-seen">
						
						<a href="episodes.html?id=${character.id}">Episodios</a>
					</div>
				</div>
			</div>
		</section>
		`;
	});
};

fetchCharacters(`${apiUrl}/character`);
