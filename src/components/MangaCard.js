import React from 'react'


function MangaCard({manga}) {
	return (
		<article className="manga-card">
			<a href={manga.url} target="_blank" rel="noreferrer">
				<figure>
					<img src={manga.images.jpg.large_image_url} alt="" />
				</figure>
				<h3>{ manga.title }</h3>
			</a>
		</article>
	)
}

export default MangaCard