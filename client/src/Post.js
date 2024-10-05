export default function Post() {
    return(
        <div className="post">
        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1462188043-e1686340799615.jpg" alt="" />
        </div>
        <div className="texts">
          <h2>ChatGPT: Everything you need to know about the AI-powered chatbot</h2>
          <p className="info">
            <a className="author">Kyle Wiggers</a>
            <time>2024-10-3</time>
          </p>
          <p className="summary">ChatGPT, OpenAI’s text-generating AI chatbot, has taken the world by storm since its launch in November 2022. </p>
        </div>
      </div>
    );
}