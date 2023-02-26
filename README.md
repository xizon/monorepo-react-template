# Monorepo React Template

This repository is a Monorepo sample based on Lerna that creates a modern build system for managing and publishing multiple packages.

![screenshot](screenshot.jpg).


## File Structures


```sh
monorepo-react-template/
├── README.md
├── LICENSE
├── lerna.json  
├── nx.json
├── package.json
├── packages/ 
│   ├── front-end/
│   ├── plugin-component/
│   ├── plugin-1/
│   ├── plugin-2/
│   └── .../
└──
```


## Getting Started

Make sure if NODEJS is installed on your computer.

### Step 1: Create a new Lerna workspace by running:

```sh
$ cd /{your_directory}/monorepo-react-template
$ npx lerna init
```


### Step 2: Install dependencies

```sh
$ npm install
```
 

### Step 3: To open the visualization, run:

```sh
$ npx nx graph
```
 
### Step 4: To build all projects, run

```sh
$ lerna run build
```

or Build the package you want:

```sh
$ lerna run build --scope=plugin-1 --scope=plugin-2 --scope=plugin-component
```


<blockquote>
Note: projects in `monorepo-react-template/packages/` should not include the `node_modules/` folder

The scripts configuration of the project in the packages needs to support the global, for example, the `react-scripts` command does not exist. You need to install it globally first. The same goes for other commands.

```sh
$ sudo npm install --g react-scripts
```

the same to:

```sh
$ sudo npm install --g webpack webpack-cli
```

</blockquote>

 
 ---

 For more commands, please refer to [Here](https://lerna.js.org/docs/getting-started).





## Contributing

- [Lerna](https://github.com/lerna/lerna)


## Licensing

Licensed under the [MIT](https://opensource.org/licenses/MIT).

