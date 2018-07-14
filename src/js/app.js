import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { HelloMessage } from './component';
import { Html } from './Html';

const port = 3001;
const app = express();

app.get('/', function(req, res) {
    let name = 'john';
    let title = 'hah';
    // let html = ReactDOMServer.renderToString();
  // console.log('------ReactDOMServer---', ReactDOMServer);
    let body = ReactDOMServer.renderToString(<HelloMessage name={name} />);
    // let body = ReactDOMServer.renderToString(<HelloMessage />);
    // 向页面传递渲染后HTML字符串和num（props）
    // res.render({html:html, name:name}, (error, html) => {
    //     res.send(Html({body, title}));
    // });

    res.send(Html({body, title}))
  });


// app.listen(port, function() {
//     console.log(`Listing on port ${port}`)
// });

app.listen(port);
console.log(`Serving at http://localhost:${port}`);