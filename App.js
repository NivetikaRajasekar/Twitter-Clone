import { Component } from "react";
import NewTweet from "./NewTweet";
import TweetsContainer from "./TweetsContainer";

class App extends Component {
  state = {
    Tweets: [
      {
        Username: "nivescience",
        Message: "Hey hiri, we are in the workshop!"
      },
      {
        Username: "nivescience",
        Message: "How are you all?"
      },
      {
        Username: "hirifromtn",
        Message: "It's great!"
      },
      {
        Username: "nivescience",
        Message: "What do you think about React?"
      },
      {
        Username: "hirifromtn",
        Message: "It's really great!"
      },
      {
        Username: "angelina",
        Message: "hello! Both of you!"
      }
    ],
    Users: [
      {
        Username: "nivescience",
        FullName: "Nivetika Rajasekar",
        Avatar: "https://i.imgur.com/EKBl3Mu_d.webp?maxwidth=520&shape=thumb&fidelity=high"
      },
      {
        Username: "hirifromtn",
        FullName: "Hirithiga Rajasekar",
        Avatar:
          "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
      },
      {
        Username: "angelina",
        FullName: "Angelina Jeremiah",
        Avatar: "https://i.imgur.com/SdXj5x8_d.webp?maxwidth=520&shape=thumb&fidelity=high"
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Tweets</h1>
        {this.state.Tweets.length > 0 ? (
          <TweetsContainer
            Users={this.state.Users}
            Tweets={this.state.Tweets}
          />
        ) : (
          <p>Hello! No tweets!</p>
        )}
        <NewTweet />
      </div>
    );
  }
}

export default App;
