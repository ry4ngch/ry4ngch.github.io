---
layout: splash
permalink: /portfolio/
title: "Engineering & Development Portfolio"
excerpt: "A collection of projects by Ryan Goh, ranging from mechanical automation to full-stack web applications."
---

{% assign projects = site.portfolio | sort: 'date' | reverse %}

<div class="feature__wrapper">
  {% for project in projects %}
    <div class="feature__item">
      <div class="archive__item">
        {% if project.header.teaser %}
          <div class="archive__item-teaser">
            <img src="{{ project.header.teaser | relative_url }}" alt="{{ project.title }}">
          </div>
        {% endif %}
        <div class="archive__item-body">
          <h2 class="archive__item-title">{{ project.title }}</h2>
          <div class="archive__item-excerpt">
            {{ project.excerpt | markdownify }}
          </div>
          <p><a href="{{ project.url | relative_url }}" class="btn btn--primary">View Project</a></p>
        </div>
      </div>
    </div>
  {% endfor %}
</div>