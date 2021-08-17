const charactersWrapper = document.querySelector(".wrapper-card");

const fetchCharacter = async (url) => {
	const response = await fetch(url);
	const characters = await response.json();
	console.log(characters);

	filterCharacter(characters).map(
		(character, index) =>
			(charactersWrapper.innerHTML += `<section key=${index}>
			<div class="card">
				<div class="image">
					<img src="https://rickandmortyapi.com/api/character/avatar/28.jpeg" alt="" />
				</div>
				<div class="content">
					<div class="name">
						<h1>${character.name}</h1>
					</div>
					<div class="status">
						<span>status</span>
					</div>
					<div class="last-location">
						<span>last known location:</span>
						<span>who knows</span>
					</div>
					<div class="first-seen">
						<span>first seen in:</span>
						<span>who knows</span>
					</div>
				</div>
			</div>
		</section>`)
	);
};

const filterCharacter = (characters) => characters.filter((character) => character.id);

fetchCharacter("https://jsonplaceholder.typicode.com/users");
