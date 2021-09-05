---
layout: index
title: Books
permalink: /books/
description: Levelling the playing field.
background_colour: bg-gray-800
---
These are some books.

{% for item in data.books %}

{% container "columns" %}

{% item "column max-w-xs" %}

<img src="{{ item.image }}">

{% enditem %}

{% item "column" %}

### {{ item.title }}

*By {{ item.author }}*

{{ item.description }}

{% enditem %}

{% endcontainer %}

---

{% endfor %}
