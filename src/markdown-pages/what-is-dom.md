# What Is DOM?

DOM consist of valid HTML without pseudoelements.

on the top there is WINDOW. Which luego has document object with multiple properties and methods.

## It's not

* HTML
Because even if we write invalid HTML in html file. DOM will be valid. Browser will convert it in a valid structure, resolving problems.

* DevTools structure
Because we have an access to ::before & ::after pseudoelements. DOM counts only HTML visible/existed elements.

* It's not visible on webpage elements
Because DOM elements can be invisible on page but still exist on DOM

## What Is BOM?
Doesn't have oficial standart. 
Allows JavaScript to "communicate" with the browser.
