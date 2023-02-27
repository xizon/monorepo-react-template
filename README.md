# Monorepo React Template

A monorepository sample based on Lerna that creates a modern build system for managing and publishing multiple packages.

---

- [English](README.md)
- [中文](README_CN.md)

---


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
│   ├── front-end/     ------------------------- (based on nextjs, should enter this directory to compile it separately)
│   ├── plugin-component/  --------------------- (compile with TypeScript)
│   ├── plugin-1/   ---------------------------- (depends on the `plugin-component`)
│   ├── plugin-2/   ---------------------------- (using `react-scripts`)
│   └── .../
└──
```


## Getting Started

Make sure if Node 14+ is installed on your computer.

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

or Build the package you want (recommend):

```sh
$ lerna run build --scope=plugin-1 --scope=plugin-2 --scope=plugin-component
```


<blockquote>
<h3>⚠️ Note 1</h3>

Make sure that `packages/plugin-component` is copied to `node_modules`, Because `packages/plugin-1` depends on the `packages/plugin-component`.


<h3>⚠️ Note 2</h3>

projects in `packages/` should not include the `node_modules/` folder

The scripts configuration of the project in the packages needs to support the global, for example, the `react-scripts` command does not exist. You need to install it globally first. The same goes for other commands.

```sh
$ sudo npm install --g react-scripts
```

the same to:

```sh
$ sudo npm install --g webpack webpack-cli
```

<h3>⚠️ Note 3</h3>

Project dependencies in packages other than `packages/front-end` should be configured in the package.json file in the root directory.


</blockquote>

 
 ---

 For more commands, please refer to [Here](https://lerna.js.org/docs/getting-started).





## Contributing

- [Lerna](https://github.com/lerna/lerna)


## Licensing

Licensed under the [MIT](https://opensource.org/licenses/MIT).

