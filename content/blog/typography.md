---
title: "Typography"
date: 2020-08-02T09:10:41Z
image: ""
description: "Typography"
author: "A. Yanev"
type: "post"
---

<!-- TOC -->
## Table of content - Typography

- [Table of content - Typography](#table-of-content---typography)
- [Heading 2](#heading-2)
  - [Heading 3](#heading-3)
    - [Heading 4](#heading-4)
      - [Heading 5](#heading-5)
        - [Heading 6](#heading-6)
- [Text](#text)
- [Ordered List](#ordered-list)
- [Unordered List](#unordered-list)
- [Blockquote](#blockquote)
- [Tables](#tables)
  - [Footnotes](#footnotes)
- [Images](#images)
- [Code](#code)
  - [Inline code](#inline-code)
- [Diagrams](#diagrams)
- [Embedding](#embedding)
  - [Twitter](#twitter)
  - [YouTube](#youtube)
  - [Vimeo](#vimeo)
  - [GitHub Gist](#github-gist)

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo nam commodi eos cumque possimus error cupiditate iste doloribus aut porro, beatae impedit, corporis sapiente laudantium id voluptatem sit distinctio sed sequi accusantium molestias, facilis sunt eum? Voluptates sit numquam, recusandae deleniti illo, nisi maxime sequi eligendi ad veniam quidem molestias aut assumenda doloremque delectus modi animi. Sint asperiores minus ducimus aut aliquid eos pariatur, id doloribus rem natus quam, adipisci reprehenderit?

---

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

## Text

**bold** - ``**bold**``

_italic_   - ``_italic_``

[link](https://www.google.com/) - ``[link](https://www.google.com/)``

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo nam commodi eos cumque possimus error cupiditate iste doloribus aut porro, beatae impedit, corporis sapiente laudantium id voluptatem sit distinctio sed sequi accusantium molestias, facilis sunt eum? Voluptates sit numquam, recusandae deleniti illo, nisi maxime sequi eligendi ad veniam quidem molestias aut assumenda doloremque delectus modi animi. Sint asperiores minus ducimus aut aliquid eos pariatur, id doloribus rem natus quam, adipisci reprehenderit? Architecto quis dignissimos porro pariatur impedit at odio illo ab sunt obcaecati eius consectetur distinctio, eligendi fuga sint fugit aspernatur ratione blanditiis veniam voluptates? Delectus magni optio voluptate odit incidunt nobis officiis mollitia fuga libero, reprehenderit fugit.

Hic eos earum ipsum, reprehenderit, ut facere officiis vitae voluptas sunt atque quisquam, nobis deleniti sapiente laudantium quia libero nulla rerum beatae mollitia iusto similique! Nesciunt illo, harum facilis aperiam commodi. Amet perferendis voluptatem, itaque laboriosam, eos minima vero tempore at!

---

## Ordered List

```md
1. Number one
2. Number Two
    1. Indented Number 1
    2. Indented Number 2
```

1. Number one
2. Number Two
    1. Indented Number 1
    2. Indented Number 2

---

## Unordered List

```md
- Get groceries at Harris Teeter before the party
- Get a Spider Man cake
  - Chocolate or marble
  - Whipped cream frosting
- Don't forget to walk the dog before you leave
- Bring lots of plates and silverware so that we don't run out
  - Plastic Dixie brand is fine
```

- Get groceries at Harris Teeter before the party
- Get a Spider Man cake
  - Chocolate or marble
  - Whipped cream frosting
- Don't forget to walk the dog before you leave
- Bring lots of plates and silverware so that we don't run out
  - Plastic Dixie brand is fine

---

## Blockquote

```md
> This is in a blockquote
  and a second line
```

> This is in a blockquote
  and a second line

---

## Tables

```md
| table heading 1 | table heading 2 | table heading 3 |
|---|---|---|
| row 1 content 1  | row 1 content 2  | row 1 content 3  |
| row 2 content 1  | row 2 content 2  | row 2 content 3  |
| row 3 content 1  | row 3 content 2  | row 3 content 3  |
```

| table heading 1  |  table heading 2  |  table heading 3 |
|---|---|---|
| row 1 content 1  | row 1 content 2  | row 1 content 3  |
| row 2 content 1  | row 2 content 2  | row 2 content 3  |
| row 3 content 1  | row 3 content 2  | row 3 content 3  |

A helpful tool for generating markdown tables [Markdown Tables Generator]( https://www.tablesgenerator.com/markdown_tables)

---

### Footnotes

```md
Footnotes[^1]
[^1]: Footnote: this is a footnote!
```

Footnotes[^1] are also part of markdown features.
[^1]: Footnote: this is a footnote!

---

## Images

```md
![img](/images/blog/typography-featuredImage.png)
```

![img](/images/blog/typography-featuredImage.png)

---

## Code

````md
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
````

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

``` scss
blockquote{
    margin-left: 5%;
    padding: 10px;
    box-sizing: border-box;
    border-left: $line;
}
```

### Inline code

```md
Here is `var s = "Hello World"` inline code
```

Here is `var s = "Hello World"` inline code

---

## Diagrams

[Mermaid JS](https://mermaidjs.github.io/)

Generation of diagrams and flowcharts from text in a similar manner as markdown.

## Embedding

<br>

### Twitter

Twitter tweet

{{< tweet 666616452582129664 >}}

### YouTube

youtube video

{{< youtube qtIqKaDlqXo >}}

### Vimeo

Vimeo video

{{< vimeo 146022717 >}}

### GitHub Gist

Embeded a gist from GitHub

{{< gist atanasyanew 5e1e5ba1af658aab5cd4f965919559ac  >}}
