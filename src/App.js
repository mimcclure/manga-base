import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';

function App() {
	const [mangaList, setMangaList] = useState([]);
	const [search, setSearch] = useState("");

	const handleSearch = e => {
		e.preventDefault();

    fetchManga(search);
	}

	const fetchManga=async()=>{
		const res=await fetch(`https://api.jikan.moe/v4/manga?q=${search}`)
		const resData= await res.json();
		setMangaList(resData.data)
	}
	useEffect(()=>{
	  fetchManga()
	},[])

	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<Home
					handleSearch={handleSearch}
					search={search}
					setSearch={setSearch}
					mangaList={mangaList} />
			</div>
		</div>
	);
}


export default App;