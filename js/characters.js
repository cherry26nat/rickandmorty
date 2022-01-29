const btnShowCharacters = document.querySelector("#btn-show-characters");

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
									
					
					<div class="species">
						<span><a href="episodes.html?id=${character.id}" target="_blank">Ver más</a></span>
					</div>
				</div>
			</div>
		</section>
		`;
	});
};

btnShowCharacters.addEventListener("click", () => {
	fetchCharacters(`${apiUrl}/character`);
	btnShowCharacters.style.display = "none";
});
