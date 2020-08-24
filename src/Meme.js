import React, {Component} from 'react';
import './App.css';


class Meme extends Component{
    constructor(){
        super()
        this.state= {
            topText: "",
            bottonText: "",
            randomImg : "http://i.imgflip.com/1bij.jpg", 
            MemePics:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        const {name, value}= event.target
        this.setState({[name]:value})
    }

    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random()*this.state.MemePics.length)
        const randPic = this.state.MemePics[randNum].url
        this.setState({randomImg : randPic  })

    }
    
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
          .then(response => response.json())
          .then(response => {
              const {memes} = response.data
              this.setState({MemePics: memes})
            })
        
      } 
//<img src={this.state.MemePics} />
    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                      
                        
                        <input 
                        
                            type="text"
                            name="topText"
                            placeholder="Top Text"
                            value={this.state.topText}
                            onChange={this.handleChange}
                        />
                        <input 
                        
                            type="text"
                            name="bottomText"
                            placeholder="Bottom Text"
                            value={this.state.bottomText}
                            onChange={this.handleChange}
                        />
                        <button>Generate</button>

                    
                    
                </form>  
                <div className="meme">
                    <img src={this.state.randomImg} alt="meme" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }


    
}



export default Meme;