---
title: Best practices with video for the Web
date: "2019-09-19T22:40:32.169Z"
template: "post"
draft: false
slug: "video-for-web"
category: "Web Development"
tags:
  - "Design"
  - "Web Development"
description: "More and more websites are using an embedded YouTube or Vimeo video player for video online however, not in all occasions is this the solution for all video on the web. The following formats are compatible with the web and can be used in various ways."
socialImage: "/media/42-line-bible.jpg"
---

More and more websites are using an embedded YouTube or Vimeo video player for video online however, not in all occasions is this the solution for all video on the web. The following formats are compatible with the web and can be used in various ways.
MP4, WebM, OGV, and a few more are compatible and can be controlled with the video tag in HTML5.
MP4 is the most commonly used video format over the Web. The file size is very small due to compression and is lossy like most of the formats above but surprisingly remains decent picture quality.

The video and source tags are requisite to embed a video directly within the HTML. Video tags allow the developer to resize, enable controls, and even hold the video src if needed. Source tags are precisely for embedding the video src and may has other attributes like type to specify file type on the web, can have srcset tag for images, and even support media queries without using CSS itself.
More importanly for a developer to understand is to know how to compress a video. Embedded video that auto-plays can be a huge page killer causing the page to load slower and lose website viewers. Adobe Premiere Pro can compress video by exporting, choosing the file format, decreasing the average bitrate size (which will decrease the amount of data being transferred per unit, decreasing video quality). These steps compress the video into a small file size therefore causing the webpage to load quicker and more efficiently.
Tyler Ivie is a student in the Digital Media program at Utah Valley University, Orem Utah, studying Web & App Development. The following article relates to (File Type/Compression Output Documentation Project) in the (DGM 2341 Course) and representative of the skills learned.


*Originally published by [Tyler Ivie](http://theiviedesign.com/) on [Medium](https://medium.com/@tsivie/best-practices-with-video-for-the-web-1a159eea3b13?source=friends_link&sk=3cf4d59c8c86cec41cfedad8da8a5862).*