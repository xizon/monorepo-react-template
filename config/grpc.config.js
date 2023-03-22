const fs = require('fs')
const path = require('path');


function flatten(lists) {
    return lists.reduce((a, b) => a.concat(b), []);
}

function getDirectories(source) {
    return fs.readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
}

function getDirectoriesRecursive(srcpath) {
    return [srcpath, ...flatten(getDirectories(srcpath).map(getDirectoriesRecursive))];
}

const allPackages = getDirectories('./packages');
allPackages.forEach(package => {
    const nodePath = `./packages/${package}/node_modules`;
    if (!fs.existsSync(nodePath)){
        fs.mkdirSync(nodePath);
    }

    // copy files of `ts-protoc-gen` package
    const PROTOC_GEN_TS_FOLDER_PATH = './node_modules/ts-protoc-gen';
    const PROTOC_GEN_TS_FOLDER_NEWPATH = `${nodePath}/ts-protoc-gen`;

    fs.cpSync(PROTOC_GEN_TS_FOLDER_PATH, PROTOC_GEN_TS_FOLDER_NEWPATH, { recursive: true });

});

