const contentBlock = document.querySelector('.content-block');
const filterBlock = document.querySelector('.filter-block');
const content = document.querySelector('.content');

let dataItem;
let filterArr = [];

function renderItems(data, arr) {
	for (let i of data) {
		let item = document.createElement('div');
		item.classList.add('item');

		let img = document.createElement('img');
		img.classList.add('item-image');
		img.src = `${i.logo}`;

		let itemMain = document.createElement('div');
		itemMain.classList.add('item-main');

		let itemInfo = document.createElement('div');
		itemInfo.classList.add('item-info');

		let itemInfoHead = document.createElement('div');
		itemInfoHead.classList.add('item-info__head');

		let itemInfoCompany = document.createElement('span');
		itemInfoCompany.classList.add('item-info__company');
		itemInfoCompany.textContent = `${i.company}`;
		itemInfoHead.appendChild(itemInfoCompany);

		if (i.new == true) {
			let itemInfoChartNew = document.createElement('div');
			itemInfoChartNew.classList.add('item-info__chart');
			itemInfoChartNew.classList.add('chart-new');
			itemInfoChartNew.textContent = 'NEW!';
			itemInfoHead.appendChild(itemInfoChartNew);
		}

		if (i.featured == true) {
			let itemInfoChartFeatured = document.createElement('div');
			itemInfoChartFeatured.classList.add('item-info__chart');
			itemInfoChartFeatured.classList.add('chart-feat');
			itemInfoChartFeatured.textContent = 'FEATURED';
			itemInfoHead.appendChild(itemInfoChartFeatured);
			item.classList.add('featured');
		}
		let itemProf = document.createElement('p');
		itemProf.classList.add('item-prof');
		itemProf.textContent = `${i.position}`;

		let itemInfoAdd = document.createElement('p');
		itemInfoAdd.classList.add('item-info__add');

		itemInfoAdd.innerHTML = `<span class="content-block__item-info__add-item">${i.postedAt}</span>
		<i class="fas fa-circle"></i>
		<span class="content-block__item-info__add-item">
		   ${i.contract}
		</span>
		<i class="fas fa-circle"></i>
		<span class="content-block__item-info__add-item">${i.location}</span>`;
		let itemFilter = document.createElement('div');
		itemFilter.classList.add('item-filter');
		i['languages'].map((value) => {
			let itemFilterElem = document.createElement('span');
			itemFilterElem.classList.add('item-filter__item');
			itemFilterElem.textContent = `${value}`;
			itemFilterElem.onclick = filterItems;
			itemFilter.appendChild(itemFilterElem);
		});
		i['tools'].map((value) => {
			let itemFilterElem = document.createElement('span');
			itemFilterElem.classList.add('item-filter__item');
			itemFilterElem.textContent = `${value}`;
			itemFilterElem.onclick = filterItems;

			itemFilter.appendChild(itemFilterElem);
		});

		item.appendChild(itemMain);
		itemMain.appendChild(img);
		itemMain.appendChild(itemInfo);
		item.appendChild(itemFilter);
		itemInfo.appendChild(itemInfoHead);
		itemInfo.appendChild(itemProf);
		itemInfo.appendChild(itemInfoAdd);

		contentBlock.appendChild(item);
	}
}

fetch('./data.json')
	.then((res) => res.json())
	.then((data) => {
		dataItem = data;
		renderItems(data);
	})
	.catch((err) => console.error(err));

function filterItems(e) {
	console.log('lol');
	contentBlock.innerHTML = '';
	filterArr.push(e.target.textContent);
	content.style.paddingTop = '0rem';
	renderItems(dataItem, filterArr);
	filterBlock.style.display = 'flex';
	console.log(filterArr);
}
