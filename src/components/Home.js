import React from 'react'
import MangaCard from './MangaCard';


function Home(props){
	return (
		<main>
			<div className="main-head">
				<form 
					className="search-box"
					onSubmit={props.handleSearch}>
					<input type="search" placeholder="Enter Keywords: (i.e. Title)" value={props.search} onChange={e => props.setSearch(e.target.value)}/>
				</form>
			</div>
			<div className="manga-list">
				{props.mangaList.map((manga, mal_id) => (
						<MangaCard
							manga={manga} key={mal_id}/>
				))}
			</div>
		</main>
	)
}

export default Home