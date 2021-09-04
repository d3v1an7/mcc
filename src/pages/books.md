---
layout: index
title: Books
permalink: /books/
description: Levelling the playing field.
background_colour: bg-gray-800
---

#### Books

{% for item in books.books %}

{% container "columns" %}

{% item "column max-w-xs" %}

<img src="{{ item.image }}">

{% enditem %}

{% item "column" %}

### {{ item.title }}

<em>By {{item.author}}</em>

{{ item.description }}

{% enditem %}

{% endcontainer %}

---

{% endfor %}
