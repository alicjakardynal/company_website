import React, { Component } from "react";


class Home extends Component{
    render(){
        return(
            <>
            <Banner/>
            </>
        )
    }
}

class Banner extends Component{
    render(){
        return(
            <>
            <div className="banner_background">
                
            </div><div className="banner_btn about"> O firmie</div>
                <div className="banner_btn job"> Chcesz nawiązać współpracę?</div>
            </>
        )
    }
}
export default Home;