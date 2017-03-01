Angular 2 Fundamentals Course
========================
This is the getting started package for the Pluralsight course on Angular 2 Fundamentals found here: http://app.pluralsight.com/courses/angular-fundamentals

[Angular 2 WebSite](https://angular.io/)


Getting Started
---------------
Be sure you're running the recommended node version, which is 6.3.0+: `node --version`

Follow along with the course linked above. To start the server:

```
npm install
npm start
```

My Notes
========================

#### .Net Core Basics
    dotnet --version	==> This tells you which version of dotnet core you have installed
    dotnet new [Type]	==> This creates a dotnet template based on the type specified i.e console, classlib, web, mvc, webapi, sln, etc
    dotnet restore		==> This downloads packages from Nuget, which are need in the project
    dotnet run			==> This runs the exe.

#### NPM
    npm update --save	    ==> Update all packages inside package.json
    npm install	    	    ==> Install all packages define in pacakge.json to node_modules/* folder
    npm start	    	    ==> Runs the command specified in the Package.Json
    npm run [scripts:""]

Package.json
    // This script compiles the TypeScript files and then runs the TypeScript compiler in watch mode alongside running the ASP.NET application.
    // You invoke it by entering npm start in the terminal because start is a built in command. However, if you change the scropt to the following: 
    // myStartScript: "tsc && concurrently \"tsc -w\" \"dotnet run\" "  ==> npm run myStartScript would achieve the same result as start.
    "scripts": {
        // type script and .Net watch for file modification and then reload in compiled form either using TypeScript or .Net Compiler
        "start": "tsc && concurrently \"tsc -w\" \"dotnet watch run\" ",
        // The npm install command is one of the npm commands with special behavior. You configure an npm script named install but the commands get executed after the default npm install command has finished.
        // Therefore, npm install ==> will install npm dependency and then restore nuget packages for dotnet
        "install": "dotnet restore",
        // npm run clean follow by npm install in the terminal and you have a fresh copy of the required npm and .NET dependencies
        "clean": "npm run clean:dotnet && npm run clean:npm",
        "clean:dotnet": "npm run clean:bin && npm run clean:obj",
        "clean:bin": "del /q .\\bin\\*.* && for /d %i in (.\\bin\\*.*) do @rmdir /s /q \"%i\" ",
        "clean:obj": "del /q .\\obj\\*.* && for /d %i in (.\\obj\\*.*) do @rmdir /s /q \"%i\" ",
        "clean:npm": "del /q .\\node_modules\\*.* && for /d %i in (.\\node_modules\\*.*) do @rmdir /s /q \"%i\" ",
        // npm run chrome ==> starts the Google Chrome Browser
        "edge": "start microsoft-edge:http://localhost:5000",
        "chrome": "start chrome http://localhost:5000",
        "firefox": "start firefox http://localhost:5000"
    }

#### Version Range Definition
    version	            ==> Must match version exactly
    >version	        ==> Must be greater than version
    >=version	        ==> Must be greater or equal to the version
    <version	        ==> Must be less than version
    <=version	        ==> Must be less or equal to the version
    ~version	        ==> The Tilde will update the most recent minor version (the middle number)
                            ~1.2.3 ==> >=1.2.3 <1.3.0
                            ~1.2 ==> >=1.2.0 <1.3.0
                            ~1 ==> 1.0.0 < 2.0.0
    ^version	        ==> The Caret will update you to the most recent major version (the first number)
                            ^1.2.3 ==> >=1.2.3 <2.0.0
                            ^0.2.3 ==> >=0.2.3 <0.3.0
                            ^0.0.3 ==> >=0.0.3 <0.0.4
    *	                ==> Matches any version
    ""	                ==> (just an empty string) Same as *
    version1 - version2	==> Same as >=version1 <=version2.
    range1 || range2	==> Passes if either range1 or range2 are satisfied.
    latest	            ==> Obtains latest release

#### Package.Json
    The dependencies are the libraries that your application uses at runtime.
    The devDependencies are libraries you use during your build.
    Shim        ==> It is a piece of code that implements language features not natively supported by the browser.
    TypeScript  ==> It provides Optional Static Typing, Classe, and Interfaces. It is the transpiler used by SystemJS, which it uses to transpile TypeScript into JavaScript
                    tsc -w    ==> Runs the TypeScript compiler in watch mode so whenever you save a modified TypeScript file, the compiler regenerates the JavaScript

#### The dependencies section of package.json contains:
    Features    ==> Feature packages give the application framework and utility capabilities.
    Polyfills   ==> Polyfills plug gaps in the browser's JavaScript implementation.
    Other       ==> Other libraries that support the application such as bootstrap for HTML widgets and styling.

#### Feature Packages
    @angular/core                       ==>  Critical runtime parts of the framework needed by every application. Includes all metadata decorators, Component, Directive, dependency injection, and the component lifecycle hooks.
    @angular/common                     ==> The commonly needed services, pipes, and directives provided by the Angular team.
    @angular/compiler                   ==> Angular's Template Compiler. It understands templates and can convert them to code that makes the application run and render. Typically you don’t interact with the compiler directly; rather, you use it indirectly via platform-browser-dynamic or the offline template compiler.
    @angular/platform-browser           ==> Everything DOM and browser related, especially the pieces that help render into DOM. This package also includes the bootstrapStatic method for bootstrapping applications for production builds that pre-compile templates offline.
    @angular/platform-browser-dynamic   ==> Includes Providers and a bootstrap method for applications that compile templates on the client. Don’t use offline compilation. Use this package for bootstrapping during development and for bootstrapping plunker samples.
    @angular/http                       ==> Angular's http client.
    @angular/router                     ==> Component router.
    @angular/upgrade                    ==> Set of utilities for upgrading AngularJS applications to Angular.
    system.js                           ==> Acts as a shim for a dynamic module loader compatible with the ES2015 module specification. Other viable choices include the well-regarded webpack.

#### Polyfill Packages
    core-js	            ==> Corejs in simple words it just fills the gap between different versions of ECMA. Suppose you have written code in ECMA6 and you want to run it in browser where it does not support ECMA6 then core-js comes into picture.
    zone.js	            ==> “A Zone is an execution context that persists across async tasks”. In Simple Words Zone wraps all async tasks into one unit.
    reflect-metadata	==> is used to enable dependency injection through decorators.
    rxjs	            ==> RxJS (Reactive Extensions for JavaScript) is a library for Observables. This lets you “fire this promise chain every time some data arrives”

#### Other Packages
    angular-in-memory-web-api	==> An Angular-supported library that simulates a remote server's web api without requiring an actual server or real http calls. Good for demos, samples, and early stage development (before we even have a server).
    bootstrap	                ==> Bootstrap is a popular HTML and CSS framework for designing responsive web apps. Some of the samples improve their appearance with bootstrap.

#### DevDependencies Packages
> concurrently	        ==> A utility to run multiple npm commands concurrently on OS/X, Windows, and Linux operating systems.
>
> typescript	        ==> the TypeScript language server, including the tsc TypeScript compiler.
>
> @types/*	            ==> TypeScript definition files. Learn more about it in the TypeScript Configuration chapter.

#### Angular 2 component

An Angular 2 component is essentially a JavaScript class adorned with the @Component decorator in which you define a template.
The class encapsulates the behavior of the component and the template encapsulates the view.
Angular does the work to wire the view to the behavior for you.

Components are the building blocks of your application. At the root of your application, is a component containing other components, composed together to form a user interface.
This composition is sometimes called a component tree where the root component contains all of the other components in your application and leaf components represent the re-usable widgets of your application with which the user interacts.

#### Angular 2 Module

Angular modules are defined with the NgModule decorator where as ECMAScript 2015 (ES2015) are just modules.
The difference between an NgModule and an ES2015 module?
    You can think of ES2015 modules as encapsulated, reusable units of code whereas NgModules are encapsulated, reusable units of the application. NgModules are composed of ES2015 modules making them a sort of higher-order unit. NgModules is eqivlant of C# as namespaces or assemblies.

Angular requires you to have at least one NgModule in your application.

#### Angular 2 Bootstrap

Angular 2 provides multiple ways to bootstrap your application depending on where it is running (server versus browser) and whether it has been compiled ahead of time (AOT) or just-in-time (JIT) compilations.


#### Angular 2 Directive

There are 3 types of directives:

1. Components
    A component directive requires a view along with its attached behaviour. This type of directive adds DOM elements.
2. Structural Directives
    Modifies the DOM layout i.e add or remove HTML element from the DOM
3. Attribute Directives
    Modifies the appearance or behavior of an element

Template Syntax
----------------------------

`@Component({ 
    template: ` <h2>{{user.name}}</h2> <img [src]="user.imageUrl"/> <button (click)="doSomething()"></button>`
    })

    export class ProfileComponent { 
        user = {name: 'John Doe', imageUrl: 'doe.com/profile.jpg'}
        doSomething() { }
    }`

**Template Expression**

    {{user.name}} ==> Interpolation
    [src] ==> Property Binding

Can't Do With EXPRESSION
    Assignments ( =. +=, ++, etc)
    new Keyword
    Expression Chaining With ;
    Global namespaces

Recommendations of Usage
    No Side-Effects
    Fast
    Simple
    Idempotent

**Template Statements**

    (click)="doSomething()"

Can't Do With EXPRESSION
    Assignments Except = (+=, ++, etc)
    new Keyword
    Global namespaces

Recommendations of Usage
    Simple

#### Angular 2 Forms

There are two types of forms Angular allow to use.
1. Template Base
    Template base form allows you to build completely in your HTML template
    Great for simple form but if you have complex form with lots of logic then don't use this.
    Things like cross field validation are more defficult and can't be unit tested
2. Model (Reactive) Base
    This allows you to build your form but leaving a lot of the logic in the component

[Different Types of Validators](https://angular.io/docs/ts/latest/api/forms/index/Validators-class.html)

TODO
====
Binding...One.Way...Two.Way....[(ngModel)] is two way (ngModel) is one way
Providers ==> are shared across in Anuglar 2 modules BUT not for Imports or Declarations
loginForm.valid
loginForm.invalid
loginForm.pristine
loginForm.submitted
loginForm.touched
loginForm.untouched
ngModelGroup