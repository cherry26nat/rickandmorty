let nameCharacter = document.querySelector(".title");

let wrapperCard = document.querySelector(".wrapper-card-detail");

const params = new URLSearchParams(location.search);
const idCharacter = params.get("id");
console.log(idCharacter);

const apiUrl = "https://rickandmortyapi.com/api";

const fetchInfo = async (url) => {
  const response = await fetch(url);
  const info = await response.json();

  //console.log(info);

  mapInfo(info);
};

const mapInfo = (info) => {
  console.log(info);
  wrapperCard.innerHTML += `
			<div class="card">
				<div class="image">
					<img src=${info.image} alt="" />
				</div>
				<div class="content">
					<div class="name">
						<h1>${info.name}</h1>
					</div>
                    <div class="status">
						<span>${info.gender}</span>
					</div>
                    <div class="last-location">
						<span>Origin:</span>
						<span>${info.origin.name}</span>
					</div>
					<div class="status">
						<span>${info.status}</span>
					</div>
					<div class="last-location">
						<span>Last known location:</span>
						<span>${info.location.name}</span>
					</div>
					<div class="first-seen">
						<span>Species:</span>
						<span>${info.species}</span>
					</div>
					
				</div>
			</div>
		`;
};

fetchInfo(`${apiUrl}/character/${idCharacter}`);
