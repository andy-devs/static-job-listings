const contentBlock = document.querySelector('.content-block');

fetch('./data.json')
	.then((res) => res.json())
	.then((data) => {
		let item = document.createElement('div');
		contentBlock.appendChild(data);
	})
	.catch((err) => console.error(err));

<div class="content-block__item">
	<div class="content-block__item-main">
		<img
			src="./images/photosnap.svg"
			alt=""
			class="content-block__item-image"
		/>
		<div class="content-block__item-info">
			<div class="content-block__item-info__head">
				<span class="content-block__item-info__company">Photosnap</span>
				<div
					class="
										content-block__item-info__chart
										chart-new
									"
				>
					NEW!
				</div>
				<div
					class="
										content-block__item-info__chart
										chart-feat
									"
				>
					FEATURED
				</div>
			</div>

			<p class="content-block__item-prof">Senior Frontend Developer</p>
			<p class="content-block__item-info__add">
				<span class="content-block__item-info__add-item">1d ago</span>
				<i class="fas fa-circle"></i>
				<span class="content-block__item-info__add-item">
					Full Time
				</span>
				<i class="fas fa-circle"></i>
				<span class="content-block__item-info__add-item">USA only</span>
			</p>
		</div>
	</div>
	<div class="content-block__item-filter">
		<span class="content-block__item-filter__item">Frontend</span>
		<span class="content-block__item-filter__item">Senior</span>
		<span class="content-block__item-filter__item">HTML</span>
		<span class="content-block__item-filter__item">CSS</span>
		<span class="content-block__item-filter__item">JavaScript</span>
	</div>
</div>;
