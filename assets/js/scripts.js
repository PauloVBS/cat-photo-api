const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const catBtn =document.getElementById('change-cat')
const catImg = document.getElementById('cat')

const getCats = async () => {
		const data = await fetch(BASE_URL)
		.then( res=> res.json())
		.catch((e)=> console.log(e));

	return data.webpurl
}

const changeCats = async () =>{
	catImg.src = await getCats();
}
catBtn.addEventListener('click',changeCats);
