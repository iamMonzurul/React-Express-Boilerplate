/**
 * Created by monzurulhaque on 9/24/17.
 */

export default (html, helmet) => `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
    <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}

        <!-- Latest compiled and minified CSS -->
        <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="app">${html}</div>
        <script src="/js/app.js"></script>
    </body>
    </html>
`;