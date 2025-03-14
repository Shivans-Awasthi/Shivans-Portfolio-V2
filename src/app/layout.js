
import Head from 'next/head';


export default function RootLayout({ children }) {
    return (
<html lang="en">
<Head>
        <link rel="stylesheet" href="/output.css" />
        <script src="/contact.js"></script>
</Head>
<head>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
  />
  <meta
    name="description"
    content="Software Developer, Full stack Developer, Freelancer"
  />
  <meta
    name="keywords"
    content="Software Developer, Full stack Developer, Robotics Enthusiast, Developer, shivans awasthi, KIIT, MERN stack, portfolio, website"
  />
  <meta name="author" content="Shivans Awasthi" />

  <meta property="og:title" content="Shivans Awasthi" />
  <meta
    property="og:description"
    content="Software Developer, Full stack Developer, Freelancer"
  />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="418" />
  <meta property="og:image:height" content="204" />
  <meta
    property="og:image"
    content="https://github.com/Shivans-Awasthi/Shivans-Portfolio-Website/blob/main/images/banner.png?raw=true"
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Shivans Awasthi" />
  <meta
    name="twitter:description"
    content="Software developer , Full stack developer, freelancer"
  />
  <meta name="twitter:image:type" content="image/png" />
  <meta name="twitter:image:width" content="418" />
  <meta name="twitter:image:height" content="204" />
  <meta
    name="twitter:image"
    content="https://github.com/Shivans-Awasthi/Shivans-Portfolio-Website/blob/main/images/banner.png?raw=true"
  />

  <title>Shivans Awasthi</title>
  <link
    rel="icon"
    href="https://github.com/Shivans-Awasthi/Shivans-Portfolio-Website/blob/main/images/logo.png?raw=true"
    type="image/png"
  />

  <link href="/output.css" rel="stylesheet" />
  <link
    href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css"
    rel="stylesheet"
    type="text/css"
  />

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet"/>
  
  
  
  <script
    type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
  ></script>
 
{/* <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> */}

</head>

<body>

  <div id="root">{children}</div>

  <script src="https://cdn.tailwindcss.com"></script>
  <script src="/contact.js"></script>
  <script
    type="module"
    src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
  ></script>
  <script
    noModule
    src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
  ></script>
  <script
    async
    src="https://platform.twitter.com/widgets.js"
  ></script>
  
</body>
</html>

    )
  }