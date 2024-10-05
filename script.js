* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: black;
    color: white;
}

nav {
    position: fixed;
    width: 100%;
    padding: 15px 20px;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
}

h1 {
    font-size: 24px;
}

.section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 60px 20px;
}

#home {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('background-image.jpg') no-repeat center center / cover; /* Optional background image */
}

.content {
    max-width: 600px;
}

h2 {
    font-size: 36px;
    margin-bottom: 20px;
}

h3 {
    font-size: 28px;
    margin: 15px 0;
}

p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
}

.cta {
    display: inline-block;
    padding: 15px 30px;
    background-color: #ff6600;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.cta:hover {
    background-color: #e65c00;
}

#dots {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.dot {
    height: 15px;
    width: 15px;
    margin: 0 5px;
    background-color: white;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
}

#cta-sticky {
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff6600;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

#cta-sticky a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

#cta-sticky:hover {
    background-color: #e65c00;
}
