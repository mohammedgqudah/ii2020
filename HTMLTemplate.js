export default function(templateConfig) {
  const { title, message } = templateConfig.htmlWebpackPlugin.options;

  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>${title}</title>

            <!-- Google Fonts -->
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <!-- Mobile Friendly Tag -->
            <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
            <!-- Title -->
            <meta name="React-Stack-2" content="">
        </head>

        <body>

            <noscript>
                <h1>Please Enable JS in your browser in order to continue</h1>
            </noscript>

            <div id='root'></div>
            <script src='/main.js'></script>
        </body>
    </html>
`;
}
