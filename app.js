const contentBlock = document.querySelector('.content-block');

fetch('./data.json')
	.then((res) => res.json())
	.then((data) => {
		for (let i of data) {
			let item = document.createElement('div');
			item.classList.add('item');

			let img = document.createElement('img');
			img.classList.add('item-image');
			img.src = `${i.logo}`;

			let itemInfo = document.createElement('div');
			itemInfo.classList.add('item-info');

			let itemInfoHead = document.createElement('div');
			itemInfoHead.classList.add('item-info__head');

			let itemInfoCompany = document.createElement('span');
			itemInfoCompany.classList.add('item-info__company');
			itemInfoHead.textContent = `${i.company}`;

			if (i.new) {
				let itemInfoChartNew = document.createElement('div');
				itemInfoChartNew.classList.add(
					'content-block__item-info__chart'
				);
				itemInfoChartNew.classList.add('chart-new');
				itemInfoHead.appendChild(itemInfoChartNew);
			}

			if (i.featured) {
				let itemInfoChartFeatured = document.createElement('div');
				itemInfoChartFeatured.classList.add(
					'content-block__item-info__chart'
				);
				itemInfoChartFeatured.classList.add('chart-featured');
				itemInfoHead.appendChild(itemInfoChartFeatured);
			}
			let itemProf = document.createElement('p');
			itemProf.classList.add('info-prof');
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
			i['languages'].map((value) =>
				itemFilter.appendChild(
					`<span class="content-block__item-filter__item">${value}</span>`
				)
			);
			i['tools'].map((value) =>
				itemFilter.appendChild(
					`<span class="content-block__item-filter__item">${value}</span>`
				)
			);

			item.appendChild(img);
			item.appendChild(itemInfo);
			item.appendChild(itemFilter);
			itemInfo.appendChild(itemInfoHead);
			itemInfo.appendChild(itemProf);
			itemInfo.appendChild(itemInfoAdd);
			itemInfoHead.appendChild(itemInfoCompany);

			contentBlock.appendChild(item);
		}
	})
	.catch((err) => console.error(err));
