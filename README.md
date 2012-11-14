# slides and examples from presentation

Below are the slides in outline form.  This repo contains the examples.  See
the main.js within each example directory for the code I showed and demoed.

### Slides From Front-end Presentation 

* slides
    * front-end through bluefin's eyes
        * my background
        * your background
        * bluefin and social tv analytics
    * bluefin signals: the problem
        * scared to make changes
        * hard to debug
        * script tags out of control
        * performance issues
        * deployments complicated
    * bluefin signals: the solution
        * testing
        * remove network hop
        * remove almost all of the app server
        * AMD to fix script dependency mess
        * AMD to modularize code
        * signals walkthrough
    * javascript basics
        * objects constructor function in js
        * scope and hoisting
        * event loop
    * javascript modules * commonjs modules & amd
        * modularize your javascript
        * modularize your templates
        * explicit dependencies from one module to another
    * volo * maven for javascript
        * based on git
        * dependency fetcher
        * generic task execution
        * minification task
    * chrome
        * dom inspection
        * step through code
        * debugging HTTP
        * memory profiling
        * autosave plugin
    * client side templating
        * equivalent of rails erb
        * required for SPA
    * application architecture
        * client side MVC (SPA) vs Server Side MVC
    * SPA up*sides
        * simpler architecture
        * better performance
        * more interactive
        * easy to debug
    * SPA down*sides
        * script error reporting
        * cross*browser javascript
        * seo
    * who uses client*side SPA
        * bluefin
        * google gmail, docs
        * twitter
        * mobile apps
    * bluefin signals internals
        * test suite
        * console access to contexts
        * wirejs
