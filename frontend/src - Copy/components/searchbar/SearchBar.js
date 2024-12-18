import './SearchBar.css'
export default function SearchBar() {

    function close() {
        document.getElementById('searchBar').style.height = "0px";
        document.getElementById('foggy').style.height = "0px";

    }
    return (
        <div id='outBar'>
            <div id='searchBar'>
                <div className='topBar'>
                    <div className='siteMark'>
                        <img src="/images/products/19.png" alt='mark'></img>
                    </div>
                    <div className='searchBox'>
                        <input type='text' placeholder='Search ...' ></input>

                        <div className="lens" onClick={close} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <circle cx="10" cy="10" r="8" stroke="black" strokeWidth="2" fill="none" />
                                <line x1="15" y1="15" x2="20" y2="20" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>

                    </div>
                    <div className='close bold' onClick={close}  >X </div>

                </div>
                <div className='down'>
                    <div className='trending'>Trending Projects</div>
                    <div className='proList'>

                        {/* --------------------Data------------------ */}
                        <div className='listdata' onClick="">
                            <div className='mag'>
                                <img src="/images/products/1.png"></img>
                            </div>
                            <div className='goods'>
                                <div className='goodsid'>Zyn Black Cherry ...</div>
                                <div className='goodsprice'>Price : 23232$</div>
                            </div>
                        </div>


                        {/* -------------------------------------- */}

                        {/* --------------------Data------------------ */}
                        <div className='listdata' onClick="">
                            <div className='mag'>
                                <img src="/images/products/1.png"></img>
                            </div>
                            <div className='goods'>
                                <div className='goodsid'>Zyn Black Cherry ...</div>
                                <div className='goodsprice'>Price : 23232$</div>
                            </div>
                        </div>


                        {/* -------------------------------------- */}
                    </div>
                </div>

            </div>
            <div id='foggy' onClick={close}></div>
        </div>
    )
}