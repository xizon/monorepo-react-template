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
├── README_CN.md
├── LICENSE
├── lerna.json  
├── nx.json
├── custom.webpack.config.js    ---------------- (set webpack config for `react-scripts`)
├── package.json
├── package-lock.json
├── packages/ 
│   ├── front-end/     ------------------------- (based on nextjs, should enter this directory to compile it separately)
│   ├── plugin-component/  --------------------- (compile with TypeScript)
│   ├── plugin-1/   ---------------------------- (depends on the `plugin-component`)
│   ├── plugin-2/   ---------------------------- (using `react-scripts` via create-react-app 5+)
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


### Step 2: Install dependencies (Required)

It will automatically install the dependencies of all resources in `packages/` without duplication.

```sh
$ npm install
```
 

### Step 3: To open the visualization, run:

```sh
$ npx nx graph
```
 
### Step 4: To build all projects, run

```sh
$ npm run cra:init
$ npx lerna run build
```

or Build the package you want (recommend):

```sh
$ npm run cra:init
$ npx lerna run build --scope=plugin-1 --scope=plugin-2 --scope=plugin-component
```

Please do not install **lerna** globally to use `lerna run build`


### Step 5: (optional) Use a custom script like:

```sh
$ npx lerna exec npm run export --scope=plugin-2
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


<h3>⚠️ Note 4</h3>

If the npm package installation fails, execute the following command and then install it

```sh
$ sudo npm cache clean --force
```
or

```sh
$ sudo chown -R 501:20 "/Users/<YOUR_USER_NAME>/.npm"
```



<h3>⚠️ Note 5</h3>

Failure Logs:

>  NX   dlopen(/<package_name>/node_modules/@nrwl/nx-darwin-x64/nx.darwin-x64.node, 1): no suitable image found.  Did find:

   	/<package_name>/node_modules/@nrwl/nx-darwin-x64/nx.darwin-x64.node: cannot load 'nx.darwin-x64.node' (load command 0x80000034 is unknown)
   	/<package_name>/node_modules/@nrwl/nx-darwin-x64/nx.darwin-x64.node: cannot load 'nx.darwin-x64.node' (load command 0x80000034 is unknown)



If the above error occurs, please make sure that the `nx` package, that is, `node_modules/@nrwl` version is **15.7.2**, versions above **15.8.x** cannot run lerna and nx commands correctly.

The kernel version of `nx` is related to your OS (Operating System). If you cannot use the Lerna or NX command normally, please upgrade your OS or downgrade the `nx` version (configure the dependency of **package.json**).

OR, In case something breaks though, you can also disable the Rust hasher by using the environment variable `NX_NON_NATIVE_HASHER=true`. This will cause the task runner to use git to hash files instead of the rust-powered native implementation (which is faster).


</blockquote>

 
 ---

 For more commands, please refer to [Here](https://lerna.js.org/docs/getting-started).



## ⚙️ Custom Configuration of Build

Excluding dependencies from the output bundles, you could change the `package.json` like this:

The `buildConfig` property will be linked to the Webpack configuration.

```json
{
    ...
    "buildConfig": {
        "externals": {
            "react": "React",
            "react-dom": "ReactDOM"
        }
    },
    ...
}
```

If you want to cancel the external files setting, please change it to:

```json
{
    ...
    "buildConfig": {
        "externals": ""
    },
    ...
}
```



## Contributing

- [Lerna](https://github.com/lerna/lerna)


## Licensing

Licensed under the [MIT](https://opensource.org/licenses/MIT).

