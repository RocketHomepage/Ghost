import { useEffect } from 'react';

const ChatBot4You = () => {
  useEffect(() => {
    (function(w,s,o,g,r,a,m){w['ChatBot4YouElement']=r;w[r]=w[r]||function(){
    (w[r].q=w[r].q||[]).push(arguments)},w[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//bot.chatbot4you.de/bot.min.js','cb4u');
    cb4u("init", "672433ce9ba7dfa6c0c1bcc1bebe1be6");
  }, []);

  return <div id="ChatBot4You"></div>;
}

export default ChatBot4You;