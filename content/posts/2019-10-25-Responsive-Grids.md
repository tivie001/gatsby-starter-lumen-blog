---
title: "Responsive grids and How I learned to use them for mobile web app development"
date: "2019-10-25T22:12:03.284Z"
template: "post"
draft: false
slug: "responsive-web"
category: "Responsive Web Development"
tags:
  - "Responsive Web Development"
  - "Design"
description: "While designing for mobile devices, it is standard to use a grid design with generally 12 columns (tablet) or 4, 5, 6, 7 columns (mobile). 
            The screen resolution and pixel density will change across devices (i.e. tablet, phone, desktop, etc.) in making my designs I used relative sizes in order 
            to maintain consistency of size with icons, type, and other different elements on the page."
socialImage: "/media/gutenberg.jpg"
---
While designing for mobile devices, it is standard to use a grid design with generally 12 columns (tablet) or 4, 5, 6, 7 columns (mobile). 
The screen resolution and pixel density will change across devices (i.e. tablet, phone, desktop, etc.) in making my designs 
I used relative sizes in order to maintain consistency of size with icons, type, and other different elements on the page.

![](/media/responsive-iphone-grid.png)


In the image above, the website www.apple.com is a perfect example of a 6 column mobile grid layout. Different parts that make up a grid are the:
* Columns
* Gutters
* Margins

There are many different ways and approaches a designer & developer might take in order to accomplish the task of a 
responsive mobile grid and some might include out of the box functionality provided by HTML, CSS, and/or JavaScript frameworks. 
But the following are a few ways to do it with pure CSS:

#CSS Grid
One of the perks of CSS is the out of the box implementation of CSS grid. It uses raw CSS and very minimal html to produce a webpage layout that is easy and responsive.

![](/media/css-grid.png)


Above is a simple mobile coded page using basic HTML, and the CSS Grid. The CSS Grid provides a nice responsive column layout 
of each element with its appropriate margins and gutters.
One of the many perks of the CSS grid is the lack of unnecessary divs and extra tags that are often used in various frameworks. 
Below is a 3-step process into recreating the example above (without the grid indicators of course):

##1. HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="container">
      <div class="header text">Header</div>
      <div class="nav-menu text">Nav</div>
      <div class="column1 text">Column 1</div>
      <div class="column2 text">Column 2</div>
      <div class="column3 text">Column 3</div>
      <div class="footer text">Footer</div>
    </div>
</body>
</html>
```
##2. CSS
```css
.container {
    display: grid;
    text-align: center;
    grid-template-columns: repeat(12, 1fr);
}
.header {
    grid-column: span 12;
    height: 100px;
    background-color: rgba(255, 0, 0, 0.47);
}
.nav-menu {
    grid-column: span 4;
    height: 300px;
    background-color: rgba(255, 255, 0, 0.51);
}
.column1 {
    grid-column: span 3;
    height: 300px;
    background-color: rgba(185, 218, 255, 0.51);
}
.column2 {
    grid-column: span 3;
    height: 300px;
    background-color: rgba(128, 0, 128, 0.51);
}
.column3 {
    grid-column: span 3;
    height: 300px;
    background-color: rgba(255, 172, 108, 0.51);
}
.footer {
    grid-column: span 12;
    height: 30px;
    background-color: rgba(0, 128, 0, 0.5);
}
.text {
    font-weight: bold;
    font-size: 20px;
    font-family: Arial;
}
```

I added extra styles like background-color and height just to better display the space taken up by each div tag but what is in 
**bold** is all that is needed to build webpage w/ CSS grid.
##3. And lastly the media queries to make the page responsive:

* Simply add this tag, enabling media queries to be used for cross-device layouts:
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
* Add media queries
```css
@media screen and (max-width: 30rem) {
    .navigation-menu {
        grid-column: span 12;
        height: 100px;
    }
    .column1 {
        grid-column: span 12;
    }
    .column2 {
        grid-column: span 12;
    }
    .column3 {
        grid-column: span 12;
    }
}
   ```
 
Simply change each div classes grid-column attribute to span to the desired page layout which in this case its the full width of the device or 12 columns.

#Flexbox Grid
Flexbox Grid uses the CSS attribute flex in basis to creating a responsive grid layout for any particular webpage. Here is how to implement flexbox into code to replicate the example above.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Index</title>
</head>
<body>
    <div class="header text">Header</div>
    <div class="flex-columns">
        <div class="nav-menu text">Nav</div>
        <div class="column-1 text">Column 1</div>
        <div class="column-2 text">Column 2</div>
        <div class="column-3 text">Column 3</div>
    </div>
    <div class="footer text">Footer</div>
</body>
</html>
```

Again to make a mobile webpage that follows all the grid rules and has responsive columns all that is needed in the HTML 
is a couple of div tags and their appropriate classes (i.e Header, (Flex columns) Navigation Menu & Body, and lastly the Footer).

##2. CSS
```css
body {
    text-align: center;
}
.flex-columns {
    display: flex;
}
.header {
    height: 100px;
    background-color: rgba(255, 0, 0, 0.47);
}
.nav-menu {
    flex: 1;
    height: 300px;
    background-color: rgba(255, 255, 0, 0.51);
}
.column-1 {
    flex: 1;
    height: 300px;
    background-color: rgba(86, 167, 255, 0.51);
}
.column-2 {
    flex: 1;
    height: 300px;
    background-color: rgba(128, 0, 128, 0.51);
}
.column-3 {
    flex: 1;
    height: 300px;
    background-color: rgba(255, 172, 108, 0.51);
}
.footer {
    height: 30px;
    background-color: rgba(0, 128, 0, 0.5);
}
.text {
    font-weight: bold;
    font-size: 20px;
    font-family: Arial;
}
```

To make columns be responsive based off the content around it using flexbox grid, apply the following styles to each div class (see bolded text above):
* display: flex
* flex: <column number>
##3. Media queries (only needed to display all elements in a block element or right after one another):

```css
@media (max-width: 30rem) {
    .flex-columns {
        display: block;
    }
    .nav-menu {
        height: 100px;
    }
}
```

![](/media/flexbox-grid.png)


Columns fall into their place appropriately using the attributes of flexbox grid.
Tyler Ivie is a student in the Digital Media program at Utah Valley University, Orem Utah, studying Web & App Development. 
The following article relates to (Mobile App Design Project) in the (DGM 1230 Course) and representative of the skills learned.

*Originally published by [Tyler Ivie](http://theiviedesign.com/) on [Medium](https://medium.com/@tsivie/responsive-grids-and-how-i-learned-to-used-them-for-mobile-web-app-development-5eee0f026438?source=friends_link&sk=bfe9abbecd2d7f01e10ca90f24557017).*